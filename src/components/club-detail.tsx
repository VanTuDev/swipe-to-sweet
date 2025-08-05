"use client"

import { ArrowLeft, MapPin, Users, Calendar, Star, MessageCircle, Heart, Award, Clock, Users2, Target, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { ClubDetail } from "@/data/clubs"

interface ClubDetailProps {
   club: ClubDetail
   onBack: () => void
   onMessage: () => void
}

export default function ClubDetail({ club, onBack, onMessage }: ClubDetailProps) {
   return (
      <div className="h-screen w-full bg-gradient-to-br from-pink-400 via-pink-300 to-orange-300 flex flex-col">
         {/* Header - Fixed - Tối ưu cho mobile */}
         <div className="flex-shrink-0 bg-white/90 backdrop-blur-sm border-b border-pink-200 z-10">
            <div className="flex items-center justify-between p-2 sm:p-3 md:p-4">
               <Button variant="ghost" size="sm" onClick={onBack} className="text-pink-600 hover:bg-pink-50 p-1 sm:p-2 touch-target">
                  <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Quay lại</span>
               </Button>
               <h1 className="text-sm sm:text-base md:text-lg font-bold text-pink-700 truncate max-w-[100px] sm:max-w-[120px] md:max-w-none">{club.name}</h1>
               <Button variant="ghost" size="sm" onClick={onMessage} className="text-pink-600 hover:bg-pink-50 p-1 sm:p-2 touch-target">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
               </Button>
            </div>
         </div>

         {/* Scrollable Content - Tối ưu cho mobile */}
         <div className="flex-1 overflow-y-auto scroll-club-detail relative">
            <div className="p-2 sm:p-3 md:p-4 space-y-3 sm:space-y-4 md:space-y-6 pb-20 sm:pb-24">
               {/* Main Image - Tối ưu cho mobile */}
               <Card className="rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border-0">
                  <div className="h-40 sm:h-48 md:h-64 lg:h-80 relative">
                     <img src={club.image || "/placeholder.svg"} alt={club.name} className="w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                     <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 right-2 sm:right-3 md:right-4">
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2 truncate">{club.name}</h2>
                        <div className="flex items-center text-white/90">
                           <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2 fill-yellow-400 text-yellow-400" />
                           <span className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold">CLB Nổi bật</span>
                        </div>
                     </div>
                  </div>
               </Card>

               {/* Basic Info - Tối ưu cho mobile */}
               <Card className="rounded-lg sm:rounded-xl md:rounded-2xl border-0 bg-white/90 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-2 sm:p-3 md:p-4 lg:p-6 space-y-2 sm:space-y-3 md:space-y-4">
                     <div className="flex items-start space-x-2 sm:space-x-3">
                        <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-pink-500 mt-1 flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                           <h3 className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base">Lĩnh vực hoạt động</h3>
                           <p className="text-gray-600 text-xs sm:text-sm md:text-base">{club.field}</p>
                        </div>
                     </div>

                     <div className="flex items-start space-x-2 sm:space-x-3">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-pink-500 mt-1 flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                           <h3 className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base">Vị trí gian hàng</h3>
                           <p className="text-gray-600 text-xs sm:text-sm md:text-base">{club.position}</p>
                        </div>
                     </div>

                     <div className="flex items-start space-x-2 sm:space-x-3">
                        <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-pink-500 mt-1 fill-pink-500 flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                           <h3 className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base">Đang tìm</h3>
                           <p className="text-gray-600 italic text-xs sm:text-sm md:text-base">"{club.looking}"</p>
                        </div>
                     </div>
                  </CardContent>
               </Card>

               {/* Description - Tối ưu cho mobile */}
               <Card className="rounded-lg sm:rounded-xl md:rounded-2xl border-0 bg-white/90 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-2 sm:p-3 md:p-4 lg:p-6">
                     <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4 flex items-center">
                        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-pink-500 mr-2" />
                        Giới thiệu bản thân
                     </h3>
                     <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
                        <div className="flex items-start space-x-2 sm:space-x-3">
                           <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-pink-500 rounded-full mt-1 sm:mt-1.5 md:mt-2 flex-shrink-0" />
                           <p className="text-gray-700 text-xs sm:text-sm md:text-base">{club.shortIntro}</p>
                        </div>
                        {club.description.split('\n').map((paragraph, index) => {
                           // Kiểm tra nếu paragraph bắt đầu với bullet point
                           if (paragraph.trim().startsWith('•')) {
                              return (
                                 <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-pink-500 rounded-full mt-1 sm:mt-1.5 md:mt-2 flex-shrink-0" />
                                    <p className="text-gray-700 text-xs sm:text-sm md:text-base">{paragraph.trim().substring(1).trim()}</p>
                                 </div>
                              )
                           }
                           // Nếu có emoji ở đầu (như 🌟, ✨, 🎒)
                           else if (paragraph.trim().match(/^[🌟✨🎒]/)) {
                              return (
                                 <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-pink-500 rounded-full mt-1 sm:mt-1.5 md:mt-2 flex-shrink-0" />
                                    <p className="text-gray-700 text-xs sm:text-sm md:text-base font-semibold">{paragraph.trim()}</p>
                                 </div>
                              )
                           }
                           // Nếu là paragraph bình thường
                           else if (paragraph.trim()) {
                              return (
                                 <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-pink-500 rounded-full mt-1 sm:mt-1.5 md:mt-2 flex-shrink-0" />
                                    <p className="text-gray-700 text-xs sm:text-sm md:text-base">{paragraph.trim()}</p>
                                 </div>
                              )
                           }
                           return null
                        })}
                        <div className="flex items-start space-x-2 sm:space-x-3">
                           <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-pink-500 rounded-full mt-1 sm:mt-1.5 md:mt-2 flex-shrink-0" />
                           <p className="text-gray-700 text-xs sm:text-sm md:text-base">Chúng tôi là một cộng đồng năng động với sứ mệnh mang lại những trải nghiệm tuyệt vời cho sinh viên.</p>
                        </div>
                        <div className="flex items-start space-x-2 sm:space-x-3">
                           <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-pink-500 rounded-full mt-1 sm:mt-1.5 md:mt-2 flex-shrink-0" />
                           <p className="text-gray-700 text-xs sm:text-sm md:text-base">Với đội ngũ thành viên đầy nhiệt huyết và sáng tạo, chúng tôi luôn nỗ lực tạo ra những hoạt động ý nghĩa và bổ ích cho cộng đồng.</p>
                        </div>
                     </div>
                     <div className="mt-3 sm:mt-4 p-2 sm:p-3 md:p-4 bg-pink-50 rounded-lg sm:rounded-xl border-l-4 border-pink-500">
                        <p className="text-pink-700 italic font-medium text-xs sm:text-sm md:text-base">"{club.quote}"</p>
                     </div>
                  </CardContent>
               </Card>

               {/* Stats - Tối ưu cho mobile */}
               <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                  <Card className="rounded-lg sm:rounded-xl md:rounded-2xl border-0 bg-white/90 backdrop-blur-sm shadow-lg">
                     <CardContent className="p-2 sm:p-3 md:p-4 text-center">
                        <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-pink-500 mx-auto mb-1 sm:mb-2" />
                        <h4 className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base">Thành viên</h4>
                        <p className="text-pink-600 font-bold text-xs sm:text-sm md:text-base">{club.members}</p>
                     </CardContent>
                  </Card>

                  <Card className="rounded-lg sm:rounded-xl md:rounded-2xl border-0 bg-white/90 backdrop-blur-sm shadow-lg">
                     <CardContent className="p-2 sm:p-3 md:p-4 text-center">
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-pink-500 mx-auto mb-1 sm:mb-2" />
                        <h4 className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base">Thâm niên</h4>
                        <p className="text-pink-600 font-bold text-xs sm:text-sm md:text-base">{club.experience}</p>
                     </CardContent>
                  </Card>
               </div>

               {/* Achievements - Tối ưu cho mobile */}
               <Card className="rounded-lg sm:rounded-xl md:rounded-2xl border-0 bg-white/90 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-2 sm:p-3 md:p-4 lg:p-6">
                     <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4 flex items-center">
                        <Award className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-pink-500 mr-2" />
                        Thành tựu nổi bật
                     </h3>
                     <div className="space-y-2 sm:space-y-3">
                        {club.achievements?.map((achievement, index) => (
                           <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                              <div>
                                 <p className="text-gray-700 text-xs sm:text-sm md:text-base font-medium">{achievement.title}</p>
                                 <p className="text-gray-500 text-xs">{achievement.description}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </CardContent>
               </Card>

               {/* Activities - Tối ưu cho mobile */}
               <Card className="rounded-lg sm:rounded-xl md:rounded-2xl border-0 bg-white/90 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-2 sm:p-3 md:p-4 lg:p-6">
                     <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4 flex items-center">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-pink-500 mr-2" />
                        Hoạt động thường xuyên
                     </h3>
                     <div className="space-y-2 sm:space-y-3">
                        {club.activities?.map((activity, index) => (
                           <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                              <p className="text-gray-700 text-xs sm:text-sm md:text-base">{activity}</p>
                           </div>
                        ))}
                     </div>
                  </CardContent>
               </Card>

               {/* Team Structure - Tối ưu cho mobile */}
               <Card className="rounded-lg sm:rounded-xl md:rounded-2xl border-0 bg-white/90 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-2 sm:p-3 md:p-4 lg:p-6">
                     <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4 flex items-center">
                        <Users2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-pink-500 mr-2" />
                        Cơ cấu tổ chức
                     </h3>
                     <div className="space-y-2 sm:space-y-3">
                        {club.teamStructure?.map((member, index) => (
                           <div key={index} className="flex items-center justify-between p-2 bg-pink-50 rounded-lg">
                              <span className="text-gray-700 text-xs sm:text-sm md:text-base font-medium">{member.role}</span>
                              <span className="text-pink-600 text-xs sm:text-sm">{member.count}</span>
                           </div>
                        ))}
                     </div>
                  </CardContent>
               </Card>

               {/* Goals - Tối ưu cho mobile */}
               <Card className="rounded-lg sm:rounded-xl md:rounded-2xl border-0 bg-white/90 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-2 sm:p-3 md:p-4 lg:p-6">
                     <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4 flex items-center">
                        <Target className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-pink-500 mr-2" />
                        Mục tiêu 2024
                     </h3>
                     <div className="space-y-2 sm:space-y-3">
                        {club.goals2024?.map((goal, index) => (
                           <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                              <p className="text-gray-700 text-xs sm:text-sm md:text-base">{goal}</p>
                           </div>
                        ))}
                     </div>
                  </CardContent>
               </Card>

               {/* Benefits - Tối ưu cho mobile */}
               <Card className="rounded-lg sm:rounded-xl md:rounded-2xl border-0 bg-white/90 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-2 sm:p-3 md:p-4 lg:p-6">
                     <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4 flex items-center">
                        <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-pink-500 mr-2" />
                        Gia nhập bạn sẽ nhận được
                     </h3>
                     <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
                        {club.benefits.map((benefit: string, index: number) => (
                           <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-pink-500 rounded-full mt-1 sm:mt-1.5 md:mt-2 flex-shrink-0" />
                              <p className="text-gray-700 text-xs sm:text-sm md:text-base">{benefit}</p>
                           </div>
                        ))}
                        <div className="flex items-start space-x-2 sm:space-x-3">
                           <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-pink-500 rounded-full mt-1 sm:mt-1.5 md:mt-2 flex-shrink-0" />
                           <p className="text-gray-700 text-xs sm:text-sm md:text-base">Cơ hội thực tập tại các công ty đối tác</p>
                        </div>
                        <div className="flex items-start space-x-2 sm:space-x-3">
                           <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-pink-500 rounded-full mt-1 sm:mt-1.5 md:mt-2 flex-shrink-0" />
                           <p className="text-gray-700 text-xs sm:text-sm md:text-base">Chứng chỉ kỹ năng mềm được công nhận</p>
                        </div>
                        <div className="flex items-start space-x-2 sm:space-x-3">
                           <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-pink-500 rounded-full mt-1 sm:mt-1.5 md:mt-2 flex-shrink-0" />
                           <p className="text-gray-700 text-xs sm:text-sm md:text-base">Mạng lưới quan hệ rộng khắp</p>
                        </div>
                        <div className="flex items-start space-x-2 sm:space-x-3">
                           <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-pink-500 rounded-full mt-1 sm:mt-1.5 md:mt-2 flex-shrink-0" />
                           <p className="text-gray-700 text-xs sm:text-sm md:text-base">Kinh nghiệm lãnh đạo và quản lý dự án</p>
                        </div>
                     </div>
                  </CardContent>
               </Card>

               {/* Contact Info - Tối ưu cho mobile */}
               <Card className="rounded-lg sm:rounded-xl md:rounded-2xl border-0 bg-white/90 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-2 sm:p-3 md:p-4 lg:p-6">
                     <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4">Thông tin liên hệ</h3>
                     <div className="space-y-1.5 sm:space-y-2">
                        <div className="flex items-center space-x-2">
                           <span className="text-gray-600 text-xs sm:text-sm">📧 Email:</span>
                           <span className="text-pink-600 text-xs sm:text-sm">{club.contactInfo?.email || 'N/A'}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                           <span className="text-gray-600 text-xs sm:text-sm">📱 Hotline:</span>
                           <span className="text-pink-600 text-xs sm:text-sm">{club.contactInfo?.hotline || 'N/A'}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                           <span className="text-gray-600 text-xs sm:text-sm">📍 Văn phòng:</span>
                           <span className="text-pink-600 text-xs sm:text-sm">{club.contactInfo?.office || 'N/A'}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                           <span className="text-gray-600 text-xs sm:text-sm">⏰ Giờ làm việc:</span>
                           <span className="text-pink-600 text-xs sm:text-sm">{club.contactInfo?.workingHours || 'N/A'}</span>
                        </div>
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
                  className="rounded-lg sm:rounded-xl border-2 border-pink-400 text-pink-600 hover:bg-pink-50 transition-all text-xs sm:text-sm touch-target"
                  onClick={onBack}
               >
                  <span className="hidden sm:inline">Xem CLB khác</span>
                  <span className="sm:hidden">CLB khác</span>
               </Button>
               <Button
                  size="sm"
                  className="rounded-lg sm:rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-lg transition-all text-xs sm:text-sm touch-target"
                  onClick={onMessage}
               >
                  <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Nhắn tin</span>
                  <span className="sm:hidden">Chat</span>
               </Button>
            </div>
         </div>

      </div>
   )
}
