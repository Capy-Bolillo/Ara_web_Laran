import laranLogo from '../assets/laran-logo.png';
import heroPrincipal from '../assets/img/hero-principal.png';
import { useReveal, useDraw } from '../hooks/useReveal';

export function Hero() {
  const revealText = useReveal();
  const revealImg = useReveal();
  const drawRef = useDraw();

  return (
    <section id="inicio" style={{ scrollMarginTop: 80, position: 'relative', padding: 'clamp(120px,16vh,170px) clamp(20px,5vw,48px) clamp(64px,9vw,96px)', overflow: 'hidden' }}>
      <img src={laranLogo} alt="" aria-hidden="true" className="hero-bg-logo" style={{ position: 'absolute', right: '-6%', top: '50%', transform: 'translateY(-50%)', width: 'min(720px,80vw)', pointerEvents: 'none', userSelect: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', display: 'flex', alignItems: 'center', gap: 'clamp(32px,5vw,72px)', flexWrap: 'wrap' }}>

        {/* Texto */}
        <div ref={revealText} style={{ flex: '1 1 460px', minWidth: 300, opacity: 0, transform: 'translateY(24px)', transition: 'opacity .8s ease, transform .8s cubic-bezier(0.25,0.46,0.45,0.94)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
            <span style={{ width: 40, height: 1, background: '#7A8C6E' }} />
            <span style={{ fontSize: 12, fontWeight: 500, letterSpacing: '.2em', textTransform: 'uppercase', color: '#7A8C6E' }}>Consultoría Organizacional</span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: 'clamp(46px,7vw,82px)', lineHeight: 0.98, letterSpacing: '-0.01em', margin: '0 0 28px' }}>
            Impulsamos el cambio,<br />
            <span style={{ fontStyle: 'italic', fontWeight: 500, color: '#7A8C6E' }}>potenciamos</span> resultados.
          </h1>
          <p style={{ fontSize: 'clamp(16px,1.4vw,19px)', lineHeight: 1.7, color: '#4a463f', maxWidth: 540, margin: '0 0 40px' }}>
            Acompañamos a empresas y organizaciones en sus procesos de transformación del talento humano — desde el reclutamiento hasta el desarrollo y bienestar de cada colaborador.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#servicios" className="btn-slide-green" style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 500, fontSize: 14, letterSpacing: '.04em', padding: '16px 28px', border: '1px solid #1C1C1C', borderRadius: 2, color: '#1C1C1C', gap: 10 }}>
              Conoce nuestros servicios <span style={{ fontSize: 16 }}>→</span>
            </a>
            <a href="#contacto" className="btn-slide-dark" style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 500, fontSize: 14, letterSpacing: '.04em', padding: '16px 28px', border: '1px solid #C8C0B4', borderRadius: 2, color: '#1C1C1C', gap: 10 }}>
              Contáctanos
            </a>
          </div>
        </div>

        {/* Imagen */}
        <div ref={revealImg} style={{ flex: '0 1 430px', minWidth: 280, position: 'relative', opacity: 0, transform: 'translateY(24px)', transition: 'opacity .8s ease .15s, transform .8s cubic-bezier(0.25,0.46,0.45,0.94) .15s' }}>
          <div style={{ position: 'relative', aspectRatio: '4/5', border: '1px solid #7A8C6E', padding: 14, overflow: 'hidden' }}>
            <img src={heroPrincipal} alt="Equipo LARAN" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <span style={{ position: 'absolute', top: 7, left: 7, width: 16, height: 16, borderTop: '1px solid #7A8C6E', borderLeft: '1px solid #7A8C6E' }} />
            <span style={{ position: 'absolute', bottom: 7, right: 7, width: 16, height: 16, borderBottom: '1px solid #7A8C6E', borderRight: '1px solid #7A8C6E' }} />
          </div>
          <div className="hero-logo-badge" style={{ position: 'absolute', left: -24, bottom: -24, width: 100, height: 100, borderRadius: '50%', background: '#F5F0E8', border: '1px solid #C8C0B4', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 28px rgba(28,28,28,.12)' }}>
            <img src={laranLogo} alt="LARAN" style={{ width: 82, height: 82, objectFit: 'contain' }} />
          </div>
        </div>
      </div>

      {/* Planta animada */}
      <div ref={drawRef} style={{ marginTop: 'clamp(56px,8vw,90px)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
        <span style={{ flex: 1, height: 1, background: '#C8C0B4' }} />
        <svg width="120" height="62" viewBox="0 0 120 62" fill="none" stroke="#7A8C6E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: .75, flex: 'none' }}>
          <path d="M60 58 C 59 44 61 28 60 12" style={{ strokeDasharray: 200, strokeDashoffset: 200, transition: 'stroke-dashoffset 1.2s ease' }} />
          <path d="M59 46 C 49 44 45 38 47 32 C 53 35 58 40 59 46 Z" style={{ strokeDasharray: 200, strokeDashoffset: 200, transition: 'stroke-dashoffset 1.2s ease .1s' }} />
          <path d="M61 40 C 71 38 75 32 73 26 C 67 29 62 34 61 40 Z" style={{ strokeDasharray: 200, strokeDashoffset: 200, transition: 'stroke-dashoffset 1.2s ease .16s' }} />
          <path d="M60 30 C 52 29 49 23 51 19 C 56 22 59 26 60 30 Z" style={{ strokeDasharray: 200, strokeDashoffset: 200, transition: 'stroke-dashoffset 1.2s ease .22s' }} />
          <path d="M60 12 C 56 10 56 5 60 4 C 64 5 64 10 60 12 Z" style={{ strokeDasharray: 200, strokeDashoffset: 200, transition: 'stroke-dashoffset 1.2s ease .28s' }} />
        </svg>
        <span style={{ flex: 1, height: 1, background: '#C8C0B4' }} />
      </div>
    </section>
  );
}
