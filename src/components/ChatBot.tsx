import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '¡Hola! Soy el asistente virtual de Emperatriz Morales. Puedo responder preguntas sobre su experiencia en Derecho Espacial, sus proyectos como AIGLE-HAWK Alliance, la Base Lunar Cráter Shackleton, y sus objetivos en exploración interplanetaria. ¿En qué puedo ayudarte?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('chat-emperatriz', {
        body: { messages: [...messages, userMessage] }
      });

      if (error) throw error;

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.choices[0].message.content
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Por favor, intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-96 h-[600px] bg-space-cosmic/95 backdrop-blur-sm border border-space-stellar rounded-2xl shadow-2xl stellar-glow animate-scale-in flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-space-cosmic to-space-nebula rounded-t-2xl border-b border-space-stellar">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-space-gold rounded-full animate-pulse"></div>
              <div>
                <h3 className="text-white font-orbitron font-semibold text-sm">
                  Asistente AIGLE-HAWK
                </h3>
                <p className="text-space-gold text-xs">En línea</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:text-space-gold transition-colors duration-200 p-1 hover:bg-white/10 rounded-full"
              aria-label="Cerrar chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-space-aurora to-space-stellar text-white'
                      : 'bg-space-deep/80 text-gray-200 border border-space-stellar'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-space-deep/80 text-gray-200 border border-space-stellar p-3 rounded-lg">
                  <Loader2 className="w-5 h-5 animate-spin text-space-gold" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-space-stellar bg-space-cosmic/50">
            <div className="flex space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Pregunta sobre Emperatriz o AIGLE-HAWK..."
                disabled={isLoading}
                className="flex-1 bg-space-deep border-space-stellar text-white placeholder:text-gray-400 focus:border-space-aurora"
              />
              <Button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-r from-space-aurora to-space-stellar hover:from-space-stellar hover:to-space-aurora"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send size={18} />
                )}
              </Button>
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
