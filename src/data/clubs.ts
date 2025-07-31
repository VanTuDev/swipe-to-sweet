// src/data/clubs.ts

export interface Club {
  id: number
  name: string
  field: string
  position: string
  looking: string
  emoji: string
  shortIntro: string
  description: string
  quote: string
  image: string
  members: string
  experience: string
  benefits: string[]
}

export const clubs: Club[] = [
  {
    id: 1,
    name: "F Event",
    field: "Tổ chức sự kiện, truyền thông & sáng tạo",
    position: "Sẽ điền sau khi sắp xếp gian hàng",
    looking: "Cộng sự cháy hết mình - bạn đồng hành rực rỡ",
    emoji: "🎤",
    shortIntro: 'Bọn mình là team "đứng sau mọi spotlight"!',
    description:
      "F Event chuyên tổ chức các chương trình từ học thuật đến giải trí, luôn tìm kiếm những ý tưởng bùng nổ và người đồng hành đầy nhiệt huyết.",
    quote:
      "Mỗi sự kiện là một cơ hội để bạn tỏa sáng, còn tụi mình là người cầm đèn cho bạn lấp lánh!",
    image: "/images/profile1.png",
    members: "30+ thành viên",
    experience: "2+ năm hoạt động",
    benefits: [
      "Kỹ năng tổ chức và truyền thông",
      "Cơ hội lên ý tưởng và thực chiến",
      "Môi trường làm việc vui vẻ, năng động",
      "Trải nghiệm đáng nhớ trong thời sinh viên",
    ],
  },
  {
    id: 2,
    name: "F Tech",
    field: "Công nghệ thông tin & Lập trình",
    position: "Tầng 2 - Khu vực IT",
    looking: "Những tâm hồn đam mê code và công nghệ",
    emoji: "💻",
    shortIntro: "Chúng mình là những người yêu thích công nghệ!",
    description:
      "F Tech là nơi các bạn có thể học hỏi, thực hành và phát triển kỹ năng IT. Luôn cập nhật xu hướng mới và chia sẻ kiến thức lập trình.",
    quote: "Code không chỉ là công việc, mà là nghệ thuật sáng tạo!",
    image: "/images/profile2.png",
    members: "25+ thành viên",
    experience: "3+ năm hoạt động",
    benefits: [
      "Học các ngôn ngữ lập trình mới",
      "Tham gia dự án thực tế",
      "Workshop công nghệ hàng tuần",
      "Kết nối với cộng đồng IT",
    ],
  },
  {
    id: 3,
    name: "F Media",
    field: "Truyền thông đa phương tiện & Sáng tạo nội dung",
    position: "Tầng 1 - Studio sáng tạo",
    looking: "Creator tài năng và đầy cảm hứng",
    emoji: "📸",
    shortIntro: "Nơi hội tụ những tài năng sáng tạo nội dung!",
    description:
      "F Media tạo ra những câu chuyện thú vị qua từng khung hình, từ photography, videography đến graphic design.",
    quote: "Mỗi khung hình là một câu chuyện, mỗi câu chuyện là một cảm xúc!",
    image: "/images/profile3.png",
    members: "20+ thành viên",
    experience: "2+ năm hoạt động",
    benefits: [
      "Học kỹ năng chụp ảnh, quay phim",
      "Sử dụng thiết bị chuyên nghiệp",
      "Tham gia các dự án sáng tạo",
      "Xây dựng portfolio ấn tượng",
    ],
  },
  {
    id: 4,
    name: "F Sport",
    field: "Thể thao & Sức khỏe",
    position: "Sân thể thao - Khu vực ngoài trời",
    looking: "Những người yêu thích vận động và thể thao",
    emoji: "⚽",
    shortIntro: "Tập hợp những người yêu thích thể thao!",
    description:
      "F Sport tổ chức các hoạt động thể thao, giải đấu và khuyến khích lối sống khỏe mạnh cho cộng đồng sinh viên.",
    quote: "Thể thao không chỉ rèn luyện cơ thể mà còn tôi luyện tinh thần!",
    image: "/images/profile4.png",
    members: "35+ thành viên",
    experience: "4+ năm hoạt động",
    benefits: [
      "Tham gia các môn thể thao đa dạng",
      "Rèn luyện sức khỏe",
      "Tinh thần đồng đội",
      "Tham gia giải đấu liên trường",
    ],
  },
  {
    id: 5,
    name: "F Art",
    field: "Nghệ thuật & Thiết kế",
    position: "Phòng nghệ thuật - Tầng 3",
    looking: "Những tâm hồn nghệ sĩ và đam mê sáng tạo",
    emoji: "🎨",
    shortIntro: "Không gian dành cho những người yêu thích nghệ thuật!",
    description:
      "F Art là nơi mọi ý tưởng sáng tạo đều được chào đón, từ hội họa, điêu khắc đến thiết kế đồ họa.",
    quote: "Nghệ thuật là ngôn ngữ của tâm hồn, hãy để tâm hồn bạn cất tiếng!",
    image: "/images/profile5.png",
    members: "18+ thành viên",
    experience: "3+ năm hoạt động",
    benefits: [
      "Học các kỹ thuật vẽ và thiết kế",
      "Triển lãm tác phẩm",
      "Workshop với nghệ sĩ chuyên nghiệp",
      "Phát triển phong cách riêng",
    ],
  },
  {
    id: 6,
    name: "F Music",
    field: "Âm nhạc & Biểu diễn",
    position: "Phòng âm nhạc - Tầng 2",
    looking: "Những người đam mê âm nhạc và biểu diễn",
    emoji: "🎵",
    shortIntro: "Nơi hội tụ những tài năng âm nhạc!",
    description:
      "F Music tạo ra những giai điệu tuyệt vời và mang âm nhạc đến gần hơn với mọi người trong cộng đồng.",
    quote: "Âm nhạc là thứ ngôn ngữ chung của nhân loại!",
    image: "/images/profile6.png",
    members: "22+ thành viên",
    experience: "5+ năm hoạt động",
    benefits: [
      "Học nhạc cụ và thanh nhạc",
      "Biểu diễn tại các sự kiện",
      "Thu âm và sản xuất nhạc",
      "Kết nối với cộng đồng âm nhạc",
    ],
  },
]
