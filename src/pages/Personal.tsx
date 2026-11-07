import { Instagram, MessageCircle, ChevronDown, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Escribe aquí tu número con código de país, sin + ni espacios. Ejemplo: 573001234567
const WHATSAPP_NUMBER = '573163973857';

const Personal = () => {
  const whatsappReady = WHATSAPP_NUMBER.length > 0;
  const whatsappHref = whatsappReady ? `https://wa.me/${WHATSAPP_NUMBER}` : '#';

  return (
    <div className="noir-page min-h-screen font-jost">
      {/* Inicio */}
      <header className="relative flex min-h-[92vh] flex-col items-center justify-center px-6 text-center">
        <p className="noir-overline">Página personal</p>
        <h1 className="mt-6 font-noir-serif text-5xl font-semibold leading-tight text-noir-ivory md:text-7xl">
          Emperatriz Morales
        </h1>
        <div className="noir-divider mt-8" aria-hidden="true" />
        <p className="noir-quote mt-8 max-w-xl">
          &ldquo;Mi valor jamás depende de lo material.&rdquo;
        </p>
        <a
          href="#sobre-mi"
          className="noir-scroll mt-16 inline-flex flex-col items-center gap-1"
          aria-label="Bajar a Sobre mí"
        >
          <span className="noir-overline text-[0.65rem]">Conocer más</span>
          <ChevronDown className="h-5 w-5" />
        </a>
      </header>

      {/* Sobre mí */}
      <section id="sobre-mi" className="mx-auto max-w-2xl px-6 pb-20">
        <h2 className="noir-title">Sobre mí</h2>
        <p className="noir-body">
          Soy una mujer leal y respetuosa. Mi palabra es mi compromiso: no prometo lo
          que no puedo cumplir y no abandono a quien camina a mi lado. Trato a las
          personas como quiero ser tratada: con dignidad, honestidad y consideración.
        </p>
        <p className="noir-body mt-5">
          La lealtad y el respeto no son para mí tarjetas de negociación; son el filtro
          con el que elijo quién permanece a mi lado.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <article className="noir-card">
            <h3 className="noir-card-title">Lealtad</h3>
            <p className="noir-body text-[0.95rem]">
              Soy leal a quien es leal: no hablo a espaldas, no negocio confidencias y
              no desaparezco en los momentos difíciles.
            </p>
          </article>
          <article className="noir-card">
            <h3 className="noir-card-title">Respeto</h3>
            <p className="noir-body text-[0.95rem]">
              Lo doy sin pedir nada a cambio: escucho, honro las diferencias y cumplo
              mi palabra aunque nadie esté mirando.
            </p>
          </article>
        </div>
      </section>

      {/* Lámina de lealtad */}
      <section className="mx-auto max-w-2xl px-6 pb-20">
        <h2 className="noir-title">Lámina de Lealtad</h2>
        <figure className="noir-plate">
          <blockquote className="noir-plate-quote">
            &ldquo;La lealtad no se promete: se demuestra. Soy leal a quien es leal, a
            quien está cuando todo se pone difícil y a quien honra mi nombre como yo
            honro el suyo. Quien tiene mi lealtad, la tiene entera; quien la traiciona,
            la pierde para siempre.&rdquo;
          </blockquote>
          <figcaption className="noir-signature">— Emperatriz Morales</figcaption>
        </figure>
      </section>

      {/* Botones */}
      <section className="mx-auto max-w-2xl px-6 pb-24 text-center">
        <h2 className="noir-title">Hablemos</h2>
        <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <a
            className="noir-btn-gold"
            href="https://www.instagram.com/emperatriz_1827/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @emperatriz_1827"
          >
            <Instagram size={20} />
            Instagram @emperatriz_1827
          </a>
          <a
            className={whatsappReady ? 'noir-btn-outline' : 'noir-btn-outline opacity-60'}
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!whatsappReady}
            aria-label="WhatsApp"
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>
        </div>
      </section>

      {/* Pie */}
      <footer className="noir-footer px-6 py-10 text-center">
        <p className="noir-body text-sm">© 2026 Emperatriz Morales</p>
        <Link to="/portafolio" className="noir-link mt-3 inline-flex items-center gap-1">
          Portafolio espacial
          <ArrowUpRight size={15} />
        </Link>
      </footer>
    </div>
  );
};

export default Personal;
