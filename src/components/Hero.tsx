import Link from "next/link";
import { MessageCircle, Phone, Star, Clock, MapPin } from "lucide-react";
import { WHATSAPP_LINK, PHONE_LINK, ADDRESS, WORK_HOURS } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-background via-background to-primary/5">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-600 rounded-full text-sm font-medium">
              <Star className="w-4 h-4 fill-current" />
              Рейтинг 4.8 на 2GIS
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Аренда{" "}
              <span className="text-primary">инструментов</span>
              <br />в Астане
            </h1>

            {/* Description */}
            <p className="text-lg text-muted max-w-lg">
              Более 70 единиц профессионального оборудования: перфораторы, болгарки,
              генераторы, компрессоры, пылесосы Керхер. Доставка на объект.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-cta hover:bg-cta-hover text-black font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-cta/30"
              >
                <MessageCircle className="w-6 h-6" />
                Написать в WhatsApp
              </a>
              <a
                href={PHONE_LINK}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-card hover:bg-card-hover border-2 border-primary text-primary font-bold rounded-xl transition-all"
              >
                <Phone className="w-6 h-6" />
                Позвонить
              </a>
            </div>

            {/* Info badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-muted">
                <Clock className="w-5 h-5 text-primary" />
                <span>{WORK_HOURS}</span>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{ADDRESS}</span>
              </div>
            </div>
          </div>

          {/* Right content - Promo card */}
          <div className="relative">
            <div className="bg-card rounded-3xl p-8 shadow-2xl border border-border">
              {/* Main promo */}
              <div className="text-center mb-8">
                <div className="inline-block px-6 py-2 bg-accent/20 text-accent rounded-full text-sm font-bold mb-4">
                  АКЦИЯ
                </div>
                <h2 className="text-5xl font-bold text-primary mb-2">3+1</h2>
                <p className="text-xl text-foreground">
                  Аренда на 3 дня —<br />
                  <span className="text-foreground font-bold">4-й день БЕСПЛАТНО!</span>
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-border my-6" />

              {/* Secondary promo */}
              <div className="text-center">
                <p className="text-muted mb-2">При заказе от 10 000 ₸</p>
                <p className="text-2xl font-bold text-primary">
                  Доставка БЕСПЛАТНО
                </p>
              </div>

              {/* Quick action */}
              <Link
                href="/#prices"
                className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white font-medium rounded-xl transition-colors"
              >
                Смотреть цены
              </Link>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-cta text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg">
              от 900 ₸/день
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
