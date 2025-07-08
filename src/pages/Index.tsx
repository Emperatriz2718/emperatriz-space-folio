
import Header from '@/components/Header';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-space-deep">
      <Header />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-4 bg-space-cosmic border-t border-space-stellar">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Emperatriz Morales. Todos los derechos reservados.
          </p>
          <p className="text-space-gold font-orbitron text-sm mt-2">
            "Enfocada en la exploración interplanetaria"
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
