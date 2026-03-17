"use client";

import Image from "next/image";
import { useLang } from "@/context/LangContext";
import WaIcon from "@/components/WaIcon";

const WA_BASE = "https://wa.me/521XXXXXXXXXX";

function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

export default function Home() {
  const { lang, setLang, t } = useLang();

  return (
    <>
      {/* FLOATING WHATSAPP */}
      <a
        href={`${WA_BASE}?text=${encodeURIComponent(t("Hola! Me interesan las actividades en Cabo", "Hi! I'm interested in activities in Cabo"))}`}
        className="wa-float"
        target="_blank"
      >
        <WaIcon />
        <span className="wa-text">{t("Escribenos", "Message Us")}</span>
      </a>

      {/* TOPBAR */}
      <nav className="topbar">
        <a href="#" className="logo">
          Cabo<span>Vivo</span>
        </a>
        <div className="topbar-right">
          <div className="topbar-links">
            <a href="#como-funciona">{t("Como Funciona", "How It Works")}</a>
            <a href="#experiencias">{t("Experiencias", "Experiences")}</a>
            <a href="#nosotros">{t("Nosotros", "About Us")}</a>
            <a
              href={`${WA_BASE}?text=${encodeURIComponent(t("Hola! Quiero info sobre actividades en Cabo", "Hi! I want info about activities in Cabo"))}`}
              target="_blank"
              className="topbar-wa"
            >
              WhatsApp
            </a>
          </div>
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

      {/* HERO */}
      <section className="hero">
        <div className="hero-blob" />
        <div className="hero-blob2" />
        <div className="hero-inner">
          <div className="hero-content">
            <h1 className="fade-up fade-up-d1">
              {lang === "es" ? (
                <>
                  Tu aventura en Cabo,
                  <br />
                  <em>a tu manera.</em>
                </>
              ) : (
                <>
                  Your Cabo adventure,
                  <br />
                  <em>your way.</em>
                </>
              )}
            </h1>

            <p className="hero-desc fade-up fade-up-d2">
              {t(
                "Nada de formularios eternos ni apps genericas. Platicanos que quieres vivir y nosotros lo hacemos realidad. Trato directo, sin intermediarios.",
                "No endless forms or generic apps. Tell us what you want to experience and we'll make it happen. Direct service, no middlemen."
              )}
            </p>

            <a
              href={`${WA_BASE}?text=${encodeURIComponent(t("Hola! Quiero planear mi aventura en Cabo", "Hi! I want to plan my Cabo adventure"))}`}
              target="_blank"
              className="hero-cta fade-up fade-up-d3"
            >
              <WaIcon size={20} />
              {t("Planea tu aventura", "Plan Your Adventure")}
            </a>

            <div className="hero-trust fade-up fade-up-d4">
              <div className="trust-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                {t("Pago seguro", "Secure payment")}
              </div>
              <div className="trust-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                {t("Respuesta en minutos", "Reply in minutes")}
              </div>
              <div className="trust-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                {t("Trato personal", "Personal service")}
              </div>
            </div>
          </div>

          {/* FLOATING ACTIVITY CARDS */}
          <div className="hero-cards fade-up fade-up-d2">
            <div className="hero-float-card hfc-boat">
              <span className="card-emoji">🚤</span>
              <div className="card-info">
                <h4>{t("Tours en Barco", "Boat Tours")}</h4>
                <span>{t("Snorkel · Arco · Playa del Amor", "Snorkel · Arch · Lover's Beach")}</span>
              </div>
              <span className="card-badge">{t("Popular", "Popular")}</span>
            </div>
            <div className="hero-float-card hfc-adventure">
              <span className="card-emoji">🏜️</span>
              <div className="card-info">
                <h4>{t("Aventura Extrema", "Extreme Adventure")}</h4>
                <span>{t("ATVs · Tirolesas · Camellos", "ATVs · Ziplines · Camels")}</span>
              </div>
              <span className="card-badge">{t("Adrenalina", "Adrenaline")}</span>
            </div>
            <div className="hero-float-card hfc-fish">
              <span className="card-emoji">🎣</span>
              <div className="card-info">
                <h4>{t("Pesca Deportiva", "Sport Fishing")}</h4>
                <span>{t("Marlin · Dorado · Atun", "Marlin · Dorado · Tuna")}</span>
              </div>
              <span className="card-badge">{t("Clasico", "Classic")}</span>
            </div>
            <div className="hero-float-card hfc-food">
              <span className="card-emoji">🌮</span>
              <div className="card-info">
                <h4>{t("Gastronomia", "Food & Nightlife")}</h4>
                <span>{t("Tacos · Cenas · Nightlife", "Tacos · Dinners · Nightlife")}</span>
              </div>
              <span className="card-badge">{t("Sabores", "Flavors")}</span>
            </div>
            <div className="hero-float-card hfc-yacht">
              <span className="card-emoji">🛥️</span>
              <div className="card-info">
                <h4>{t("Renta de Yates", "Yacht Rentals")}</h4>
                <span>{t("Privados · Tripulacion · Barra libre", "Private · Full Crew · Open Bar")}</span>
              </div>
              <span className="card-badge">{t("Premium", "Premium")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="how" id="como-funciona">
        <span className="section-label">{t("Asi de facil", "Simple as that")}</span>
        <h2 className="section-title">{t("¿Como funciona?", "How does it work?")}</h2>
        <p className="section-desc" style={{ margin: "0 auto" }}>
          {t(
            "Sin cuentas, sin apps, sin complicaciones. Solo tu y nosotros.",
            "No accounts, no apps, no hassle. Just you and us."
          )}
        </p>

        <div className="how-grid">
          <div className="how-step">
            <div className="step-num">1</div>
            <h3>{t("Escribenos", "Text Us")}</h3>
            <p>
              {t(
                "Mandanos un WhatsApp contandonos que tipo de aventura buscas, cuantas personas son y tus fechas.",
                "Send us a WhatsApp message with what kind of adventure you're looking for, your group size and dates."
              )}
            </p>
          </div>
          <div className="how-step">
            <div className="step-num">2</div>
            <h3>{t("Te armamos tu plan", "We Build Your Plan")}</h3>
            <p>
              {t(
                "Te proponemos las mejores opciones con precios reales. Pregunta lo que quieras, estamos para resolver.",
                "We'll send you the best options with real prices. Ask anything — we're here to help."
              )}
            </p>
          </div>
          <div className="how-step">
            <div className="step-num">3</div>
            <h3>{t("¡A disfrutar!", "Enjoy!")}</h3>
            <p>
              {t(
                "Confirmas, pagas seguro y listo. Nosotros nos encargamos de que todo salga perfecto.",
                "Confirm, pay securely, and you're set. We take care of everything so you don't have to."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCIAS */}
      <section className="experiences" id="experiencias">
        <span className="section-label">{t("Experiencias", "Experiences")}</span>
        <h2 className="section-title">
          {t("Lo que puedes vivir en Cabo", "What you can experience in Cabo")}
        </h2>
        <p className="section-desc">
          {t(
            "Cada aventura se adapta a ti. Estos son solo algunos puntos de partida.",
            "Every adventure is tailored to you. These are just starting points."
          )}
        </p>

        <div className="exp-grid">
          {[
            {
              visual: "v-boat",
              tag: { es: "Popular", en: "Popular" },
              emoji: "🚤",
              title: { es: "Tours en Barco & Snorkel", en: "Boat Tours & Snorkeling" },
              desc: {
                es: "Recorre el Arco, nada con peces tropicales en la Playa del Amor y disfruta el mar de Cortes como nunca.",
                en: "Cruise past the Arch, swim with tropical fish at Lover's Beach and experience the Sea of Cortez like never before.",
              },
              price: { es: "Desde $1,200", en: "From $65" },
              unit: { es: "MXN/persona", en: "USD/person" },
              wa: { es: "Hola! Me interesan los tours en barco 🚤", en: "Hi! I'm interested in boat tours 🚤" },
            },
            {
              visual: "v-adventure",
              tag: { es: "Adrenalina", en: "Adrenaline" },
              emoji: "🏜️",
              title: { es: "Aventura Extrema", en: "Extreme Adventure" },
              desc: {
                es: "ATVs por el desierto, tirolesas con vista al oceano, camellos al atardecer. Tu eliges el nivel de intensidad.",
                en: "ATVs through the desert, ziplines with ocean views, camel rides at sunset. You choose the intensity level.",
              },
              price: { es: "Desde $1,500", en: "From $80" },
              unit: { es: "MXN/persona", en: "USD/person" },
              wa: { es: "Hola! Quiero info de aventura extrema 🏜️", en: "Hi! I want info about adventure activities 🏜️" },
            },
            {
              visual: "v-fish",
              tag: { es: "Clasico", en: "Classic" },
              emoji: "🎣",
              title: { es: "Pesca Deportiva", en: "Sport Fishing" },
              desc: {
                es: "Marlin, dorado, atun — sal en lancha privada con capitanes expertos. Desde medio dia hasta jornadas completas.",
                en: "Marlin, dorado, tuna — head out on a private boat with expert captains. Half-day to full-day charters available.",
              },
              price: { es: "Desde $8,000", en: "From $430" },
              unit: { es: "MXN/lancha", en: "USD/boat" },
              wa: { es: "Hola! Me interesa la pesca deportiva 🎣", en: "Hi! I'm interested in sport fishing 🎣" },
            },
            {
              visual: "v-food",
              tag: { es: "Sabores", en: "Flavors" },
              emoji: "🌮",
              title: { es: "Gastronomia & Nightlife", en: "Food & Nightlife" },
              desc: {
                es: "Food tours por los mejores tacos locales, cenas en la playa, reservas en restaurantes top y la mejor fiesta de Cabo.",
                en: "Food tours to the best local tacos, beachfront dinners, top restaurant reservations and the best nightlife in Cabo.",
              },
              price: { es: "Desde $800", en: "From $45" },
              unit: { es: "MXN/persona", en: "USD/person" },
              wa: { es: "Hola! Quiero experiencias gastronomicas 🌮", en: "Hi! I want food and nightlife experiences 🌮" },
            },
            {
              visual: "v-yacht",
              tag: { es: "Premium", en: "Premium" },
              emoji: "🛥️",
              title: { es: "Renta de Yates", en: "Yacht Rentals" },
              desc: {
                es: "Yates privados con tripulacion, snacks, barra libre y todo lo que necesitas para un dia inolvidable en el mar.",
                en: "Private yachts with full crew, snacks, open bar and everything you need for an unforgettable day at sea.",
              },
              price: { es: "Desde $25,000", en: "From $1,350" },
              unit: { es: "MXN/dia", en: "USD/day" },
              wa: { es: "Hola! Me interesa rentar un yate 🛥️", en: "Hi! I'm interested in renting a yacht 🛥️" },
            },
          ].map((exp, i) => (
            <div className="exp-card" key={i}>
              <div className={`exp-visual ${exp.visual}`}>
                <span className="exp-tag">{exp.tag[lang]}</span>
                <span className="emoji-bg">{exp.emoji}</span>
              </div>
              <div className="exp-body">
                <h3>{exp.title[lang]}</h3>
                <p>{exp.desc[lang]}</p>
                <div className="exp-footer">
                  <span className="exp-price">
                    {exp.price[lang]} <small>{exp.unit[lang]}</small>
                  </span>
                  <a
                    href={`${WA_BASE}?text=${encodeURIComponent(exp.wa[lang])}`}
                    target="_blank"
                    className="exp-btn"
                  >
                    {t("Reservar →", "Book Now →")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NOSOTROS */}
      <section className="about" id="nosotros">
        <div className="about-inner">
          <div>
            <span className="section-label">{t("¿Por que nosotros?", "Why us?")}</span>
            <h2 className="section-title">
              {lang === "es" ? (
                <>
                  No somos una app.
                  <br />
                  Somos personas.
                </>
              ) : (
                <>
                  We&apos;re not an app.
                  <br />
                  We&apos;re real people.
                </>
              )}
            </h2>
            <p className="section-desc">
              {t(
                "Aqui no hay chatbots ni respuestas automaticas. Nos escribes y te contesta alguien que conoce Cabo como la palma de su mano.",
                "No chatbots, no automated replies. You text us and a real person who knows every corner of Cabo answers back."
              )}
            </p>

            <div className="about-features">
              {[
                {
                  icon: "🎯",
                  title: { es: "Precios directos", en: "Direct Prices" },
                  desc: {
                    es: "Sin comisiones infladas de plataformas. Lo que pagas es lo justo.",
                    en: "No inflated platform commissions. You pay what's fair.",
                  },
                },
                {
                  icon: "⚡",
                  title: { es: "Respuesta rapida", en: "Fast Response" },
                  desc: {
                    es: "Te contestamos en minutos, no en horas. De 9AM a 5PM hora del Pacifico.",
                    en: "We reply in minutes, not hours. 9AM to 5PM Pacific Time.",
                  },
                },
                {
                  icon: "🤝",
                  title: { es: "Flexibilidad total", en: "Total Flexibility" },
                  desc: {
                    es: "¿Quieres combinar actividades? ¿Un plan personalizado? Nos adaptamos a ti.",
                    en: "Want to combine activities? A custom plan? We adapt to you.",
                  },
                },
                {
                  icon: "🔒",
                  title: { es: "Pago seguro", en: "Secure Payment" },
                  desc: {
                    es: "Transferencia, tarjeta o lo que prefieras. Todo respaldado y transparente.",
                    en: "Bank transfer, card, or whatever works for you. Fully backed and transparent.",
                  },
                },
              ].map((feat, i) => (
                <div className="about-feat" key={i}>
                  <div className="feat-icon">{feat.icon}</div>
                  <div className="feat-text">
                    <h4>{feat.title[lang]}</h4>
                    <p>{feat.desc[lang]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-card">
            <div className="avatar">
              <Image
                src="/foto-fundador.png"
                alt="Marco — Fundador de Cabo Vivo"
                width={100}
                height={100}
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
              />
            </div>
            <h3>Marco</h3>
            <div className="role">{t("Fundador · Cabo Vivo", "Founder · Cabo Vivo")}</div>
            <p className="quote">
              {t(
                '"Vivo en Cabo y conozco cada rincon. Mi trabajo es que tu viaje sea exactamente lo que imaginaste — o mejor."',
                '"I live in Cabo and I know every corner. My job is to make your trip exactly what you imagined — or better."'
              )}
            </p>
            <div className="hours-badge">
              <span className="hours-dot" />
              {t("Disponible 9AM – 5PM Pacifico", "Available 9AM – 5PM Pacific")}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery" id="galeria">
        <span className="section-label">{t("Galeria", "Gallery")}</span>
        <h2 className="section-title">{t("Asi se vive Cabo", "This is Cabo")}</h2>

        <div className="gallery-grid">
          {[
            { cls: "gi-boat", es: "Tour en barco", en: "Boat Tour" },
            { cls: "gi-fish", es: "Pesca deportiva", en: "Sport Fishing" },
            { cls: "gi-atv", es: "Aventura en ATV", en: "ATV Adventure" },
            { cls: "gi-dinner", es: "Cena en la playa", en: "Beach Dinner" },
            { cls: "gi-snorkel", es: "Snorkel", en: "Snorkeling" },
            { cls: "gi-yacht", es: "Renta de yate", en: "Yacht Rental" },
          ].map((item, i) => (
            <div className={`gallery-item ${item.cls}`} key={i}>
              <div className="gallery-icon">
                <CameraIcon />
              </div>
              <span className="gallery-label">{item[lang]}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-final">
        <h2>
          {lang === "es" ? (
            <>
              ¿Listo para vivir Cabo
              <br />
              como se debe?
            </>
          ) : (
            <>
              Ready to experience Cabo
              <br />
              the right way?
            </>
          )}
        </h2>
        <p>
          {t(
            "Escribenos ahora y en minutos tienes tu plan armado. Sin compromiso.",
            "Text us now and your plan is ready in minutes. No commitment."
          )}
        </p>
        <a
          href={`${WA_BASE}?text=${encodeURIComponent(t("Hola! Quiero planear mi aventura en Cabo 🌊", "Hi! I want to plan my Cabo adventure 🌊"))}`}
          target="_blank"
          className="cta-wa"
        >
          <WaIcon size={22} />
          {t("Escribenos por WhatsApp", "Message Us on WhatsApp")}
        </a>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-hours">
          {t(
            "📱 WhatsApp disponible de 9:00 AM a 5:00 PM (Hora del Pacifico)",
            "📱 WhatsApp available 9:00 AM – 5:00 PM (Pacific Time)"
          )}
        </div>
        <p>
          © 2026 Cabo Vivo. {t("Todos los derechos reservados.", "All rights reserved.")} Cabo San
          Lucas, B.C.S., Mexico.
        </p>
      </footer>
    </>
  );
}
