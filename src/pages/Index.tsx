
import Header from '@/components/Header';
import StudiesExpertise from '@/components/StudiesExpertise';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import NeutrinoCommunication from '@/components/NeutrinoCommunication';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import ChatBot from '@/components/ChatBot';

const Index = () => {
  return (
    <div className="min-h-screen bg-space-deep">
      <Header />
      <StudiesExpertise />
      <Education />
      <Experience />
      <Projects />
      <NeutrinoCommunication />
      <Skills />
      <Contact />
      
      {/* ChatBot flotante */}
      <ChatBot />
      
       {/* Footer */}
       <footer className="py-8 px-4 bg-space-cosmic border-t border-space-stellar">
         <div className="container mx-auto text-center">
           <div className="flex items-center justify-center space-x-5 mb-5">
             <a
               href="https://www.instagram.com/emperatriz_1827/"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Instagram @emperatriz_1827"
               className="p-3 bg-space-deep rounded-full hover:bg-space-aurora transition-colors stellar-glow"
             >
               <Instagram className="w-5 h-5 text-white" />
             </a>
             <a
               href="https://www.facebook.com/share/19ckpqLRcz/"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Facebook Cuenta Oficial Verificada - Emperatriz Morales"
               title="Facebook Cuenta Oficial Verificada - Emperatriz Morales ✅"
               className="relative p-3 bg-space-deep rounded-full hover:bg-space-stellar transition-colors stellar-glow"
             >
               <Facebook className="w-5 h-5 text-white" />
               <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#1877F2] flex items-center justify-center border border-space-deep">
                 <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
               </span>
             </a>
           </div>
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
