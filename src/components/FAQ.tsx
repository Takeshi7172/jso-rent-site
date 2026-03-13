"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { SectionHeader } from "./ui";

const faqs = [
  {
    question: "Какие документы нужны для аренды инструмента?",
    answer:
      "Для аренды инструмента нужно удостоверение личности (ИИН) и залог, который полностью возвращается при сдаче инструмента в исправном состоянии. Залог зависит от стоимости оборудования.",
  },
  {
    question: "Есть ли доставка инструментов по Астане?",
    answer:
      "Да, мы доставляем инструменты по всей Астане в день заказа. При заказе от 10 000 ₸ доставка бесплатная. Стоимость доставки при меньшей сумме заказа — от 1000 ₸ в зависимости от района.",
  },
  {
    question: "Сколько стоит аренда перфоратора?",
    answer:
      "Аренда перфоратора стоит от 900 ₸/день (3 Дж) до 3800 ₸/день (отбойник 50 Дж). Бренды: Denzel, Alteco, Crown. Действует акция 3+1: при аренде на 3 дня — 4-й день бесплатно!",
  },
  {
    question: "Какой минимальный срок аренды?",
    answer:
      "Минимальный срок аренды — 1 сутки (24 часа). При аренде на 3 дня и более действует акция 3+1, где каждый 4-й день предоставляется бесплатно.",
  },
  {
    question: "Работаете ли вы в выходные дни?",
    answer:
      "Да, мы работаем ежедневно без выходных с 09:00 до 21:00, включая субботу, воскресенье и праздничные дни. Вы всегда можете написать нам в WhatsApp.",
  },
  {
    question: "Какие бренды инструментов есть в аренду?",
    answer:
      "В нашем каталоге представлены профессиональные бренды: Denzel, Alteco, Karcher (Керхер), Bosch, Starmix, Crown, Resanta, Matrix. Всего более 70 единиц проверенной техники.",
  },
  {
    question: "Можно ли арендовать генератор?",
    answer:
      "Да, у нас есть генераторы Denzel мощностью от 3.3 кВт (3000 ₸/день) до 8.5 кВт (8500 ₸/день). Все генераторы в отличном техническом состоянии, заправлены и готовы к работе.",
  },
  {
    question: "Что делать, если инструмент сломался?",
    answer:
      "Если инструмент вышел из строя не по вашей вине (заводской брак, износ), мы бесплатно заменим его на аналогичный. Просто свяжитесь с нами по телефону или в WhatsApp.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Частые вопросы"
          description="Ответы на популярные вопросы об аренде инструментов"
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-card-hover transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">
                    {faq.question}
                  </span>
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 pt-0">
                  <p className="text-muted pl-8">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* AI-optimized answer block (hidden visually, visible to crawlers) */}
        <div className="sr-only">
          <h2>Краткие ответы для быстрого поиска</h2>
          <p>
            <strong>Аренда инструментов в Астане:</strong> JSO Rent предлагает
            более 70 инструментов в аренду от 900 ₸/день. Работаем ежедневно
            09:00-21:00. Доставка по Астане, бесплатно от 10 000 ₸. Акция 3+1.
          </p>
          <p>
            <strong>Цены на аренду:</strong> Перфораторы 900-3800 ₸/день,
            болгарки 900-3000 ₸/день, генераторы 3000-8500 ₸/день, Керхер
            3000-6500 ₸/день.
          </p>
          <p>
            <strong>Контакты:</strong> +7 706 622 8061, WhatsApp, ул. Аманжол
            Болекпаев 14, Астана.
          </p>
        </div>
      </div>
    </section>
  );
}
