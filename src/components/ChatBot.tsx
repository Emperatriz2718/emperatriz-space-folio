
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const CHATBOT_URL = "https://copilotstudio.microsoft.com/environments/Default-6ca34ae1-466f-44bc-a7aa-0ac5a78c61b1/bots/cr3a3_undefinedNameOfAgentsFunctionality/webchat?__version__=2";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 h-96 bg-card border border-space-stellar rounded-2xl shadow-2xl stellar-glow animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between p-3 bg-gradient-to-r from-space-cosmic to-space-nebula rounded-t-2xl relative z-10">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-space-gold rounded-full animate-pulse"></div>
              <div>
                <h3 className="text-white font-orbitron font-semibold text-sm">
                  Asistente Espacial
                </h3>
                <p className="text-space-gold text-xs">En línea</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:text-space-gold transition-colors duration-200 p-1 hover:bg-white/10 rounded-full flex-shrink-0"
              aria-label="Cerrar chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Chat Content - Microsoft Copilot Studio iframe */}
          <div className="h-[calc(100%-60px)] rounded-b-2xl overflow-hidden">
            <iframe 
              src={CHATBOT_URL}
              className="w-full h-full border-0 rounded-b-2xl"
              title="Asistente Espacial de Emperatriz Morales"
              allow="microphone"
            />
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <button
        onClick={toggleChat}
        className={`w-14 h-14 bg-gradient-to-r from-space-aurora to-space-stellar hover:from-space-stellar hover:to-space-aurora text-white rounded-full shadow-2xl stellar-glow transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'rotate-180' : 'animate-float'
        }`}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <MessageCircle size={24} />
        )}
      </button>

      {/* Notification Dot */}
      {!isOpen && (
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-space-gold rounded-full animate-pulse border-2 border-space-deep"></div>
      )}
    </div>
  );
};

export default ChatBot;
