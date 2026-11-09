# AGENTS

- Chatbot AI: `supabase/functions/chatbot-emperatriz` (edge function) streams via `streamChatCompletion` (`@lovable.dev/ai-gateway`, model `openai/gpt-6-astra`); `src/components/ChatBot.tsx` calls it with a plain fetch to `https://<VITE_SUPABASE_PROJECT_ID>.supabase.co/functions/v1/chatbot-emperatriz` and parses `data:` SSE frames. System prompt (not the UI) holds all official bio/CV content — update the prompt and redeploy when info changes.
- Assistant responses must be plain text: the chat UI renders no markdown.
- Keep exact GEOGLOBAL replies and language selection in the function-local agent-policy.mjs, covered by executable tests; append the bilingual closing on the server so mandatory replies do not depend on model generation.
- Keep the About presentation in the standalone PersonalProfile component, with scoped semantic CSS tokens, so profile-only design changes do not restyle the contact details.
- Only the space portfolio is served at `/`, `/index` and `/portafolio`; keep Personal and PersonalProfile unimported from the public application so private presentation and WhatsApp are excluded from its bundle. No authenticated personal area is implemented.
