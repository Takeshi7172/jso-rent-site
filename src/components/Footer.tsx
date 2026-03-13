import Link from "next/link";
import { ADDRESS, PHONE, WORK_HOURS } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-primary">JSO</span>
              <span className="text-2xl font-light text-foreground">Rent</span>
            </Link>
            <p className="text-muted max-w-md">
              Аренда профессиональных строительных инструментов в Астане.
              Более 70 единиц оборудования от ведущих брендов.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#catalog"
                  className="text-muted hover:text-primary transition-colors"
                >
                  Каталог
                </Link>
              </li>
              <li>
                <Link
                  href="/#prices"
                  className="text-muted hover:text-primary transition-colors"
                >
                  Прайс-лист
                </Link>
              </li>
              <li>
                <Link
                  href="/#promotions"
                  className="text-muted hover:text-primary transition-colors"
                >
                  Акции
                </Link>
              </li>
              <li>
                <Link
                  href="/#contacts"
                  className="text-muted hover:text-primary transition-colors"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Контакты</h4>
            <ul className="space-y-2 text-muted">
              <li>{PHONE}</li>
              <li>{WORK_HOURS}</li>
              <li>{ADDRESS}</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted text-sm">
            &copy; {currentYear} JSO Rent. Все права защищены.
          </p>
          <p className="text-muted text-sm">
            Астана, Казахстан
          </p>
        </div>
      </div>
    </footer>
  );
}
