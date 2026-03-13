"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { WHATSAPP_LINK, PHONE_LINK } from "@/lib/data";

export function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // Hide tooltip after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Sentinel element - when this scrolls out of view, buttons appear */}
      <div ref={sentinelRef} className="absolute top-[300px] h-px w-px" aria-hidden="true" />
      <div
        className={`fixed bottom-6 right-6 z-50 flex flex-col gap-3 transition-all duration-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-3 bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg animate-bounce">
          Напишите нам!
          <button
            onClick={() => setShowTooltip(false)}
            className="ml-2 opacity-70 hover:opacity-100"
          >
            <X className="w-3 h-3 inline" />
          </button>
          {/* Arrow */}
          <div className="absolute -bottom-2 right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-foreground" />
        </div>
      )}

      {/* Phone button */}
      <a
        href={PHONE_LINK}
        className="w-14 h-14 bg-primary hover:bg-primary-hover text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
        aria-label="Позвонить"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* WhatsApp button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-cta hover:bg-cta-hover text-black rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 pulse-cta"
        aria-label="Написать в WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
      </div>
    </>
  );
}
