import type { ClubDetail } from "@/data/clubs"
import { makeDetail } from "./utils"

export const footballDetail: ClubDetail = makeDetail({
   id: 104,
   name: "⚽ CLB Bóng đá",
   field: "Bóng đá – Thể thao – Teamwork – Kỷ luật – Sức bền",
   position: "Sân thể thao",
   looking:
      "Những bạn đam mê bóng đá, ưa vận động, kỷ luật và tinh thần đồng đội. Không cần giỏi – chỉ cần chịu khó luyện tập.",
   emoji: "⚽",
   shortIntro:
      "CLB Bóng đá là nơi quy tụ những người yêu trái bóng tròn, cùng nhau rèn luyện thể lực, kỹ thuật và tinh thần đồng đội. Nếu bạn muốn chạy hết mình và chiến đấu vì màu áo, đây là nhà của bạn.",
   description:
      "🎯 Mục tiêu hoạt động\n• Rèn luyện sức khỏe, kỹ thuật cá nhân và chiến thuật thi đấu\n• Xây dựng tinh thần đồng đội – kỷ luật – tôn trọng\n• Tham gia các giải đấu giao hữu và phong trào của trường\n\n📆 Lịch sinh hoạt\n• Tập luyện định kỳ hằng tuần trên sân trường\n• Giao hữu nội bộ/ngoại khóa theo tháng\n\n🔥 Gia nhập bạn sẽ nhận được\n• Môi trường tập luyện có lộ trình rõ ràng\n• Cơ hội tham gia giải đấu, cọ xát và phát triển bản lĩnh thi đấu\n• Những người đồng đội máu lửa và kỷ luật",
   quote: "Đã ra sân là cháy hết mình!",
   image: "/images/bongda.png",
   members: "25+ thành viên",
   experience: "Nhiều mùa giải phong trào",
   benefits: [
      "Nâng cao thể lực và kỹ thuật",
      "Tăng tinh thần đồng đội và kỷ luật",
      "Tham gia giải đấu – giao hữu – cọ xát",
   ],
   googleForm: "",
   achievements: [],
   activities: [
      "Tập thể lực và kỹ thuật cá nhân",
      "Luyện bài phối hợp – chiến thuật",
      "Giao hữu nội bộ/ngoại khóa",
   ],
   teamStructure: [
      { role: "Ban chủ nhiệm", count: "2" },
      { role: "Đội trưởng/Đội phó", count: "2" },
      { role: "Thành viên", count: "20+" },
   ],
   goals2024: [
      "Tổ chức giải nội bộ theo quý",
      "Tham gia 2+ giải phong trào cấp trường/khu vực",
   ],
   contactInfo: { email: "", hotline: "", office: "Sân thể thao", workingHours: "Sau giờ học" },
})

export default footballDetail


