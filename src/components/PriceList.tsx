"use client";

import { useState, useMemo, useCallback } from "react";
import { Search, MessageCircle } from "lucide-react";
import { tools, categories, type Tool } from "@/lib/data";
import { createWhatsAppLink } from "@/lib/utils";
import { SectionHeader } from "./ui";

export function PriceList() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredTools = useMemo(() => {
    const searchLower = search.toLowerCase();
    return tools.filter((tool) => {
      const matchesSearch =
        search === "" ||
        tool.name.toLowerCase().includes(searchLower) ||
        (tool.brand && tool.brand.toLowerCase().includes(searchLower));

      const matchesCategory =
        selectedCategory === null || tool.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  const groupedTools = useMemo(() => {
    const grouped: Record<string, Tool[]> = {};
    for (const tool of filteredTools) {
      (grouped[tool.category] ??= []).push(tool);
    }
    return grouped;
  }, [filteredTools]);

  const getCategoryName = useCallback((categoryId: string) => {
    return categories.find((c) => c.id === categoryId)?.name || categoryId;
  }, []);

  return (
    <section id="prices" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Прайс-лист"
          description="Цены указаны за сутки аренды. Акция 3+1 действует на все инструменты."
        />

        {/* Search and filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <label htmlFor="tool-search" className="sr-only">
              Поиск инструментов
            </label>
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" aria-hidden="true" />
            <input
              id="tool-search"
              type="text"
              placeholder="Поиск по названию или бренду..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
              aria-label="Поиск инструментов по названию или бренду"
            />
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2" role="group" aria-label="Фильтр по категориям">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === null
                  ? "bg-primary text-white"
                  : "bg-background border border-border hover:border-primary"
              }`}
              aria-pressed={selectedCategory === null}
              aria-label="Показать все категории"
            >
              Все
            </button>
            {categories.slice(0, 5).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors hidden sm:block ${
                  selectedCategory === cat.id
                    ? "bg-primary text-white"
                    : "bg-background border border-border hover:border-primary"
                }`}
                aria-pressed={selectedCategory === cat.id}
                aria-label={`Фильтр: ${cat.name}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-muted mb-6">
          Найдено: {filteredTools.length} инструментов
        </p>

        {/* Price table */}
        <div className="space-y-8">
          {Object.entries(groupedTools).map(([categoryId, categoryTools]) => (
            <div key={categoryId}>
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                {getCategoryName(categoryId)}
                <span className="text-sm font-normal text-muted">
                  ({categoryTools.length})
                </span>
              </h3>

              <div className="bg-background rounded-2xl border border-border overflow-hidden">
                {/* Desktop table */}
                <table className="w-full hidden md:table">
                  <thead>
                    <tr className="border-b border-border bg-card">
                      <th className="text-left px-6 py-4 font-medium text-muted">
                        Инструмент
                      </th>
                      <th className="text-left px-6 py-4 font-medium text-muted">
                        Бренд
                      </th>
                      <th className="text-right px-6 py-4 font-medium text-muted">
                        Цена/сутки
                      </th>
                      <th className="text-right px-6 py-4 font-medium text-muted">
                        Заказать
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {categoryTools.map((tool, index) => (
                      <tr
                        key={index}
                        className="border-b border-border last:border-0 hover:bg-card-hover transition-colors"
                      >
                        <td className="px-6 py-4 font-medium">{tool.name}</td>
                        <td className="px-6 py-4 text-muted">
                          {tool.brand || "—"}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="font-bold text-primary">
                            {tool.price.toLocaleString()} ₸
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <a
                            href={createWhatsAppLink(tool.name, tool.price)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-cta hover:bg-cta-hover text-black font-medium rounded-lg transition-colors text-sm"
                          >
                            <MessageCircle className="w-4 h-4" />
                            Заказать
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Mobile cards */}
                <div className="md:hidden divide-y divide-border">
                  {categoryTools.map((tool, index) => (
                    <div key={index} className="p-4 space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{tool.name}</p>
                          {tool.brand && (
                            <p className="text-sm text-muted">{tool.brand}</p>
                          )}
                        </div>
                        <span className="font-bold text-primary text-lg">
                          {tool.price.toLocaleString()} ₸
                        </span>
                      </div>
                      <a
                        href={createWhatsAppLink(tool.name, tool.price)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-cta hover:bg-cta-hover text-black font-medium rounded-xl transition-colors"
                      >
                        <MessageCircle className="w-5 h-5" />
                        Заказать в WhatsApp
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted text-lg">Ничего не найдено</p>
            <button
              onClick={() => {
                setSearch("");
                setSelectedCategory(null);
              }}
              className="mt-4 text-primary hover:underline"
            >
              Сбросить фильтры
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
