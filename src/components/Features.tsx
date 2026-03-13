import { Wrench, Shield, Clock, Truck, type LucideIcon } from "lucide-react";
import { SectionHeader } from "./ui";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Wrench,
    title: "70+ инструментов",
    description: "Большой выбор профессионального оборудования для любых задач",
  },
  {
    icon: Shield,
    title: "Проверенные бренды",
    description: "Дензел, Алтеко, Керхер, Bosh, Starmix — надёжное качество",
  },
  {
    icon: Clock,
    title: "Без выходных",
    description: "Работаем с 9:00 до 21:00 каждый день, включая праздники",
  },
  {
    icon: Truck,
    title: "Доставка на объект",
    description: "Привезём инструмент по Астане, бесплатно от 10 000 ₸",
  },
];

export function Features() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Почему выбирают"
          highlight="JSO Rent"
          description="Мы делаем аренду инструментов простой и удобной"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-background rounded-2xl border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
