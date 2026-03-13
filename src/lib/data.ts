import {
  Hammer,
  Drill,
  Zap,
  Wind,
  Wrench,
  Sparkles,
  Flame,
  TreePine,
  Waves,
  Ruler,
  type LucideIcon,
} from "lucide-react";
import { z } from "zod";

export interface Tool {
  name: string;
  price: number;
  brand?: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  image: string;
}

// Zod validation schemas
const ToolSchema = z.object({
  name: z.string().min(1, "Tool name cannot be empty").max(100),
  price: z.number().positive("Price must be positive").max(1000000),
  brand: z.string().min(1).max(50).optional(),
  category: z.string().min(1, "Category cannot be empty"),
});

const CategorySchema = z.object({
  id: z.string().min(1, "Category ID cannot be empty").max(50),
  name: z.string().min(1, "Category name cannot be empty").max(100),
  description: z.string().min(1, "Description cannot be empty").max(500),
  image: z.string().url("Image must be a valid URL"),
});

export const PHONE = "+77066228061";
export const WHATSAPP_LINK = `https://wa.me/${PHONE.replace("+", "")}`;
export const PHONE_LINK = `tel:${PHONE}`;
export const ADDRESS = "ул. Аманжол Болекпаев, 14, Астана";
export const WORK_HOURS = "09:00 - 21:00 ежедневно";
export const TWOGIS_LINK = "https://2gis.kz/astana/geo/70000001102013683";
export const COORDS = { lat: 51.12184, lng: 71.500955 };

export const categories: Category[] = [
  {
    id: "drills",
    name: "Перфораторы и дрели",
    icon: Drill,
    description: "Перфораторы 3-10 Дж, шуруповерты, дрели",
    image: "https://alteco.kz/img/cache/product_medium/2/images/MnkKAfos.jpg",
  },
  {
    id: "grinders",
    name: "Болгарки и пилы",
    icon: Hammer,
    description: "Болгарки 115-230 мм, торцовки, лобзики",
    image: "https://alteco.kz/img/cache/product_medium/2/images/vqscMzia.jpg",
  },
  {
    id: "generators",
    name: "Генераторы",
    icon: Zap,
    description: "Генераторы 3.3 - 8.5 кВт",
    image: "https://static.insales-cdn.com/r/JxbJpkrDh3Y/rs:fit:560:0:1/q:100/plain/images/products/1/5198/652629070/d0.jpg@jpg",
  },
  {
    id: "compressors",
    name: "Компрессоры",
    icon: Wind,
    description: "Компрессоры 25-100 л, краскопульты",
    image: "https://static.insales-cdn.com/images/collections/1/1313/91055393/large_1169900_std_3_300x200.jpg",
  },
  {
    id: "welding",
    name: "Сварка и резка",
    icon: Sparkles,
    description: "Сварочные аппараты, штроборезы",
    image: "https://alteco.kz/img/cache/product_medium/2/images/rDVutqTH.jpg",
  },
  {
    id: "heating",
    name: "Тепловые пушки",
    icon: Flame,
    description: "Газовые, дизельные, электрические",
    image: "https://e-catalog.com/jpg/2158194.jpg",
  },
  {
    id: "cleaning",
    name: "Клининг",
    icon: Waves,
    description: "Пылесосы Керхер, мойки, парогенераторы",
    image: "https://static.insales-cdn.com/images/collections/1/1321/91055401/large_1100130_std_1.jpg",
  },
  {
    id: "garden",
    name: "Сад и участок",
    icon: TreePine,
    description: "Триммеры, газонокосилки, мотобуры",
    image: "https://static.insales-cdn.com/images/collections/1/1348/91055428/large_1042500_Outdoor_power_equipment.jpg",
  },
  {
    id: "measuring",
    name: "Измерительные",
    icon: Ruler,
    description: "Лазерные уровни, дальномеры",
    image: "https://www.boschtools.com/us/en/ocsmedia/262437-945/application-image/720x410/laser-measures-glm400c-0601072f16.png",
  },
  {
    id: "other",
    name: "Прочее",
    icon: Wrench,
    description: "Вибраторы, стремянки, катушки",
    image: "https://alteco.kz/img/cache/product_medium/2/images/0lS20q6V.jpg",
  },
];

