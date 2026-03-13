"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Sun, Moon, Menu, X, Phone } from "lucide-react";
import { PHONE_LINK, PHONE } from "@/lib/data";

const navLinks = [
  { href: "/#catalog", label: "Каталог" },
  { href: "/#prices", label: "Цены" },
  { href: "/#promotions", label: "Акции" },
  { href: "/#contacts", label: "Контакты" },
];

export function Header() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Skip to content link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Перейти к содержимому
      </a>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">JSO</span>
            <span className="text-2xl font-light text-foreground">Rent</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Phone (desktop) */}
            <a
              href={PHONE_LINK}
              className="hidden lg:flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">{PHONE}</span>
            </a>

            {/* Theme toggle */}
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-card hover:bg-card-hover border border-border transition-colors"
              aria-label={mounted && resolvedTheme === "dark" ? "Переключить на светлую тему" : "Переключить на тёмную тему"}
              title={mounted && resolvedTheme === "dark" ? "Светлая тема" : "Тёмная тема"}
            >
              {mounted && resolvedTheme === "dark" ? (
                <Sun className="w-5 h-5 text-accent" aria-hidden="true" />
              ) : (
                <Moon className="w-5 h-5 text-primary" aria-hidden="true" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-card transition-colors"
              aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={PHONE_LINK}
                className="flex items-center gap-2 text-primary font-medium py-2"
              >
                <Phone className="w-4 h-4" />
                {PHONE}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
    </>
  );
}
