import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Categories } from "@/components/Categories";
import { Promotions } from "@/components/Promotions";
import { Footer } from "@/components/Footer";

const PriceList = dynamic(
  () => import("@/components/PriceList").then((mod) => ({ default: mod.PriceList })),
  {
    loading: () => (
      <div className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="animate-pulse">Загрузка прайс-листа...</div>
        </div>
      </div>
    ),
  }
);

const Contacts = dynamic(
  () => import("@/components/Contacts").then((mod) => ({ default: mod.Contacts })),
  {
    loading: () => (
      <div className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="animate-pulse">Загрузка контактов...</div>
        </div>
      </div>
    ),
  }
);

const FloatingButtons = dynamic(() =>
  import("@/components/FloatingButtons").then((mod) => ({ default: mod.FloatingButtons }))
);

const FAQ = dynamic(
  () => import("@/components/FAQ").then((mod) => ({ default: mod.FAQ })),
  {
    loading: () => (
      <div className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="animate-pulse">Загрузка FAQ...</div>
        </div>
      </div>
    ),
  }
);

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Categories />
        <PriceList />
        <Promotions />
        <Contacts />
        <FAQ />
        <Features />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
