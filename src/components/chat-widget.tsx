"use client"

import { useEffect, useRef, useState } from "react"

type Msg = { role: "user" | "assistant"; content: string }

export default function ChatWidget() {
   const [open, setOpen] = useState(false)
   const [messages, setMessages] = useState<Msg[]>([{
      role: "assistant",
      content: "Chào bạn! Hãy mô tả sở thích/ngành học/khung giờ để mình gợi ý CLB phù hợp nhé."
   }])
   const [input, setInput] = useState("")
   const sendingRef = useRef(false)
   const scrollRef = useRef<HTMLDivElement>(null)

   useEffect(() => {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
   }, [messages])

   // Render markdown đơn giản: **bold** và xuống dòng \n
   const renderContent = (text: string) => {
      const nodes: any[] = []
      const parts = text.split(/(\*\*[^*]+?\*\*)/g)
      parts.forEach((part, i) => {
         if (/^\*\*[^*]+?\*\*$/.test(part)) {
            nodes.push(<strong key={`b-${i}`}>{part.slice(2, -2)}</strong>)
         } else {
            const lines = part.split('\n')
            lines.forEach((line, j) => {
               nodes.push(<span key={`t-${i}-${j}`}>{line}</span>)
               if (j < lines.length - 1) nodes.push(<br key={`br-${i}-${j}`} />)
            })
         }
      })
      return nodes
   }

   const send = async () => {
      if (!input.trim() || sendingRef.current) return
      sendingRef.current = true
      const newMsg: Msg = { role: "user", content: input }
      setMessages(prev => [...prev, newMsg])
      setInput("")
      try {
         const res = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ messages: [...messages, newMsg].slice(-8) })
         })
         const data = await res.json()
         setMessages(prev => [...prev, { role: "assistant", content: data.text ?? "Mình chưa nhận được câu trả lời." }])
      } catch (e) {
         setMessages(prev => [...prev, { role: "assistant", content: "Có lỗi xảy ra. Bạn thử lại nhé." }])
      } finally {
         sendingRef.current = false
      }
   }

   return (
      <>
         {!open && (
            <button
               onClick={() => setOpen(true)}
               className="fixed bottom-4 right-4 z-50 rounded-full bg-slate-400 text-black w-14 h-14 shadow-xl"
               aria-label="Mở chat tư vấn CLB"
            >
               BOT CHAT AI
            </button>
         )}

         {open && (
            <div className="fixed bottom-4 right-4 z-50 w-[320px] max-w-[90vw] rounded-2xl shadow-2xl overflow-hidden border bg-white">
               <div className="flex items-center justify-between bg-pink-600 text-white px-3 py-2">
                  <span className="font-semibold">Tư vấn CLB (AI)</span>
                  <button onClick={() => setOpen(false)} aria-label="Đóng">✕</button>
               </div>

               <div ref={scrollRef} className="h-[360px] max-h-[60vh] overflow-y-auto p-3 space-y-2 bg-neutral-50">
                  {messages.map((m, i) => (
                     <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                        <div className={`inline-block rounded-2xl px-3 py-2 text-sm ${m.role === "user" ? "bg-pink-600 text-white" : "bg-white text-gray-800 border"}`}>
                           {renderContent(m.content)}
                        </div>
                     </div>
                  ))}
               </div>

               <div className="p-2 flex gap-2 border-t bg-white">
                  <input
                     value={input}
                     onChange={(e) => setInput(e.target.value)}
                     onKeyDown={(e) => e.key === "Enter" && send()}
                     placeholder="Nhập câu hỏi về CLB..."
                     className="flex-1 border rounded-xl px-3 py-2 text-sm outline-none"
                  />
                  <button onClick={send} className="bg-pink-600 text-white px-3 py-2 rounded-xl text-sm">Gửi</button>
               </div>
            </div>
         )}
      </>
   )
}


