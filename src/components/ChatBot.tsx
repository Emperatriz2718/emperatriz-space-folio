import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MessageCircle, X, Send, Sparkles, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID as string;
const CHATBOT_URL = `https://${projectId}.supabase.co/functions/v1/chatbot-emperatriz`;

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
  time: string;
};

const WELCOME: ChatMessage = {
  role: 'assistant',
  content:
    'Hello, I am Agent Emperatriz Morales. Ask me about the 8 GEOGLOBAL points.\n\nHUMANO DECIDE. IA PROPONE. PAZ Y ARMONÍA. / HUMAN DECIDES. AI PROPOSES. PEACE AND HARMONY.',
  time: '',
};

const SUGGESTIONS = [
  'GEOGLOBAL: 8 points',
  'Neutrino — 2028',
  'Lunar Base — 2030',
  'Mars / Colonization — 2036',
];

const formatTime = () =>
  new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([{ ...WELCOME, time: formatTime() }]);
  const [input, setInput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    });
  }, []);

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isStreaming, isOpen, scrollToBottom]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isStreaming) return;

    setError(null);
    setInput('');
    const userMessage: ChatMessage = { role: 'user', content: trimmed, time: formatTime() };
    const assistantId = messages.length + 1;
    setMessages((prev) => [
      ...prev,
      userMessage,
      { role: 'assistant', content: '', time: formatTime() },
    ]);
    setIsStreaming(true);

    try {
      const history = [...messages, userMessage].map(({ role, content }) => ({ role, content }));
      const response = await fetch(CHATBOT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      });

      if (!response.ok || !response.body) {
        throw new Error('network');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() ?? '';
        for (const line of lines) {
          if (!line.startsWith('data:')) continue;
          const payload = line.slice(5).trim();
          if (!payload) continue;
          try {
            const data = JSON.parse(payload);
            if (typeof data.t === 'string' && data.t.length > 0) {
              setMessages((prev) =>
                prev.map((msg, i) =>
                  i === assistantId ? { ...msg, content: msg.content + data.t } : msg
                )
              );
            } else if (typeof data.error === 'string') {
              setError(data.error);
            }
          } catch {
            // ignore malformed frames
          }
        }
      }
    } catch {
      setError('Unable to connect to the assistant. Check your connection and try again.');
    } finally {
      setIsStreaming(false);
    }
  };

  const resetChat = () => {
    if (isStreaming) return;
    setMessages([{ ...WELCOME, time: formatTime() }]);
    setError(null);
    setInput('');
  };

  const suggestionsVisible =
    messages.length === 1 && !isStreaming;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[min(92vw,24rem)] h-[min(78vh,34rem)] flex flex-col bg-card border border-space-stellar rounded-2xl shadow-2xl stellar-glow animate-scale-in overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-space-cosmic to-space-nebula border-b border-space-stellar">
            <div className="flex items-center space-x-3 min-w-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-space-aurora to-space-stellar flex items-center justify-center shrink-0 stellar-glow">
                <span className="text-xs font-orbitron font-bold text-white">EM</span>
              </div>
              <div className="min-w-0">
                <h3 className="text-foreground font-orbitron font-semibold text-sm leading-snug break-words">
                  Agente Emperatriz Morales
                </h3>
                <p className="text-space-gold text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-space-gold rounded-full animate-pulse inline-block" />
                  {isStreaming ? 'Typing…' : 'AI online'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-1 shrink-0">
              <Button variant="ghost"
                onClick={resetChat}
                title="New conversation"
                aria-label="New conversation"
                className="p-2 rounded-full text-white/80 hover:text-space-gold hover:bg-white/10 transition-colors duration-200"
              >
                <RotateCcw size={16} />
              </Button>
              <Button variant="ghost"
                onClick={() => setIsOpen(false)}
                title="Close chat"
                aria-label="Close chat"
                className="p-2 rounded-full text-white/80 hover:text-space-gold hover:bg-white/10 transition-colors duration-200"
              >
                <X size={18} />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-space-deep/60">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap break-words ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-space-aurora to-space-stellar text-white rounded-br-sm'
                      : 'bg-space-cosmic/80 border border-space-stellar text-gray-100 rounded-bl-sm'
                  }`}
                >
                  {message.content}
                  {message.time && (
                    <span
                      className={`block mt-1 text-[10px] ${
                        message.role === 'user' ? 'text-white/70' : 'text-gray-500'
                      }`}
                    >
                      {message.time}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {isStreaming &&
              messages[messages.length - 1]?.content === '' && (
                <div className="flex justify-start">
                  <div className="bg-space-cosmic/80 border border-space-stellar rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-space-aurora rounded-full animate-bounce [animation-delay:0ms]" />
                    <span className="w-2 h-2 bg-space-stellar rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-2 h-2 bg-space-gold rounded-full animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              )}

            {error && (
              <div className="text-center text-xs text-red-300 bg-red-500/10 border border-red-500/30 rounded-xl px-3 py-2">
                {error}
              </div>
            )}

            {suggestionsVisible && (
              <div className="space-y-2 pt-2">
                <p className="text-[11px] uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
                  <Sparkles size={12} className="text-space-gold" /> Suggested questions
                </p>
                {SUGGESTIONS.map((suggestion) => (
                  <Button variant="ghost"
                    key={suggestion}
                    onClick={() => sendMessage(suggestion)}
                    className="w-full text-left text-xs px-3 py-2 rounded-xl bg-space-cosmic/60 border border-space-stellar text-gray-200 hover:border-space-aurora hover:text-white transition-all duration-200"
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-space-stellar bg-space-cosmic/70">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question…"
                aria-label="Type your question"
                maxLength={2000}
                disabled={isStreaming}
                className="flex-1 min-w-0 bg-space-deep/80 border border-space-stellar rounded-full px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-space-aurora transition-colors disabled:opacity-50"
              />
              <Button variant="ghost"
                type="submit"
                disabled={!input.trim() || isStreaming}
                aria-label="Send message"
                className="w-10 h-10 shrink-0 rounded-full bg-gradient-to-r from-space-aurora to-space-stellar text-white flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity disabled:opacity-40"
              >
                <Send size={16} />
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <Button variant="ghost"
        onClick={() => setIsOpen((v) => !v)}
        title={isOpen ? 'Close chat' : 'Open assistant chat'}
        aria-label={isOpen ? 'Close chat' : 'Open assistant chat'}
        className={`w-14 h-14 bg-gradient-to-r from-space-aurora to-space-stellar hover:from-space-stellar hover:to-space-aurora text-white rounded-full shadow-2xl stellar-glow transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'rotate-180' : 'animate-float'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>

      {/* Notification Dot */}
      {!isOpen && (
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-space-gold rounded-full animate-pulse border-2 border-space-deep" />
      )}
    </div>
  );
};

export default ChatBot;
