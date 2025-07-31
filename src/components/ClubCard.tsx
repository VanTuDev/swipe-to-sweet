"use client"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import { CardContent } from "@/components/ui/card"

export interface Club {
   id: number
   name: string
   field: string
   position: string
   looking: string
   emoji: string
   shortIntro: string
   description: string
   quote: string
   image: string
   members: string
   experience: string
   benefits: string[]
}

interface Props {
   club: Club
   dragOffset: number
   isDragging: boolean
   onDragStart: (clientX: number) => void
   onDragMove: (clientX: number) => void
   onDragEnd: () => void
}

const ClubCard = forwardRef<HTMLDivElement, Props>(
   ({ club, dragOffset, isDragging, onDragStart, onDragMove, onDragEnd }, ref) => {
      const rotation = Math.max(-20, Math.min(20, dragOffset * 0.08))
      const opacity = Math.max(0.5, 1 - Math.abs(dragOffset) * 0.002)

      return (
         <motion.div
            ref={ref}
            className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border-0 cursor-grab active:cursor-grabbing select-none bg-white"
            animate={{ x: dragOffset, rotate: rotation, opacity }}
            transition={{ duration: isDragging ? 0 : 0.3 }}
            onMouseDown={(e) => {
               e.preventDefault()
               onDragStart(e.clientX)
            }}
            onMouseMove={(e) => onDragMove(e.clientX)}
            onMouseUp={onDragEnd}
            onMouseLeave={onDragEnd}
            onTouchStart={(e) => {
               e.preventDefault()
               onDragStart(e.touches[0].clientX)
            }}
            onTouchMove={(e) => {
               e.preventDefault()
               onDragMove(e.touches[0].clientX)
            }}
            onTouchEnd={(e) => {
               e.preventDefault()
               onDragEnd()
            }}
         >
            <CardContent className="p-0 h-full bg-gradient-to-br from-white to-pink-50 animate-in fade-in duration-500">

               {/* Image section */}
               <div className="h-3/5 relative overflow-hidden">
                  <img
                     src={club.image}
                     alt={club.name}
                     className="w-full h-full object-cover"
                     draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  {dragOffset > 60 && (
                     <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm transform rotate-12 shadow-lg">
                        ❤️ THÍCH
                     </div>
                  )}
                  {dragOffset < -60 && (
                     <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm transform -rotate-12 shadow-lg">
                        ❌ BỎ QUA
                     </div>
                  )}
               </div>

               {/* Content section */}
               <div
                  className="h-2/5 p-4 flex flex-col justify-start overflow-y-auto scrollbar-thin scrollbar-thumb-pink-300 scrollbar-track-transparent"
                  style={{ scrollbarWidth: "thin" }}
               >
                  <div className="space-y-3">
                     <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-gray-800">{club.name}</h2>
                     </div>
                     <div className="text-xs text-gray-600 space-y-1">
                        <div>🔹 <b>Lĩnh vực:</b> {club.field}</div>
                        <div>🔹 <b>Vị trí:</b> {club.position}</div>
                        <div>🔹 <b>Đang tìm:</b> <span className="text-pink-600 italic">"{club.looking}"</span></div>
                     </div>
                     <div className="mt-2 text-xs text-gray-700 space-y-2">
                        <p>{club.emoji} {club.shortIntro}</p>
                        <p>{club.description}</p>
                        <p className="italic text-pink-700 bg-pink-50 border-l-2 border-pink-500 p-2 rounded">
                           “{club.quote}”
                        </p>
                     </div>
                  </div>
               </div>
            </CardContent>
         </motion.div>
      )
   }
)

ClubCard.displayName = "ClubCard"
export default ClubCard
