"use client"

import { useState, useEffect } from "react"
import SwipeInterface from "@/components/swipe-interface"
import ClubDetail from "@/components/club-detail"
import MessageInterface from "@/components/message-interface"
import { getClubDetailById } from "@/lib/clubData"
import SplashScreen from "@/components/splash-screen"

export default function Home() {
  const [currentView, setCurrentView] = useState<"splash" | "swipe" | "detail" | "message">("splash")
  const [selectedClub, setSelectedClub] = useState<any>(null)
  const [savedIndex, setSavedIndex] = useState<number | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentView("swipe")
    }, 1800)

    return () => clearTimeout(timer)
  }, [])

  const handleClubSelect = (club: any) => {
    const detail = getClubDetailById(club.id) || club
    setSelectedClub(detail)
    setCurrentView("detail")
  }

  const handleMessage = (club: any) => {
    const detail = getClubDetailById(club.id) || club
    setSelectedClub(detail)
    setCurrentView("message")
  }

  const handleBack = () => {
    setCurrentView("swipe")
    setSelectedClub(null)
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-400 via-pink-300 to-orange-300 overflow-hidden scroll-thin">
      {currentView === "splash" && <SplashScreen />}
      {currentView === "swipe" && (
        <SwipeInterface onClubSelect={handleClubSelect} onMessage={handleMessage} />
      )}
      {currentView === "detail" && selectedClub && (
        <ClubDetail club={selectedClub} onBack={handleBack} onMessage={() => handleMessage(selectedClub)} />
      )}
      {currentView === "message" && selectedClub && <MessageInterface club={selectedClub} onBack={handleBack} />}
    </div>
  )
}
