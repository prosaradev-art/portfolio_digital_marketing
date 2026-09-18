/* Responsive sanity check: horizontal overflow + console errors across viewports & routes */
import puppeteer from "puppeteer-core";

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const BASE = process.env.BASE_URL || "http://localhost:3000";

const viewports = [
  { name: "mobile-375", width: 375, height: 667 },
  { name: "mobile-414", width: 414, height: 896 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "tablet-1024", width: 1024, height: 768 },
  { name: "desktop-1440", width: 1440, height: 900 },
];

const routes = ["/", "/about", "/services", "/products", "/portfolio", "/contact"];

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox"],
});

let failures = 0;

for (const vp of viewports) {
  const page = await browser.newPage();
  await page.setViewport({ width: vp.width, height: vp.height, isMobile: vp.width < 600, hasTouch: vp.width < 600 });

  const consoleErrors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });
  page.on("pageerror", (err) => consoleErrors.push(String(err)));

  for (const route of routes) {
    try {
      await page.goto(`${BASE}${route}`, { waitUntil: "networkidle0", timeout: 30000 });
      const result = await page.evaluate((r) => ({
        overflow: document.documentElement.scrollWidth - window.innerWidth,
        hasNav: !!document.querySelector("header nav"),
        hasHero: r === "/" ? !!document.querySelector("h1") : true,
      }), route);
      const status = result.overflow > 1 ? "OVERFLOW" : "ok";
      if (result.overflow > 1) failures++;
      console.log(
        `[${vp.name.padEnd(14)}] ${route.padEnd(10)} overflow=${result.overflow}px  ${status}`
      );
    } catch (e) {
      failures++;
      console.log(`[${vp.name.padEnd(14)}] ${route.padEnd(10)} LOAD ERROR: ${e.message.slice(0, 80)}`);
    }
  }

  if (consoleErrors.length) {
    console.log(`  -> console errors at ${vp.name}:`, consoleErrors.slice(0, 3));
  }
  await page.close();
}

// Mobile menu interaction check at 375px + identify any 4xx/5xx assets
{
  const page = await browser.newPage();
  const bad = new Set();
  page.on("response", (res) => {
    if (res.status() >= 400) bad.add(`${res.status()} ${res.url().replace(BASE, "")}`);
  });
  await page.setViewport({ width: 375, height: 667, isMobile: true, hasTouch: true });
  await page.goto(`${BASE}/`, { waitUntil: "networkidle0", timeout: 30000 });
  await page.click('button[aria-label="Open menu"]');
  await new Promise((r) => setTimeout(r, 700));
  const menu = await page.evaluate(() => ({
    links: document.querySelectorAll("header ul a").length,
    bookingBtn: [...document.querySelectorAll("header button")].some((b) => b.textContent.includes("Book your discovery call")),
  }));
  console.log(`[mobile-menu-375] nav links=${menu.links} booking CTA in menu=${menu.bookingBtn}`);
  console.log("4xx/5xx responses:", bad.size ? [...bad].join(", ") : "none");
  await page.close();
}

await browser.close();
console.log(failures === 0 ? "\n✅ All viewport checks passed — no horizontal overflow." : `\n❌ ${failures} failures found.`);
