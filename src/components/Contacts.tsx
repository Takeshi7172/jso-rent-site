import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Navigation,
} from "lucide-react";
import {
  ADDRESS,
  PHONE,
  PHONE_LINK,
  WHATSAPP_LINK,
  WORK_HOURS,
  TWOGIS_LINK,
  COORDS,
} from "@/lib/data";
import { SectionHeader } from "./ui";

export function Contacts() {
  return (
    <section id="contacts" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Контакты"
          description="Приезжайте к нам или свяжитесь удобным способом"
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-background rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Адрес</h3>
                  <p className="text-muted">{ADDRESS}</p>
                  <a
                    href={TWOGIS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-primary hover:underline"
                  >
                    <Navigation className="w-4 h-4" />
                    Открыть в 2GIS
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-background rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Телефон</h3>
                  <a
                    href={PHONE_LINK}
                    className="text-2xl font-bold text-primary hover:text-primary-hover transition-colors"
                  >
                    {PHONE}
                  </a>
                </div>
              </div>
            </div>

            {/* Working hours */}
            <div className="bg-background rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">
                    Время работы
                  </h3>
                  <p className="text-muted">{WORK_HOURS}</p>
                  <p className="text-sm text-cta mt-1">Работаем без выходных</p>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 bg-cta hover:bg-cta-hover text-black font-bold rounded-xl transition-all"
              >
                <MessageCircle className="w-6 h-6" />
                WhatsApp
              </a>
              <a
                href={PHONE_LINK}
                className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl transition-all"
              >
                <Phone className="w-6 h-6" />
                Позвонить
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="bg-background rounded-2xl border border-border overflow-hidden h-[400px] lg:h-auto">
            <iframe
              src={`https://widgets.2gis.com/widget?type=firmsonmap&options=%7B%22pos%22%3A%7B%22lat%22%3A${COORDS.lat}%2C%22lon%22%3A${COORDS.lng}%2C%22zoom%22%3A16%7D%2C%22opt%22%3A%7B%22city%22%3A%22astana%22%7D%2C%22org%22%3A%2270000001102013683%22%7D`}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              title="JSO Rent на карте 2GIS"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
