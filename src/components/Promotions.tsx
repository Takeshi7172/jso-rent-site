import { Gift, Truck, Star } from "lucide-react";
import { SectionHeader } from "./ui";

export function Promotions() {
  return (
    <section id="promotions" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Акции и" highlight="выгодные условия" />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Main promo */}
          <div className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-light rounded-3xl p-8 text-white">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                <Gift className="w-4 h-4" />
                Главная акция
              </div>

              <h3 className="text-5xl font-bold mb-4">3+1</h3>
              <p className="text-xl mb-2">При аренде на 3 дня</p>
              <p className="text-3xl font-bold text-white">
                4-й день БЕСПЛАТНО!
              </p>

              <p className="mt-6 text-white/80">
                Акция действует на все инструменты без исключения.
                Экономия до 25% при длительной аренде.
              </p>
            </div>

            {/* Decorative */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
            <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full" />
          </div>

          {/* Secondary promos */}
          <div className="space-y-6">
            {/* Delivery promo */}
            <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Truck className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Бесплатная доставка
                  </h3>
                  <p className="text-muted mb-3">
                    При заказе от 10 000 ₸ мы бесплатно доставим инструмент
                    на ваш объект в Астане.
                  </p>
                  <p className="text-primary font-medium">
                    Экономия до 3 000 ₸ на доставке
                  </p>
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="bg-card rounded-2xl p-6 border border-border hover:border-green-500 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <Star className="w-7 h-7 text-green-500 fill-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Высокий рейтинг
                  </h3>
                  <p className="text-muted mb-3">
                    4.8 из 5 на 2GIS. Более 30 положительных отзывов
                    от довольных клиентов.
                  </p>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 ${
                          star <= 4
                            ? "text-green-500 fill-green-500"
                            : "text-green-500 fill-green-500/50"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-foreground font-bold">4.8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
