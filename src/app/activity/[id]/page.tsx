"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useLang } from "@/context/LangContext";
import { supabase } from "@/lib/supabase";
import WaIcon from "@/components/WaIcon";

const WA_BASE = "https://wa.me/521XXXXXXXXXX";

const CATEGORY_LABELS: Record<string, { es: string; en: string }> = {
  boat: { es: "Barcos", en: "Boats" },
  yacht: { es: "Yates", en: "Yachts" },
  adventure: { es: "Aventura", en: "Adventure" },
};

type Activity = {
  id: string;
  name_es: string;
  name_en: string;
  description_es: string;
  description_en: string;
  category: string;
  price_usd: number;
  price_mxn: number;
  emoji: string;
  image_url: string | null;
};

export default function ActivityDetail() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { lang, setLang, t } = useLang();

  const [activity, setActivity] = useState<Activity | null>(null);
  const [loading, setLoading] = useState(true);
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    if (!id) return;
    supabase
      .from("activities")
      .select("*")
      .eq("id", id)
      .single()
      .then(({ data, error }) => {
        if (error || !data) {
          setLoading(false);
          return;
        }
        setActivity(data);
        setLoading(false);
      });
  }, [id]);

  // Set default date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setDate(tomorrow.toISOString().split("T")[0]);
  }, []);

  if (loading) {
    return (
      <div className="detail-loading">
        <div className="detail-spinner" />
      </div>
    );
  }

  if (!activity) {
    return (
      <div className="detail-not-found">
        <h2>{t("Actividad no encontrada", "Activity not found")}</h2>
        <button onClick={() => router.push("/#experiencias")} className="detail-back-btn">
          {t("Volver a experiencias", "Back to experiences")}
        </button>
      </div>
    );
  }

  const name = lang === "es" ? activity.name_es : activity.name_en;
  const desc = lang === "es" ? activity.description_es : activity.description_en;
  const categoryLabel = CATEGORY_LABELS[activity.category]?.[lang] ?? activity.category;
  const total = activity.price_usd * guests;
  const waMsg =
    lang === "es"
      ? `Hola! Tengo dudas sobre: ${activity.name_es}`
      : `Hi! I have questions about: ${activity.name_en}`;

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const minDateStr = minDate.toISOString().split("T")[0];

  return (
    <>
      {/* TOPBAR */}
      <nav className="topbar">
        <a href="/" className="logo">
          Cabo<span>Vivo</span>
        </a>
        <div className="topbar-right">
          <div className="lang-switch">
            <button
              className={`lang-btn ${lang === "es" ? "active" : ""}`}
              onClick={() => setLang("es")}
            >
              ES
            </button>
            <button
              className={`lang-btn ${lang === "en" ? "active" : ""}`}
              onClick={() => setLang("en")}
            >
              EN
            </button>
          </div>
        </div>
      </nav>

      <main className="detail-page">
        {/* HERO IMAGE */}
        <div
          className={`detail-hero ${activity.image_url ? "" : `v-${activity.category}`}`}
          style={
            activity.image_url
              ? { backgroundImage: `url(${activity.image_url})` }
              : undefined
          }
        >
          <button className="detail-back" onClick={() => router.push("/#experiencias")}>
            &larr; {t("Volver", "Back")}
          </button>
          {!activity.image_url && (
            <span className="detail-hero-emoji">{activity.emoji}</span>
          )}
          <div className="detail-hero-overlay" />
        </div>

        <div className="detail-content">
          {/* LEFT: INFO */}
          <div className="detail-info">
            <span className="detail-category">{categoryLabel}</span>
            <h1 className="detail-title">{name}</h1>
            <p className="detail-desc">{desc}</p>
          </div>

          {/* RIGHT: BOOKING CARD */}
          <div className="detail-booking">
            <div className="booking-card">
              <div className="booking-price-row">
                <span className="booking-price">${activity.price_usd} <small>USD</small></span>
                <span className="booking-per">{t("por persona", "per person")}</span>
              </div>

              {/* Date */}
              <label className="booking-label">
                {t("Fecha", "Date")}
                <input
                  type="date"
                  className="booking-input"
                  value={date}
                  min={minDateStr}
                  onChange={(e) => setDate(e.target.value)}
                />
              </label>

              {/* Guests */}
              <label className="booking-label">
                {t("Personas", "Guests")}
                <div className="booking-stepper">
                  <button
                    className="stepper-btn"
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    disabled={guests <= 1}
                  >
                    &minus;
                  </button>
                  <span className="stepper-value">{guests}</span>
                  <button
                    className="stepper-btn"
                    onClick={() => setGuests(Math.min(20, guests + 1))}
                    disabled={guests >= 20}
                  >
                    +
                  </button>
                </div>
              </label>

              {/* Total */}
              <div className="booking-total">
                <span>{t("Total estimado", "Estimated total")}</span>
                <strong>${total} USD</strong>
              </div>

              {/* Book button */}
              <button
                className="booking-cta"
                onClick={() => setShowConfirm(true)}
              >
                {t("Reservar y Pagar", "Book & Pay")}
              </button>

              {/* WhatsApp */}
              <a
                href={`${WA_BASE}?text=${encodeURIComponent(waMsg)}`}
                target="_blank"
                className="booking-wa"
              >
                <WaIcon size={18} />
                {t("¿Dudas? Escríbenos", "Questions? Message Us")}
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* CONFIRM MODAL */}
      {showConfirm && (
        <div className="modal-overlay" onClick={() => setShowConfirm(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <h3>{t("Pago en línea próximamente", "Online payment coming soon")}</h3>
            <p>
              {t(
                "Estamos integrando pagos con Stripe. Por ahora, contáctanos por WhatsApp para confirmar tu reserva.",
                "We're integrating Stripe payments. For now, contact us via WhatsApp to confirm your booking."
              )}
            </p>
            <div className="modal-actions">
              <a
                href={`${WA_BASE}?text=${encodeURIComponent(
                  lang === "es"
                    ? `Hola! Quiero reservar: ${activity.name_es}\nFecha: ${date}\nPersonas: ${guests}\nTotal: $${total} USD`
                    : `Hi! I want to book: ${activity.name_en}\nDate: ${date}\nGuests: ${guests}\nTotal: $${total} USD`
                )}`}
                target="_blank"
                className="modal-wa-btn"
              >
                <WaIcon size={18} />
                {t("Reservar por WhatsApp", "Book via WhatsApp")}
              </a>
              <button className="modal-close-btn" onClick={() => setShowConfirm(false)}>
                {t("Cerrar", "Close")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
