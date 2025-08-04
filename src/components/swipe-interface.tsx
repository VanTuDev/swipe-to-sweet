"use client"

import { useState, useRef, useCallback } from "react"
import { HeartOutlined, CloseOutlined, MessageOutlined } from "@ant-design/icons"
import { Button } from "@/components/ui/button"
import { clubs } from "@/data/clubs"
import ClubCard from "@/components/ClubCard"

interface SwipeInterfaceProps {
  onClubSelect: (club: any) => void
  onMessage: (club: any) => void
}

export default function SwipeInterface({ onClubSelect, onMessage }: SwipeInterfaceProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showMatchPopup, setShowMatchPopup] = useState(false)

  const cardRef = useRef<HTMLDivElement>(null)
  const startX = useRef(0)
  const animationRef = useRef<number | null>(null)

  const currentClub = clubs[currentIndex]

  const handleNext = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setDragOffset(dragOffset > 0 ? 400 : -400)

    setTimeout(() => {
      setCurrentIndex(currentIndex < clubs.length - 1 ? currentIndex + 1 : 0)
      setDragOffset(0)
      setIsAnimating(false)
    }, 200)
  }, [currentIndex, isAnimating, dragOffset])

  const handleLike = useCallback(() => {
    if (isAnimating) return

    setShowMatchPopup(true)
    setTimeout(() => setShowMatchPopup(false), 1500)

    onClubSelect(currentClub)
    handleNext()
  }, [currentClub, onClubSelect, isAnimating, handleNext])

  const handlePass = useCallback(() => {
    if (isAnimating) return
    handleNext()
  }, [handleNext, isAnimating])

  const handleDragStart = (clientX: number) => {
    if (isAnimating) return
    setIsDragging(true)
    startX.current = clientX
  }

  const handleDragMove = (clientX: number) => {
    if (!isDragging || isAnimating) return
    setDragOffset(clientX - startX.current)
  }

  const handleDragEnd = () => {
    if (!isDragging || isAnimating) return
    setIsDragging(false)

    if (Math.abs(dragOffset) > 80) {
      dragOffset > 0 ? handleLike() : handlePass()
    } else {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      const animate = () => {
        setDragOffset((prev) => {
          const newOffset = prev * 0.8
          if (Math.abs(newOffset) < 1) return 0
          animationRef.current = requestAnimationFrame(animate)
          return newOffset
        })
      }
      animate()
    }
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-2 sm:p-4 pb-safe relative overflow-hidden bg-gradient-to-br from-pink-400 via-pink-300 to-orange-300">
      {/* Header - Tối ưu cho mobile */}
      <div className="w-full max-w-sm sm:max-w-md mb-2 sm:mb-4 flex-shrink-0 px-2 pt-2 sm:pt-4">
        <div className="flex items-center justify-center mb-2 sm:mb-3">
          <HeartOutlined className="text-lg sm:text-2xl text-pink-600 mr-2 sm:mr-3" />
          <h1 className="text-lg sm:text-xl font-bold text-white">SWIPE TO SWEET</h1>
        </div>
        <div className="text-center text-white/80 text-xs sm:text-sm">
          CLB {currentIndex + 1} / {clubs.length}
        </div>
      </div>

      {/* Card - Tối ưu kích thước cho mobile */}
      <div className="relative w-full max-w-sm sm:max-w-md flex-1 max-h-[75vh] sm:max-h-[80vh] px-2">
        <ClubCard
          ref={cardRef}
          club={currentClub}
          dragOffset={dragOffset}
          isDragging={isDragging}
          onDragStart={handleDragStart}
          onDragMove={handleDragMove}
          onDragEnd={handleDragEnd}
        />
      </div>

      {/* Action Buttons - Tăng kích thước cho mobile */}
      <div className="flex items-center justify-center space-x-3 sm:space-x-6 mt-3 sm:mt-4 mb-2 sm:mb-3 px-2">
        <Button
          size="icon"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 text-red-500 border-2 border-red-400 shadow-lg hover:scale-110 transition-transform touch-target"
          onClick={handlePass}
        >
          <CloseOutlined className="text-lg sm:text-xl" />
        </Button>

        <Button
          size="icon"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 text-blue-500 border-2 border-blue-400 shadow-lg hover:scale-110 transition-transform touch-target"
          onClick={() => onMessage(currentClub)}
        >
          <MessageOutlined className="text-base sm:text-lg" />
        </Button>

        <Button
          size="icon"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 text-green-500 border-2 border-green-400 shadow-lg hover:scale-110 transition-transform touch-target"
          onClick={handleLike}
        >
          <HeartOutlined className="text-lg sm:text-xl" />
        </Button>
      </div>

      {/* Instructions - Tối ưu cho mobile */}
      <div className="text-center text-white/70 text-xs sm:text-sm flex-shrink-0 px-4 pb-2 sm:pb-4 overflow-y-auto scroll-thin max-h-16">
        <p className="text-xs sm:text-sm">Vuốt trái để bỏ qua • Vuốt phải để thích</p>
        <p className="text-xs sm:text-sm">Hoặc sử dụng các nút bên dưới</p>
      </div>

      {/* Match Popup - Tối ưu cho mobile */}
      {showMatchPopup && (
        <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white text-pink-600 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl sm:rounded-3xl shadow-2xl text-center animate-in zoom-in-95 fade-in duration-500 max-w-xs sm:max-w-sm">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold">💖 MATCH 💖</h1>
            <p className="text-xs sm:text-sm mt-1 sm:mt-2 text-gray-500">Bạn và <strong>{currentClub.name}</strong> đã kết nối!</p>
          </div>
        </div>
      )}
    </div>
  )
}
