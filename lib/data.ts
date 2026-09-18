import {
  BarChart3,
  CalendarDays,
  Camera,
  Clapperboard,
  Facebook,
  Gem,
  Instagram,
  Linkedin,
  Palette,
  PenSquare,
  Search,
  Sparkles,
  Target,
  type LucideIcon,
} from "lucide-react";

/* ---------------------------------- Icons --------------------------------- */

export type IconType = LucideIcon;

/* ------------------------------ Contact info ------------------------------ */

export const contactEmail = "sarahdmarkagencypro@gmail.com";
export const contactPhone = "03362603604";
export const contactPhoneDisplay = "0336 2603604";
export const mailtoLink = `mailto:${contactEmail}`;
export const telLink = `tel:${contactPhone}`;

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
  emoji: string;
}

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/sarah4_khan",
    icon: Instagram,
    emoji: "📸",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/sarahdmark/61593197517340/",
    icon: Facebook,
    emoji: "👍",
  },
  {
    label: "Blog",
    href: "https://sarahdmark-business-growth.blogspot.com/",
    icon: PenSquare,
    emoji: "✍️",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sarahd-mark-agency-pro-b902a9428/",
    icon: Linkedin,
    emoji: "💼",
  },
];

/* ------------------------- Core marketing capabilities ------------------------- */

export interface Capability {
  icon: IconType;
  emoji: string;
  title: string;
  description: string;
}

export const capabilities: Capability[] = [
  {
    icon: Palette,
    emoji: "🎨",
    title: "100% Custom Visuals",
    description:
      "Every post, story and reel design is made from scratch in Canva — tailored to your brand colors, fonts and vibe. Never generic templates.",
  },
  {
    icon: Target,
    emoji: "🎯",
    title: "Strategic Planning",
    description:
      "Content pillars, posting systems and campaign roadmaps built on audience research — so every post has a job, not just a pretty picture.",
  },
  {
    icon: CalendarDays,
    emoji: "🗓️",
    title: "Tailored Content Calendars",
    description:
      "30-day content plans with hooks, captions and hashtags mapped to your goals — consistent posting without the last-minute panic.",
  },
];

/* ------------------------------- Core skills ------------------------------ */

export const skills = [
  "Social Media Strategy",
  "SEO Growth",
  "Paid Ads",
  "Brand Positioning",
  "Analytics",
  "Content Funnels",
  "Reels & Viral Hooks",
  "Canva Kits",
  "Instagram Management",
  "Facebook Management",
  "YouTube Channel Management",
  "Social Media Content Planning",
  "Audience Engagement",
  "Social Media Marketing",
  "Brand Promotion",
  "Online Marketing Strategies",
  "Lead Generation",
  "Personal Branding",
  "Meta Ads & PPC Campaign Management",
  "Conversion Rate & Social Media ROI Analytics",
  "Content Creation",
  "Content Writing",
  "Blog Writing",
  "Caption Writing",
  "Creative Post Ideas",
  "Story & Reel Content Planning",
  "Social Media Post Design",
  "Canva Designing",
  "Brand Identity & Promotion",
  "Creative Visual Content",
  "Keyword Research",
  "On-Page SEO",
  "Off-Page SEO",
  "Content Optimization",
  "SEO-Friendly Blog Writing",
  "Meta Title & Meta Description Optimization",
  "Website SEO Basics",
  "Search Engine Ranking Strategies",
  "Technical & Local SEO",
  "Communication",
  "Client Handling",
  "Project Management",
  "Team Coordination",
  "Creative Problem Solving",
  "Time Management",
];

