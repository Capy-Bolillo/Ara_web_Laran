import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Nosotros } from './components/Nosotros';
import { Servicios } from './components/Servicios';
import { Testimonios } from './components/Testimonios';
import { Contacto } from './components/Contacto';
import { Footer } from './components/Footer';

function App() {
  return (
    <div style={{ background: '#F5F0E8', overflowX: 'hidden' }}>
      <Nav />
      <Hero />
      <Nosotros />
      <Servicios />
      <Testimonios />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
