"use client"

import { ArrowLeft, MapPin, Users, Calendar, Star, MessageCircle, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ClubDetailProps {
   club: any
   onBack: () => void
   onMessage: () => void
}

export default function ClubDetail({ club, onBack, onMessage }: ClubDetailProps) {
   return (
      <div className="h-screen w-full bg-gradient-to-br from-pink-400 via-pink-300 to-orange-300 flex flex-col overflow-hidden">
         {/* Header - Fixed */}
         <div className="flex-shrink-0 bg-white/90 backdrop-blur-sm border-b border-pink-200">
            <div className="flex items-center justify-between p-4">
               <Button variant="ghost" size="sm" onClick={onBack} className="text-pink-600 hover:bg-pink-50">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Quay lại
               </Button>
               <h1 className="text-lg font-bold text-pink-700">{club.name}</h1>
               <Button variant="ghost" size="sm" onClick={onMessage} className="text-pink-600 hover:bg-pink-50">
                  <MessageCircle className="w-5 h-5" />
               </Button>
            </div>
         </div>

         {/* Scrollable Content */}
         <div className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-6">
               {/* Main Image */}
               <Card className="rounded-3xl overflow-hidden shadow-xl border-0">
                  <div className="h-64 md:h-80 relative">
                     <img src={club.image || "/placeholder.svg"} alt={club.name} className="w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                     <div className="absolute bottom-4 left-4 right-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{club.name}</h2>
                        <div className="flex items-center text-white/90">
                           <Star className="w-5 h-5 mr-2 fill-yellow-400 text-yellow-400" />
                           <span className="text-base md:text-lg font-semibold">CLB Nổi bật</span>
                        </div>
                     </div>
                  </div>
               </Card>

               {/* Basic Info */}
               <Card className="rounded-2xl border-0 bg-white/90 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-4 md:p-6 space-y-4">
                     <div className="flex items-start space-x-3">
                        <Users className="w-6 h-6 text-pink-500 mt-1 flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                           <h3 className="font-semibold text-gray-800">Lĩnh vực hoạt động</h3>
                           <p className="text-gray-600 text-sm md:text-base">{club.field}</p>
                        </div>
                     </div>

                     <div className="flex items-start space-x-3">
                        <MapPin className="w-6 h-6 text-pink-500 mt-1 flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                           <h3 className="font-semibold text-gray-800">Vị trí gian hàng</h3>
                           <p className="text-gray-600 text-sm md:text-base">{club.position}</p>
                        </div>
                     </div>

                     <div className="flex items-start space-x-3">
                        <Heart className="w-6 h-6 text-pink-500 mt-1 fill-pink-500 flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                           <h3 className="font-semibold text-gray-800">Đang tìm</h3>
                           <p className="text-gray-600 italic text-sm md:text-base">"{club.looking}"</p>
                        </div>
                     </div>
                  </CardContent>
               </Card>

               {/* Description */}
               <Card className="rounded-2xl border-0 bg-white/90 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-4 md:p-6">
                     <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Giới thiệu bản thân</h3>
                     <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">{club.description}</p>
                     <div className="p-3 md:p-4 bg-pink-50 rounded-xl border-l-4 border-pink-400">
                        <p className="text-pink-700 italic font-medium text-sm md:text-base">"{club.quote}"</p>
                     </div>
                  </CardContent>
               </Card>

               {/* Stats */}
               <div className="grid grid-cols-2 gap-4">
                  <Card className="rounded-2xl border-0 bg-white/90 backdrop-blur-sm shadow-lg">
                     <CardContent className="p-4 text-center">
                        <Users className="w-6 md:w-8 h-6 md:h-8 text-pink-500 mx-auto mb-2" />
                        <h4 className="font-semibold text-gray-800 text-sm md:text-base">Thành viên</h4>
                        <p className="text-pink-600 font-bold text-sm md:text-base">{club.members}</p>
                     </CardContent>
                  </Card>

                  <Card className="rounded-2xl border-0 bg-white/90 backdrop-blur-sm shadow-lg">
                     <CardContent className="p-4 text-center">
                        <Calendar className="w-6 md:w-8 h-6 md:h-8 text-pink-500 mx-auto mb-2" />
                        <h4 className="font-semibold text-gray-800 text-sm md:text-base">Thâm niên</h4>
                        <p className="text-pink-600 font-bold text-sm md:text-base">{club.experience}</p>
                     </CardContent>
                  </Card>
               </div>

               {/* Benefits */}
               <Card className="rounded-2xl border-0 bg-white/90 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-4 md:p-6">
                     <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Gia nhập bạn sẽ nhận được</h3>
                     <div className="space-y-3">
                        {club.benefits.map((benefit: string, index: number) => (
                           <div key={index} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0" />
                              <p className="text-gray-700 text-sm md:text-base">{benefit}</p>
                           </div>
                        ))}
                     </div>
                  </CardContent>
               </Card>

               {/* Extra spacing for mobile */}
               <div className="h-20 md:h-4"></div>
            </div>
         </div>

         {/* Fixed Action Buttons */}
         <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-pink-200 px-4 py-4 md:py-6">
            <div className="max-w-md mx-auto grid grid-cols-2 gap-3">
               <Button
                  variant="outline"
                  size="lg"
                  className="rounded-xl border-2 border-pink-400 text-pink-600 hover:bg-pink-50 transition-all"
                  onClick={onBack}
               >
                  Xem CLB khác
               </Button>
               <Button
                  size="lg"
                  className="rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-lg transition-all"
                  onClick={onMessage}
               >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Nhắn tin
               </Button>
            </div>
         </div>

      </div>
   )
}
