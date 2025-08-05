"use client"

import { forwardRef, useState } from "react"
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
      const [imageAspectRatio, setImageAspectRatio] = useState<number | null>(null)
      const [imageLoaded, setImageLoaded] = useState(false)
      const rotation = Math.max(-20, Math.min(20, dragOffset * 0.08))
      const opacity = Math.max(0.5, 1 - Math.abs(dragOffset) * 0.002)

      const handleImageError = () => {
         setImageError(true)
      }

      const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
         const img = event.currentTarget
         const aspectRatio = img.naturalWidth / img.naturalHeight
         setImageAspectRatio(aspectRatio)
         setImageLoaded(true)
      }

      // Tính toán chiều cao container dựa trên aspect ratio
      const getImageContainerHeight = () => {
         if (!imageAspectRatio) return "h-4/7" // Tỉ lệ 3:4 cho ảnh mặc định

         // Nếu ảnh ngang (aspect ratio > 1.5), tỉ lệ 1.5:3
         if (imageAspectRatio > 1.5) {
            return "h-2/3.5" // Chiều cao 2/3.5 ≈ 57% của card
         }
         // Nếu ảnh dọc (aspect ratio < 0.8), tỉ lệ 3:4
         else if (imageAspectRatio < 0.8) {
            return "h-4/7" // Chiều cao 4/7 ≈ 57% của card
         }
         // Ảnh vuông hoặc gần vuông, tỉ lệ 3:4
         else {
            return "h-4/7" // Chiều cao 4/7 ≈ 57% của card
         }
      }

      const getImageObjectFit = () => {
         if (!imageAspectRatio) return "object-contain"

         // Nếu ảnh ngang, sử dụng cover để vừa với form ngang
         if (imageAspectRatio > 1.5) {
            return "object-cover"
         }
         // Nếu ảnh dọc, có thể sử dụng cover để tối ưu không gian
         else if (imageAspectRatio < 0.8) {
            return "object-cover"
         }
         // Ảnh vuông
         else {
            return "object-contain"
         }
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

               {/* Image section - Tự động fit theo tỷ lệ ảnh */}
               <div className={`relative overflow-hidden card-image-container ${getImageContainerHeight()}`}>
                  {!imageError ? (
                     <img
                        src={club.image}
                        alt={club.name}
                        className={`w-full h-full ${getImageObjectFit()} bg-gradient-to-br from-pink-100 to-orange-100 transition-all duration-300`}
                        draggable={false}
                        onError={handleImageError}
                        onLoad={handleImageLoad}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent h-fit bg-red-400" />
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

               {/* Content section - Tự động điều chỉnh theo chiều cao ảnh */}
               <div
                  className={`p-2 sm:p-3 flex flex-col justify-start overflow-y-auto scroll-card`}
                  style={{
                     scrollbarWidth: "thin",
                     height: imageAspectRatio && imageAspectRatio > 1.5 ? "60%" : "43%"
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
