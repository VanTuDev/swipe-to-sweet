"use client"

import { ArrowLeft, Send, MessageCircle, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface MessageInterfaceProps {
   club: any
   onBack: () => void
}

export default function MessageInterface({ club, onBack }: MessageInterfaceProps) {
   const handleGoogleForm = () => {
      if (club.googleForm) {
         window.open(club.googleForm, '_blank')
      } else {
         // Fallback nếu chưa có Google Form
         alert(`Google Form cho ${club.name} sẽ được cập nhật sớm!`)
      }
   }

   return (
      <div className="h-screen w-full bg-gradient-to-br from-pink-400 via-pink-300 to-orange-300 flex flex-col">
         {/* Header - Tối ưu cho mobile */}
         <div className="flex-shrink-0 bg-white/90 backdrop-blur-sm border-b border-pink-200 z-10">
            <div className="flex items-center justify-between p-2 sm:p-3 md:p-4">
               <Button variant="ghost" size="sm" aria-label="Quay lại" onClick={onBack} className="text-pink-600 hover:bg-pink-50 p-1 sm:p-2 touch-target">
                  <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Quay lại</span>
               </Button>
               <h1 className="text-sm sm:text-base md:text-lg font-bold text-pink-700 truncate max-w-[100px] sm:max-w-[120px] md:max-w-none">Chat với {club.name}</h1>
               <div className="w-10 sm:w-12"></div> {/* Spacer để căn giữa title */}
            </div>
         </div>

         {/* Main Content - Tối ưu cho mobile */}
         <div className="flex-1 overflow-y-auto scroll-club-detail relative">
            <div className="p-2 sm:p-3 md:p-4 space-y-3 sm:space-y-4 md:space-y-6">

               {/* Club Info Card */}
               <Card className="rounded-lg sm:rounded-xl md:rounded-2xl border-0 bg-white/90 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-2 sm:p-3 md:p-4 lg:p-6">
                     <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-pink-200 to-orange-200 flex items-center justify-center text-2xl sm:text-3xl">
                           {club.emoji}
                        </div>
                        <div className="flex-1 min-w-0">
                           <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 truncate">{club.name}</h2>
                           <p className="text-xs sm:text-sm text-gray-600 truncate">{club.field}</p>
                        </div>
                     </div>
                  </CardContent>
               </Card>

               {/* Welcome Message */}
               <Card className="rounded-lg sm:rounded-xl md:rounded-2xl border-0 bg-white/90 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-2 sm:p-3 md:p-4 lg:p-6">
                     <div className="text-center space-y-2 sm:space-y-3">
                        <div className="text-4xl sm:text-5xl">💬</div>
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800">Chào mừng bạn đến với {club.name}!</h3>
                        <p className="text-xs sm:text-sm md:text-base text-gray-600">
                           Chúng tôi rất vui khi bạn quan tâm đến CLB của chúng tôi.
                           Hãy điền form bên dưới để chúng tôi có thể liên hệ với bạn sớm nhất!
                        </p>
                     </div>
                  </CardContent>
               </Card>

               {/* Google Form Section */}
               <Card className="rounded-lg sm:rounded-xl md:rounded-2xl border-0 bg-white/90 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-2 sm:p-3 md:p-4 lg:p-6">
                     <div className="space-y-3 sm:space-y-4">
                        <div className="text-center">
                           <div className="text-3xl sm:text-4xl mb-2">📝</div>
                           <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-2">Đăng ký tham gia {club.name}</h3>
                           <p className="text-xs sm:text-sm md:text-base text-gray-600">
                              Điền thông tin để chúng tôi có thể liên hệ với bạn
                           </p>
                        </div>

                        <div className="space-y-2 sm:space-y-3">
                           <div className="bg-pink-50 rounded-lg p-3 sm:p-4 border-l-4 border-pink-400">
                              <h4 className="text-xs sm:text-sm font-semibold text-pink-700 mb-1">Thông tin cần chuẩn bị:</h4>
                              <ul className="text-xs sm:text-sm text-pink-600 space-y-1">
                                 <li>• Họ và tên đầy đủ</li>
                                 <li>• Số điện thoại liên hệ</li>
                                 <li>• Email</li>
                                 <li>• Lý do muốn tham gia CLB</li>
                                 <li>• Kinh nghiệm và kỹ năng hiện có</li>
                              </ul>
                           </div>

                           <Button
                              onClick={handleGoogleForm}
                              className="w-full rounded-lg sm:rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-lg transition-all text-xs sm:text-sm md:text-base touch-target py-3 sm:py-4"
                           >
                              <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                              Mở Google Form
                           </Button>
                        </div>
                     </div>
                  </CardContent>
               </Card>

               {/* Contact Info */}
               <Card className="rounded-lg sm:rounded-xl md:rounded-2xl border-0 bg-white/90 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-2 sm:p-3 md:p-4 lg:p-6">
                     <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-2 sm:mb-3 flex items-center">
                        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-pink-500" />
                        Thông tin liên hệ
                     </h3>
                     <div className="space-y-1.5 sm:space-y-2">
                        <div className="flex items-center space-x-2">
                           <span className="text-gray-600 text-xs sm:text-sm">📧 Email:</span>
                           <span className="text-pink-600 text-xs sm:text-sm">fclub@university.edu.vn</span>
                        </div>
                        <div className="flex items-center space-x-2">
                           <span className="text-gray-600 text-xs sm:text-sm">📱 Hotline:</span>
                           <span className="text-pink-600 text-xs sm:text-sm">0123 456 789</span>
                        </div>
                        <div className="flex items-center space-x-2">
                           <span className="text-gray-600 text-xs sm:text-sm">📍 Văn phòng:</span>
                           <span className="text-pink-600 text-xs sm:text-sm">Phòng 101, Tòa A</span>
                        </div>
                        <div className="flex items-center space-x-2">
                           <span className="text-gray-600 text-xs sm:text-sm">⏰ Giờ làm việc:</span>
                           <span className="text-pink-600 text-xs sm:text-sm">8:00 - 17:00 (T2-T6)</span>
                        </div>
                     </div>
                  </CardContent>
               </Card>

               {/* Benefits Preview */}
               <Card className="rounded-lg sm:rounded-xl md:rounded-2xl border-0 bg-white/90 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-2 sm:p-3 md:p-4 lg:p-6">
                     <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-2 sm:mb-3 flex items-center">
                        <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-pink-500 fill-pink-500" />
                        Lợi ích khi tham gia
                     </h3>
                     <div className="space-y-1.5 sm:space-y-2">
                        {club.benefits.slice(0, 3).map((benefit: string, index: number) => (
                           <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-pink-500 rounded-full mt-1 sm:mt-1.5 md:mt-2 flex-shrink-0" />
                              <p className="text-gray-700 text-xs sm:text-sm md:text-base">{benefit}</p>
                           </div>
                        ))}
                        {club.benefits.length > 3 && (
                           <p className="text-xs sm:text-sm text-pink-600 italic">
                              Và {club.benefits.length - 3} lợi ích khác...
                           </p>
                        )}
                     </div>
                  </CardContent>
               </Card>

               {/* Extra spacing for mobile */}
               <div className="h-12 sm:h-16 md:h-20 lg:h-4"></div>
            </div>
         </div>

         {/* Fixed Action Buttons - Tối ưu cho mobile */}
         <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-pink-200 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 lg:py-6">
            <div className="max-w-xs sm:max-w-md mx-auto grid grid-cols-2 gap-2 sm:gap-3">
               <Button
                  variant="outline"
                  size="sm"
                  aria-label="Xem CLB khác"
                  className="rounded-lg sm:rounded-xl border-2 border-pink-400 text-pink-600 hover:bg-pink-50 transition-all text-xs sm:text-sm touch-target"
                  onClick={onBack}
               >
                  <span className="hidden sm:inline">Xem CLB khác</span>
                  <span className="sm:hidden">CLB khác</span>
               </Button>
               <Button
                  size="sm"
                  aria-label="Mở Google Form đăng ký"
                  className="rounded-lg sm:rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-lg transition-all text-xs sm:text-sm touch-target"
                  onClick={handleGoogleForm}
               >
                  <Send className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Đăng ký ngay</span>
                  <span className="sm:hidden">Đăng ký</span>
               </Button>
            </div>
         </div>

      </div>
   )
}
