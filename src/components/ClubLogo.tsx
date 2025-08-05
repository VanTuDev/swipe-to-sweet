"use client"

import { useState } from "react"

interface ClubLogoProps {
  logoImg?: string
  clubName: string
  size?: "sm" | "md" | "lg"
  className?: string
}

export default function ClubLogo({ logoImg, clubName, size = "md", className = "" }: ClubLogoProps) {
  const [imageError, setImageError] = useState(false)

  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8 sm:w-10 sm:h-10", 
    lg: "w-12 h-12 sm:w-16 sm:h-16"
  }

  const handleImageError = () => {
    setImageError(true)
  }

  if (imageError || !logoImg) {
    return (
      <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-pink-400 to-orange-400 flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg ${className}`}>
        {clubName.charAt(0)}
      </div>
    )
  }

  return (
    <img
      src={logoImg}
      alt={`Logo ${clubName}`}
      className={`${sizeClasses[size]} rounded-full object-cover shadow-lg ${className}`}
      onError={handleImageError}
    />
  )
} 