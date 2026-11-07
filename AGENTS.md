# AGENTS

- Chatbot AI: `supabase/functions/chatbot-emperatriz` (edge function) streams via `streamChatCompletion` (`@lovable.dev/ai-gateway`, model `openai/gpt-6-astra`); `src/components/ChatBot.tsx` calls it with a plain fetch to `https://<VITE_SUPABASE_PROJECT_ID>.supabase.co/functions/v1/chatbot-emperatriz` and parses `data:` SSE frames. System prompt (not the UI) holds all official bio/CV content — update the prompt and redeploy when info changes.
- Assistant responses must be plain text: the chat UI renders no markdown.
- Keep the About presentation in the standalone PersonalProfile component, with scoped semantic CSS tokens, so profile-only design changes do not restyle the contact details.
- The site has two pages: the Spanish black-and-gold personal page at `/` (`src/pages/Personal.tsx`, scoped `--noir-*` tokens in `index.css`) and the English space portfolio at `/portafolio` (`src/pages/Index.tsx`, space theme). Keep each theme's tokens scoped so neither page restyles the other.