export const tools: Tool[] = [
  // Перфораторы и дрели
  { name: "Шуруповерт Алтеко", price: 1500, brand: "Алтеко", category: "drills" },
  { name: "Перфоратор 3 Дж", price: 900, brand: "Дензел", category: "drills" },
  { name: "Перфоратор 4 Дж", price: 1500, brand: "Дензел", category: "drills" },
  { name: "Перфоратор 5 Дж", price: 2500, brand: "Дензел", category: "drills" },
  { name: "Перфоратор 10 Дж", price: 3000, brand: "Дензел", category: "drills" },
  { name: "Отбойник 50 Дж", price: 3800, brand: "Краун", category: "drills" },
  { name: "Дрель", price: 900, brand: "Алтеко", category: "drills" },
  { name: "Перфоратор АКБ", price: 3000, brand: "Алтеко", category: "drills" },

  // Болгарки и пилы
  { name: "Пчелка 125 мм", price: 900, brand: "Алтеко", category: "grinders" },
  { name: "Пчелка 150 мм", price: 1500, brand: "Алтеко", category: "grinders" },
  { name: "Болгарка 115 мм", price: 900, brand: "Алтеко", category: "grinders" },
  { name: "Болгарка 125 мм", price: 900, brand: "Алтеко", category: "grinders" },
  { name: "Болгарка 230 мм", price: 1800, brand: "Алтеко", category: "grinders" },
  { name: "Болгарка АКБ", price: 3000, brand: "Алтеко", category: "grinders" },
  { name: "Торцовка 255 мм", price: 3300, brand: "Алтеко", category: "grinders" },
  { name: "Торцовка 255 мм выдвижная", price: 3800, brand: "Алтеко", category: "grinders" },
  { name: "Лобзик", price: 900, brand: "Алтеко", category: "grinders" },
  { name: "Сабельная пила Bosh", price: 1800, brand: "Bosh", category: "grinders" },
  { name: "Пила бензиновая", price: 4000, category: "grinders" },
  { name: "Пила электрическая", price: 3500, category: "grinders" },
  { name: "Плиткорез 600 мм", price: 1800, category: "grinders" },
  { name: "Плиткорез 1200 мм", price: 3300, category: "grinders" },

  // Генераторы
  { name: "Генератор 3.3 кВт", price: 3000, brand: "Дензел", category: "generators" },
  { name: "Генератор 5.5 кВт", price: 5500, brand: "Дензел", category: "generators" },
  { name: "Генератор 6.5 кВт", price: 6500, brand: "Дензел", category: "generators" },
  { name: "Генератор 8.5 кВт", price: 8500, brand: "Дензел", category: "generators" },

  // Компрессоры
  { name: "Компрессор 25 л без масла", price: 3000, brand: "Дензел", category: "compressors" },
  { name: "Компрессор 50 л 1 поршень", price: 3500, brand: "Дензел", category: "compressors" },
  { name: "Компрессор 50 л 2 поршня", price: 4000, brand: "Дензел", category: "compressors" },
  { name: "Компрессор 80-100 л", price: 6500, brand: "Дензел", category: "compressors" },
  { name: "Краскопульт безвоздушный 395", price: 8000, brand: "Мастбро", category: "compressors" },
  { name: "Краскопульт для компрессора", price: 1500, category: "compressors" },
  { name: "Пневмо пистолет", price: 1500, category: "compressors" },

  // Сварка и резка
  { name: "Сварочный аппарат Ресанта", price: 2300, brand: "Ресанта", category: "welding" },
  { name: "Сварочный аппарат Дензел", price: 2300, brand: "Дензел", category: "welding" },
  { name: "Штроборез Вихрь", price: 2500, brand: "Вихрь", category: "welding" },
  { name: "Штроборез Алтеко", price: 3000, brand: "Алтеко", category: "welding" },
  { name: "Реноватор АКБ МФИ", price: 1900, category: "welding" },

  // Тепловые пушки
  { name: "Пушка электрическая 2 кВт", price: 1000, brand: "Дензел", category: "heating" },
  { name: "Пушка электрическая 3 кВт", price: 1500, brand: "Дензел", category: "heating" },
  { name: "Пушка электрическая 5 кВт", price: 2500, brand: "Дензел", category: "heating" },
  { name: "Пушка электрическая 15 кВт", price: 4500, category: "heating" },
  { name: "Пушка газовая 30 кВт", price: 2500, brand: "Дензел", category: "heating" },
  { name: "Пушка дизельная 30 кВт", price: 3500, brand: "Дензел", category: "heating" },

  // Клининг
  { name: "Пылесос строительный Starmix", price: 5000, brand: "Starmix", category: "cleaning" },
  { name: "Пылесос строительный Керхер бытовой", price: 3000, brand: "Керхер", category: "cleaning" },
  { name: "Пылесос строительный Керхер проф", price: 4000, brand: "Керхер", category: "cleaning" },
  { name: "Моющий пылесос CE 6100", price: 4500, brand: "Керхер", category: "cleaning" },
  { name: "Моющий пылесос Puzzi 8/1", price: 5500, brand: "Керхер", category: "cleaning" },
  { name: "Моющий пылесос Puzzi 10/1", price: 6500, brand: "Керхер", category: "cleaning" },
  { name: "Парогенератор", price: 5000, brand: "Керхер", category: "cleaning" },
  { name: "Мойка высокого давления", price: 5000, brand: "Дензел", category: "cleaning" },

  // Сад и участок
  { name: "Триммер", price: 4500, brand: "Дензел", category: "garden" },
  { name: "Газонокосилка", price: 5000, brand: "Матрикс", category: "garden" },
  { name: "Воздуходув", price: 1500, brand: "Дензел", category: "garden" },
  { name: "Мотобур", price: 4000, category: "garden" },

  // Измерительные
  { name: "Лазерный уровень", price: 1500, brand: "Дензел", category: "measuring" },
  { name: "Дальномер", price: 2000, category: "measuring" },

  // Прочее
  { name: "Вибратор глубинный 1.5 м", price: 1300, category: "other" },
  { name: "Миксер Фиолен", price: 1500, brand: "Дензел", category: "other" },
  { name: "Миксер Дензел", price: 1500, brand: "Дензел", category: "other" },
  { name: "Гайковерт АКБ", price: 2500, category: "other" },
  { name: "Гайковерт пневмо", price: 3000, category: "other" },
  { name: "Бормашина, Гравер", price: 1500, category: "other" },
  { name: "Ленточная шлифмашина Crown", price: 1500, brand: "Crown", category: "other" },
  { name: "Шлифмашина эксцентриковая", price: 900, category: "other" },
  { name: "Шлифмашина жираф", price: 4900, category: "other" },
  { name: "Полировальная машинка", price: 2000, category: "other" },
  { name: "Рубанок электрический", price: 2500, category: "other" },
  { name: "Фен промышленный", price: 900, category: "other" },
  { name: "Утюг Дензел", price: 900, brand: "Дензел", category: "other" },
  { name: "Стремянка 6 ступеней", price: 900, category: "other" },
  { name: "Катушка", price: 900, category: "other" },
  { name: "Катушка силовая", price: 1500, category: "other" },
];

