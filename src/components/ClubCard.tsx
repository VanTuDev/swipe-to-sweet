"use client"

import { forwardRef, useState } from "react"
import { motion } from "framer-motion"
import { CardContent } from "@/components/ui/card"
import Image from "next/image"

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
   googleForm: string
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
      const [imageError, setImageError] = useState(false)
      const [imageLoaded, setImageLoaded] = useState(false)
      const rotation = Math.max(-20, Math.min(20, dragOffset * 0.08))
      const opacity = Math.max(0.5, 1 - Math.abs(dragOffset) * 0.002)

      const handleImageError = () => {
         setImageError(true)
      }

      const handleImageLoad = () => {
         setImageLoaded(true)
      }

      return (
         <motion.div
            ref={ref}
            className="absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-0 cursor-grab active:cursor-grabbing select-none bg-white"
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
            <CardContent className="p-0 h-full bg-gradient-to-br from-white bg-white to-pink-50 animate-in fade-in duration-500">

               {/* Image section - Cố định form ngang, crop vừa khung */}
               <div className="relative w-full overflow-hidden aspect-[16/9] bg-gradient-to-br from-pink-100 to-orange-100">
                  {!imageError ? (
                     <Image
                        src={club.image}
                        alt={club.name}
                        fill
                        sizes="(max-width: 640px) 100vw, 480px"
                        className="object-cover transition-all duration-300"
                        draggable={false}
                        onError={handleImageError as any}
                        onLoad={handleImageLoad as any}
                        loading="lazy"
                        style={{
                           objectPosition: 'center',
                           opacity: imageLoaded ? 1 : 0.7
                        }}
                     />
                  ) : (
                     <div className="w-full h-full bg-gradient-to-br from-pink-200 to-orange-200 flex items-center justify-center">
                        <div className="text-center text-pink-600">
                           <div className="text-4xl mb-2">{club.emoji}</div>
                           <div className="text-lg font-bold">{club.name}</div>
                        </div>
                     </div>
                  )}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 to-transparent" />
                  {dragOffset > 60 && (
                     <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-green-500 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-full font-bold text-xs transform rotate-12 shadow-lg">
                        ❤️ THÍCH
                     </div>
                  )}
                  {dragOffset < -60 && (
                     <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-red-500 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-full font-bold text-xs transform -rotate-12 shadow-lg">
                        ❌ BỎ QUA
                     </div>
                  )}
               </div>

               {/* Content section */}
               <div
                  className={`p-2 sm:p-3 flex flex-col justify-start overflow-y-auto scroll-card flex-1 min-h-0`}
                  style={{
                     scrollbarWidth: "thin"
                  }}
               >
                  <div className="space-y-1 sm:space-y-2">
                     <div className="flex items-center justify-between">
                        <h2 className="text-sm sm:text-lg font-bold text-gray-800 truncate">{club.name}</h2>
                     </div>
                     <div className="text-xs text-gray-600 space-y-0.5 sm:space-y-1">
                        <div>🔹 <b>Lĩnh vực hoạt động:</b> <span style={{ whiteSpace: 'pre-line' }}>{club.field}</span></div>
                        <div className="truncate">🔹 <b>Vị trí gian hàng:</b> {club.position}</div>
                        <div>🔹 <b>Đang tìm:</b> <span className="text-pink-600 italic" style={{ whiteSpace: 'pre-line' }}>"{club.looking}"</span></div>
                     </div>
                     <div className="mt-1 sm:mt-2 text-xs text-gray-700 space-y-1">
                        <p style={{ whiteSpace: 'pre-line' }}>{club.emoji} {club.shortIntro}</p>
                        <p className="text-xs" style={{ whiteSpace: 'pre-line' }}>{club.description}</p>
                        <p className="italic text-pink-700 bg-pink-50 border-l-2 border-pink-500 p-1 sm:p-2 rounded text-xs" style={{ whiteSpace: 'pre-line' }}>
                           "{club.quote}"
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
