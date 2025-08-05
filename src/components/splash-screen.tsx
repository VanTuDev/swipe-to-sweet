"use client"

import { Heart } from "lucide-react"

export default function SplashScreen() {
   return (
      <div className="fixed inset-0 bg-gradient-to-br from-pink-500 via-pink-400 to-purple-400 flex items-center justify-center p-4">
         <div className="text-center animate-pulse">
            <div className="flex items-center justify-center mb-3 sm:mb-4">
               <img
                  src="/images/logoCT.png"
                  alt="Logo chương trình"
                  className="w-full h-auto object-contain drop-shadow-lg"
                  style={{ maxHeight: '60vh' }}
               />
            </div>
            {/* <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white tracking-wider leading-tight">SWIPE TO SWEET</h1> */}
            <div className="mt-6 sm:mt-8 flex justify-center space-x-1 sm:space-x-2">
               <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-bounce"></div>
               <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
               <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
            </div>
         </div>
      </div>
   )
}
