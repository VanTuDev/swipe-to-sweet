"use client"

import { useState } from "react"
import { ArrowLeft, Send, Heart, Smile, ImageIcon, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

interface MessageInterfaceProps {
   club: any
   onBack: () => void
}

export default function MessageInterface({ club, onBack }: MessageInterfaceProps) {
   const [message, setMessage] = useState("")
   const [messages, setMessages] = useState([
      {
         id: 1,
         text: `Chào bạn! Cảm ơn bạn đã quan tâm đến ${club.name}! 💖`,
         sender: "club",
         time: "14:30",
      },
      {
         id: 2,
         text: "Bạn có muốn tìm hiểu thêm về hoạt động của CLB không?",
         sender: "club",
         time: "14:31",
      },
   ])

   const handleSend = () => {
      if (message.trim()) {
         const newMessage = {
            id: messages.length + 1,
            text: message,
            sender: "user",
            time: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }),
         }
         setMessages([...messages, newMessage])
         setMessage("")

         // Auto reply
         setTimeout(() => {
            const autoReply = {
               id: messages.length + 2,
               text: "Cảm ơn bạn đã nhắn tin! Chúng mình sẽ phản hồi sớm nhất có thể 😊",
               sender: "club",
               time: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }),
            }
            setMessages((prev) => [...prev, autoReply])
         }, 1000)
      }
   }

   return (
      <div className="min-h-screen bg-gradient-to-br from-pink-400 via-pink-300 to-orange-300 flex flex-col">
         {/* Header */}
         <div className="bg-white/90 backdrop-blur-sm border-b border-pink-200 p-4">
            <div className="flex items-center space-x-4">
               <Button variant="ghost" size="sm" onClick={onBack} className="text-pink-600 hover:bg-pink-50">
                  <ArrowLeft className="w-5 h-5" />
               </Button>

               <div className="flex items-center space-x-3 flex-1">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-pink-300">
                     <img src={club.image || "/placeholder.svg"} alt={club.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                     <h2 className="font-bold text-gray-800">{club.name}</h2>
                     <p className="text-sm text-green-500">● Đang hoạt động</p>
                  </div>
               </div>

               <Button variant="ghost" size="sm" className="text-pink-600 hover:bg-pink-50">
                  <Heart className="w-5 h-5" />
               </Button>
            </div>
         </div>

         {/* Messages */}
         <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            {messages.map((msg) => (
               <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] ${msg.sender === "user" ? "order-2" : "order-1"}`}>
                     <Card
                        className={`rounded-2xl border-0 shadow-md ${msg.sender === "user" ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white" : "bg-white"
                           }`}
                     >
                        <CardContent className="p-3">
                           <p className="text-sm">{msg.text}</p>
                           <p className={`text-xs mt-1 ${msg.sender === "user" ? "text-white/70" : "text-gray-500"}`}>
                              {msg.time}
                           </p>
                        </CardContent>
                     </Card>
                  </div>

                  {msg.sender === "club" && (
                     <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-pink-300 mr-2 order-1 flex-shrink-0">
                        <img src={club.image || "/placeholder.svg"} alt={club.name} className="w-full h-full object-cover" />
                     </div>
                  )}
               </div>
            ))}
         </div>

         {/* Quick Replies */}
         <div className="p-4 pt-0">
            <div className="flex space-x-2 mb-4 overflow-x-auto">
               {["Xin chào! 👋", "Tôi muốn tham gia CLB", "Lịch hoạt động như thế nào?", "Có cần kinh nghiệm không?"].map(
                  (quickReply, index) => (
                     <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="whitespace-nowrap rounded-full border-pink-300 text-pink-600 hover:bg-pink-50 text-xs bg-transparent"
                        onClick={() => setMessage(quickReply)}
                     >
                        {quickReply}
                     </Button>
                  ),
               )}
            </div>
         </div>

         {/* Input */}
         <div className="bg-white/90 backdrop-blur-sm border-t border-pink-200 p-4">
            <div className="flex items-center space-x-3">
               <Button variant="ghost" size="sm" className="text-pink-600 hover:bg-pink-50">
                  <ImageIcon className="w-5 h-5" />
               </Button>

               <div className="flex-1 relative">
                  <Input
                     value={message}
                     onChange={(e) => setMessage(e.target.value)}
                     placeholder="Nhập tin nhắn..."
                     className="rounded-full border-pink-300 focus:border-pink-500 pr-12"
                     onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  />
                  <Button
                     variant="ghost"
                     size="sm"
                     className="absolute right-1 top-1/2 transform -translate-y-1/2 text-pink-600 hover:bg-pink-50"
                  >
                     <Smile className="w-4 h-4" />
                  </Button>
               </div>

               <Button variant="ghost" size="sm" className="text-pink-600 hover:bg-pink-50">
                  <Mic className="w-5 h-5" />
               </Button>

               <Button
                  size="sm"
                  className="rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
                  onClick={handleSend}
               >
                  <Send className="w-4 h-4" />
               </Button>
            </div>
         </div>
      </div>
   )
}
