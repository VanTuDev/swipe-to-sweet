"use client"

import { ArrowLeft, MapPin, Users, Calendar, Star, MessageCircle, Heart, Award, Clock, Users2, Target, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ClubDetailProps {
   club: any
   onBack: () => void
   onMessage: () => void
}

export default function ClubDetail({ club, onBack, onMessage }: ClubDetailProps) {
   return (
      <div className="h-screen w-full bg-gradient-to-br from-pink-400 via-pink-300 to-orange-300 flex flex-col">
         {/* Header - Fixed */}
         <div className="flex-shrink-0 bg-white/90 backdrop-blur-sm border-b border-pink-200 z-10">
            <div className="flex items-center justify-between p-3 sm:p-4">
               <Button variant="ghost" size="sm" onClick={onBack} className="text-pink-600 hover:bg-pink-50 p-2">
                  <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Quay lại</span>
               </Button>
               <h1 className="text-base sm:text-lg font-bold text-pink-700 truncate max-w-[120px] sm:max-w-none">{club.name}</h1>
               <Button variant="ghost" size="sm" onClick={onMessage} className="text-pink-600 hover:bg-pink-50 p-2">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
               </Button>
            </div>
         </div>

         {/* Scrollable Content */}
         <div className="flex-1 overflow-y-auto scroll-thin relative">
            <div className="p-3 sm:p-4 space-y-4 sm:space-y-6 pb-24">
               {/* Main Image */}
               <Card className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-0">
                  <div className="h-48 sm:h-64 md:h-80 relative">
                     <img src={club.image || "/placeholder.svg"} alt={club.name} className="w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                     <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2 truncate">{club.name}</h2>
                        <div className="flex items-center text-white/90">
                           <Star className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 fill-yellow-400 text-yellow-400" />
                           <span className="text-sm sm:text-base md:text-lg font-semibold">CLB Nổi bật</span>
                        </div>
                     </div>
                  </div>
               </Card>

               {/* Basic Info */}
               <Card className="rounded-xl sm:rounded-2xl border-0 bg-white/90 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4">
                     <div className="flex items-start space-x-2 sm:space-x-3">
                        <Users className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 mt-1 flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                           <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Lĩnh vực hoạt động</h3>
                           <p className="text-gray-600 text-xs sm:text-sm md:text-base">{club.field}</p>
                        </div>
                     </div>

                     <div className="flex items-start space-x-2 sm:space-x-3">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 mt-1 flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                           <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Vị trí gian hàng</h3>
                           <p className="text-gray-600 text-xs sm:text-sm md:text-base">{club.position}</p>
                        </div>
                     </div>

                     <div className="flex items-start space-x-2 sm:space-x-3">
                        <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 mt-1 fill-pink-500 flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                           <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Đang tìm</h3>
                           <p className="text-gray-600 italic text-xs sm:text-sm md:text-base">"{club.looking}"</p>
                        </div>
                     </div>
                  </CardContent>
               </Card>

               {/* Description */}
               <Card className="rounded-xl sm:rounded-2xl border-0 bg-white/90 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-3 sm:p-4 md:p-6">
                     <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Giới thiệu bản thân</h3>
                     <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm md:text-base">
                        {club.description}
                        <br /><br />
                        Chúng tôi là một cộng đồng năng động với sứ mệnh mang lại những trải nghiệm tuyệt vời cho sinh viên.
                        Với đội ngũ thành viên đầy nhiệt huyết và sáng tạo, chúng tôi luôn nỗ lực tạo ra những hoạt động
                        ý nghĩa và bổ ích cho cộng đồng.
                     </p>
                     <div className="p-2 sm:p-3 md:p-4 bg-pink-50 rounded-xl border-l-4 border-pink-400">
                        <p className="text-pink-700 italic font-medium text-xs sm:text-sm md:text-base">"{club.quote}"</p>
                     </div>
                  </CardContent>
               </Card>

               {/* Stats */}
               <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <Card className="rounded-xl sm:rounded-2xl border-0 bg-white/90 backdrop-blur-sm shadow-lg">
                     <CardContent className="p-3 sm:p-4 text-center">
                        <Users className="w-5 h-5 sm:w-6 md:w-8 h-5 h-5 sm:h-6 md:h-8 text-pink-500 mx-auto mb-1 sm:mb-2" />
                        <h4 className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base">Thành viên</h4>
                        <p className="text-pink-600 font-bold text-xs sm:text-sm md:text-base">{club.members}</p>
                     </CardContent>
                  </Card>

                  <Card className="rounded-xl sm:rounded-2xl border-0 bg-white/90 backdrop-blur-sm shadow-lg">
                     <CardContent className="p-3 sm:p-4 text-center">
                        <Calendar className="w-5 h-5 sm:w-6 md:w-8 h-5 h-5 sm:h-6 md:h-8 text-pink-500 mx-auto mb-1 sm:mb-2" />
                        <h4 className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base">Thâm niên</h4>
                        <p className="text-pink-600 font-bold text-xs sm:text-sm md:text-base">{club.experience}</p>
                     </CardContent>
                  </Card>
               </div>

               {/* Achievements */}
               <Card className="rounded-xl sm:rounded-2xl border-0 bg-white/90 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-3 sm:p-4 md:p-6">
                     <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                        <Award className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 mr-2" />
                        Thành tựu nổi bật
                     </h3>
                     <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                           <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0" />
                           <div>
                              <p className="text-gray-700 text-xs sm:text-sm md:text-base font-medium">Giải nhất cuộc thi sáng tạo 2023</p>
                              <p className="text-gray-500 text-xs">Dự án "Sáng tạo vì cộng đồng"</p>
                           </div>
                        </div>
                        <div className="flex items-start space-x-3">
                           <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0" />
                           <div>
                              <p className="text-gray-700 text-xs sm:text-sm md:text-base font-medium">CLB xuất sắc nhất năm 2022</p>
                              <p className="text-gray-500 text-xs">Được công nhận bởi Hội sinh viên</p>
                           </div>
                        </div>
                        <div className="flex items-start space-x-3">
                           <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0" />
                           <div>
                              <p className="text-gray-700 text-xs sm:text-sm md:text-base font-medium">Tổ chức thành công 50+ sự kiện</p>
                              <p className="text-gray-500 text-xs">Thu hút hơn 10,000+ người tham gia</p>
                           </div>
                        </div>
                     </div>
                  </CardContent>
               </Card>

               {/* Activities */}
               <Card className="rounded-xl sm:rounded-2xl border-0 bg-white/90 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-3 sm:p-4 md:p-6">
                     <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                        <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 mr-2" />
                        Hoạt động thường xuyên
                     </h3>
                     <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                           <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0" />
                           <p className="text-gray-700 text-xs sm:text-sm md:text-base">Họp định kỳ hàng tuần vào thứ 7</p>
                        </div>
                        <div className="flex items-start space-x-3">
                           <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0" />
                           <p className="text-gray-700 text-xs sm:text-sm md:text-base">Workshop kỹ năng mỗi tháng</p>
                        </div>
                        <div className="flex items-start space-x-3">
                           <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0" />
                           <p className="text-gray-700 text-xs sm:text-sm md:text-base">Sự kiện networking hàng quý</p>
                        </div>
                        <div className="flex items-start space-x-3">
                           <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0" />
                           <p className="text-gray-700 text-xs sm:text-sm md:text-base">Dự án cộng đồng theo học kỳ</p>
                        </div>
                     </div>
                  </CardContent>
               </Card>

               {/* Team Structure */}
               <Card className="rounded-xl sm:rounded-2xl border-0 bg-white/90 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-3 sm:p-4 md:p-6">
                     <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                        <Users2 className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 mr-2" />
                        Cơ cấu tổ chức
                     </h3>
                     <div className="space-y-3">
                        <div className="flex items-center justify-between p-2 bg-pink-50 rounded-lg">
                           <span className="text-gray-700 text-xs sm:text-sm md:text-base font-medium">Chủ tịch CLB</span>
                           <span className="text-pink-600 text-xs sm:text-sm">1 người</span>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-pink-50 rounded-lg">
                           <span className="text-gray-700 text-xs sm:text-sm md:text-base font-medium">Phó chủ tịch</span>
                           <span className="text-pink-600 text-xs sm:text-sm">2 người</span>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-pink-50 rounded-lg">
                           <span className="text-gray-700 text-xs sm:text-sm md:text-base font-medium">Ban chuyên môn</span>
                           <span className="text-pink-600 text-xs sm:text-sm">15 người</span>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-pink-50 rounded-lg">
                           <span className="text-gray-700 text-xs sm:text-sm md:text-base font-medium">Thành viên</span>
                           <span className="text-pink-600 text-xs sm:text-sm">12 người</span>
                        </div>
                     </div>
                  </CardContent>
               </Card>

               {/* Goals */}
               <Card className="rounded-xl sm:rounded-2xl border-0 bg-white/90 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-3 sm:p-4 md:p-6">
                     <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                        <Target className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 mr-2" />
                        Mục tiêu 2024
                     </h3>
                     <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                           <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0" />
                           <p className="text-gray-700 text-xs sm:text-sm md:text-base">Tăng số lượng thành viên lên 50+</p>
                        </div>
                        <div className="flex items-start space-x-3">
                           <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0" />
                           <p className="text-gray-700 text-xs sm:text-sm md:text-base">Tổ chức 20+ sự kiện lớn nhỏ</p>
                        </div>
                        <div className="flex items-start space-x-3">
                           <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0" />
                           <p className="text-gray-700 text-xs sm:text-sm md:text-base">Mở rộng hợp tác với 10+ đối tác</p>
                        </div>
                        <div className="flex items-start space-x-3">
                           <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0" />
                           <p className="text-gray-700 text-xs sm:text-sm md:text-base">Phát triển 5 dự án cộng đồng mới</p>
                        </div>
                     </div>
                  </CardContent>
               </Card>

               {/* Benefits */}
               <Card className="rounded-xl sm:rounded-2xl border-0 bg-white/90 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-3 sm:p-4 md:p-6">
                     <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                        <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 mr-2" />
                        Gia nhập bạn sẽ nhận được
                     </h3>
                     <div className="space-y-2 sm:space-y-3">
                        {club.benefits.map((benefit: string, index: number) => (
                           <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                              <p className="text-gray-700 text-xs sm:text-sm md:text-base">{benefit}</p>
                           </div>
                        ))}
                        <div className="flex items-start space-x-2 sm:space-x-3">
                           <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                           <p className="text-gray-700 text-xs sm:text-sm md:text-base">Cơ hội thực tập tại các công ty đối tác</p>
                        </div>
                        <div className="flex items-start space-x-2 sm:space-x-3">
                           <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                           <p className="text-gray-700 text-xs sm:text-sm md:text-base">Chứng chỉ kỹ năng mềm được công nhận</p>
                        </div>
                        <div className="flex items-start space-x-2 sm:space-x-3">
                           <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                           <p className="text-gray-700 text-xs sm:text-sm md:text-base">Mạng lưới quan hệ rộng khắp</p>
                        </div>
                        <div className="flex items-start space-x-2 sm:space-x-3">
                           <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                           <p className="text-gray-700 text-xs sm:text-sm md:text-base">Kinh nghiệm lãnh đạo và quản lý dự án</p>
                        </div>
                     </div>
                  </CardContent>
               </Card>

               {/* Contact Info */}
               <Card className="rounded-xl sm:rounded-2xl border-0 bg-white/90 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-3 sm:p-4 md:p-6">
                     <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Thông tin liên hệ</h3>
                     <div className="space-y-2">
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

               {/* Extra spacing for mobile */}
               <div className="h-16 sm:h-20 md:h-4"></div>
            </div>
         </div>

         {/* Fixed Action Buttons */}
         <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-pink-200 px-3 sm:px-4 py-3 sm:py-4 md:py-6">
            <div className="max-w-xs sm:max-w-md mx-auto grid grid-cols-2 gap-2 sm:gap-3">
               <Button
                  variant="outline"
                  size="sm"
                  className="rounded-xl border-2 border-pink-400 text-pink-600 hover:bg-pink-50 transition-all text-xs sm:text-sm"
                  onClick={onBack}
               >
                  <span className="hidden sm:inline">Xem CLB khác</span>
                  <span className="sm:hidden">CLB khác</span>
               </Button>
               <Button
                  size="sm"
                  className="rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-lg transition-all text-xs sm:text-sm"
                  onClick={onMessage}
               >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Nhắn tin</span>
                  <span className="sm:hidden">Chat</span>
               </Button>
            </div>
         </div>

      </div>
   )
}