export interface SkillCategory {
  emoji: string;
  title: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    emoji: "📱",
    title: "Social Media Management",
    items: [
      "Instagram Management",
      "Facebook Management",
      "YouTube Channel Management",
      "Social Media Content Planning",
      "Audience Engagement",
    ],
  },
  {
    emoji: "📣",
    title: "Digital Marketing & Paid Acquisition",
    items: [
      "Social Media Marketing",
      "Brand Promotion",
      "Online Marketing Strategies",
      "Lead Generation",
      "Personal Branding",
      "Meta Ads & PPC Campaign Management (Facebook & Instagram Ads)",
      "Conversion Rate & Social Media ROI Analytics",
    ],
  },
  {
    emoji: "✍️",
    title: "Content & Creative Skills",
    items: [
      "Content Creation",
      "Content Writing",
      "Blog Writing",
      "Caption Writing",
      "Creative Post Ideas",
      "Story & Reel Content Planning",
    ],
  },
  {
    emoji: "🎨",
    title: "Branding & Design",
    items: [
      "Social Media Post Design",
      "Canva Designing",
      "Brand Identity & Promotion",
      "Creative Visual Content",
    ],
  },
  {
    emoji: "🔍",
    title: "SEO (Search Engine Optimization)",
    items: [
      "Keyword Research",
      "On-Page SEO",
      "Off-Page SEO",
      "Content Optimization",
      "SEO-Friendly Blog Writing",
      "Meta Title & Meta Description Optimization",
      "Website SEO Basics",
      "Search Engine Ranking Strategies",
      "Technical & Local SEO (Google Business Profile Setup & Local Search)",
    ],
  },
  {
    emoji: "📊",
    title: "Professional Skills",
    items: [
      "Communication",
      "Client Handling",
      "Project Management",
      "Team Coordination",
      "Creative Problem Solving",
      "Time Management",
    ],
  },
];

/* --------------------------------- Tools ---------------------------------- */

export interface Tool {
  name: string;
  emoji: string;
  category: string;
}

export const tools: Tool[] = [
  { name: "Meta Business Suite", emoji: "📊", category: "Social Media" },
  { name: "Canva Pro", emoji: "🎨", category: "Design" },
  { name: "Google Analytics", emoji: "📈", category: "Analytics" },
  { name: "Google Search Console", emoji: "🔍", category: "SEO" },
  { name: "Google Business Profile", emoji: "📍", category: "Local SEO" },
  { name: "Meta Ads Manager", emoji: "🎯", category: "Paid Ads" },
  { name: "Google Keyword Planner", emoji: "🔑", category: "SEO" },
  { name: "Semrush", emoji: "🧭", category: "SEO" },
  { name: "Ahrefs Webmaster Tools", emoji: "🛠️", category: "SEO" },
  { name: "ChatGPT", emoji: "🤖", category: "AI Content" },
  { name: "Buffer", emoji: "⏰", category: "Scheduling" },
  { name: "Mailchimp", emoji: "📧", category: "Email Marketing" },
  { name: "Google Trends", emoji: "📉", category: "Research" },
  { name: "CapCut", emoji: "🎬", category: "Video Editing" },
  { name: "WordPress", emoji: "🌐", category: "Blogging" },
  { name: "Blogger", emoji: "✍️", category: "Blogging" },
];

export const marqueeItems = [
  { label: "Social Media Strategy", emoji: "📱" },
  { label: "SEO Growth", emoji: "🚀" },
  { label: "Paid Ads", emoji: "🎯" },
  { label: "Brand Positioning", emoji: "💎" },
  { label: "Analytics", emoji: "📈" },
  { label: "Content Funnels", emoji: "🧲" },
  { label: "Reels & Viral Hooks", emoji: "🎬" },
  { label: "Canva Kits", emoji: "🎨" },
];

/* -------------------------------- Services -------------------------------- */

export interface Service {
  slug: string;
  icon: IconType;
  emoji: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  gradient: string;
  popular?: boolean;
  pricing: {
    name: string;
    price: string;
    unit: string;
    features: string[];
  }[];
}