// Validate data at module load time
const validCategoryIds = new Set(categories.map((c) => c.id));

// Validate all categories
categories.forEach((category, index) => {
  try {
    CategorySchema.parse({
      id: category.id,
      name: category.name,
      description: category.description,
      image: category.image,
    });
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error(`Invalid category at index ${index}:`, error);
    }
    throw new Error(`Data validation failed for category at index ${index}`);
  }
});

// Validate all tools
tools.forEach((tool, index) => {
  try {
    ToolSchema.parse(tool);
    if (!validCategoryIds.has(tool.category)) {
      throw new Error(`Invalid category "${tool.category}" - not found in categories list`);
    }
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error(`Invalid tool at index ${index}:`, error);
    }
    throw new Error(`Data validation failed for tool "${tool.name}" at index ${index}`);
  }
});

export const promotions = [
  {
    title: "Акция 3+1",
    description: "При аренде на 3 дня — 4-й день БЕСПЛАТНО!",
    highlight: true,
  },
  {
    title: "Бесплатная доставка",
    description: "При заказе от 10 000 ₸ доставка по Астане бесплатно",
    highlight: false,
  },
];

export const features = [
  {
    title: "70+ инструментов",
    description: "Большой выбор профессионального оборудования",
  },
  {
    title: "Проверенные бренды",
    description: "Дензел, Алтеко, Керхер, Bosh, Starmix",
  },
  {
    title: "Работаем без выходных",
    description: "С 9:00 до 21:00 каждый день",
  },
  {
    title: "Быстрая доставка",
    description: "Привезём инструмент на объект",
  },
];

// Helper functions for catalog pages
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.id === slug);
}

export function getToolsByCategory(categoryId: string): Tool[] {
  return tools.filter((tool) => tool.category === categoryId);
}
