import { useState } from 'react';
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

const WA_NUMBER = '529841650578';

const inputStyle: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 15,
  color: '#1C1C1C',
  background: '#F5F0E8',
  border: '1px solid #C8C0B4',
  borderRadius: 2,
  padding: '13px 14px',
  transition: 'border-color .2s ease',
};

const labelCapStyle: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 500,
  letterSpacing: '.08em',
  textTransform: 'uppercase',
  color: '#6a6358',
};

const sociales = [
  {
    nombre: 'Instagram',
    url: 'https://www.instagram.com/laran_consultoria?igsh=M20wZzhpaWJjZXp2&utm_source=qr',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7A8C6E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r=".6" fill="#7A8C6E" stroke="none" />
      </svg>
    ),
  },
  {
    nombre: 'TikTok',
    url: 'https://www.tiktok.com/@consultorialaran?_r=1&_t=ZS-97b1FgzamVZ',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7A8C6E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ),
  },
  {
    nombre: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61591136415755',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7A8C6E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
];

export function Contacto() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nombre: '', empresa: '', correo: '', telefono: '', mensaje: '' });
  const r1 = useReveal();
  const r2 = useReveal();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hola LARAN, me comunico desde su sitio web.\n\n` +
      `*Nombre:* ${form.nombre}\n` +
      `*Empresa:* ${form.empresa || 'No especificada'}\n` +
      `*Correo:* ${form.correo}\n` +
      `*Teléfono:* ${form.telefono || 'No especificado'}\n\n` +
      `*Mensaje:*\n${form.mensaje}`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank');
    setSent(true);
  };

  return (
    <section id="contacto" style={{ scrollMarginTop: 70, position: 'relative', overflow: 'hidden' }}>
      <svg viewBox="0 0 160 210" fill="none" stroke="#7A8C6E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ position: 'absolute', top: '8%', right: -44, width: 320, opacity: .05, transform: 'rotate(158deg)', pointerEvents: 'none' }}>
        {PLANT_PATHS.map((d, i) => <path key={i} d={d} />)}
      </svg>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(64px,8vw,96px) clamp(20px,5vw,48px)', position: 'relative' }}>
        <div style={{ display: 'flex', gap: 'clamp(40px,6vw,80px)', flexWrap: 'wrap' }}>

          {/* Info */}
          <div ref={r1} style={{ flex: '1 1 360px', minWidth: 300, opacity: 0, transform: 'translateY(24px)', transition: 'opacity .8s ease, transform .8s cubic-bezier(0.25,0.46,0.45,0.94)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22 }}>
              <span style={{ width: 40, height: 1, background: '#7A8C6E' }} />
              <span style={{ fontSize: 12, fontWeight: 500, letterSpacing: '.2em', textTransform: 'uppercase', color: '#7A8C6E' }}>Hablemos</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: 'clamp(34px,4.4vw,52px)', lineHeight: 1.08, margin: '0 0 22px' }}>
              ¿Listo para transformar tu organización?
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: '#4a463f', margin: '0 0 40px', maxWidth: 460 }}>
              Cuéntanos sobre los retos de tu empresa. Analizamos tu caso sin costo y sin compromiso.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <a href="mailto:consultorialaran93@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7A8C6E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="1" /><path d="M3 6.5l9 6 9-6" /></svg>
                <span style={{ fontSize: 15, color: '#3a362f' }}>consultorialaran93@gmail.com</span>
              </a>
              <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7A8C6E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                <span style={{ fontSize: 15, color: '#3a362f' }}>984 165 0578</span>
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7A8C6E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
                <span style={{ fontSize: 15, color: '#3a362f' }}>Playa del Carmen, Quintana Roo, México</span>
              </div>
            </div>

            {/* Redes sociales */}
            <div style={{ marginTop: 36 }}>
              <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', color: '#7A8C6E', marginBottom: 16 }}>Síguenos</div>
              <div style={{ display: 'flex', gap: 12 }}>
                {sociales.map((s) => (
                  <a key={s.nombre} href={s.url} target="_blank" rel="noreferrer" title={s.nombre}
                    style={{ width: 44, height: 44, border: '1px solid #C8C0B4', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F5F0E8', transition: 'border-color .2s, background .2s' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#7A8C6E'; (e.currentTarget as HTMLElement).style.background = '#EDE8DF'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#C8C0B4'; (e.currentTarget as HTMLElement).style.background = '#F5F0E8'; }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Formulario → WhatsApp */}
          <div ref={r2} style={{ flex: '1 1 380px', minWidth: 300, background: '#EDE8DF', border: '1px solid #C8C0B4', padding: 'clamp(28px,3.5vw,44px)', opacity: 0, transform: 'translateY(24px)', transition: 'opacity .8s ease .1s, transform .8s cubic-bezier(0.25,0.46,0.45,0.94) .1s' }}>
            {sent ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: 380, gap: 18 }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#7A8C6E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" /><path d="M8 12.5l2.5 2.5 5-5.5" />
                </svg>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: 30, margin: 0 }}>¡Gracias por escribirnos!</h3>
                <p style={{ fontSize: 15, color: '#5a564d', lineHeight: 1.6, margin: 0, maxWidth: 320 }}>
                  Tu mensaje fue enviado por WhatsApp. Te responderemos a la brevedad.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span style={labelCapStyle}>Nombre completo</span>
                    <input name="nombre" type="text" required placeholder="Tu nombre" value={form.nombre} onChange={handleChange} style={inputStyle} />
                  </label>
                  <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span style={labelCapStyle}>Empresa / Organización</span>
                    <input name="empresa" type="text" placeholder="Nombre de tu empresa" value={form.empresa} onChange={handleChange} style={inputStyle} />
                  </label>
                  <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span style={labelCapStyle}>Correo electrónico</span>
                    <input name="correo" type="email" required placeholder="correo@empresa.com" value={form.correo} onChange={handleChange} style={inputStyle} />
                  </label>
                  <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span style={labelCapStyle}>Teléfono</span>
                    <input name="telefono" type="tel" placeholder="+52 (984) 000-0000 — opcional" value={form.telefono} onChange={handleChange} style={inputStyle} />
                  </label>
                  <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span style={labelCapStyle}>Mensaje</span>
                    <textarea name="mensaje" rows={4} required placeholder="¿En qué podemos ayudarte?" value={form.mensaje} onChange={handleChange} style={{ ...inputStyle, resize: 'vertical' }} />
                  </label>
                  <button type="submit" className="btn-slide-green" style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 500, fontSize: 14, letterSpacing: '.04em', padding: '16px 28px', border: '1px solid #1C1C1C', borderRadius: 2, color: '#1C1C1C', justifyContent: 'center', gap: 10 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                    Enviar por WhatsApp
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
