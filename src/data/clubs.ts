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
  logoImg?: string
  pdfUrl?: string
  members: string
  experience: string
  benefits: string[]
  googleForm: string
  goals2024?: string[]
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
  pdfUrl?: string
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
    id: 101,
    name: "🔷 FPS - FPT Play Station",
    field: "Game online và offline - Hỗ trợ làm việc nhóm",
    position: "Sảnh FPT SCHOOL",
    looking: "Những người bạn có cùng đam mê game",
    emoji: "🎮",
    shortIntro: "FPS là nơi hội tụ của những game thủ đam mê, nơi game không chỉ là giải trí mà còn là cách để rèn luyện tư duy chiến thuật, phản xạ nhanh và tinh thần đồng đội.",
    description: "📖 Giới thiệu\nHoạt động chính:\n\nTổ chức giải đấu game định kỳ\nCác buổi workshop học hỏi chiến thuật và kỹ năng\nGiao lưu, kết bạn qua các buổi offline và online\nChia sẻ tin tức, review game mới nhất\n\nThành viên hướng tới:\n\nTất cả các bạn yêu thích game, từ beginners đến pro\nCác bạn muốn nâng cao kỹ năng, chiến thuật chơi game\nNhững ai muốn kết bạn, mở rộng mối quan hệ trong cộng đồng game thủ\n\n🌞 Mục tiêu hoạt động\nTìm kiếm 1 nơi vui chơi giao lưu cùng sở thích và đào tạo một môi trường esport\n\n📆 Thâm niên\n2 năm hoạt đã có những bước tiến lớn nhầm mang lại cho học sinh 1 sân chơi esport tự do và có tính kỷ luật.\n\n💥 FPS không chỉ là game – mà là:\n🔥 Hành trình rèn kỹ năng ý trí tinh thần trách nhiệm của bản thân tìm kiếm những thứ mới lạ.\n\nSẵn sàng chinh phục mọi tựa game mà bạn yêu thích.\n🎯 FPS rèn luyện tinh thần-giải tỏa mọi cảm xúc-mang lại giá trị tinh thần chơi game. Mỗi ngày là 1 niềm vui và cũng là 1 trải nghiệm đáng nhớ.",
    quote: "Game không chỉ là chơi – mà còn là cách để kết nối và phát triển!",
    image: "/images/FPS.jpg",
    logoImg: "/images/logo/FPS.jpg",
    members: "20+ thành viên",
    experience: "2 năm hoạt động",
    benefits: [
      "🔹 Đào tạo trình độ kỹ năng gamesen",
      "🔹 Có thêm những người bạn mới cùng sở thích",
      "🔹 Trong một môi trường giải trí 0 toxic",
      "🔹 Thử thách bản thân với tới đỉnh cao của 1 player",
      "✅ Tìm hiểu những tựa game nhiều người chơi và ít người chơi"
    ],
    googleForm: "",
  },
  {
    id: 102,
    name: "🌍 MEC - Master English Club",
    field: "Tiếng Anh giao tiếp • Trò chơi sáng tạo • Kỹ năng mềm qua hoạt động vui",
    position: "Sảnh FPT SCHOOL",
    looking: "Những \"hành tinh nhí\" yêu thích khám phá thế giới bằng tiếng Anh, thích kết nối và không ngại bật chế độ global citizen!",
    emoji: "🌐",
    shortIntro: "MEC là nơi bạn bắt đầu chuyến hành trình vòng quanh thế giới – không cần visa, chỉ cần bạn không ngần ngại sử dụng tiếng Anh như một công cụ kết nối với mọi người!",
    description: "MEC là nơi bạn bắt đầu chuyến hành trình vòng quanh thế giới – không cần visa, chỉ cần bạn không ngần ngại sử dụng tiếng Anh như một công cụ kết nối với mọi người!\n\nTụi mình cùng debate, chơi game, thuyết trình, và luyện kỹ năng mềm để biến tiếng Anh thành hộ chiếu vững chắc nhất!\n\n🎯 Mục tiêu hoạt động:\nLan tỏa niềm yêu thích tiếng Anh, giúp các bạn học sinh tự tin sử dụng ngôn ngữ trong đời sống thực tế qua các hoạt động vừa học vừa chơi.\nMEC hướng tới việc xây dựng một cộng đồng nói tiếng Anh tự nhiên, đầy nhiệt huyết và có tư duy toàn cầu🌎.\n\n👥 Thành viên:\nHiện tại CLB có 40 thành viên, mỗi người một cá tính, một phong cách – nhưng cùng chung một mục tiêu: bứt phá khả năng tiếng Anh và cùng nhau phát triển!\n\n📆 Thâm niên:\nRa đời từ năm 2021, MEC đã trải qua nhiều mùa hoạt động sôi nổi, gắn bó và không ngừng lớn mạnh – từ một nhóm nhỏ yêu tiếng Anh đến một sân chơi đa dạng màu sắc và năng động hơn qua từng năm!\n\n💡Các giá trị mà MEC đang hướng đến:\n\n🔤 M – Mindset mở rộng:\nMở rộng tư duy, nâng cấp khả năng nói trước đám đông và tự tin thể hiện bản thân bằng tiếng Anh mọi lúc mọi nơi.\n\n🎙️ E – English thật sự:\nEnglish ở MEC sẽ không chỉ là ngữ pháp và từ vựng, mà là công cụ để giao tiếp, chơi, tranh luận, và kết nối với thế giới.\n\n🤝 C – Connection không giới hạn:\nCùng nhau tạo nên một cộng đồng học tập tích cực, nơi bạn tìm được đồng đội là những anh chị đi trước đầy kinh nghiệm và những người bạn \"hợp vibe\" nhất!",
    quote: "Khởi động chuyến bay MEC ngay hôm nay! 🛫🌍",
    image: "/images/MEC.jpg",
    logoImg: "/images/logo/Logo MEC tách nền mới.png",
    members: "40 thành viên",
    experience: "Từ năm 2021",
    benefits: [
      "🔤 M – Mindset mở rộng: Tự tin nói tiếng Anh trước đám đông",
      "🎙️ E – English thật sự: Tiếng Anh là công cụ giao tiếp thực tế",
      "🤝 C – Connection không giới hạn: Cộng đồng học tập tích cực",
      "🌎 Phát triển tư duy toàn cầu và kỹ năng giao tiếp quốc tế",
      "🎮 Học tiếng Anh qua các hoạt động vui, sáng tạo và thực tiễn"
    ],
    googleForm: "",
  },
  {
    id: 105,
    name: "🧪 FChemColor",
    field: "Hóa học – Nghệ thuật – Thí nghiệm – Sáng tạo",
    position: "Sảnh FPT SCHOOL",
    looking: "Những người yêu thích khoa học, hóa học và nghệ thuật sáng tạo",
    emoji: "🧪",
    shortIntro: "Bạn yêu thích khám phá những phản ứng kỳ diệu, muốn tìm hiểu bí mật phía sau những hiện tượng quen thuộc trong cuộc sống, hay đơn giản là thích \"làm thí nghiệm cho vui\"? Hãy đến với Câu lạc bộ Hóa học – nơi biến những công thức khô khan thành những trải nghiệm đầy sắc màu!",
    description: "💡 Lời mời:\nNếu bạn muốn học Hóa theo cách thú vị nhất, kết bạn cùng những người chung sở thích, và tự tay tạo ra những phản ứng “wow”, hãy gia nhập ngay Câu lạc bộ Hóa học.\nHóa học không chỉ là môn học – đó là một hành trình khám phá thế giới!\n\n✨ Mục tiêu hoạt động\n\nBồi dưỡng kiến thức Hóa học thông qua các buổi chia sẻ, thảo luận và thực hành.\n\nKhơi gợi niềm đam mê nghiên cứu khoa học trong học sinh.\n\nỨng dụng Hóa học vào đời sống: làm sản phẩm thực tế, bảo vệ môi trường, giải thích hiện tượng tự nhiên.\n\n🔬 Hoạt động tiêu biểu\n\nTổ chức thí nghiệm vui và trình diễn Hóa học tại sân trường.\n\nChuyến tham quan nhà máy – phòng thí nghiệm.\n\nChia sẻ kinh nghiệm học tập, phương pháp giải bài tập nhanh – hay.\n\n📅 Thời gian sinh hoạt: 2 tuần/lần vào chiều thứ Sáu.\n📍 Địa điểm: Phòng thí nghiệm 115 Hóa học của trường.\n👩‍🔬 Đối tượng tham gia: Tất cả học sinh yêu thích Hóa học, không giới hạn khối lớp.",
    quote: "Khoa học không chỉ để hiểu – mà còn để tạo nên cái đẹp!",
    image: "/images/fchemcolor.png",
    logoImg: "/images/logo/fchemcolor.png",
    members: "15+ thành viên",
    experience: "Mới thành lập",
    benefits: [
      "Khám phá kiến thức hóa học qua các thí nghiệm thú vị",
      "Phát triển kỹ năng nghệ thuật và sáng tạo",
      "Tham gia các dự án STEAM và triển lãm khoa học nghệ thuật",
      "Workshop về hóa học màu sắc và ứng dụng",
      "Môi trường học tập thú vị, khuyến khích tư duy đổi mới"
    ],
    googleForm: "",
  },
  {
    id: 106,
    name: "🌸 HOA NỞ MÙA VĂN",
    field: "Văn học – Sáng tác – Đọc sách – Nghệ thuật ngôn từ",
    position: "Sảnh FPT SCHOOL",
    looking: "Một trái tim nhạy cảm với cái đẹp? Một bộ óc sắc sảo thích phản biện? Hay đơn giản, là người từng được một câu văn chạm tới tim?",
    emoji: "📖",
    shortIntro: "🌼 Nơi tâm hồn chạm vào chữ nghĩa, nơi ngôn từ trở thành nghệ thuật.",
    description: "✒️ Chúng tôi là ai?\nLà những người yêu cái đẹp của văn chương, đam mê kể chuyện bằng con chữ, rung động trước từng vần thơ và không ngại đối diện với những câu hỏi lớn của cuộc sống qua từng trang văn.\n\n\"Hoa nở mùa Văn\" là nơi bạn sẽ:\n\nViết những điều bạn nghĩ, sống trong thế giới bạn mơ.\n\nCùng nhau đọc – cảm – viết, nuôi dưỡng trí tưởng tượng, tư duy phản biện và sự tinh tế trong cảm xúc.\n\nTham gia các hoạt động: viết sáng tạo, thi viết, diễn thuyết, sân khấu hóa tác phẩm, làm báo tường, tổ chức workshop và nhiều chương trình nghệ thuật độc đáo.\n\n🌱 Tại sao là “Hoa nở”?\nVì mỗi tâm hồn đến với Văn đều có thể nở hoa – theo cách riêng của mình.\nDù bạn là đóa hoa mong manh thích viết lặng thầm, hay là bông hoa rực rỡ của sân khấu hóa văn học – chúng tôi luôn có chỗ cho bạn.\n\n🎯 Bạn là ai?\n\nMột trái tim nhạy cảm với cái đẹp?\n\nMột bộ óc sắc sảo thích phản biện?\n\nHay đơn giản, là người từng được một câu văn chạm tới tim?\n\nHãy để “Hoa nở mùa Văn” là mảnh đất nuôi dưỡng bạn – để từ đó, bạn nở rộ.\n\n📩 Cánh cửa văn chương đã mở. Bạn có dám bước vào?",
    quote: "Tại Hoa nở mùa Văn, bạn không cần giỏi Văn – chỉ cần có điều muốn nói. Hãy để tâm hồn bạn… nở hoa theo cách của riêng mình!",
    image: "/images/hoanomuavan.jpg",
    logoImg: "/images/logo/Hoa nở mùa Văn_Logo.png",
    members: "15 thành viên",
    experience: "Từ năm 2023",
    benefits: [
      "🌱 Chân thật trong cảm xúc - Viết bằng trái tim, không gượng ép",
      "🎨 Sáng tạo trong thể hiện - Kể chuyện qua nhiều hình thức nghệ thuật",
      "💭 Tư duy sâu sắc - Biết đặt câu hỏi và nhìn từ nhiều góc độ",
      "🤝 Kết nối bằng cảm xúc - Được lắng nghe, sẻ chia và là chính mình",
      "📝 Cơ hội xuất bản tác phẩm trong các ấn phẩm của CLB"
    ],
    googleForm: "",
  },
  {
    id: 1,
    name: "🌲ECO-F🌲",
    field: "Chế tao ra những món đồ vui nhộn từ rác có thể tái chế (như làm các bông hoa từ chai nhựa 🌹, hoặc các loại xe nhỏ 🚗)",
    position: "Sảnh FPT SCHOOL",
    looking: "Những bạn có mong muốn khám phá bản thân, yêu 💖 môi trường, có các kĩ năng handmade cơ bản, muốn tìm người cùng sở thích yêu môi trường với nhiều người khác",
    emoji: "🌱",
    shortIntro: " Eco-F sẽ giúp bạn hiểu hơn về thiên nhiên🎍, biết tận dụng những thứ “vô bổ” trong mắt người khác thành những thứ có ích cho chúng ta, có thể là những người xung quanh chúng ta. Ngoài ra, Eco-F sẽ giúp bạn biết them về nhiều tác hại của các loại rác thải 🗑️, biết cách phân loại chúng để làm cho Trái Đất của chúng ta sạch hơn",
    description:
      "CLB ECO thúc đẩy ý thức bảo vệ môi trường và phát triển bền vững trong cộng đồng sinh viên.",
    quote: "Trái đất không phải là tài sản của chúng ta, mà là món quà cho thế hệ tương lai!",
    image: "/images/CLB ECO.jpeg",
    logoImg: "/images/logo/ECO-F (60 x 60 cm).png",
    members: "6+ thành viên",
    experience: "2 năm hoạt động",
    benefits: [
      "Cơ hội để phát triển tay nghề",
      "Kiến thức về môi trường xung quanh chúng ta.",
      "Càng thêm yêu môi trường",
      "Hiểu hơn về trái đất",
      "Có thêm nhiều kiến thức về môn sinh học",
    ],
    googleForm: "",
    goals2024: [
      "Truyền cảm hứng yêu thiên nhiên và nâng cao ý thức bảo vệ môi trường cho các bạn trẻ.",
      "Giúp các bạn cải thiện kỹ năng làm đồ handmade từ vật liệu tái chế.",
      "Tạo môi trường trao đổi kiến thức sinh học và các hoạt động sáng tạo xanh giữa các thành viên."
    ],
  },
  {
    id: 104,
    name: "⚽ CLB Bóng đá",
    field: "Bóng đá – Thể thao – Teamwork – Kỷ luật – Sức bền",
    position: "Sảnh FPT SCHOOL",
    looking:
      "Bạn yêu bóng đá, muốn rèn sức khỏe – kỹ thuật – tinh thần đồng đội. Ưu tiên tinh thần fair‑play, kỷ luật và cầu tiến. Không cần giỏi – chỉ cần chịu khó luyện tập.",
    emoji: "⚽",
    shortIntro:
      "Mái nhà của những trái tim yêu bóng đá. Cùng nhau đổ mồ hôi, rèn bản lĩnh thi đấu và cháy hết mình vì màu áo!",
    description:
      "📖 Giới thiệu\nCLB Bóng đá là nơi bạn được rèn thể lực, kỹ thuật cá nhân và tinh thần đồng đội trong môi trường nghiêm túc nhưng đầy niềm vui.\n\nHoạt động chính:\n\nTập luyện thể lực và kỹ thuật cá nhân\nLuyện phối hợp nhóm, chiến thuật thi đấu\nGiao hữu nội bộ và ngoại khóa\nTham gia các giải phong trào của trường\n\nThành viên hướng tới:\n\nBạn yêu bóng đá, muốn rèn luyện sức khỏe\nBạn thích kỷ luật, tinh thần fair‑play và teamwork\nKhông cần giỏi – chỉ cần chịu khó luyện tập\n\n🎯 Mục tiêu hoạt động\nRèn thể lực, kỹ thuật, kỷ luật và bản lĩnh thi đấu\nXây dựng tập thể gắn kết – tôn trọng\n\n📆 Lịch sinh hoạt\nTập luyện 2 buổi/tuần tại sân thể thao (sau giờ học)\nGiao hữu theo tháng; tổng duyệt trước giải\n\n🏆 Thành tích tiêu biểu\nÁ quân giải phong trào nội bộ 2024\nTop 4 giải giao hữu liên CLB khối THPT 2023",
    quote: "Đã ra sân là cháy hết mình!",
    image: "/images/bongda.png",
    logoImg: "/images/logo/Bongda.jpg",
    members: "25+ thành viên",
    experience: "Nhiều mùa giải phong trào",
    benefits: [
      "Nâng cao thể lực, tốc độ và sức bền",
      "Cải thiện kỹ thuật cá nhân: chuyền, sút, kiểm soát bóng",
      "Hiểu chiến thuật và đọc trận đấu",
      "Tinh thần đồng đội – kỷ luật – fair‑play",
      "Cơ hội tham gia giải đấu và giao hữu thường xuyên",
    ],
    googleForm: "",
  },
  {
    id: 2,
    name: "💼 CLB FBIZ – FPT ĐÀ NẴNG",
    field: "\nKinh doanh – khởi nghiệp sáng tạo\nTư duy tài chính – mô hình mô phỏng\nTổ chức hoạt động trải nghiệm thực tiễn\nThiết kế dự án, game – sản phẩm thực chiến",
    position: "Sảnh FPT SCHOOL",
    looking: "Các bạn học sinh yêu thích khám phá, thích làm – không chỉ nói\nNgười có óc sáng tạo, máu “liều tích cực” và chịu khó teamwork\nKhông cần giỏi – chỉ cần dám thử là đủ rồi!",
    emoji: "💼",
    shortIntro: "🔹 Nơi khởi nguồn cho những ý tưởng bùng nổ! 💥",
    description:
      "👀 GIỚI THIỆU NHANH\nCLB Business là một sân chơi năng động dành cho những bạn trẻ yêu thích kinh doanh, sáng tạo và tư duy chiến lược. Tụi mình không ngồi nói lý thuyết – mà còn có thể tự tay làm sản phẩm, tổ chức hoạt động, tạo game và trải nghiệm mong các bạn sẽ là những mảnh ghép cùng chúng tớ thực hiện lên điều đó!\n\n✨ \"Think Bold. Try Real. Build Different.\"",
    quote: "✨Think Bold. Try Real. Build Different.✨",
    image: "/images/CLB FBIZ.png",
    logoImg: "/images/logo/CLB FBIZ.jpg",
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
    name: "Sunshare club",
    field: "Tổ chức sự kiện, công tác xã hội, thiện nguyện",
    position: "Sảnh FPT SCHOOL",
    looking: "“Một người sẵn sàng cho đi – không phải vì có nhiều, mà vì hiểu được giá trị của yêu thương”🤝",
    emoji: "☀️",
    shortIntro: "Sunshare không ồn ào, không hoành tráng – tụi mình lặng lẽ đi từng bước nhỏ, để giúp một cụ già bớt cô đơn, một đứa trẻ được cười nhiều hơn, một hoàn cảnh được lắng nghe, một tâm hồn thấy ấm lại.\nChúng mình làm thiện nguyện không phải vì \"làm cho đủ\", mà là vì thật lòng muốn làm. Có thể là một gian hàng nhỏ gây quỹ, một buổi phát cháo lúc sáng sớm, hay một chiến dịch viết thiệp gửi yêu thương – tất cả đều xuất phát từ trái tim.\nỞ đây, bạn không cần phải “hoàn hảo”, chỉ cần chân thành và sẵn sàng bắt đầu từ điều tử tế nhất.",
    description: "Tụi mình tin rằng:\n🌱 \"Tử tế không cần lý do – chỉ cần bạn muốn Lan tỏa nó.\"\n\n\"Không phải ai sinh ra cũng đủ đầy, nhưng ai cũng có thể là ánh sáng nhỏ trong cuộc đời của người khác.\"\n\"Sunshare không bán nắng, chỉ sưởi ấm lòng người.\"\n\nNếu bạn cũng nghĩ vậy – chào mừng bạn về đội Sunshare. Không cần phải thay đổi cả thế giới, chỉ cần mỗi ngày, mình cùng nhau làm điều nhỏ bé, nhưng thật đẹp.\n\n☀️ SUNSHARE – Nơi những điều tử tế được ươm mầm\nKhông có danh hiệu, không có spotlight. Chỉ có những người trẻ, chọn bước tới thay vì ngoảnh mặt làm ngơ.\nCác bạn có thể thấy chúng tớ ở phòng 105\n\n🌿 Mục tiêu hoạt động của Sunshare:\n• Là một nhóm bạn trẻ không giỏi nói lời hoa mỹ, nhưng tin rằng:\n• Một bữa cơm được chuẩn bị bằng tấm lòng\n• Một chiếc thiệp nhỏ viết bằng tay\n• Một sáng chủ nhật dậy sớm để phát cháo...\n• ... cũng có thể làm ấm một cuộc đời.\n\nSunshare không cần bạn phải \"tốt hoàn hảo\", chỉ cần bạn sẵn lòng làm điều tốt.\nDù là cầm loa, vẽ bảng tên, xếp quà, hay đơn giản là lắng nghe một câu chuyện buồn của ai đó, tụi mình đều trân trọng – vì ở đây, không có ai là thừa cả.\n\n📌 Vài điều tụi mình tự hào:\n• Thành lập vào 24/9/2018 - hơn 7 năm hoạt động - không bỏ một mùa Tết nào.\n• Gây quỹ từ những chiếc bánh tráng nhỏ nhất.\n• Có hơn 40 con người, và từng người đều đáng tin đến lạ.\n\n✨ Gia nhập Sunshare – Bạn sẽ có gì?\n• Không phải \"kỹ năng mềm\", mà là một trái tim cứng cáp hơn sau từng lần giúp đỡ người khác.\n• Không chỉ là \"trải nghiệm thiện nguyện\", mà là những khoảnh khắc khiến bạn rơi nước mắt – vì xúc động.\n• Không chỉ \"thêm vào CV\", mà là bớt đi sự vô cảm.\n\nBạn sẽ học được cách:\n• Tự tay tạo nên một dự án vì người khác.\n• Đứng trước khó khăn, không lùi bước.\n• Yêu quý từng nụ cười mà mình góp phần mang đến.",
    quote: "“Sunshare không bán nắng, chỉ sưởi ấm lòng người.”",
    image: "/images/CLB Sunshare.jpg",
    logoImg: "/images/logo/LOGO SUNSHARE.PNG",
    members: "40+ thành viên",
    experience: "7+ năm hoạt động",
    benefits: [
      "Một trái tim cứng cáp hơn sau từng lần giúp đỡ người khác",
      "Những khoảnh khắc khiến bạn rơi nước mắt – vì xúc động",
      "Bớt đi sự vô cảm",
      "Tự tay tạo nên một dự án vì người khác",
      "Đứng trước khó khăn, không lùi bước",
      "Yêu quý từng nụ cười mà mình góp phần mang đến",
    ],
    googleForm: "",
  },
  {
    id: 4,
    name: "🎙️F-MIC",
    field: "Dẫn chương trình, hoạt náo sự kiện, nghệ thuật giao tiếp và biểu đạt🎭",
    position: "Sảnh FPT SCHOOL",
    looking: "Bạn không chỉ là người nói — bạn là người kể chuyện.\n🌟 Bạn yêu ánh đèn sân khấu.\n🎤 Bạn tin rằng từng câu chữ đều có sức mạnh.\n🔥 Và bạn muốn biến chất giọng của mình thành điều đặc biệt nhất.",
    emoji: "🎙️",
    shortIntro: "👉 Vậy thì F-MIC chính là nơi bạn cất giọng, viết nên hành trình riêng, và khiến đám đông lắng nghe.\n\n💖 Một chút về chúng tớ:\nF-MIC không chỉ là một câu lạc bộ dẫn chương trình – tụi mình là điểm chạm của những tâm hồn biết thể hiện, dám đứng trước công chúng và tạo nên cảm xúc bằng lời nói.\nỞ đây, bạn sẽ học được cách làm chủ sân khấu, tự tin giao tiếp và biến từng màn dẫn dắt thành một tác phẩm nghệ thuật.\n\n🎙️Cùng F-MIC, hãy để giọng nói của bạn tỏa sáng – theo cách mà không ai khác làm được.",
    description: "✨ Nói nhỏ cho bạn biết nhé đây là : \"Nơi Fschoolers cất giọng và tỏa sáng\"\n\n📌Mái nhà \"Ếp-êm-ai-xi\" ở đây nè : (cập nhập sau)\n\n✨ Mục tiêu hoạt động:\n• Không đơn thuần là kỹ năng dẫn chương trình, F-MIC giúp bạn phát triển tư duy ngôn ngữ, phong thái sân khấu và khả năng kết nối cảm xúc với khán giả – để mỗi lần cầm mic không chỉ là thể hiện, mà là chạm tới trái tim người nghe.\n\n💕 Ngoan xinh iu:\n• Là ngôi nhà nhỏ của 15 thành viên đầy đam mê và khát vọng\n• Dù chỉ mới được thành lập trong thời gian vừa qua nhưng với hướng đi bền bỉ và mục đích to lớn, chúng tớ sẽ là một chỗ dựa tiềm năng cùng bạn \"vượt ngàn chông gai\"\n\n🍓Những quả ngọt khi bạn là một mảnh ghép của F-MIC:\n• 🎤 Tự tin toả sáng trước đám đông\n• 🎤 Phong thái sân khấu chuyên nghiệp, phát triển kĩ năng giao tiếp, kết nối\n• 🎤 Cơ hội được chọn làm MC cho các sự kiện lớn\n• 🎤 Một gia đình \"thực thụ\" năng động - vui vẻ - cá tính",
    quote: "Nơi Fschoolers cất giọng và tỏa sáng",
    image: "/images/F-MIC.jpg",
    logoImg: "/images/logo/F - MIC (7).png ( nền trong suốt ).png",
    members: "15 thành viên",
    experience: "Mới thành lập",
    benefits: [
      "Tự tin toả sáng trước đám đông",
      "Phong thái sân khấu chuyên nghiệp",
      "Phát triển kĩ năng giao tiếp, kết nối",
      "Cơ hội được chọn làm MC cho các sự kiện lớn",
      "Một gia đình \"thực thụ\" năng động - vui vẻ - cá tính",
    ],
    googleForm: "",
  },
  {
    id: 5,
    name: "F-Skill",
    field: "Chia sẻ những kĩ năng thiết yếu trong Đoàn, trong cuộc sống như nhận mật thư, nắm bắt thông tin từ cờ semaphore/ mã morse trong tình huống khẩn cấp hay những kĩ năng cần thiết trong cắm trại (dựng lều, rút dây...), hoặc tham gia bất cứ trò chơi nào bạn muốn.",
    position: "Sảnh FPT SCHOOL",
    looking: "Những bạn có mong muốn khám phá bản thân, hay học hỏi thêm những kĩ năng giúp ích trong cuộc sống, hoặc tìm kiếm những người bạn có cùng chung sở thích.",
    emoji: "🌟",
    shortIntro: "Chúng tớ không chỉ là câu lạc bộ về học thuật, mà còn kết hợp cả một số sự kiện của nhà trường. Đến với chúng tớ, các bạn vừa được học thêm những kĩ năng mới, không những thế, các bạn được vui chơi, tìm kiếm những thế mạnh khác của bản thân mình. Đây là mái nhà chung giúp các bạn phát triển bản thân, đồng thời gióp các bạn không cảm thấy quá gò bó nếu chỉ tập trung vào học thuật hay sự kiện.",
    description: "Chúng mình tin rằng: Đến với F-Skill, bạn có thể đắm chìm vào những điều mới mẻ, những hoạt động bổ ích mà bản thân bạn chưa từng được trải nghiệm!",
    quote: "Đến với F-Skill, bạn có thể đắm chìm vào những điều mới mẻ, những hoạt động bổ ích mà bản thân bạn chưa từng được trải nghiệm!",
    image: "/images/F-SKILL.JPG",
    logoImg: "/images/logo/F-SKILL.png",
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
    field: "CLB trình diễn múa nghệ thuật",
    position: "Sảnh FPT SCHOOL",
    looking: "Những bạn từng thấy trái tim mình rung lên theo từng nhịp nhạc, tin rằng múa không chỉ là biểu diễn, mà là cách để bộc lộ bản ngã, giải phóng cảm xúc và kể nên những điều không lời",
    emoji: "💃",
    shortIntro: "Nơi những nhịp thở hóa thành chuyển động. FAS theo đuổi múa hiện đại và múa dân gian đương đại, kết hợp yếu tố truyền thống và hơi thở đương thời, tạo nên những phần trình diễn vừa gần gũi, vừa đầy sức sống.",
    description: "💥Tên Câu Lạc Bộ: FAS\nLĩnh vực hoạt động: CLB trình diễn múa nghệ thuật\nNơi những nhịp thở hóa thành chuyển động.\n\nBạn từng thấy trái tim mình rung lên theo từng nhịp nhạc?\nBạn tin rằng múa không chỉ là biểu diễn, mà là cách để bộc lộ bản ngã, giải phóng cảm xúc và kể nên những điều không lời?\n\nChào mừng bạn đến với FAS – một không gian nghệ thuật nơi tự do và cảm xúc là cốt lõi.\nTụi mình theo đuổi múa hiện đại và múa dân gian đương đại, kết hợp yếu tố truyền thống và hơi thở đương thời, tạo nên những phần trình diễn vừa gần gũi, vừa đầy sức sống.\n\n🌿 Ở FAS, bạn sẽ...\n✨ Được chuyển động bằng cảm xúc, không áp lực kỹ thuật, không sợ phán xét – chỉ cần bạn dám bắt đầu.\n✨ Thử nghiệm và khám phá bản thân qua từng chủ đề biểu diễn, từ nhẹ nhàng sâu lắng đến mạnh mẽ bùng nổ.\n✨ Tham gia các sân khấu lớn nhỏ, nơi bạn không chỉ đứng dưới ánh đèn, mà thực sự sống trong từng khoảnh khắc.\n✨ Gắn kết với những người bạn đồng hành cùng chung tình yêu với múa, cùng tạo nên những kỷ niệm không thể lặp lại.\n\n💫 FAS không đặt nặng \"đúng\" hay \"đẹp\"\nThay vào đó, chúng mình tìm kiếm:\n🔥 Cảm xúc thật – Chuyển động thật – Kết nối thật.\nDù bạn từng học múa hay chưa bao giờ nhảy trước đám đông – FAS luôn chừa chỗ cho bạn.\n\nHãy để cơ thể bạn lên tiếng,\nHãy để đam mê được thấy ánh sáng.",
    quote: "Hãy để cơ thể bạn lên tiếng, hãy để đam mê được thấy ánh sáng!",
    image: "/images/FAS.jpg",
    logoImg: "/images/logo/LOGO FAS (1).png",
    members: "11 thành viên",
    experience: "Từ 2022",
    benefits: [
      "Khám phá bản thân qua từng nhịp chuyển động – hiểu rõ cơ thể và cảm xúc của chính mình",
      "Đắm chìm trong không gian đầy âm nhạc, nơi bạn được tự do thể hiện mà không lo bị đánh giá",
      "Học cách lắng nghe cơ thể – và để nó lên tiếng thay cho lời nói",
      "Trở thành một phần của cộng đồng nhỏ gắn bó, nơi mỗi thành viên đều truyền cảm hứng cho nhau",
      "Rèn luyện sự kiên nhẫn, kỷ luật và khả năng cảm nhận cái đẹp – không chỉ trong nghệ thuật mà trong cả cuộc sống",
    ],
    googleForm: "",
    goals2024: [
      "Tạo không gian tự do cho mọi người thể hiện cảm xúc qua múa",
      "Phát triển múa hiện đại và múa dân gian đương đại",
      "Tổ chức các buổi biểu diễn và sự kiện nghệ thuật",
      "Xây dựng cộng đồng yêu thích múa nghệ thuật"
    ],
  },
  {
    id: 7,
    name: "🏸 FbaClub",
    field: "Cầu lông – Rèn luyện thể lực – Phản xạ – Kỷ luật – Kết nối",
    position: "Sảnh FPT SCHOOL",
    looking: "🔍 Những tay vợt trẻ đầy năng lượng ⚡, cháy hết mình trên sân cầu🔥 và không ngại thử thách!",
    emoji: "🏸",
    shortIntro:
      "Chào mừng bạn đến với FbaClub – nơi tụ hội những người yêu cầu lông tại THPT FPT Đà Nẵng!\nĐây không chỉ là nơi luyện tập, mà còn là không gian để bứt phá bản thân, xây tinh thần thép và gắn kết bạn bè.\nDù bạn là “tân binh” hay đã quen vợt, FbaClub luôn sẵn sàng đồng hành cùng bạn!\nKỹ thuật – Tinh thần – Kết nối 💫",
    description:
      "🫵🏻 Tại đây, bạn sẽ:\n🏸 Rèn kỹ năng từ cơ bản đến nâng cao\n⚙️ Làm quen chiến thuật hiện đại\n🧠 Rèn phản xạ, thể lực và kỷ luật\n🤝 Gắn bó cùng “đồng đội” nhiều khối lớp\n\nFbaClub chính là nơi để bạn:\n“Vung vợt tự tin – Chinh phục từng điểm số – Gắn kết bằng đam mê!”\nBạn đã sẵn sàng trở thành một phần của FbaClub chưa?\nGia nhập Gen mới – Cháy hết mình trên sân cầu cùng FbaClub! 💪🔥",
    quote: "FbaClub – Tung vợt rực lửa, kết nối đam mê! 💥",
    image: "/images/FbaClub.jpg",
    logoImg: "/images/logo/FBaClub.png",
    members: "20+ thành viên",
    experience: "4+ năm hoạt động",
    benefits: [
      "Kỹ thuật cầu lông từ cơ bản đến nâng cao",
      "Phản xạ nhanh, thể lực tốt, tinh thần kỷ luật",
      "Giải tỏa áp lực sau giờ học bằng những trận cầu “căng như dây đàn”",
      "Gắn kết bạn bè – kỷ niệm tuổi trẻ khó quên",
    ],
    googleForm: "",
  },
  {
    id: 8,
    name: "FDANX",
    field: "Dance & Biểu diễn nghệ thuật",
    position: "Sảnh FPT SCHOOL",
    looking:
      "– Yêu thích sự tự do và nhảy múa\n– Không ngại thử thách, không ngại \"nhảy sai\"\n– Sẵn sàng dành thời gian và trái tim cho những giây phút biểu diễn!",
    emoji: "💃",
    shortIntro:
      "FDANX là câu lạc bộ nghệ thuật dành cho những tâm hồn yêu thích nhảy – từ street dance đầy cá tính, hiện đại cho tới những điệu nhảy tự do ngẫu hứng. Ở đây, tụi mình tin vào niềm vui và việc được ‘cháy’ hết mình hơn là sự hoàn hảo.",
    description:
      "Bạn yêu âm nhạc đến mức đôi chân không thể đứng yên? Bạn tin rằng mỗi bước nhảy là một cách để kể câu chuyện của riêng mình? Nếu có, bạn chính là mảnh ghép hoàn hảo của FDANX!\n\nFDANX không chỉ nhảy để biểu diễn, mà còn nhảy cho chính mình – để giải tỏa năng lượng, để kết nối với người khác, và để sống thật với niềm đam mê của bản thân.\n\nTụi mình tin rằng: Không cần phải là dancer chuyên nghiệp, bạn chỉ cần có đam mê thật sự. Những điều còn lại – kỹ thuật, thần thái, sự tự tin – hãy để FDANX cùng bạn rèn luyện và cải thiện nha!",
    quote: "Không cần là dancer chuyên nghiệp – chỉ cần đam mê thật sự!",
    image: "/images/FDANX.jpg",
    logoImg: "/images/logo/FDANX.png",
    members: "15 thành viên",
    experience: "Từ 2020",
    benefits: [
      "Phát triển tinh thần và kỹ năng cá nhân",
      "Giảm căng thẳng và cải thiện tâm trạng",
      "Tăng cường sự tự tin khi biểu diễn trước đám đông",
      "Mở rộng các mối quan hệ với cộng đồng yêu nhảy",
      "Nâng cao khả năng sáng tạo và trí nhớ",
    ],
    googleForm: "",
    goals2024: [
      "Trở thành bệ phóng cho những bạn trẻ đam mê nhảy",
      "Tạo cơ hội trải nghiệm và biểu diễn dưới ánh đèn sân khấu",
      "Tổ chức workshop và sân khấu biểu diễn định kỳ",
      "Xây dựng cộng đồng nhảy tích cực và gắn kết",
    ],
  },
  {
    id: 9,
    name: "FDN-Events",
    field: "Tổ chức sự kiện, truyền thông & sáng tạo",
    position: "Sảnh FPT SCHOOL",
    looking: "🎤 Cộng sự cháy hết mình - bạn đồng hành rực rỡ",
    emoji: "🎤",
    shortIntro:
      "Team đứng sau mọi spotlight! Nơi quy tụ những con người luôn “cháy” hết mình với đam mê tổ chức, sáng tạo và làm nên những khoảnh khắc đáng nhớ.",
    description:
      "Tên CLB: FDN-EVENTS\n Lĩnh vực hoạt động: Tổ chức sự kiện, truyền thông & sáng tạo\n Đang tìm: 🎤 “Cộng sự cháy hết mình - bạn đồng hành rực rỡ”\nGiới thiệu bản thân:\nFDN-Events không chỉ là một câu lạc bộ chạy sự kiện – mà còn là nơi quy tụ những con người luôn “cháy” hết mình với đam mê tổ chức, sáng tạo và làm nên những khoảnh khắc đáng nhớ. CLB chuyên tham gia và tổ chức từ các chương trình hoành tráng đến nhỏ, bất kể là học thuật hay giải trí, tụi mình luôn cháy hết mình để mọi sự kiện đều trở thành spotlight!\nĐây là mái nhà của những bạn trẻ yêu thích sự năng động, thích ứng nhanh và không ngại thử thách – đúng chất “Crew sự kiện”!\n\nTụi mình tin rằng:\n✨ \"Không có sự kiện nào là giống nhau – vì bạn chính là nhân tố tạo nên sự khác biệt!”\nChúng mình ở: (cập nhật sau)",
    quote: "Không có sự kiện nào là giống nhau – vì bạn chính là nhân tố tạo nên sự khác biệt!",
    image: "/images/FDN-Events.jpg",
    logoImg: "/images/logo/FDN EVENT.png",
    members: "100+ thành viên",
    experience: "7+ năm hoạt động",
    benefits: [
      "Kỹ năng tổ chức và điều phối sự kiện chuyên nghiệp",
      "Cơ hội phát triển khả năng sáng tạo, truyền thông và teamwork",
      "Làm việc trong môi trường trẻ trung, vui nhộn, nhiệt huyết",
      "Những đêm chạy sự kiện quên cả deadline nhưng không bao giờ quên tiếng cười!",
    ],
    googleForm: "https://drive.google.com/drive/folders/1ELKlYy93bT49yWIAfYIEmYoOiZ3loLD5?usp=sharing",
    goals2024: [
      "Tổ chức sự kiện và hỗ trợ hoạt động truyền thông",
      "Thiết kế và hiện thực hóa các ý tưởng sáng tạo dành cho sinh viên",
      "Xây dựng đội ngũ crew sự kiện chuyên nghiệp",
      "Mở rộng quy mô và chất lượng các sự kiện toàn trường",
    ],
  },
  {
    id: 10,
    name: "🏋️‍♂️ FGYM CLUB",
    field: "Calisthenics – Tập luyện thể chất – Kỷ luật – Sức khỏe",
    position: "Sảnh FPT SCHOOL",
    looking:
      "Những người sẵn sàng vượt giới hạn bản thân 💪\n🔥 Có đam mê, tinh thần thép và khát khao thay đổi",
    emoji: "🏋️‍♂️",
    shortIntro:
      "FGYM là nơi tụ hội của những con người có khát khao rèn luyện mỗi ngày để trở thành phiên bản tốt nhất của chính mình.\nDù bạn là người mới hay đã tập lâu, chỉ cần có quyết tâm – FGYM sẽ luôn đồng hành cùng bạn.",
    description:
      "Tại đây, mỗi lần kéo xà, mỗi cú chống đẩy là một bước tiến gần hơn tới sức mạnh – kỷ luật – bản lĩnh.\n\n🔹 Gia nhập FGYM để:\n💪 Rèn luyện thể chất với động lực bất tận\n🔥 Tự tạo ra phiên bản bản lĩnh – kỷ luật – mạnh mẽ hơn mỗi ngày\n🤝 Gặp gỡ những người cùng chí hướng – cùng khao khát phát triển bản thân\n🏆 Tham gia các buổi workshop, thử thách, thi đấu đầy máu lửa!\n\nFGYM không phải phòng tập – mà là phong cách sống.\nSẵn sàng match với phiên bản mạnh mẽ của chính mình chưa?",
    quote: "FGYM không phải phòng tập – mà là phong cách sống.",
    image: "/images/FGym.png",
    pdfUrl: "/FSRC.pdf",
    logoImg: "/images/logos/fgym-logo.png",
    members: "35+ thành viên",
    experience: "2+ năm hoạt động",
    benefits: [
      "💪 Rèn luyện thể chất với động lực bất tận",
      "🔥 Rèn ý chí – định hình bản lĩnh – vượt giới hạn",
      "⚡ Môi trường kỷ luật, năng lượng và tích cực",
      "🏆 Workshop, thử thách, thi đấu nội bộ",
    ],
    googleForm: "",
  },

  {
    id: 12,
    name: "🎼FMelodies 🫶🏻",
    field: "Biểu diễn ca nhạc, trải nghiệm nghệ thuật🎤",
    position: "Sảnh FPT SCHOOL",
    looking: "❤️‍🔥Yêu nhạc đong đầy - bùng cháy từng ngày❤️‍🔥",
    emoji: "🎵",
    shortIntro: "📩Đây là nơi mà các bạn được \"Cháy hết mình trên từng giai điệu!\"🎵",
    description:
      "Với FMelodies,💒 chúng mình không chỉ đơn thuần là câu lạc bộ âm nhạc mà còn là nơi hội tụ của đam mê, sáng tạo và tài năng. Chúng mình hoạt động sôi nổi trong lĩnh vực ca nhạc, trình diễn sân khấu và chơi các nhạc cụ nhằm tạo nên những trải nghiệm âm nhạc đẳng cấp và đầy cảm xúc bằng sự kết hợp hài hòa của những giọng ca vàng cùng các tay chơi nhạc cụ đỉnh cao tại đây✨.\n\nVì vậy, chúng mình là:\n\"Nơi kết nối âm nhạc, chắp cánh cùng đam mê, để mỗi bước chân đều tỏa sáng rực rỡ trên sân khấu.\"🔥🔥\n\n🏠Nơi để các bạn tìm đến chúng mình: (cập nhật sau)\n\n💫Mục tiêu hoạt động: Tạo cơ hội cho các tài năng được trải nghiệm và tỏa sáng trên đa dạng sân khấu🏟️\n\n🧚🏻‍♀️Thành viên: Là nơi tụ họp của hơn 30 mảnh ghép đam mê thể hiện cá tính riêng của mình qua những giai điệu\n\n🕵🏻Thâm niên: Hơn 6 năm kể từ ngày 11.9.2018\n\n🎁Đã bỏ túi: FMelodies tự hào vì đã từng tham gia tổ chức và đồng tổ chức các liveshow âm nhạc trong và ngoài trường, tham gia đóng góp văn nghệ các sự kiện lớn nhỏ và hơn hết là tạo nên các MV ca nhạc \"nhà làm\" nổi bật như:\n+ Liveshow đêm nhạc \"Thanh âm mùa Xuân\"\n+ Liveshow đêm nhạc \"Vào hạ\"\n+ Liveshow đêm nhạc \"Những mùa hoa\"\n+ MV Live sesion 1: \"NỐT mùa Valentine\"\n+ MV ca nhạc: \"Hòa nhịp giáng sinh\"\n+ MV rap: \"Back to school\"\nvà hơn ti tỉ các sự kiện khác mà chúng mình đang chờ cùng được các bạn tạo nên đó!\n\nCuối cùng, chúng mình hứa hẹn ngôi nhà chung FMe là nơi mà các bạn sẽ có được \"K-ICM\" : 🐝\nK - kỹ năng trở thành một nghệ sĩ trình diễn \"thực thụ\"\nI - iu thương, học hỏi và mở ra nhiều sự kết nối\nC - cơ hội được thể hiện tài năng và các khả năng xử lý tình huống\nM - môi trường thân thiện, năng động, có hơi \"mát mát\"",
    quote: "Nơi kết nối âm nhạc, chắp cánh cùng đam mê, để mỗi bước chân đều tỏa sáng rực rỡ trên sân khấu.",
    image: "/images/FMelodies.png",
    logoImg: "/images/logos/fmelodies-logo.png",
    members: "30+ thành viên",
    experience: "6+ năm hoạt động (từ 11.9.2018)",
    benefits: [
      "K - Kỹ năng trở thành một nghệ sĩ trình diễn thực thụ",
      "I - Iu thương, học hỏi và mở ra nhiều sự kết nối",
      "C - Cơ hội được thể hiện tài năng và xử lý tình huống",
      "M - Môi trường thân thiện, năng động, có hơi 'mát mát'"
    ],
    googleForm: "",
  },
  {
    id: 13,
    name: "💙FPT Things💙",
    field: "Truyền thông - Sáng tạo nội dung - Thiết kế - Nhiếp ảnh - Điện ảnh",
    position: "Sảnh FPT SCHOOL",
    looking: "🔥 Đang tìm kiếm: Những tâm hồn nhiệt huyết, không ngại thử thách và luôn sẵn sàng “cháy” hết mình với đam mê sáng tạo!\n\n✍️ Yêu viết lách | 📸 Đam mê chụp ảnh | 🎨 Có gu thiết kế | 🎞️ Thích xào nấu edit video?\n\n👉 Bạn chính là mảnh ghép mà FPT Things đang tìm kiếm!",
    emoji: "💙",
    shortIntro: "🌟 FPT Things là nơi hội tụ những bạn trẻ đam mê sáng tạo và khao khát thể hiện bản thân.\nVới hai mảng hoạt động chính gồm Content và Media, đây là môi trường năng động để học hỏi, rèn luyện kỹ năng truyền thông, và cũng là nơi mọi thành viên đều có cơ hội thử sức và tỏa sáng với những hoài bão của riêng mình đó nha!",
    description: "🎯 Mục tiêu hoạt động:\n• Xây dựng môi trường sáng tạo, chuyên nghiệp và truyền cảm hứng.\n• Không gian cho các bạn học sinh tự do thể hiện cá tính, rèn luyện kỹ năng và phát triển tư duy qua các hoạt động truyền thông.\n• Tạo ra sản phẩm truyền thông chất lượng, đồng thời tạo điều kiện để các thành viên học hỏi lẫn nhau.\n\n👥 Thành viên:\nFPT Things hiện có hơn 20 thành viên chính thức. Mỗi thành viên đều là những bạn trẻ với đam mê, nhiệt huyết, có tinh thần trách nhiệm, cũng chính là những mảnh ghép quý giá trong bức tranh đầy sắc màu mang tên Things.\n\n⏳ Thâm niên:\nThành lập từ năm 2019, FPT Things là một trong những CLB lâu đời và có dấu ấn tại FSchool Đà Nẵng. Trải qua 7 năm hoạt động, chúng mình đã tham gia, hỗ trợ và trực tiếp tổ chức nhiều sự kiện lớn nhỏ trong và ngoài trường, có thể kể đến như:\n• 🎬 Loạt MV: “Đợi mình là rực rỡ”, “Đếm cừu”, “Tình yêu xanh lá”,...\n• 📮 Dự án “Hòm thư ngỏ”\n• 🎶 Đêm nhạc “Thanh âm mùa xuân”\nVà rất nhiều chương trình, sự kiện khác để lại dấu ấn trong lòng học sinh toàn trường.",
    quote: "FPT Things – Nơi mọi ý tưởng đều có thể thành hiện thực!",
    image: "/images/FPT Things.jpg",
    logoImg: "/images/logos/fpt-things-logo.png",
    members: "20+ thành viên",
    experience: "7+ năm hoạt động",
    benefits: [
      "🚀 Cơ hội phát triển kiến thức và kỹ năng qua các hoạt động, sự kiện.",
      "🤝 Rèn kỹ năng mềm: ⏰ Quản lý thời gian, 📊 Xử lý công việc, 🌐 Social networking.",
      "💪 Gặp gỡ những đồng đội năng động, sáng tạo, giàu kinh nghiệm luôn hỗ trợ bạn với 200% công lực.",
      "🎉 Trải nghiệm trong môi trường chuyên nghiệp của FPT Things, giao lưu, gặp gỡ thêm nhiều bạn bè.",
      "📜 Nhận các certificate xịn xò."
    ],
    googleForm: "",
  },
  {
    id: 14,
    name: "🏐 Fvolleyball 🏐",
    field: "🏃‍♂️ Bóng chuyền – Rèn luyện thể lực – Tinh thần đồng đội",
    position: "Sảnh FPT SCHOOL",
    looking: "🔥 Những chiến binh mang trong mình ngọn lửa đam mê – sẵn sàng bứt phá mọi giới hạn 🔥",
    emoji: "🏐",
    shortIntro: "📣 Giới thiệu:\nChào mừng bạn đến với Fvolleyball – ngôi nhà của những trái tim yêu bóng chuyền tại THPT FPT Đà Nẵng.\nĐây không chỉ là nơi tập luyện – mà là nơi tinh thần thể thao được thắp sáng, nơi những:\n💥 cú đập cháy sân\n💥 pha cứu bóng nghẹt thở\n💥 và từng giọt mồ hôi trên sân đấu\n… tất cả hòa quyện tạo nên bản hoà tấu của sức mạnh, bản lĩnh và tinh thần đồng đội.",
    description: "🏐 Tại đây, bạn sẽ:\n✨ Rèn luyện kỹ thuật từ cơ bản đến nâng cao\n🧠 Làm quen với lối chơi chiến thuật hiện đại\n🤝 Kết nối – bứt phá – trưởng thành cùng những người bạn có chung đam mê\n\n💬 Fvolleyball chính là nơi để bạn:\n🔥 \"Bật cao hơn giới hạn – Đập tan mọi nỗi sợ – Và ghi điểm rực rỡ trên hành trình trưởng thành!\"\n\n📢 Bạn đã sẵn sàng trở thành một phần của chúng tôi chưa?\n🚀 Gia nhập Gen 1 – Bật tung năng lượng tuổi trẻ cùng Fvolleyball! 💪🔥\n\n🎯 MỤC TIÊU HOẠT ĐỘNG\nChúng tôi không chỉ chơi thể thao – chúng tôi rèn luyện thể lực, nâng cao kỹ năng chuyên môn và quan trọng nhất, xây dựng tinh thần đồng đội.\nMỗi buổi tập, mỗi trận đấu đều là hành trình giúp bạn vượt qua giới hạn bản thân và khám phá sức mạnh của sự gắn kết.\n\n👥 THÀNH VIÊN & CHẶNG ĐƯỜNG\nCLB gồm hơn 20 thành viên trẻ trung, máu lửa – những người không ngại mồ hôi, không ngại va chạm, chỉ cần một quả bóng và đam mê là đủ!\nVới hơn 2 năm hoạt động, chúng tôi đã tham gia nhiều giải đấu nội bộ, các trận giao hữu liên trường và tổ chức các hoạt động rèn luyện định kỳ để không ngừng phát triển.\n\n🔥 FVOLLEYBALL – CHÁY HẾT MÌNH, ĐẬP TAN GIỚI HẠN!\nTuổi trẻ là để sống trọn từng khoảnh khắc – và tại đây, bạn sẽ được bật cao, tung cú đập thật mạnh, để cảm nhận từng nhịp đập con tim hoà cùng tiếng bóng.\n\n💌 HÃY GIA NHẬP CHÚNG TÔI!\nDù bạn là người mới bắt đầu hay đã có kinh nghiệm, chỉ cần bạn đam mê – chúng tôi luôn sẵn sàng đồng hành và hỗ trợ hết mình.\nCùng nhau, chúng ta sẽ tạo nên một mùa thanh xuân bùng nổ và rực rỡ nhất!",
    quote: "Bật cao hơn giới hạn – Đập tan mọi nỗi sợ – Và ghi điểm rực rỡ trên hành trình trưởng thành!",
    image: "/images/Fvolleyball.png",
    logoImg: "/images/logos/fvolleyball-logo.png",
    members: "Hơn 20 thành viên",
    experience: "2+ năm hoạt động",
    benefits: [
      "💪 Cơ hội được huấn luyện kỹ thuật bóng chuyền từ cơ bản đến nâng cao",
      "⚡ Thể lực tăng vọt, phản xạ nhanh hơn, tinh thần thép hơn mỗi ngày",
      "🎉 Giải tỏa áp lực học hành sau mỗi giờ lên lớp bằng không khí năng động, vui tươi",
      "🤝 Gắn kết bạn bè, mở rộng mối quan hệ và tạo nên những kỷ niệm không thể quên",
      "🌈 Tham gia hoạt động ngoại khóa, sự kiện, team building và giải đấu đầy màu sắc"
    ],
    googleForm: "",
  },
  {
    id: 16,
    name: "🎌 FManga-Anime (FM-A)",
    field: "Học thuật – Văn hóa Nhật Bản",
    position: "Sảnh FPT SCHOOL",
    looking: "Dành cho toàn thể học sinh THPT FPT Đà Nẵng – những người đam mê Manga, Anime và mong muốn khám phá văn hóa Nhật Bản một cách chân thực nhất.",
    emoji: "🎌",
    shortIntro: "FManga-Anime (FM-A) – Nơi Văn Hóa Nhật Bản Tỏa Sáng\nNăm thành lập: 2022\nMục tiêu: Tạo không gian học thuật sôi động để giao lưu, chia sẻ kiến thức và trải nghiệm văn hóa Nhật qua Manga/Anime và hoạt động đặc sắc.",
    description: "Giới Thiệu Chung\nTên CLB: FManga-Anime (FM-A)\nNăm thành lập: 2022\nLĩnh vực hoạt động: Học thuật – Văn hóa Nhật Bản\nMục tiêu: FM-A hướng đến việc tạo ra một không gian học thuật sôi động, nơi các thành viên có thể giao lưu, chia sẻ kiến thức và trải nghiệm văn hóa Nhật Bản thông qua Manga, Anime và nhiều hoạt động đặc sắc khác.\n\nBan Lãnh Đạo\nChủ nhiệm đời thứ 5: Nguyễn Đình Lợi\nPhó chủ nhiệm: Nguyễn Tấn Thiên\n\nCơ Cấu Tổ Chức\nFM-A không phân chia rạch ròi các đội nhóm mà hướng đến sự đoàn kết, đồng lòng của tất cả thành viên. Mỗi người đều có cơ hội đảm nhiệm nhiều vai trò khác nhau, trải nghiệm tinh thần làm việc nhóm quy mô lớn thực thụ.\n\nThành Tích Nổi Bật\n• CLB Manga-Anime hàng đầu tại THPT FPT Đà Nẵng – tiên phong và duy nhất theo đuổi đam mê này một cách chuyên nghiệp!\n• Phong cách đa dạng: FM-A là tập hợp của những cá tính độc đáo, nơi mỗi thành viên được tự do thể hiện phong cách riêng.\n• Tinh thần Võ sĩ đạo: Trung thành – Kỷ luật – Sẵn sàng hi sinh vì chủ công.\n\nSlogan: \"Mỗi hoạt động là một tập phim, mỗi sự kiện là một arc đỉnh cao.\"",
    quote: "Mỗi hoạt động là một tập phim, mỗi sự kiện là một arc đỉnh cao.",
    image: "/images/FManga-Anime.jpg",
    logoImg: "/images/logos/fmanga-anime-logo.png",
    members: "30+ thành viên",
    experience: "3 năm hoạt động",
    benefits: [
      "🎌 Khám phá văn hóa Nhật Bản chân thực nhất",
      "📚 Học thuật sôi động với debate, thảo luận anime/manga",
      "🎉 Tham gia lễ hội anime real-life và các sự kiện đặc sắc",
      "🤝 Trải nghiệm tinh thần làm việc nhóm quy mô lớn",
      "💫 Tự do thể hiện phong cách riêng trong cộng đồng otaku"
    ],
    googleForm: "",
  },
  {
    id: 17,
    name: "☀️Soleil Debate Station – SODES",
    field: "Tư duy phản biện - Khoa học xã hội - Pháp quyền - Ngoại giao - Văn hóa - Tình cảm - Nhân cách.",
    position: "Sảnh FPT SCHOOL",
    looking: "Người thiếu vốn từ vựng – Người ngoại giao tốt.\nHướng nội – Hướng ngoại.\nTinh thần làm việc.\nTrách nhiệm với đồng đội và công việc.\nĐam mê về tranh biện(Học thuật)\nMuốn phát triển/trao dồi kỹ năng: tự tin, học thuật, nói lách,….",
    emoji: "☀️",
    shortIntro: "SODES – Speak Out, Debate Everything, Shine!\nSODES là câu lạc bộ tranh biện dành cho những bạn trẻ tin vào sức mạnh của ngôn từ, lý trí và lắng nghe. Được thành lập tại trường THPT FPT ĐN, SODES là mái nhà chung của những học sinh ham học hỏi, thích đặt câu hỏi \"Tại sao?\" và không ngại thử thách góc nhìn truyền thống.\n💡 Sứ mệnh của chúng tôi:\n\"Không ngừng học hỏi – Nói để hiểu – Tranh biện để trưởng thành.\"",
    description: "SODES không chỉ là nơi rèn luyện kỹ năng tranh biện chuyên sâu, mà còn là không gian để mỗi bạn học sinh:\n• Phát triển tư duy phản biện và kỹ năng nói trước đám đông\n• Biết lắng nghe trong khác biệt\n• Tự tin bảo vệ quan điểm bằng lý lẽ và sự tôn trọng\n\n🔍 Tại đây, bạn sẽ:\n• Tổ chức các buổi training kỹ năng tranh biện theo tuần\n• Tham gia các cuộc thi tranh biện từ cấp trường đến Thành Phố\n• Tổ chức giải tranh biện nội bộ và các hoạt động ngoại khóa.\n• Tham gia cộng tác viên/đồng ban tổ chức cuộc thi tranh biện do nhà trường và SODES sáng lập.\n\n💬 SODES chính là nơi để bạn:\n• Speak: Dám nói lên chính kiến\n• Open-minded: Cởi mở tiếp nhận ý kiến đối lập\n• Debate: Biết lập luận vững vàng, phản biện thông minh\n• Empathy: Thấu cảm trong mọi góc nhìn\n• Shine: Tỏa sáng bằng trí tuệ và bản sắc riêng\n\n📣 Thông điệp gửi đến bạn:\nDù bạn là người hướng nội hay hướng ngoại, giỏi nói hay mới bắt đầu học cách nói – SODES luôn chào đón bạn.\nHãy để mỗi cuộc tranh luận là một lần bạn hiểu hơn về thế giới và chính mình.",
    quote: "Vào SODES, bạn không cần phải là người giỏi nhất – chỉ cần là người sẵn sàng học hỏi và dám cất tiếng nói.",
    image: "/images/SODES.png",
    logoImg: "/images/logos/sodes-logo.png",
    members: "Hơn 11 thành viên, chất lượng dẫn đầu số lượng; chúng mình không chọn thành viên trên con số, chúng mình chọn trên năng lực. Đến với SODES bạn sẽ sở hưởng những giải thưởng nóng tay.",
    experience: "Hơn 3 năm hoạt động(19/7/2022). Từng mang về nhiều giải thưởng lớn.",
    benefits: [
      "Rèn luyện tư duy phản biện và lập luận logic.",
      "Phát triển kỹ năng nói trước đám đông và thuyết phục người nghe.",
      "Học cách lắng nghe, tôn trọng và phản biện trong văn minh.",
      "Tham gia các buổi đào tạo, workshop tranh biện chất lượng.",
      "Có cơ hội thi đấu tại các giải tranh biện các cấp.",
      "Rèn luyện kỹ năng teamwork, lãnh đạo và tổ chức sự kiện.",
      "Giao lưu, kết nối với bạn bè cùng chí hướng, cùng phát triển."
    ],
    googleForm: "",
  },
  {
    id: 18,
    name: "🌸F Chinese (F-HUA)",
    field: "Học thuật - Ngôn ngữ Trung Quốc - Văn hóa Trung Hoa",
    position: "Sảnh FPT SCHOOL",
    looking: "📌 Dành cho ai?\n• Bạn chưa biết gì về tiếng Trung nhưng muốn khám phá? → Welcome!\n• Bạn thích văn hóa Trung Hoa – nhạc Hoa, phim Hoa, Hán phục, cosplay? → Join us!\n• Bạn muốn tham gia CLB năng động, sáng tạo, vui vẻ và không áp lực? → Chính là đây!",
    emoji: "🌸",
    shortIntro: "💡 F Chinese (F-HUA) – Nơi của những người yêu ngôn ngữ và văn hóa Trung Hoa cùng nhau học hỏi và sáng tạo.\n\n🌟 Thành viên: gần 20 bạn học sinh từ các khối lớp, năng động – sáng tạo – nhiệt huyết\n\n📚 Nội dung hoạt động:\n• Các buổi học tiếng Trung dành cho người mới bắt đầu\n• Trải nghiệm ứng dụng tiếng Trung vào đời sống như giao tiếp cơ bản, viết chữ Hán, giới thiệu bản thân\n• Workshop và minigame theo chủ đề văn hóa: thư pháp, lễ hội Trung Hoa, nhạc Cpop, làm thủ công, cosplay trang phục Hán phục…\n• Cơ hội thể hiện: bạn có thể tham gia biểu diễn, dẫn chương trình, làm truyền thông, tổ chức hoạt động...",
    description: "✨ Đến với CLB chúng mình, các bạn sẽ được:\n🎓 Làm quen với tiếng Trung từ những bước đầu tiên – qua cách học sinh động, dễ hiểu và không nhàm chán.\n🧠 Phát triển tư duy ngôn ngữ và sáng tạo, thông qua các trò chơi, hoạt động nhóm, và dự án mini.\n🎭 Trải nghiệm văn hóa Trung Hoa thật gần gũi – từ thư pháp, nhạc Hoa, Hán phục đến các phong tục thú vị.\n🌍 Kết nối với những người bạn cùng đam mê, cùng nhau học hỏi và chia sẻ.\n🎤 Tham gia tổ chức sự kiện, dẫn chương trình, biểu diễn, hoặc thử sức ở vị trí truyền thông – hậu cần – MC…\n🚀 Rèn kỹ năng mềm: thuyết trình, làm việc nhóm, lãnh đạo, sáng tạo nội dung...\n🌸 Và hơn hết, là có một môi trường vui vẻ, không áp lực, nơi bạn có thể thỏa sức tỏa sáng và là chính mình!\n\n📣 F Chinese không chỉ là một CLB – mà là một hành trình:\n\"Ngôn ngữ là cây cầu – Văn hóa là hành trình.\"\n\"Hiểu một ngôn ngữ là mở ra một thế giới.\"\n\n🌸 F Chinese hay còn có tên gọi khác là F-Hua – Mỗi chữ là một linh hồn:\n🌬️ F – 风 (Fēng) - Gió: Sức sống, sự chuyển động – như cách chúng mình lan tỏa văn hóa Trung Hoa khắp FSC3.\n☯️ H – 和 (Hé) - Hòa hợp: Giá trị cốt lõi trong tư tưởng Trung Hoa xưa: sống hòa thuận, tôn trọng và kết nối.\n🎨 U – 雅 (Yǎ) - Thanh tao: Tinh thần nghệ thuật và sự thanh lịch trong từng nét thư pháp, từng bộ Hán phục.\n❤️ A – 爱 (Ài) - Yêu thương: Tình yêu dành cho ngôn ngữ, văn hóa và những người bạn đồng hành.",
    quote: "Ngôn ngữ là cây cầu – Văn hóa là hành trình.",
    image: "/images/Tiếng trung - Fchinies.jpg",
    logoImg: "/images/logos/fchinese-logo.png",
    members: "Gần 20 thành viên",
    experience: "Đang phát triển",
    benefits: [
      "�� Làm quen với tiếng Trung từ những bước đầu tiên",
      "🧠 Phát triển tư duy ngôn ngữ và sáng tạo",
      "🎭 Trải nghiệm văn hóa Trung Hoa thật gần gũi",
      "🌍 Kết nối với những người bạn cùng đam mê",
      "🎤 Tham gia tổ chức sự kiện, dẫn chương trình, biểu diễn",
      "🚀 Rèn kỹ năng mềm: thuyết trình, làm việc nhóm, lãnh đạo",
      "🌸 Môi trường vui vẻ, không áp lực, nơi bạn có thể thỏa sức tỏa sáng"
    ],
    googleForm: "",
  },
  {
    id: 15,
    name: "🤖FSRC - Fschool Stem & Robotics Club",
    field: "Chia sẻ kiến thức về STEM, robotics; tạo cơ hội tham gia các cuộc thi robotics toàn quốc và thế giới.",
    position: "Sảnh FPT SCHOOL",
    looking: "Những bạn dám thử thách, có đam mê, muốn được thử sức và phát triển bản thân mình.",
    emoji: "🤖",
    shortIntro: "📩 Chúng tôi là một đội ngũ CLB làm việc chuyên nghiệp, là 1 CLB robotics tiêu biểu trong cộng đồng VSU (cộng đồng robotics có hơn 30 CLB trên cả nước).\nỞ đây các bạn sẽ được phát triển và nuôi dưỡng bản thân mình khi được học những kỹ năng mới: code, thiết kế 3D trên phần mềm Onshape và đặc biệt vô cùng quan trọng là những thành viên nữ được học về truyền thông, tài chính, v.v...\nNhững thành viên đã đem về cho CLB và trường vô số giải thưởng, là nôi sản sinh ra những khủng long tài năng, tiêu biểu, đặc biệt xuất sắc của trường.",
    description: "🎯 Mục tiêu hoạt động:\n• Xây dựng và phát triển CLB toàn diện, là chìa khóa đánh thức niềm đam mê với STEM & robotics cho các bạn trẻ, phát triển cộng đồng.\n\n👥 Thành viên:\nHiện có hơn 50 thành viên năng động, kỹ năng tốt, luôn sẵn sàng hỗ trợ, với 6 tiêu chí của FIRST.\n\n⏳ Thâm niên:\n3 năm hoạt động chính thức, tham gia và mang về hàng trăm giải thưởng to nhỏ trong nước và thế giới, được đăng lên báo, vinh danh khủng long,...\n\n🎁 Gia nhập bạn sẽ nhận được:\n• Cơ hội phát triển bản thân toàn diện\n• Cơ hội tham gia và giành giải thưởng các cuộc thi lớn như FIRST, ENJOY AI, VEX, ROBO G, ORC,... (được đi chơi xa, được trải nghiệm từ teamwork, cho đến những tri kỉ, giành nhiều giải thưởng được vinh danh cấp học bổng ở nhiều trường đại học trên thế giới)\n• Làm việc trong môi trường chuyên nghiệp, tôn trọng, v.v...\n• Những kỉ niệm đặc biệt của tuổi trẻ mà không phải tham gia CLB nào cũng được như vậy.\n\n💡 Note: CLB thấy rằng những bạn nữ thường rất e dè khi tham gia một CLB liên quan đến kỹ thuật STEM và robotics vì sợ không hợp nhưng thật ra CLB rất muốn tìm những bạn có thế mạnh về truyền thông, các bạn sẽ trở thành những cá nhân tiêu biểu của CLB trong phong trào Women in STEM.",
    quote: "FSRC – Nơi đánh thức đam mê STEM & Robotics, nơi mọi thành viên đều có thể tỏa sáng!",
    image: "/images/FSRC.png",
    logoImg: "/images/logos/fsrc-logo.png",
    members: "50+ thành viên",
    experience: "3 năm hoạt động",
    benefits: [
      "Cơ hội phát triển bản thân toàn diện",
      "Tham gia và giành giải thưởng các cuộc thi lớn như FIRST, ENJOY AI, VEX, ROBO G, ORC,...",
      "Làm việc trong môi trường chuyên nghiệp, tôn trọng",
      "Những kỉ niệm đặc biệt của tuổi trẻ",
      "Cơ hội được vinh danh, nhận học bổng ở nhiều trường đại học trên thế giới"
    ],
    googleForm: "",
  },
  {
    id: 19,
    name: "🥋 FVS",
    field: "Vovinam – Võ thuật Việt – Rèn luyện thể chất – Kỷ luật – Bản lĩnh – Tự vệ",
    position: "Sảnh FPT SCHOOL",
    looking:
      "Những người sẵn sàng vượt giới hạn bản thân\n🔥 Có đam mê, ý chí thép và tinh thần không bỏ cuộc",
    emoji: "🥋",
    shortIntro:
      "📖 Giới thiệu\nFVS là nơi những người trẻ khát khao trở nên mạnh mẽ hơn mỗi ngày thông qua võ thuật Việt Nam – Vovinam.\nKhông cần bạn giỏi, chỉ cần bạn dám bắt đầu – FVS luôn đồng hành với những người muốn rèn luyện thân – tâm – trí một cách toàn diện.\n\nMỗi lần ngã xuống là một bài học. Mỗi lần đứng dậy là một bước tiến gần hơn đến bản lĩnh – kỷ luật – tự tin.",
    description:
      "✅ Gia nhập FVS để:\n🥋 Học võ – Rèn kỹ năng tự vệ • Phát triển sức mạnh thể chất\n💪 Tôi luyện bản lĩnh – ý chí – sự kiên trì\n🤝 Gặp gỡ những người bạn cùng chí hướng • Sống có kỷ luật và mục tiêu\n🔥 Tham gia workshop – thử thách – biểu diễn – thi đấu đầy máu lửa!\n\n🌞 Mục tiêu hoạt động\nRèn luyện thể chất, nâng cao sức khỏe và bản lĩnh\n\nPhát triển kỷ luật – ý chí – sống chủ động và tích cực\n\nLan tỏa tinh thần võ đạo: “Sống mạnh – Sống đẹp – Sống có ích”\n\n📆 Thâm niên\nHơn 6 năm hoạt động, FVS là môi trường võ thuật trẻ trung, nghiêm túc và giàu năng lượng, không ngừng phát triển mỗi ngày.\n\n👊 Gia nhập FVS – bạn sẽ:\n🔹 Nắm vững kỹ thuật Vovinam: đòn tay, chân, vật, tự vệ, phản đòn\n🔹 Được chỉ dẫn bởi HLV và anh chị có kinh nghiệm, tận tâm\n🔹 Tập trong môi trường nghiêm túc – vui vẻ – truyền động lực\n🔹 Thử thách bản thân – vượt giới hạn – trưởng thành trong từng buổi tập\n\n💥 FVS không chỉ là võ – mà là:\n🔥 Hành trình rèn ý chí – bản lĩnh – sự tự chủ\n🔥 Mỗi buổi tập là một bước tiến gần hơn đến phiên bản kiên cường – mạnh mẽ – đầy tự tin của bạn\n🔥 Võ là công cụ – nhưng chính bạn mới là người tạo ra sự thay đổi\n\n🥋 Sẵn sàng “match” với phiên bản chiến binh trong bạn chưa?\n🎯 FVS – Rèn thân – Luyện tâm – Sống bản lĩnh!\nTập võ không phải để đánh bại người khác, mà là chiến thắng chính mình mỗi ngày.",
    quote: "FVS – Rèn thân – Luyện tâm – Sống bản lĩnh!",
    image: "/images/FVS.PNG",
    logoImg: "/images/logos/fvs-logo.png",
    members: "20+ thành viên",
    experience: "6+ năm hoạt động",
    benefits: [
      "Học võ và kỹ năng tự vệ an toàn",
      "Tăng cường thể chất và phản xạ",
      "Rèn ý chí – kỷ luật – tự chủ",
      "Môi trường nghiêm túc, giàu năng lượng",
    ],
    googleForm: "",
  },
  {
    id: 103,
    name: "🏀 FPT-Rex",
    field: "Tập luyện thể chất – Nhanh nhẹn – Phản xạ – Tốc độ – Độ bền – Bóng rổ",
    position: "Sảnh FPT SCHOOL",
    looking:
      "Người sẵn sàng hết mình vì trái bóng cam, vượt qua mọi giới hạn để không ngừng tiến bộ, biết yêu quý đồng đội.",
    emoji: "🏀",
    shortIntro:
      "Xin chào FSchoolers!\nChào mừng các bạn đến với Câu lạc bộ Bóng rổ FPT-Rex – nơi đam mê không chỉ được nuôi dưỡng, mà còn tỏa sáng rực rỡ trên từng bước chạy, từng cú ném, và từng giọt mồ hôi của sự nỗ lực không ngừng nghỉ.\nTại đây, mỗi cá nhân đều có cơ hội để tự tin trao gửi đam mê của mình, rèn giũa từng ngày và tiến gần hơn đến phiên bản tốt nhất của chính mình.\nChúng mình tin rằng, mỗi khoảnh khắc trên sân đều là một bước đệm cho hành trình vươn tới ước mơ. Và rồi, khi cầm trên tay tấm huy chương đầy tự hào, bạn sẽ có thể hét to: ‘Tôi đã làm được!’\nHãy cùng tụi mình viết nên câu chuyện của riêng bạn – ngay từ hôm nay.",
    description:
      "🏀 Tại đây, bạn sẽ được:\n• Hướng dẫn tận tình từ cơ bản đến nâng cao kỹ thuật bóng rổ\n• Được thi đấu trong và ngoài trường để cọ xát, hoàn thiện điểm mạnh và cải thiện điểm yếu\n\n🔥 Tinh thần FPT-Rex:\nĐam mê đủ lớn – Nỗ lực đủ bền bỉ – Không gì là không thể.",
    quote: "Tôi đã làm được!",
    image: "/images/FPT-Rex.jpg",
    logoImg: "/logo/FPT-Rex.jpg",
    members: "Đang phát triển",
    experience: "Đang phát triển",
    benefits: [
      "Rèn thể lực, tốc độ, độ bền và phản xạ",
      "Học kỹ thuật bóng rổ từ cơ bản đến nâng cao",
      "Cơ hội thi đấu – giao lưu – cọ xát",
      "Tinh thần đồng đội và kỷ luật",
    ],
    googleForm: "",
  },
]