export const services: Service[] = [
  {
    slug: "social-media-management",
    icon: Instagram,
    emoji: "📱",
    title: "Social Media Management",
    tagline: "Your brand, posting every single day — hands-free.",
    description:
      "Full-service management of your Instagram, Facebook & TikTok. We craft scroll-stopping grids, write magnetic captions, schedule strategically and grow your community while you run your business.",
    features: [
      "Strategy-first content calendars",
      "Aesthetic grid curation & planning",
      "Captions that convert to comments & saves",
      "Weekly stories + engagement sprints",
      "Community management & replies",
      "Monthly analytics report",
    ],
    gradient: "from-[#7928CA] to-[#9852F7]",
    popular: true,
    pricing: [
      {
        name: "Starter",
        price: "$299",
        unit: "/month",
        features: [
          "12 posts + 20 stories",
          "1 platform (IG or FB)",
          "Monthly strategy call",
          "Analytics report",
        ],
      },
      {
        name: "Growth",
        price: "$599",
        unit: "/month",
        features: [
          "20 posts + 40 stories",
          "3 platforms",
          "Bi-weekly strategy calls",
          "Monthly ad consultation",
          "Reels production (4/mo)",
        ],
      },
      {
        name: "Elite",
        price: "$999",
        unit: "/month",
        features: [
          "30 posts + 60 stories",
          "All platforms",
          "Weekly strategy calls",
          "Ads management included",
          "Dedicated account manager",
        ],
      },
    ],
  },
  {
    slug: "digital-marketing-strategy",
    icon: BarChart3,
    emoji: "📊",
    title: "Digital Marketing Strategy & Funnels",
    tagline: "From random posting to a money-printing system.",
    description:
      "We reverse-engineer your ideal customer journey and build complete marketing funnels — awareness, engagement, conversion, retention — so every single post, ad and email works toward one goal: revenue.",
    features: [
      "Full brand & market audit",
      "Customer avatar mapping",
      "Awareness → Sale funnel design",
      "Lead magnet & email sequence",
      "Content pillar architecture",
      "90-day growth roadmap",
    ],
    gradient: "from-[#9333EA] to-[#A855F7]",
    pricing: [
      {
        name: "Audit",
        price: "$199",
        unit: "one-time",
        features: ["90-min deep dive", "Brand audit report", "Top-3 quick wins", "Loom walkthrough"],
      },
      {
        name: "Strategy",
        price: "$899",
        unit: "one-time",
        features: ["Full funnel blueprint", "Customer avatars", "Content pillars", "30-day action plan"],
      },
      {
        name: "Retainer",
        price: "$799",
        unit: "/month",
        features: ["Quarterly strategy refresh", "Monthly funnel optimization", "Bi-weekly calls", "KPIs dashboard"],
      },
    ],
  },
  {
    slug: "canva-design",
    icon: Palette,
    emoji: "🎨",
    title: "Canva Design & Visual Kits",
    tagline: "Editable, on-brand templates you'll actually use.",
    description:
      "Beautiful Canva templates & complete visual kits — posts, stories, highlight covers, menus, price lists — built around your brand colors and fonts. Fully editable so you stay in control.",
    features: [
      "Brand color & font system",
      "Post & story template packs",
      "Highlight cover sets",
      "Price lists & menu designs",
      "Editable in Canva (no design skills)",
      "Brand guidelines PDF",
    ],
    gradient: "from-[#EC4899] to-[#9852F7]",
    pricing: [
      {
        name: "Mini Kit",
        price: "$149",
        unit: "one-time",
        features: ["10 post templates", "5 story templates", "Highlight covers", "Brand palette setup"],
      },
      {
        name: "Brand Kit",
        price: "$349",
        unit: "one-time",
        features: ["20 post templates", "15 story templates", "Price list + menu", "Brand guidelines PDF"],
      },
      {
        name: "Full Visual System",
        price: "$649",
        unit: "one-time",
        features: ["40+ templates", "Full rebrand support", "2 revision rounds", "60-day template support"],
      },
    ],
  },
  {
    slug: "reel-editing",
    icon: Clapperboard,
    emoji: "🎬",
    title: "Reel Editing & Viral Hooks",
    tagline: "Hooks that stop the scroll. Edits that start the growth.",
    description:
      "High-retention short-form editing built on viral psychology — pattern interrupts, bold captions, trending audio and pacing that keeps viewers watching to the very last frame.",
    features: [
      "Hook-first scripting",
      "Trend-aware audio & captions",
      "Motion graphics & transitions",
      "Retention-focused pacing",
      "Captions & subtitles (100% accurate)",
      "10-15 edits per month",
    ],
    gradient: "from-[#F59E0B] to-[#9852F7]",
    pricing: [
      {
        name: "Starter",
        price: "$119",
        unit: "/reel",
        features: ["1-2 min edited reel", "Captions included", "Trend audio sync", "3-day delivery"],
      },
      {
        name: "Creator",
        price: "$299",
        unit: "/month",
        features: ["4 reels / month", "Script + hook writing", "Thumbnail design", "Priority delivery"],
      },
      {
        name: "Viral",
        price: "$549",
        unit: "/month",
        features: ["8 reels / month", "A/B hook variations", "Analytics review", "Weekly trend intel"],
      },
    ],
  },
  {
    slug: "branding-logos",
    icon: Gem,
    emoji: "💎",
    title: "Branding & Typography Logos",
    tagline: "A logo that whispers premium before you say a word.",
    description:
      "Strategy-led identity design — logo, typography pairing, color psychology and visual personality — engineered to make your ideal customers feel trust, desire and recognition.",
    features: [
      "Logo concepts (3 directions)",
      "Typography pairing system",
      "Color psychology rationale",
      "Brand guidelines document",
      "Social media avatar kit",
      "Unlimited revisions (14 days)",
    ],
    gradient: "from-[#8B5CF6] to-[#6366F1]",
    pricing: [
      {
        name: "Logo",
        price: "$249",
        unit: "one-time",
        features: ["3 logo concepts", "2 revisions", "All file formats", "Brand colors"],
      },
      {
        name: "Identity",
        price: "$499",
        unit: "one-time",
        features: ["Logo + color system", "Typography pairing", "Brand guidelines", "Avatar kit"],
      },
      {
        name: "Full Brand",
        price: "$899",
        unit: "one-time",
        features: ["Complete identity", "Logo animations", "Template start kit", "14-day support"],
      },
    ],
  },
  {
    slug: "ads-setup",
    icon: Target,
    emoji: "🎯",
    title: "Facebook & Instagram Ads Setup",
    tagline: "Ads that print, not ads that burn cash.",
    description:
      "Conversion-focused ad campaigns — pixel setup, creative testing, audience research and scaling — built to turn your followers into booked appointments and cart checkouts.",
    features: [
      "Pixel & conversion API setup",
      "Audience & competitor research",
      "3 ad creatives per campaign",
      "Landing funnel alignment",
      "A/B testing structure",
      "Weekly optimization + reporting",
    ],
    gradient: "from-[#06B6D4] to-[#9852F7]",
    pricing: [
      {
        name: "Setup",
        price: "$199",
        unit: "one-time",
        features: ["Pixel + CAPI setup", "Campaign structure", "Ad copy + creatives", "Launch checklist"],
      },
      {
        name: "Managed",
        price: "$499",
        unit: "/month",
        features: ["Ad spend management", "3 ad sets live", "Weekly optimization", "Monthly report"],
      },
      {
        name: "Scale",
        price: "$899",
        unit: "/month",
        features: ["Full funnel ads", "Retargeting systems", "Creative testing lab", "Daily optimization"],
      },
    ],
  },
];

