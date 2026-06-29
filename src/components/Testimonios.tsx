import { useReveal } from '../hooks/useReveal';

const PLANT_PATHS = [
  'M86 206 C 84 160 88 120 90 80 C 91 56 92 34 92 14',
  'M89 158 C 64 154 51 138 53 121 C 73 127 86 141 89 158 Z',
  'M91 138 C 116 134 129 118 127 101 C 107 107 94 121 91 138 Z',
  'M90 116 C 68 113 57 99 59 83 C 77 89 88 100 90 116 Z',
  'M92 94 C 113 91 123 77 121 61 C 103 67 95 78 92 94 Z',
  'M91 70 C 74 68 65 56 67 43 C 81 48 90 59 91 70 Z',
  'M93 48 C 108 46 116 36 114 24 C 100 29 94 38 93 48 Z',
  'M92 22 C 87 19 87 11 92 8 C 97 11 97 19 92 22 Z',
];

const testimonios = [
  {
    texto: 'LARAN transformó completamente nuestro proceso de reclutamiento. En menos de tres meses redujimos la rotación de personal en un 40%.',
    nombre: 'Carlos Méndez',
    cargo: 'Gerente de Recursos Humanos · Hotel Riviera Maya',
    dark: false,
  },
  {
    texto: 'El diagnóstico de clima laboral nos dio claridad sobre problemas que llevaban años sin atenderse. El equipo es profesional, empático y realmente comprometido con los resultados.',
    nombre: 'Sofía Ramírez',
    cargo: 'Directora Administrativa · PYME Cancún',
    dark: true,
  },
  {
    texto: 'Gracias a la auditoría de experiencia del colaborador logramos reducir el ausentismo y mejorar notablemente el ambiente de trabajo en toda la organización.',
    nombre: 'Jorge Villanueva',
    cargo: 'Director General · Servicios Profesionales PDC',
    dark: false,
  },
];

type Testimonio = typeof testimonios[0];

function TestimonioCard({ t, index }: { t: Testimonio; index: number }) {
  const ref = useReveal<HTMLDivElement>(index * 0.13);

  return (
    <div
      ref={ref}
      style={{
        background: t.dark ? '#7A8C6E' : '#F5F0E8',
        padding: 'clamp(30px,3vw,44px)',
        display: 'flex', flexDirection: 'column',
        color: t.dark ? '#F5F0E8' : undefined,
        opacity: 0, transform: 'translateY(22px)',
      }}
    >
      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 56, lineHeight: 0.6, color: t.dark ? 'rgba(245,240,232,.45)' : '#C8C0B4', height: 30 }}>"</span>
      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: 'italic', fontSize: 'clamp(20px,2vw,24px)', lineHeight: 1.45, color: t.dark ? '#F5F0E8' : '#1C1C1C', margin: '0 0 28px', flex: 1 }}>
        {t.texto}
      </p>
      <div style={{ borderTop: `1px solid ${t.dark ? 'rgba(245,240,232,.3)' : '#C8C0B4'}`, paddingTop: 18 }}>
        <div style={{ fontWeight: 500, fontSize: 14 }}>{t.nombre}</div>
        <div style={{ fontSize: 12.5, color: t.dark ? '#dfe5d6' : '#8a8275', marginTop: 3 }}>{t.cargo}</div>
      </div>
    </div>
  );
}

export function Testimonios() {
  const r1 = useReveal();

  return (
    <section id="testimonios" style={{ scrollMarginTop: 70, background: '#EDE8DF', borderTop: '1px solid #C8C0B4', borderBottom: '1px solid #C8C0B4', position: 'relative', overflow: 'hidden' }}>
      <svg viewBox="0 0 160 210" fill="none" stroke="#7A8C6E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ position: 'absolute', top: -40, left: -30, width: 300, opacity: .06, transform: 'rotate(-26deg)', pointerEvents: 'none' }}>
        {PLANT_PATHS.map((d, i) => <path key={i} d={d} />)}
      </svg>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(64px,8vw,96px) clamp(20px,5vw,48px)', position: 'relative' }}>

        <div ref={r1} style={{ maxWidth: 680, marginBottom: 'clamp(40px,5vw,60px)', opacity: 0, transform: 'translateY(24px)', transition: 'opacity .8s ease, transform .8s cubic-bezier(0.25,0.46,0.45,0.94)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22 }}>
            <span style={{ width: 40, height: 1, background: '#7A8C6E' }} />
            <span style={{ fontSize: 12, fontWeight: 500, letterSpacing: '.2em', textTransform: 'uppercase', color: '#7A8C6E' }}>Lo que dicen nuestros clientes</span>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: 'clamp(34px,4.6vw,54px)', lineHeight: 1.08, margin: 0 }}>
            Resultados que hablan por sí solos.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(290px,1fr))', gap: 1, background: '#C8C0B4', border: '1px solid #C8C0B4' }}>
          {testimonios.map((t, i) => (
            <TestimonioCard key={i} t={t} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
