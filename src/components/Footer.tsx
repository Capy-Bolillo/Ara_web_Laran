import { useReveal } from '../hooks/useReveal';
import laranLogo from '../assets/laran-logo.png';

const WA_NUMBER = '529841650578';

export function Footer() {
  const ref = useReveal();

  return (
    <footer style={{ background: '#1C1C1C', color: '#F5F0E8' }}>
      <div
        ref={ref}
        style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(56px,7vw,80px) clamp(20px,5vw,48px) clamp(28px,4vw,40px)', opacity: 0, transform: 'translateY(24px)', transition: 'opacity .8s ease, transform .8s cubic-bezier(0.25,0.46,0.45,0.94)' }}
      >

        <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start' }}>

          {/* Marca */}
          <div style={{ flex: '1 1 320px', minWidth: 260 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
              <span style={{ width: 54, height: 54, borderRadius: '50%', background: '#F5F0E8', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                <img src={laranLogo} alt="LARAN" style={{ width: 46, height: 46, objectFit: 'contain' }} />
              </span>
              <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: 26, letterSpacing: '.14em' }}>LARAN</span>
                <span style={{ fontSize: 8.5, fontWeight: 500, letterSpacing: '.26em', textTransform: 'uppercase', color: '#9aa18f', marginTop: 4 }}>Consultoría Organizacional</span>
              </span>
            </div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 22, fontWeight: 300, color: '#e8e1d4', margin: '0 0 24px', maxWidth: 340 }}>
              Impulsamos el cambio, potenciamos resultados.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              <a href="https://www.instagram.com/laran_consultoria?igsh=M20wZzhpaWJjZXp2&utm_source=qr" target="_blank" rel="noreferrer" title="Instagram" style={{ width: 36, height: 36, borderRadius: 2, border: '1px solid #3a3a36', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9aa18f" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r=".6" fill="#9aa18f" stroke="none" /></svg>
              </a>
              <a href="https://www.tiktok.com/@consultorialaran?_r=1&_t=ZS-97b1FgzamVZ" target="_blank" rel="noreferrer" title="TikTok" style={{ width: 36, height: 36, borderRadius: 2, border: '1px solid #3a3a36', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9aa18f" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61591136415755" target="_blank" rel="noreferrer" title="Facebook" style={{ width: 36, height: 36, borderRadius: 2, border: '1px solid #3a3a36', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9aa18f" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div style={{ flex: '0 1 auto' }}>
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', color: '#9aa18f', marginBottom: 18 }}>Navegación</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Inicio', 'Nosotros', 'Servicios', 'Testimonios', 'Contacto'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} style={{ fontSize: 14, color: '#e8e1d4', textDecoration: 'none' }}>{item}</a>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div style={{ flex: '0 1 auto' }}>
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', color: '#9aa18f', marginBottom: 18 }}>Contacto</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14, color: '#e8e1d4' }}>
              <a href="mailto:consultorialaran93@gmail.com" style={{ color: '#e8e1d4', textDecoration: 'none' }}>consultorialaran93@gmail.com</a>
              <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer" style={{ color: '#e8e1d4', textDecoration: 'none' }}>984 165 0578</a>
              <span>Playa del Carmen, Q. Roo, México</span>
            </div>
          </div>

        </div>

        <div style={{ borderTop: '1px solid #3a3a36', marginTop: 'clamp(40px,5vw,56px)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: 12.5, color: '#8c8c84' }}>© 2026 Consultoría LARAN. Todos los derechos reservados.</span>
          <span style={{ fontSize: 12.5, color: '#8c8c84' }}>Hecho con cuidado en Playa del Carmen.</span>
        </div>

      </div>
    </footer>
  );
}
