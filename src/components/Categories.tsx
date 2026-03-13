import Link from "next/link";
import Image from "next/image";
import { categories, tools } from "@/lib/data";
import { SectionHeader } from "./ui";

function getToolCount(categoryId: string) {
  return tools.filter((t) => t.category === categoryId).length;
}

function getMinPrice(categoryId: string) {
  const categoryTools = tools.filter((t) => t.category === categoryId);
  if (categoryTools.length === 0) return 0;
  return Math.min(...categoryTools.map((t) => t.price));
}

export function Categories() {
  return (
    <section id="catalog" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Каталог"
          highlight="инструментов"
          description="Выберите категорию для просмотра инструментов и цен"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const count = getToolCount(category.id);
            const minPrice = getMinPrice(category.id);

            return (
              <Link
                key={category.id}
                href={`/catalog/${category.id}`}
                className="group bg-card rounded-2xl border border-border hover:border-primary hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="relative h-36 w-full overflow-hidden bg-gray-50 dark:bg-zinc-800">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    priority={index < 5}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-gray-50 dark:from-zinc-800 to-transparent" />
                  <div className="absolute bottom-2 left-2 w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted mb-3 line-clamp-2">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted">{count} шт.</span>
                    <span className="text-primary font-medium">
                      от {minPrice.toLocaleString()} ₸
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