/* -------------------------------- Products -------------------------------- */

export interface Product {
  icon: IconType;
  emoji: string;
  title: string;
  description: string;
  includes: string[];
  price: string;
  oldPrice?: string;
  badge?: string;
  gradient: string;
  mock: string;
}

export const products: Product[] = [
  {
    icon: Palette,
    emoji: "🎨",
    title: "Social Posts Kit",
    description:
      "50+ fully editable Canva templates designed for boutiques — product drops, sales, testimonials, reels covers and more. Change the photos, keep the wow.",
    includes: [
      "50 editable Canva templates",
      "10 styles × 5 industries",
      "Highlight covers included",
      "Brand color swap guide",
    ],
    price: "$49",
    oldPrice: "$79",
    badge: "Bestseller",
    gradient: "from-[#7928CA] to-[#EC4899]",
    mock: "📲",
  },
  {
    icon: Clapperboard,
    emoji: "🎬",
    title: "Reels Templates",
    description:
      "Viral hook packs & transition templates for Instagram Reels and TikTok — plug in your clips, export, post. Designed around retention psychology.",
    includes: [
      "30 hook templates",
      "20 transition packs",
      "Caption formulas included",
      "Trend audio guide",
    ],
    price: "$39",
    oldPrice: "$59",
    badge: "New",
    gradient: "from-[#F59E0B] to-[#9852F7]",
    mock: "🎬",
  },
  {
    icon: Camera,
    emoji: "📱",
    title: "Stories Bundle",
    description:
      "Interactive daily story layouts — polls, quizzes, countdowns, AMAs and product spotlights that turn passive viewers into engaged followers who DM you.",
    includes: [
      "60 story templates",
      "Interactive poll layouts",
      "Product spotlight frames",
      "Story highlight pack",
    ],
    price: "$29",
    oldPrice: "$45",
    gradient: "from-[#06B6D4] to-[#7928CA]",
    mock: "✨",
  },
  {
    icon: BarChart3,
    emoji: "📅",
    title: "30-Day Content Plan",
    description:
      "A complete 30-day digital marketing content calendar with captions, hooks, hashtags and posting times — tailored to your niche in 48 hours.",
    includes: [
      "30 days of content mapped",
      "Captions + hashtag sets",
      "Best posting times",
      "Funnel-stage labeled",
    ],
    price: "$59",
    oldPrice: "$89",
    badge: "Best Value",
    gradient: "from-[#10B981] to-[#7928CA]",
    mock: "🗓️",
  },
];

