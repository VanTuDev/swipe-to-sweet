"use client"

// removed unused import

export default function SplashScreen() {
   return (
      <div className="force-fixed inset-0 min-h-[100dvh] w-full relative pt-safe pb-safe">
         <img
            src="/images/landing.png"
            alt="Swipe To Sweet"
            className="absolute inset-0 h-full w-full object-cover"
         />
      </div>
   )
}
