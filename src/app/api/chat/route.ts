import { NextRequest } from "next/server"
import { GoogleGenerativeAI } from "@google/generative-ai"
import { clubs } from "@/data/clubs"

const apiKey = process.env.GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(apiKey || "")
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

export async function POST(req: NextRequest) {
   try {
      if (!apiKey) {
         console.warn("[chat API] Missing GEMINI_API_KEY in environment variables")
         return new Response(JSON.stringify({ error: "Missing GEMINI_API_KEY on server" }), { status: 500 })
      }
      const body = await req.json()
      const messages = (body?.messages || []) as Array<{ role: "user" | "assistant"; content: string }>

      const clubsSummary = clubs.slice(0, 80).map(c => `- ${c.name}: lĩnh vực ${c.field}. ${c.shortIntro || ""}`).join("\n")
      const systemPrompt = [
         "Bạn là trợ lý tư vấn CLB cho học sinh FPTU. Trả lời tiếng Việt, gọn rõ, có bullet.",
         "Mục tiêu: gợi ý 1-3 CLB phù hợp dựa trên sở thích/ngành học/thời gian/định hướng.",
         "Nếu người dùng mơ hồ, hỏi lại 1-2 câu để làm rõ.",
         "Khi gợi ý, kèm lý do ngắn và gợi ý thao tác như: 'Gõ: xem chi tiết <tên CLB>'.",
         "Dữ liệu CLB:",
         clubsSummary,
      ].join("\n")

      const contents = [
         { role: "user", parts: [{ text: systemPrompt }] },
         ...messages.map(m => ({ role: m.role, parts: [{ text: m.content }] })),
      ] as any

      const result = await model.generateContent({
         contents,
         generationConfig: { temperature: 0.6, maxOutputTokens: 800 },
      })
      const text = result.response.text()
      return new Response(JSON.stringify({ text }), { headers: { "Content-Type": "application/json" } })
   } catch (err) {
      console.error("/api/chat error", err)
      return new Response(JSON.stringify({ error: "Chat API error" }), { status: 500 })
   }
}


