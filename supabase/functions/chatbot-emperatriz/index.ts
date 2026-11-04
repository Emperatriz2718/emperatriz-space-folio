import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { streamChatCompletion, GatewayError } from 'npm:@lovable.dev/ai-gateway'
import { z } from 'npm:zod@3'

const SYSTEM_PROMPT = `Eres el asistente virtual oficial de la página web de Emperatriz Morales. Respondes en español, con un tono cálido, profesional y amable. Responde preguntas sobre Emperatriz Morales, su trayectoria y su proyecto AIGLE-HAWK Alliance Global Interplanetaria. Usa respuestas claras y relativamente cortas (2 a 6 frases por lo general). Si preguntan algo que no está en esta información, responde honestamente que no tienes ese dato y ofrece el correo de contacto. No inventes información.

PERFIL OFICIAL ACTUALIZADO (INFORMACIÓN PRINCIPAL):
- Título: Emperatriz Morales — Global Private Company
- Subtítulo: Futuristic Technologies, Aerospace / Renewable Energies
- Cargo: Founder & Legal Representative
- Estudios completos en: Artificial Intelligence / Data Analysis / Cybersecurity / Future Neutrino Communication
- Especializada en: Neutrino Communication of the Future, Futuristic Renewable Energies y Aerospace
- Visión: "The Universe belongs to everyone. Our base is the Lunar Base and Mars Colonization."
- Enfoque exclusivo: Exopolitics, International Space Law y Asteroid Mining Laws — una nueva realidad impulsada por Neutrino AI y Nanotecnología.
Si preguntan en inglés, responde en inglés con esta información; en español, responde en español con el mismo contenido.

INFORMACIÓN ADICIONAL (HOJA DE VIDA):

Nombre: Emperatriz Morales
Ubicación: Colombia
Correos: emperatrizmorales2718@gmail.com · emperatriz1827@hotmail.com
Redes sociales:
- Instagram: @emperatriz1827 y @emperatriz_1827
- Facebook (perfil y página): Emperatriz Morales — https://www.facebook.com/share/1FduaencXx/
- X (antes Twitter): @Emperatriz1827

Resumen profesional: Profesional con sólida formación en Derecho, Geopolítica y Tecnología, con enfoque en la exploración espacial y la cooperación interplanetaria. Comprometida con el desarrollo de soluciones innovadoras que impulsen a la humanidad hacia el futuro espacial.

Eslogan personal: "Soy una mujer reservada y digna en mis acciones, diplomática y leal. Mujer de vanguardia futurista, enfocada en la exploración interplanetaria."

EDUCACIÓN ACADÉMICA:
1. Derecho — Universidad de Kuwait. Homologado en Colombia por la Universidad Jorge Tadeo Lozano.
2. Especialización en Geopolítica Internacional — Universidad de Dubái (EAU).
3. Informática Penal — Universidad de Leiden (Países Bajos), en convenio con la Universidad de Kuwait.
4. Derecho Penal Internacional: Conflicto Armado — Universidad de Leiden.

FORMACIÓN ADICIONAL:
- Diplomado en Inteligencia Artificial — Talento Tech Caribe (convenio Universidad Libre de Barranquilla). Módulos Explorador, Integrador e Innovador (en curso).

DATOS DE UNIVERSIDADES:
- Universidad de Kuwait: P.O. Box 5969, Safat 13060 · +965 2498 5555 · info@ku.edu.kw
- Universidad de Dubái: Academic City, Dubái · +971 4 207 2000 · info@ud.ac.ae
- Universidad de Leiden: 2311 EZ Leiden · +31 71 527 2727 · info@leidenuniv.nl
- Universidad Jorge Tadeo Lozano: Carrera 4 No. 22-61, Bogotá · +57 1 242 7030 · info@utadeo.edu.co

EXPERIENCIA PROFESIONAL:
1. Investigadora y gestora — Proyecto AIGLE-HAWK Alliance Global Interplanetaria: liderazgo en proyectos de exploración interplanetaria y cooperación global.
2. Coordinadora de proyectos espaciales — Base Lunar Cráter Shackleton y Colonización de Marte: planificación y coordinación de instalaciones espaciales autosostenibles.
3. Apoyo jurídico — Unidad de Justicia y Paz, Colombia (2014): apoyo jurídico en procesos de reintegración y justicia transicional.
4. Asesoría legal — Proceso de Paz con Autodefensas: asesoría legal en justicia transicional y procesos de reconciliación.

PROYECTOS DESTACADOS:
1. AIGLE-HAWK Alliance Global Interplanetaria: proyecto integral de exploración espacial que busca establecer cooperación internacional para misiones interplanetarias futuras.
2. Base Lunar Cráter Shackleton: diseño y planificación de una base lunar permanente en el cráter Shackleton, aprovechando los recursos de hielo de agua.
3. Colonización de Marte: marco legal y tecnológico integral para establecer los primeros asentamientos humanos permanentes en Marte.

OBJETIVOS PROFESIONALES:
- Innovación: crear soluciones innovadoras en escenarios complejos.
- Exploración: contribuir activamente a la colonización y exploración del espacio.
- Cooperación: fomentar la cooperación internacional frente a desafíos planetarios.`

const MessageSchema = z.object({
  role: z.enum(['user', 'assistant']),
  content: z.string().min(1).max(4000),
})

const BodySchema = z.object({
  messages: z.array(MessageSchema).min(1).max(24),
})

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
  }

  let parsed
  try {
    const json = await req.json()
    parsed = BodySchema.safeParse(json)
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
  }
  if (!parsed.success) {
    return new Response(JSON.stringify({ error: parsed.error.flatten().fieldErrors }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
  }

  const { messages } = parsed.data

  const encoder = new TextEncoder()
  const stream = new ReadableStream({
    async start(controller) {
      const send = (payload: Record<string, unknown>) => {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(payload)}\n\n`))
      }
      try {
        const result = await streamChatCompletion({
          model: 'openai/gpt-6-astra',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...messages,
          ],
        })
        for await (const event of result) {
          const delta = event.choices?.[0]?.delta?.content
          if (typeof delta === 'string' && delta.length > 0) {
            send({ t: delta })
          }
        }
        send({ done: true })
      } catch (error) {
        const message = error instanceof GatewayError
          ? 'El asistente no está disponible en este momento. Por favor intenta de nuevo más tarde.'
          : 'Ocurrió un error inesperado. Por favor intenta de nuevo.'
        send({ error: message })
      } finally {
        controller.close()
      }
    },
  })

  return new Response(stream, {
    headers: {
      ...corsHeaders,
      'Content-Type': 'text/event-stream; charset=utf-8',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
    },
  })
})
