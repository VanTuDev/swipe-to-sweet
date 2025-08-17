"use client"

// removed unused import

import Image from "next/image";
import { useState, useEffect } from "react";

export default function SplashScreen() {
   const [isClient, setIsClient] = useState(false);

   useEffect(() => {
      setIsClient(true);
   }, []);

   if (!isClient) {
      // Fallback for SSR to prevent hydration errors
      return (
         <div className="force-fixed inset-0 min-h-[100dvh] w-full relative pt-safe pb-safe"></div>
      );
   }

   return (
      <div className="force-fixed inset-0 min-h-[100dvh] w-full relative pt-safe pb-safe">
         <Image
            src="/images/landing.png"
            alt="Swipe To Sweet"
            fill
            priority
            className="object-cover"
         />
      </div>
   )
}
