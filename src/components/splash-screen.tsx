"use client"

// removed unused import

export default function SplashScreen() {
   return (
      <div className="force-fixed inset-0 min-h-[100dvh] bg-gradient-to-b from-pink-500 via-pink-400 to-orange-300 flex items-center justify-center p-4 pt-safe pb-safe">
         <div className="text-center animate-pulse">
            <div className="flex items-center justify-center mb-3 sm:mb-4">
               <picture>
                  <img
                     src="/images/logoCT.png"
                     alt="Logo chương trình"
                     className="w-full h-auto max-w-[520px] object-contain drop-shadow-lg"
                     style={{ maxHeight: "50vh" }}
                  />
               </picture>
            </div>
            {/* <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white tracking-wider leading-tight">SWIPE TO SWEET</h1> */}
            <div className="mt-6 sm:mt-8 flex justify-center space-x-1 sm:space-x-2 opacity-90">
               <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-bounce"></div>
               <div
                  className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
               ></div>
               <div
                  className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
               ></div>
            </div>
         </div>
      </div>
   )
}
