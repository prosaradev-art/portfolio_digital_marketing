"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import BookingModal from "@/components/BookingModal";

interface BookingContextValue {
  openBooking: (presetService?: string) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextValue>({
  openBooking: () => {},
  closeBooking: () => {},
});

export function useBooking() {
  return useContext(BookingContext);
}

export default function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [presetService, setPresetService] = useState<string | undefined>(undefined);

  const openBooking = (service?: string) => {
    setPresetService(service);
    setIsOpen(true);
  };

  const closeBooking = () => setIsOpen(false);

  return (
    <BookingContext.Provider value={{ openBooking, closeBooking }}>
      {children}
      <BookingModal
        isOpen={isOpen}
        onClose={closeBooking}
        presetService={presetService}
      />
    </BookingContext.Provider>
  );
}
