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
  googleForm: string
}

export interface ClubDetail {
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
  googleForm: string
  achievements: Array<{
    title: string
    description: string
  }>
  activities: string[]
  teamStructure: Array<{
    role: string
    count: string
  }>
  goals2024: string[]
  contactInfo: {
    email: string
    hotline: string
    office: string
    workingHours: string
  }
}

export const clubs: Club[] = [
  {
    id: 1,
    name: "CLB ECO",
    field: "Môi trường & Phát triển bền vững",
    position: "Chúng tớ không chỉ là câu lạc bộ về học thuật, mà còn kết hợp cả một số sự kiện của nhà trường. Đến với chúng tớ, các bạn vừa được học thêm những kĩ năng mới, không những thế, các bạn được vui chơi, tìm kiếm những thế mạnh khác của bản thân mình. Đây là mái nhà chung giúp các bạn phát triển bản thân, đồng thời gióp các bạn không cảm thấy quá gò bó nếu chỉ tập trung vào học thuật hay sự kiện",
    looking: "Những người quan tâm đến môi trường",
    emoji: "🌱",
    shortIntro: "Bảo vệ môi trường, xây dựng tương lai xanh!",
    description:
      "CLB ECO thúc đẩy ý thức bảo vệ môi trường và phát triển bền vững trong cộng đồng sinh viên.",
    quote: "Trái đất không phải là tài sản của chúng ta, mà là món quà cho thế hệ tương lai!",
    image: "/images/CLB ECO.jpeg",
    members: "15+ thành viên",
    experience: "2+ năm hoạt động",
    benefits: [
      "Tham gia các dự án môi trường",
      "Học về phát triển bền vững",
      "Tổ chức các hoạt động xanh",
      "Kết nối với tổ chức môi trường",
    ],
    googleForm: "",
  },
  {
    id: 2,
    name: "CLB FBIZ",
    field: "Kinh doanh & Khởi nghiệp",
    position: "Tầng 1 - Khu vực Business",
    looking: "Những nhà lãnh đạo tương lai",
    emoji: "💼",
    shortIntro: "Nơi ươm mầm những ý tưởng kinh doanh!",
    description:
      "CLB FBIZ hỗ trợ sinh viên phát triển kỹ năng kinh doanh, khởi nghiệp và xây dựng mạng lưới quan hệ.",
    quote: "Thành công không phải là đích đến, mà là hành trình!",
    image: "/images/CLB FBIZ.png",
    members: "28+ thành viên",
    experience: "3+ năm hoạt động",
    benefits: [
      "Học kỹ năng kinh doanh thực tế",
      "Tham gia các dự án khởi nghiệp",
      "Kết nối với doanh nhân thành đạt",
      "Cơ hội thực tập tại công ty lớn",
    ],
    googleForm: "",
  },
  {
    id: 3,
    name: "CLB Sunshare",
    field: "Năng lượng tái tạo & Công nghệ xanh",
    position: "Tầng 2 - Khu vực Innovation",
    looking: "Những người đam mê công nghệ xanh",
    emoji: "☀️",
    shortIntro: "Chia sẻ ánh sáng, tạo năng lượng xanh!",
    description:
      "CLB Sunshare tập trung vào phát triển công nghệ năng lượng tái tạo và các giải pháp bền vững.",
    quote: "Năng lượng mặt trời là tương lai của nhân loại!",
    image: "/images/CLB Sunshare.jpg",
    members: "20+ thành viên",
    experience: "2+ năm hoạt động",
    benefits: [
      "Học về năng lượng tái tạo",
      "Tham gia dự án công nghệ xanh",
      "Kết nối với chuyên gia năng lượng",
      "Cơ hội thực tập tại công ty năng lượng",
    ],
    googleForm: "",
  },
  {
    id: 4,
    name: "F-MIC",
    field: "Truyền thông đa phương tiện & Sáng tạo nội dung",
    position: "Tầng 1 - Studio sáng tạo",
    looking: "Creator tài năng và đầy cảm hứng",
    emoji: "📸",
    shortIntro: "Nơi hội tụ những tài năng sáng tạo nội dung!",
    description:
      "F-MIC tạo ra những câu chuyện thú vị qua từng khung hình, từ photography, videography đến graphic design.",
    quote: "Mỗi khung hình là một câu chuyện, mỗi câu chuyện là một cảm xúc!",
    image: "/images/F-MIC.jpg",
    members: "20+ thành viên",
    experience: "2+ năm hoạt động",
    benefits: [
      "Học kỹ năng chụp ảnh, quay phim",
      "Sử dụng thiết bị chuyên nghiệp",
      "Tham gia các dự án sáng tạo",
      "Xây dựng portfolio ấn tượng",
    ],
    googleForm: "",
  },
  {
    id: 5,
    name: "F-Skill",
    field: "Chia sẻ những kĩ năng thiết yếu trong Đoàn, trong cuộc sống như nhận mật thư, nắm bắt thông tin từ cờ semaphore/ mã morse trong tình huống khẩn cấp hay những kĩ năng cần thiết trong cắm trại (dựng lều, rút dây...), hoặc tham gia bất cứ trò chơi nào bạn muốn.",
    position: "Cập nhật sau",
    looking: "Những bạn có mong muốn khám phá bản thân, hay học hỏi thêm những kĩ năng giúp ích trong cuộc sống, hoặc tìm kiếm những người bạn có cùng chung sở thích.",
    emoji: "🌟",
    shortIntro: "Chúng tớ không chỉ là câu lạc bộ về học thuật, mà còn kết hợp cả một số sự kiện của nhà trường. Đến với chúng tớ, các bạn vừa được học thêm những kĩ năng mới, không những thế, các bạn được vui chơi, tìm kiếm những thế mạnh khác của bản thân mình. Đây là mái nhà chung giúp các bạn phát triển bản thân, đồng thời gióp các bạn không cảm thấy quá gò bó nếu chỉ tập trung vào học thuật hay sự kiện.",
    description:
      "Chúng mình ở: Cập nhật sau\n\n🌟 Ở F-Skill, chúng mình không dạy bạn 'sống sót'. Chúng mình cùng bạn sống sâu, sống vui và sống thật.\n\nMục tiêu hoạt động: Giữa những ồn ào rực rỡ của tuổi trẻ, tụi mình chọn là một góc lửa nhỏ.\n\nF-Skill chỉ mong mình là một trạm dừng trên hành trình trưởng thành của bạn – nơi có ánh lửa trại đầu tiên bạn nhóm được, nút dây đầu tiên bạn buộc chắc tay, và cũng có thể là lần đầu tiên bạn tin tưởng 100% vào bản thân.\n\n✨ F-Skill có gì đặc biệt?\n• Không đặt nặng danh hiệu, chỉ mong bạn sẵn lòng bước tới\n• Không yêu cầu bạn phải thật 'giỏi', chỉ cần bạn sẵn sàng học hỏi\n• Ở đây, mọi người đều có giá trị riêng, từ người gút dây đến người cầm bản đồ\n\n🎒 Gia nhập F-Skill – Bạn sẽ có gì?\n• Những kỹ năng sinh tồn và hoạt động Đoàn\n• Một nhóm bạn đồng hành năng động và dễ thương hết nấc\n• Một môi trường để khám phá thế mạnh và bản sắc riêng của bản thân\n\nKhông phải ai sinh ra cũng biết dựng lều nhưng ai cũng có thể dựng lên một thanh xuân đáng nhớ",
    quote: "Đến với F-Skill, bạn có thể đắm chìm vào những điều mới mẻ, những hoạt động bổ ích mà bản thân bạn chưa từng được trải nghiệm!",
    image: "/images/F-SKILL.jpg",
    members: "25+ thành viên",
    experience: "3+ năm hoạt động",
    benefits: [
      "Những kỹ năng sinh tồn và hoạt động Đoàn",
      "Một nhóm bạn đồng hành năng động và dễ thương hết nấc",
      "Một môi trường để khám phá thế mạnh và bản sắc riêng của bản thân",
      "Không đặt nặng danh hiệu, chỉ mong bạn sẵn lòng bước tới",
      "Không yêu cầu bạn phải thật 'giỏi', chỉ cần bạn sẵn sàng học hỏi",
      "Ở đây, mọi người đều có giá trị riêng, từ người gút dây đến người cầm bản đồ",
    ],
    googleForm: "",
  },
  {
    id: 6,
    name: "FAS",
    field: "Nghệ thuật & Thiết kế",
    position: "Phòng nghệ thuật - Tầng 3",
    looking: "Những tâm hồn nghệ sĩ và đam mê sáng tạo",
    emoji: "🎨",
    shortIntro: "Không gian dành cho những người yêu thích nghệ thuật!",
    description:
      "FAS là nơi mọi ý tưởng sáng tạo đều được chào đón, từ hội họa, điêu khắc đến thiết kế đồ họa.",
    quote: "Nghệ thuật là ngôn ngữ của tâm hồn, hãy để tâm hồn bạn cất tiếng!",
    image: "/images/FAS .jpg",
    members: "18+ thành viên",
    experience: "3+ năm hoạt động",
    benefits: [
      "Học các kỹ thuật vẽ và thiết kế",
      "Triển lãm tác phẩm",
      "Workshop với nghệ sĩ chuyên nghiệp",
      "Phát triển phong cách riêng",
    ],
    googleForm: "",
  },
  {
    id: 7,
    name: "FbaClub",
    field: "Kinh doanh & Marketing",
    position: "Tầng 1 - Khu vực Business",
    looking: "Những người đam mê kinh doanh và marketing",
    emoji: "📈",
    shortIntro: "Nơi phát triển tài năng kinh doanh!",
    description:
      "FbaClub tập trung vào phát triển kỹ năng kinh doanh, marketing và xây dựng thương hiệu.",
    quote: "Kinh doanh là nghệ thuật tạo ra giá trị!",
    image: "/images/FbaClub.jpg",
    members: "22+ thành viên",
    experience: "2+ năm hoạt động",
    benefits: [
      "Học kỹ năng marketing thực tế",
      "Tham gia dự án kinh doanh",
      "Kết nối với doanh nhân",
      "Cơ hội thực tập tại công ty marketing",
    ],
    googleForm: "",
  },
  {
    id: 8,
    name: "FDANX",
    field: "Dance & Biểu diễn nghệ thuật",
    position: "Phòng dance - Tầng 2",
    looking: "Những người đam mê nhảy múa và biểu diễn",
    emoji: "💃",
    shortIntro: "Nơi thể hiện đam mê qua từng bước nhảy!",
    description:
      "FDANX là nơi các bạn có thể học hỏi, thực hành và biểu diễn các điệu nhảy từ truyền thống đến hiện đại.",
    quote: "Nhảy múa là cách thể hiện cảm xúc bằng cơ thể!",
    image: "/images/FDANX.jpg",
    members: "25+ thành viên",
    experience: "3+ năm hoạt động",
    benefits: [
      "Học các điệu nhảy đa dạng",
      "Biểu diễn tại các sự kiện",
      "Tham gia các cuộc thi dance",
      "Phát triển kỹ năng biểu diễn",
    ],
    googleForm: "",
  },
  {
    id: 9,
    name: "FDN-Events",
    field: "Tổ chức sự kiện, truyền thông & sáng tạo",
    position: "Sẽ điền sau khi sắp xếp gian hàng",
    looking: "Cộng sự cháy hết mình - bạn đồng hành rực rỡ",
    emoji: "🎤",
    shortIntro: 'Bọn mình là team "đứng sau mọi spotlight"!',
    description:
      "FDN-Events chuyên tổ chức các chương trình từ học thuật đến giải trí, luôn tìm kiếm những ý tưởng bùng nổ và người đồng hành đầy nhiệt huyết.",
    quote:
      "Mỗi sự kiện là một cơ hội để bạn tỏa sáng, còn tụi mình là người cầm đèn cho bạn lấp lánh!",
    image: "/images/FDN-Events.jpg",
    members: "30+ thành viên",
    experience: "2+ năm hoạt động",
    benefits: [
      "Kỹ năng tổ chức và truyền thông",
      "Cơ hội lên ý tưởng và thực chiến",
      "Môi trường làm việc vui vẻ, năng động",
      "Trải nghiệm đáng nhớ trong thời sinh viên",
    ],
    googleForm: "",
  },
  {
    id: 10,
    name: "FGym",
    field: "Thể thao & Sức khỏe",
    position: "Sân thể thao - Khu vực ngoài trời",
    looking: "Những người yêu thích vận động và thể thao",
    emoji: "⚽",
    shortIntro: "Tập hợp những người yêu thích thể thao!",
    description:
      "FGym tổ chức các hoạt động thể thao, giải đấu và khuyến khích lối sống khỏe mạnh cho cộng đồng sinh viên.",
    quote: "Thể thao không chỉ rèn luyện cơ thể mà còn tôi luyện tinh thần!",
    image: "/images/FGym.png",
    members: "35+ thành viên",
    experience: "4+ năm hoạt động",
    benefits: [
      "Tham gia các môn thể thao đa dạng",
      "Rèn luyện sức khỏe",
      "Tinh thần đồng đội",
      "Tham gia giải đấu liên trường",
    ],
    googleForm: "",
  },
  {
    id: 11,
    name: "FManga-Anime",
    field: "Văn hóa Nhật Bản & Nghệ thuật",
    position: "Phòng văn hóa - Tầng 3",
    looking: "Những người yêu thích văn hóa Nhật Bản",
    emoji: "🌸",
    shortIntro: "Khám phá văn hóa Nhật Bản qua manga và anime!",
    description:
      "FManga-Anime là nơi các bạn có thể tìm hiểu, thảo luận và chia sẻ về văn hóa Nhật Bản thông qua manga và anime.",
    quote: "Văn hóa Nhật Bản là cầu nối giữa truyền thống và hiện đại!",
    image: "/images/FManga-Anime.jpg",
    members: "18+ thành viên",
    experience: "2+ năm hoạt động",
    benefits: [
      "Học tiếng Nhật cơ bản",
      "Tham gia các sự kiện văn hóa",
      "Kết nối với cộng đồng anime",
      "Phát triển kỹ năng vẽ manga",
    ],
    googleForm: "",
  },
  {
    id: 12,
    name: "FMelodies",
    field: "Âm nhạc & Biểu diễn",
    position: "Phòng âm nhạc - Tầng 2",
    looking: "Những người đam mê âm nhạc và biểu diễn",
    emoji: "🎵",
    shortIntro: "Nơi hội tụ những tài năng âm nhạc!",
    description:
      "FMelodies tạo ra những giai điệu tuyệt vời và mang âm nhạc đến gần hơn với mọi người trong cộng đồng.",
    quote: "Âm nhạc là thứ ngôn ngữ chung của nhân loại!",
    image: "/images/FDN-Events.jpg",
    members: "22+ thành viên",
    experience: "5+ năm hoạt động",
    benefits: [
      "Học nhạc cụ và thanh nhạc",
      "Biểu diễn tại các sự kiện",
      "Thu âm và sản xuất nhạc",
      "Kết nối với cộng đồng âm nhạc",
    ],
    googleForm: "",
  },
  {
    id: 13,
    name: "FPT-Rex",
    field: "Công nghệ & Sáng tạo",
    position: "Tầng 2 - Khu vực Innovation",
    looking: "Những người đam mê công nghệ và sáng tạo",
    emoji: "🚀",
    shortIntro: "Nơi biến ý tưởng thành hiện thực!",
    description:
      "FPT-Rex tập trung vào phát triển công nghệ mới, sáng tạo và đổi mới trong lĩnh vực công nghệ thông tin.",
    quote: "Công nghệ là chìa khóa mở ra tương lai!",
    image: "/images/FPT-Rex.jpg",
    members: "30+ thành viên",
    experience: "3+ năm hoạt động",
    benefits: [
      "Học công nghệ mới nhất",
      "Tham gia dự án sáng tạo",
      "Kết nối với chuyên gia công nghệ",
      "Cơ hội thực tập tại FPT",
    ],
    googleForm: "",
  },
  {
    id: 14,
    name: "MEC",
    field: "Kinh tế & Tài chính",
    position: "Tầng 1 - Khu vực Business",
    looking: "Những người quan tâm đến kinh tế và tài chính",
    emoji: "💰",
    shortIntro: "Nơi học hỏi về kinh tế và tài chính!",
    description:
      "MEC cung cấp kiến thức về kinh tế, tài chính và đầu tư cho sinh viên quan tâm đến lĩnh vực này.",
    quote: "Hiểu biết về kinh tế là chìa khóa thành công!",
    image: "/images/MEC.jpg",
    members: "25+ thành viên",
    experience: "2+ năm hoạt động",
    benefits: [
      "Học về kinh tế và tài chính",
      "Tham gia các cuộc thi kinh tế",
      "Kết nối với chuyên gia tài chính",
      "Cơ hội thực tập tại ngân hàng",
    ],
    googleForm: "",
  },
  {
    id: 15,
    name: "SODES",
    field: "Phát triển phần mềm & Hệ thống",
    position: "Tầng 2 - Khu vực IT",
    looking: "Những người đam mê phát triển phần mềm",
    emoji: "💻",
    shortIntro: "Nơi tạo ra những sản phẩm phần mềm chất lượng!",
    description:
      "SODES tập trung vào phát triển phần mềm, hệ thống và các giải pháp công nghệ thông tin.",
    quote: "Phần mềm tốt là phần mềm đáp ứng nhu cầu người dùng!",
    image: "/images/SODES.png",
    members: "20+ thành viên",
    experience: "3+ năm hoạt động",
    benefits: [
      "Học phát triển phần mềm",
      "Tham gia dự án thực tế",
      "Kết nối với chuyên gia IT",
      "Cơ hội thực tập tại công ty phần mềm",
    ],
    googleForm: "",
  },
  {
    id: 16,
    name: "Tiếng trung - Fchinies",
    field: "Ngôn ngữ & Văn hóa Trung Quốc",
    position: "Phòng ngôn ngữ - Tầng 1",
    looking: "Những người yêu thích tiếng Trung và văn hóa Trung Quốc",
    emoji: "🇨🇳",
    shortIntro: "Học tiếng Trung, khám phá văn hóa Trung Quốc!",
    description:
      "Fchinies là nơi các bạn có thể học tiếng Trung, tìm hiểu văn hóa Trung Quốc và kết nối với cộng đồng người học tiếng Trung.",
    quote: "Học ngôn ngữ là mở ra cánh cửa mới cho tương lai!",
    image: "/images/Tiếng trung - Fchinies.jpg",
    members: "15+ thành viên",
    experience: "2+ năm hoạt động",
    benefits: [
      "Học tiếng Trung từ cơ bản đến nâng cao",
      "Tham gia các sự kiện văn hóa Trung Quốc",
      "Kết nối với người bản xứ",
      "Cơ hội du học tại Trung Quốc",
    ],
    googleForm: "",
  },
  {
    id: 17,
    name: "F-MIC",
    field: "Truyền thông & Báo chí",
    position: "Tầng 1 - Studio truyền thông",
    looking: "Những người đam mê truyền thông và báo chí",
    emoji: "📰",
    shortIntro: "Nơi đào tạo những nhà báo tương lai!",
    description:
      "F-MIC tập trung vào đào tạo kỹ năng truyền thông, báo chí và sản xuất nội dung chất lượng cao.",
    quote: "Truyền thông có sức mạnh thay đổi thế giới!",
    image: "/images/FDN-Events.jpg",
    members: "18+ thành viên",
    experience: "2+ năm hoạt động",
    benefits: [
      "Học kỹ năng truyền thông",
      "Thực hành viết báo và làm phóng sự",
      "Kết nối với nhà báo chuyên nghiệp",
      "Cơ hội thực tập tại tòa soạn",
    ],
    googleForm: "",
  },
  {
    id: 18,
    name: "Profile",
    field: "Phát triển cá nhân & Kỹ năng mềm",
    position: "Tầng 1 - Khu vực phát triển cá nhân",
    looking: "Những người muốn phát triển bản thân",
    emoji: "🌟",
    shortIntro: "Nơi phát triển toàn diện con người!",
    description:
      "Profile tập trung vào phát triển kỹ năng mềm, kỹ năng lãnh đạo và xây dựng hình ảnh cá nhân chuyên nghiệp.",
    quote: "Phát triển bản thân là đầu tư tốt nhất cho tương lai!",
    image: "/images/profile1.png",
    members: "20+ thành viên",
    experience: "2+ năm hoạt động",
    benefits: [
      "Học kỹ năng mềm và lãnh đạo",
      "Xây dựng hình ảnh cá nhân",
      "Tham gia các workshop phát triển",
      "Kết nối với chuyên gia phát triển cá nhân",
    ],
    googleForm: "",
  },
]