/* ------------------------------ Case studies ------------------------------ */

export interface CaseStudy {
  brand: string;
  emoji: string;
  industry: string;
  tags: string[];
  icon: IconType;
  gradient: string;
  headline: string;
  challenge: string;
  approach: string[];
  results: { value: string; label: string }[];
  strategy: {
    design: { title: string; points: string[] };
    colors: { title: string; points: string[] };
    execution: { title: string; points: string[] };
  };
}

export const caseStudies: CaseStudy[] = [
  {
    brand: "Concept Campaign: Social Media Growth Strategy for Fashion Brand",
    emoji: "👗",
    industry: "Concept Project · Fashion Brand",
    tags: ["Concept Project"],
    icon: Sparkles,
    gradient: "from-[#EC4899] to-[#9852F7]",
    headline:
      "A complete 30-day social media growth strategy — planned exactly as it would run for a real fashion client.",
    challenge:
      "The brief: a boutique-style fashion brand launching on Instagram needs a scroll-stopping presence from day one. This concept campaign shows how I would plan it — content pillars, a sample 30-day calendar, visual post ideas and reel concepts — before a single post goes live.",
    approach: [
      "Defined 3 content pillars: outfit inspiration, styling tips and behind-the-scenes brand storytelling.",
      "Built a sample 30-day content calendar mapping every post, story and reel to a goal.",
      "Designed visual post concepts in Canva — bold headline templates, one hero product, one CTA.",
      "Scripted reel concepts with hook-first openings and trending audio suggestions.",
    ],
    results: [
      { value: "30-day", label: "Sample content calendar" },
      { value: "12+", label: "Visual post concepts" },
      { value: "6", label: "Reel concepts with hooks" },
    ],
    strategy: {
      design: {
        title: "Why this design was chosen 💡",
        points: [
          "A consistent template system (bold headline + one hero image + one CTA) keeps the grid curated instead of chaotic.",
          "Reel concepts use 2-3 second pattern interrupts — color flash, zoom punch — to hold retention.",
          "Every deliverable is fully editable, so the strategy can be adapted to any fashion brand quickly.",
        ],
      },
      colors: {
        title: "Psychology behind the colors 🛡️",
        points: [
          "Soft blush + deep plum tones signal boutique elegance without feeling unaffordable.",
          "Gold accents suggest premium quality, supporting higher price points.",
          "Generous white space keeps the feed calm and premium — calm sells luxury.",
        ],
      },
      execution: {
        title: "The exact marketing strategy 📈",
        points: [
          "Week 1-2: establish the grid with 5 posts + 4 reels weekly to train the algorithm on consistency.",
          "Week 3: engagement sprint — polls, this-or-that stories and DM conversations to warm the audience.",
          "Week 4: launch-style push — countdown stories, waitlist highlights and a featured 'New Drop' reel series.",
        ],
      },
    },
  },
  {
    brand: "Personal Brand Case Study: Instagram & Facebook Reach Strategy",
    emoji: "💼",
    industry: "Personal Brand · Live Project",
    tags: ["Personal Brand"],
    icon: Instagram,
    gradient: "from-[#8B5CF6] to-[#06B6D4]",
    headline:
      "The reach strategy behind my own Instagram & Facebook pages — content planning and hashtag research in action.",
    challenge:
      "My own pages are the live lab for every strategy I offer. This case study documents the exact planning system and hashtag research process I use to grow reach on Instagram & Facebook — with my own profile as the working example.",
    approach: [
      "Built a weekly content plan mixing educational, engaging and promotional posts.",
      "Researched and organized hashtag sets by size and relevance for each content pillar.",
      "Designed post templates in Canva so every graphic is instantly recognizable.",
      "Tracked reach, saves and profile visits weekly to double down on what works.",
    ],
    results: [
      { value: "Weekly", label: "Content planning system" },
      { value: "3", label: "Tested hashtag sets" },
      { value: "4", label: "Reusable Canva templates" },
    ],
    strategy: {
      design: {
        title: "Why this design was chosen 💡",
        points: [
          "A recognizable template style means followers identify the brand in the feed before reading the handle.",
          "Educational carousels earn saves and shares — the strongest reach signals.",
          "Personal, face-led posts build trust faster than graphics alone.",
        ],
      },
      colors: {
        title: "Psychology behind the colors 🛡️",
        points: [
          "Purple gradients convey creativity and ambition — fitting for a marketing personal brand.",
          "High-contrast text overlays keep captions readable even on small screens.",
          "Consistent accent colors across Instagram & Facebook create one unified brand feel.",
        ],
      },
      execution: {
        title: "The exact marketing strategy 📈",
        points: [
          "Posting rhythm: 4 feed posts + daily stories weekly, each mapped to a content pillar.",
          "Hashtag strategy: 3 researched sets rotated per pillar, mixing niche and mid-size tags.",
          "Cross-posting: Instagram content repurposed to Facebook with native captions and timing tests.",
        ],
      },
    },
  },
  {
    brand: "Sample SEO Strategy: On-Page & Keyword Optimization Kit",
    emoji: "🔍",
    industry: "Sample Strategy · SEO Kit",
    tags: ["Sample Strategy"],
    icon: Search,
    gradient: "from-[#10B981] to-[#7928CA]",
    headline:
      "A ready-to-use on-page SEO kit — keyword research sheet and sample meta descriptions for a small business website.",
    challenge:
      "Small business sites usually lose traffic to simple on-page mistakes. This sample kit demonstrates how I audit a page and fix the basics: keyword mapping, meta titles and descriptions, heading structure and internal linking suggestions.",
    approach: [
      "Built a keyword research sheet mapping primary, secondary and long-tail keywords to pages.",
      "Wrote sample meta titles & meta descriptions within Google's character limits.",
      "Outlined on-page fixes: heading hierarchy, image alt text and internal linking.",
      "Added a local SEO checklist — Google Business Profile setup and local search basics.",
    ],
    results: [
      { value: "20+", label: "Keywords researched & mapped" },
      { value: "6", label: "Sample meta descriptions" },
      { value: "1", label: "Local SEO checklist" },
    ],
    strategy: {
      design: {
        title: "Why this design was chosen 💡",
        points: [
          "The kit is organized page-by-page so any site owner can apply it without SEO experience.",
          "Keywords are mapped to search intent, not just volume — realistic and usable.",
          "Meta samples follow current pixel-width best practices instead of outdated character counts.",
        ],
      },
      colors: {
        title: "Psychology behind the colors 🛡️",
        points: [
          "Clean document styling with generous white space signals clarity and growth.",
          "Green checkmarks and highlights make fixes scannable at a glance.",
          "A calm, professional palette builds trust with non-technical business owners.",
        ],
      },
      execution: {
        title: "The exact marketing strategy 📈",
        points: [
          "Step 1: keyword research with Google Keyword Planner + autocomplete mining.",
          "Step 2: on-page optimization — titles, metas, headings, alt text, internal links.",
          "Step 3: local SEO foundation — Google Business Profile, NAP consistency and review strategy.",
        ],
      },
    },
  },
  {
    brand: "Sample Branding Kit: Canva Visuals & Social Media Post Templates",
    emoji: "🎨",
    industry: "Sample Strategy · Branding Kit",
    tags: ["Sample Strategy", "Concept Project"],
    icon: Palette,
    gradient: "from-[#F59E0B] to-[#9852F7]",
    headline:
      "A complete mini branding kit — editable Canva post templates, story frames and highlight covers for a small business.",
    challenge:
      "New brands waste hours guessing what to post. This sample kit packages a ready visual system: branded post templates, story frames, highlight covers and a mini style guide — all fully editable in Canva, no design skills needed.",
    approach: [
      "Designed 10+ editable Canva post templates around one consistent grid style.",
      "Created story frames for sales, tips, testimonials and behind-the-scenes.",
      "Built highlight covers that double as a visual menu of services.",
      "Documented a mini style guide: colors, fonts and usage rules.",
    ],
    results: [
      { value: "10+", label: "Editable post templates" },
      { value: "8", label: "Story frames" },
      { value: "5", label: "Highlight cover designs" },
    ],
    strategy: {
      design: {
        title: "Why this design was chosen 💡",
        points: [
          "One template system means the feed looks planned 9-posts-at-a-time, not random.",
          "Templates use placeholder text + swap-in images so any business can adapt them in minutes.",
          "Highlight covers turn the profile into a self-guided salesperson.",
        ],
      },
      colors: {
        title: "Psychology behind the colors 🛡️",
        points: [
          "A warm peach + bold violet duo balances approachability with premium energy.",
          "Two fonts only — one headline, one body — keep the system easy to maintain.",
          "Consistent button-style CTAs train the eye exactly where to look.",
        ],
      },
      execution: {
        title: "The exact marketing strategy 📈",
        points: [
          "The kit pairs with the sample content calendar: every template has a planned posting slot.",
          "Story frames include interactive stickers (polls, quizzes) to boost engagement signals.",
          "A one-page style guide keeps future designs on-brand without a designer.",
        ],
      },
    },
  },
];

/* ---------------------------- Target audiences ---------------------------- */

export const audiences = [
  { emoji: "👗", title: "Boutiques", desc: "Fashion brands that need a grid as premium as their racks." },
  { emoji: "✨", title: "Clothing Brands", desc: "D2C labels scaling drops with hooks, not hope." },
  { emoji: "💇‍♀️", title: "Salons & Studios", desc: "Beauty pros turning followers into booked chairs." },
  { emoji: "☕", title: "Cafés & Restaurants", desc: "Local favorites building neighborhood cult followings." },
  { emoji: "🚀", title: "Small Businesses", desc: "Founders who want marketing that pays for itself." },
];

/* ------------------------------- Navigation ------------------------------- */

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];
