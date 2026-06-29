import { useReveal } from '../hooks/useReveal';
import { servicios, type Servicio } from '../data/servicios';
import imgS01 from '../assets/img/s01-clima-laboral.png';
import imgS02 from '../assets/img/s02-experiencia-colaborador.png';
import imgS03 from '../assets/img/s03-rotacion-laboral.png';
import imgS04 from '../assets/img/s04-procesos-organizacionales.png';
import imgS05 from '../assets/img/s05-bienestar-psicosocial.png';

const servicioImgs = [imgS01, imgS02, imgS03, imgS04, imgS05];

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

function ServiceRow({ s, img, index }: { s: Servicio; img: string; index: number }) {
  const ref = useReveal(index * 0.09);

  return (
    <div ref={ref} className="service-row" style={{ opacity: 0, transform: 'translateY(22px)' }}>
      <div style={{ display: 'flex', gap: 'clamp(20px,4vw,48px)', padding: 'clamp(28px,3.5vw,44px) clamp(8px,2vw,28px)', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px,5vw,64px)', fontWeight: 300, color: '#7A8C6E', lineHeight: 1, flex: 'none' }}>
          {s.num}
        </div>
        <div style={{ flex: '1 1 340px', minWidth: 260 }}>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: 'clamp(24px,2.6vw,32px)', lineHeight: 1.15, margin: '0 0 14px' }}>
            {s.nombre}
          </h3>
          <p style={{ fontSize: 15.5, lineHeight: 1.7, color: '#5a564d', margin: '0 0 22px', maxWidth: 640 }}>
            {s.descripcion}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
            {s.incluye.map((item, i) => (
              <span key={i} style={{ fontSize: 12.5, color: '#4a463f', background: '#EDE8DF', border: '1px solid #C8C0B4', borderRadius: 2, padding: '6px 12px', lineHeight: 1.3 }}>
                {item}
              </span>
            ))}
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, background: '#7A8C6E', color: '#F5F0E8', padding: '13px 20px', borderRadius: 2, maxWidth: '100%' }}>
            <svg width="20" height="24" viewBox="0 0 24 28" fill="none" stroke="#F5F0E8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none' }}>
              <path d="M12 26 C 12 18 12 10 12 3" /><path d="M12 16 C 6 15 3 11 4 6 C 9 7 12 11 12 16 Z" /><path d="M12 12 C 18 11 21 7 20 2 C 15 3 12 7 12 12 Z" />
            </svg>
            <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', color: '#dfe5d6' }}>Resultado</span>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 19, lineHeight: 1.25 }}>{s.resultado}</span>
            </span>
          </div>
        </div>
        <div style={{ flex: '0 1 210px', minWidth: 170, alignSelf: 'stretch' }}>
          <div style={{ aspectRatio: '4/5', minHeight: 200, height: '100%', border: '1px solid #7A8C6E', padding: 9, overflow: 'hidden' }}>
            <img src={img} alt={s.nombre} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Servicios() {
  const r1 = useReveal();

  return (
    <section id="servicios" style={{ scrollMarginTop: 70, position: 'relative', overflow: 'hidden' }}>
      <svg viewBox="0 0 160 210" fill="none" stroke="#7A8C6E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ position: 'absolute', bottom: -50, left: -44, width: 320, opacity: .05, transform: 'rotate(-158deg)', pointerEvents: 'none' }}>
        {PLANT_PATHS.map((d, i) => <path key={i} d={d} />)}
      </svg>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(64px,8vw,96px) clamp(20px,5vw,48px)', position: 'relative' }}>

        <div ref={r1} style={{ maxWidth: 760, marginBottom: 'clamp(40px,5vw,64px)', opacity: 0, transform: 'translateY(24px)', transition: 'opacity .8s ease, transform .8s cubic-bezier(0.25,0.46,0.45,0.94)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22 }}>
            <span style={{ width: 40, height: 1, background: '#7A8C6E' }} />
            <span style={{ fontSize: 12, fontWeight: 500, letterSpacing: '.2em', textTransform: 'uppercase', color: '#7A8C6E' }}>Lo que hacemos</span>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: 'clamp(34px,4.6vw,54px)', lineHeight: 1.08, letterSpacing: '-0.01em', margin: '0 0 24px' }}>
            Soluciones para cada etapa del ciclo organizacional.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: '#4a463f', margin: 0 }}>
            Cada servicio es personalizado a las necesidades específicas de tu empresa. No hay fórmulas genéricas — hay diagnóstico, estrategia y acompañamiento real.
          </p>
        </div>

        <div style={{ borderTop: '1px solid #C8C0B4' }}>
          {servicios.map((s, idx) => (
            <ServiceRow key={s.num} s={s} img={servicioImgs[idx]} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
