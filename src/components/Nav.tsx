import { useEffect, useRef, useState } from 'react';
import laranLogo from '../assets/laran-logo.png';

const LINKS = [
  { label: 'Inicio',      href: '#inicio' },
  { label: 'Nosotros',    href: '#nosotros' },
  { label: 'Servicios',   href: '#servicios' },
  { label: 'Testimonios', href: '#testimonios' },
];

export function Nav() {
  const navRef  = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navH,    setNavH]    = useState(78);

  // Frosted-glass scroll effect
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const onScroll = () => {
      if (window.scrollY > 80) {
        nav.style.background = 'rgba(245,240,232,0.88)';
        nav.style.backdropFilter = 'blur(10px)';
        (nav.style as CSSStyleDeclaration & { webkitBackdropFilter: string }).webkitBackdropFilter = 'blur(10px)';
        nav.style.boxShadow = '0 1px 0 #C8C0B4, 0 2px 12px rgba(28,28,28,0.06)';
      } else {
        nav.style.background = 'transparent';
        nav.style.backdropFilter = 'none';
        (nav.style as CSSStyleDeclaration & { webkitBackdropFilter: string }).webkitBackdropFilter = 'none';
        nav.style.boxShadow = 'none';
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track nav height for mobile panel positioning
  useEffect(() => {
    const update = () => setNavH(navRef.current?.offsetHeight ?? 78);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Auto-close menu on desktop resize
  useEffect(() => {
    const check = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav
        ref={navRef}
        className="nav-entrance"
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, transition: 'background .3s ease, box-shadow .3s ease' }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '16px clamp(20px,5vw,48px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>

          {/* Logo */}
          <a href="#inicio" onClick={close} style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', color: '#1C1C1C', flexShrink: 0 }}>
            <img src={laranLogo} alt="LARAN" style={{ width: 46, height: 46, objectFit: 'contain' }} />
            <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: 22, letterSpacing: '.14em' }}>LARAN</span>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 8.5, fontWeight: 500, letterSpacing: '.26em', textTransform: 'uppercase', color: '#7A8C6E', marginTop: 3 }}>
                Consultoría Organizacional
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="nav-links">
            {LINKS.map(l => (
              <a key={l.label} href={l.href} style={{ fontSize: 14, fontWeight: 400, color: '#1C1C1C', textDecoration: 'none', letterSpacing: '.02em' }}>
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="btn-slide-green"
              style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 500, fontSize: 13.5, letterSpacing: '.04em', padding: '11px 22px', border: '1px solid #1C1C1C', borderRadius: 2, color: '#1C1C1C', gap: 8 }}
            >
              Contáctanos
            </a>
          </div>

          {/* Hamburger button (visible ≤768px) */}
          <button
            className={`hamburger-btn${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            <span className="hb" />
            <span className="hb" />
            <span className="hb" />
          </button>

        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} style={{ top: navH }}>
        {LINKS.map(l => (
          <a key={l.label} href={l.href} className="mobile-link" onClick={close}>
            {l.label}
          </a>
        ))}
        <a href="#contacto" className="mobile-link cta" onClick={close}>
          Contáctanos
        </a>
      </div>

      {/* Backdrop overlay */}
      {menuOpen && <div className="mobile-overlay" onClick={close} />}
    </>
  );
}
