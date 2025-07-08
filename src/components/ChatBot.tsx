
import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Aquí se integraría con el chatbot de Microsoft
      console.log('Mensaje enviado:', message);
      setMessage('');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 h-96 bg-card border border-space-stellar rounded-2xl shadow-2xl stellar-glow animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-space-cosmic to-space-nebula rounded-t-2xl">
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
              className="text-white hover:text-space-gold transition-colors duration-200"
            >
              <X size={20} />
            </button>
          </div>

          {/* Chat Content */}
          <div className="flex flex-col h-full">
            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto bg-space-deep/50">
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-space-aurora to-space-stellar rounded-full flex items-center justify-center">
                    <MessageCircle size={16} className="text-white" />
                  </div>
                  <div className="bg-card border border-space-stellar rounded-lg p-3 max-w-xs">
                    <p className="text-foreground text-sm">
                      ¡Hola! Soy el asistente de Emperatriz Morales. ¿En qué puedo ayudarte con información sobre exploración espacial, derecho internacional o sus proyectos?
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-space-stellar bg-card/80">
              <form onSubmit={handleSendMessage} className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 bg-space-deep/50 border border-space-stellar rounded-lg px-3 py-2 text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-space-aurora text-sm"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-space-aurora to-space-stellar hover:from-space-stellar hover:to-space-aurora text-white p-2 rounded-lg transition-all duration-200 stellar-glow"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
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
