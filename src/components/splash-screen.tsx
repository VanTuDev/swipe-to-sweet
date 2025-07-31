"use client"

import { Heart } from "lucide-react"

export default function SplashScreen() {
   return (
      <div className="fixed inset-0 bg-gradient-to-br from-pink-500 via-pink-400 to-purple-400 flex items-center justify-center">
         <div className="text-center animate-pulse">
            <div className="flex items-center justify-center mb-4">
               <Heart className="w-12 h-12 text-white mr-3 fill-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider">SWIPE TO SWEET</h1>
            <div className="mt-8 flex justify-center space-x-2">
               <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
               <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
               <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
            </div>
         </div>
      </div>
   )
}
