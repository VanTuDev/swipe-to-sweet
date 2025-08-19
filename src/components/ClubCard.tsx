"use client"

import { forwardRef, useState, useEffect } from "react"
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
   isCurrent?: boolean
}

const ClubCard = forwardRef<HTMLDivElement, Props>(
   ({ club, dragOffset, isDragging, onDragStart, onDragMove, onDragEnd, isCurrent }, ref) => {
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

      // Reset trạng thái ảnh khi đổi CLB/đổi đường dẫn ảnh
      useEffect(() => {
         setImageError(false)
         setImageLoaded(false)
      }, [club.image])

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
            <CardContent className="p-0 h-full bg-gradient-to-br from-white bg-white to-pink-50 animate-in fade-in duration-500 flex flex-col">

               {/* Image section - Cố định form ngang, crop vừa khung (tăng chiều cao) */}
               <div className="relative w-full overflow-hidden aspect-[3/2] bg-gradient-to-br from-pink-100 to-orange-100">
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
                        loading={isCurrent ? "eager" : "lazy"}
                        priority={!!isCurrent}
                        unoptimized
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII="
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
                  className={`p-2 sm:p-3 flex flex-col justify-start overflow-hidden flex-1 min-h-0`}
               >
                  <div
                     className="space-y-1.5 sm:space-y-2 overflow-y-auto scroll-card pr-1 overscroll-contain touch-pan-y h-full"
                     style={{ WebkitOverflowScrolling: 'touch' as any }}
                     onTouchStart={(e) => e.stopPropagation()}
                     onTouchMove={(e) => e.stopPropagation()}
                  >
                     {(() => {
                        const description = (club.description || '').split('\n')
                        const findListAfter = (header: string): string[] => {
                           const idx = description.findIndex(line => line.trim().toLowerCase().startsWith(header.toLowerCase()))
                           if (idx === -1) return []
                           const items: string[] = []
                           for (let i = idx + 1; i < description.length; i++) {
                              const raw = description[i]
                              const line = raw.trim()
                              if (!line) continue
                              // Dừng khi chạm tiêu đề/phần mới
                              if (line.endsWith(':') || line.startsWith('🌞') || line.startsWith('📆') || line.startsWith('💥')) break
                              // Bỏ ký tự bullet nếu có
                              const cleaned = line.replace(/^[-•\u2022]\s*/, '')
                              items.push(cleaned)
                           }
                           return items
                        }
                        const activities = findListAfter('Hoạt động chính:')
                        const audiences = findListAfter('Thành viên hướng tới:')
                        // Chuẩn bị icon tiêu đề và icon phần Giới thiệu theo CLB
                        const titleIcon = club.id === 102 ? '🌍' : club.id === 4 ? '🎙️' : club.id === 8 ? '🦋' : '🔷'
                        const introIcon = club.id === 102 ? '🌐' : club.id === 4 ? '🎙️' : club.id === 8 ? '🦋' : ''

                        // Nếu không có danh sách hoạt động/thành viên, hiển thị vài đoạn giới thiệu đầu từ description
                        const introParas: string[] = []
                        if (activities.length === 0 && audiences.length === 0) {
                           for (let i = 0; i < description.length; i++) {
                              const line = description[i].trim()
                              if (!line) continue
                              if (line.startsWith('🎯') || line.startsWith('👥') || line.startsWith('📆') || line.startsWith('💡')) break
                              introParas.push(line)
                              if (introParas.length >= 2) break
                           }
                        }

                        return (
                           <>
                              <div className="flex items-start">
                                 <h2 className="text-xs sm:text-sm font-bold text-gray-800">
                                    {titleIcon} Tên câu lạc bộ: <span className="font-extrabold">{club.name.replace(/^\s*[\u2000-\u3300]\s*/, '')}</span>
                                 </h2>
                              </div>
                              <div className="text-xs text-gray-600 space-y-0.5 sm:space-y-1">
                                 <div>🗺️ <b>Lĩnh vực hoạt động:</b> <span style={{ whiteSpace: 'pre-line' }}>{club.field}</span></div>
                                 <div className="truncate">🔹 <b>Vị trí gian hàng:</b> {club.position}</div>
                                 <div>🔍 <b>Cần tìm:</b> <span className="text-pink-600 italic" style={{ whiteSpace: 'pre-line' }}>🌟 {club.looking}</span></div>
                              </div>
                              <div className="mt-1 sm:mt-2 text-xs text-gray-700 space-y-1">
                                 <p className="font-semibold" style={{ whiteSpace: 'pre-line' }}>{introIcon ? `${introIcon} ` : ''}Giới thiệu:</p>
                                 <p style={{ whiteSpace: 'pre-line' }}>{club.shortIntro}</p>
                                 {introParas.map((p, idx) => (
                                    <p key={`intro-${idx}`} className="text-gray-700 text-xs" style={{ whiteSpace: 'pre-line' }}>{p}</p>
                                 ))}
                                 {club.id === 102 && (
                                    <p className="text-pink-700 font-medium text-xs">👉 Click xem thêm và khởi động chuyến bay MEC ngay hôm nay nhíaaa! 🛫🌍</p>
                                 )}
                              </div>
                              <div className="mt-1 sm:mt-2">
                                 <p className="text-xs sm:text-sm font-semibold text-gray-800">📖 Giới thiệu</p>
                                 {activities.length > 0 && (
                                    <div className="mt-1">
                                       <p className="text-[11px] sm:text-xs font-medium text-gray-700">Hoạt động chính:</p>
                                       <ul className="list-disc pl-4 text-[11px] sm:text-xs text-gray-700 space-y-0.5">
                                          {activities.map((it, idx) => (
                                             <li key={`act-${idx}`}>{it}</li>
                                          ))}
                                       </ul>
                                    </div>
                                 )}
                                 {audiences.length > 0 && (
                                    <div className="mt-1">
                                       <p className="text-[11px] sm:text-xs font-medium text-gray-700">Thành viên hướng tới:</p>
                                       <ul className="list-disc pl-4 text-[11px] sm:text-xs text-gray-700 space-y-0.5">
                                          {audiences.map((it, idx) => (
                                             <li key={`aud-${idx}`}>{it}</li>
                                          ))}
                                       </ul>
                                    </div>
                                 )}
                              </div>
                              {club.benefits && club.benefits.length > 0 && (
                                 <div className="mt-2">
                                    <p className="text-xs sm:text-sm font-semibold text-gray-800">✅ Gia nhập {club.name.replace(/^\s*🔷\s*/, '').split(' - ')[0]} để:</p>
                                    <ul className="list-disc pl-4 text-[11px] sm:text-xs text-gray-700 space-y-0.5">
                                       {club.benefits.map((b, i) => (
                                          <li key={`benefit-${i}`}>{b}</li>
                                       ))}
                                    </ul>
                                 </div>
                              )}
                              {club.quote && (
                                 <p className="italic text-pink-700 bg-pink-50 border-l-2 border-pink-500 p-1 sm:p-2 rounded text-[11px] sm:text-xs" style={{ whiteSpace: 'pre-line' }}>
                                    "{club.quote}"
                                 </p>
                              )}
                           </>
                        )
                     })()}
                  </div>
               </div>
            </CardContent>
         </motion.div>
      )
   }
)

ClubCard.displayName = "ClubCard"
export default ClubCard
