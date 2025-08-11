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
    name: "🌲ECO-F🌲",
    field: "Chế tao ra những món đồ vui nhộn từ rác có thể tái chế (như làm các bông hoa từ chai nhựa 🌹, hoặc các loại xe nhỏ 🚗)",
    position: "Gian hàng số 1, Tại sảnh trường THPT FPT",
    looking: "Những bạn có mong muốn khám phá bản thân, yêu 💖 môi trường, có các kĩ năng handmade cơ bản, muốn tìm người cùng sở thích yêu môi trường với nhiều người khác",
    emoji: "🌱",
    shortIntro: " Eco-F sẽ giúp bạn hiểu hơn về thiên nhiên🎍, biết tận dụng những thứ “vô bổ” trong mắt người khác thành những thứ có ích cho chúng ta, có thể là những người xung quanh chúng ta. Ngoài ra, Eco-F sẽ giúp bạn biết them về nhiều tác hại của các loại rác thải 🗑️, biết cách phân loại chúng để làm cho Trái Đất của chúng ta sạch hơn",
    description:
      "CLB ECO thúc đẩy ý thức bảo vệ môi trường và phát triển bền vững trong cộng đồng sinh viên.",
    quote: "Trái đất không phải là tài sản của chúng ta, mà là món quà cho thế hệ tương lai!",
    image: "/images/CLB ECO.jpeg",
    logoImg: "/images/logos/eco-logo.png",
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
    id: 2,
    name: "💼 CLB FBIZ – FPT ĐÀ NẴNG",
    field: "\nKinh doanh – khởi nghiệp sáng tạo\nTư duy tài chính – mô hình mô phỏng\nTổ chức hoạt động trải nghiệm thực tiễn\nThiết kế dự án, game – sản phẩm thực chiến",
    position: "Tầng 1 - Khu vực Business",
    looking: "Các bạn học sinh yêu thích khám phá \nThích làm – không chỉ nói \n Người có óc sáng tạo, máu “liều tích cực” và chịu khó \nTeamwork Không cần giỏi – chỉ cần dám thử là đủ rồi!",
    emoji: "💼",
    shortIntro: "Nơi ươm mầm những ý tưởng kinh doanh!",
    description:
      "CLB Business là một sân chơi năng động dành cho những bạn trẻ yêu thích kinh doanh, sáng tạo và tư duy chiến lược. Tụi mình không ngồi nói lý thuyết – mà còn có thể tự tay làm sản phẩm, tổ chức hoạt động, tạo game và trải nghiệm mong các bạn sẽ là những mảnh ghép cùng chúng tớ thực hiện lên điều đó!",
    quote: "✨Think Bold. Try Real. Build Different.✨",
    image: "/images/CLB FBIZ.png",
    logoImg: "/images/logos/fbiz-logo.png",
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
    position: "Phòng 105",
    looking: "“Một người sẵn sàng cho đi – không phải vì có nhiều, mà vì hiểu được giá trị của yêu thương”🤝",
    emoji: "☀️",
    shortIntro: "Sunshare không ồn ào, không hoành tráng – tụi mình lặng lẽ đi từng bước nhỏ, để giúp một cụ già bớt cô đơn, một đứa trẻ được cười nhiều hơn, một hoàn cảnh được lắng nghe, một tâm hồn thấy ấm lại.\nChúng mình làm thiện nguyện không phải vì \"làm cho đủ\", mà là vì thật lòng muốn làm. Có thể là một gian hàng nhỏ gây quỹ, một buổi phát cháo lúc sáng sớm, hay một chiến dịch viết thiệp gửi yêu thương – tất cả đều xuất phát từ trái tim.\nỞ đây, bạn không cần phải “hoàn hảo”, chỉ cần chân thành và sẵn sàng bắt đầu từ điều tử tế nhất.",
    description: "Tụi mình tin rằng:\n🌱 \"Tử tế không cần lý do – chỉ cần bạn muốn Lan tỏa nó.\"\n\n\"Không phải ai sinh ra cũng đủ đầy, nhưng ai cũng có thể là ánh sáng nhỏ trong cuộc đời của người khác.\"\n\"Sunshare không bán nắng, chỉ sưởi ấm lòng người.\"\n\nNếu bạn cũng nghĩ vậy – chào mừng bạn về đội Sunshare. Không cần phải thay đổi cả thế giới, chỉ cần mỗi ngày, mình cùng nhau làm điều nhỏ bé, nhưng thật đẹp.\n\n☀️ SUNSHARE – Nơi những điều tử tế được ươm mầm\nKhông có danh hiệu, không có spotlight. Chỉ có những người trẻ, chọn bước tới thay vì ngoảnh mặt làm ngơ.\nCác bạn có thể thấy chúng tớ ở phòng 105\n\n🌿 Mục tiêu hoạt động của Sunshare:\n• Là một nhóm bạn trẻ không giỏi nói lời hoa mỹ, nhưng tin rằng:\n• Một bữa cơm được chuẩn bị bằng tấm lòng\n• Một chiếc thiệp nhỏ viết bằng tay\n• Một sáng chủ nhật dậy sớm để phát cháo...\n• ... cũng có thể làm ấm một cuộc đời.\n\nSunshare không cần bạn phải \"tốt hoàn hảo\", chỉ cần bạn sẵn lòng làm điều tốt.\nDù là cầm loa, vẽ bảng tên, xếp quà, hay đơn giản là lắng nghe một câu chuyện buồn của ai đó, tụi mình đều trân trọng – vì ở đây, không có ai là thừa cả.\n\n📌 Vài điều tụi mình tự hào:\n• Thành lập vào 24/9/2018 - hơn 7 năm hoạt động - không bỏ một mùa Tết nào.\n• Gây quỹ từ những chiếc bánh tráng nhỏ nhất.\n• Có hơn 40 con người, và từng người đều đáng tin đến lạ.\n\n✨ Gia nhập Sunshare – Bạn sẽ có gì?\n• Không phải \"kỹ năng mềm\", mà là một trái tim cứng cáp hơn sau từng lần giúp đỡ người khác.\n• Không chỉ là \"trải nghiệm thiện nguyện\", mà là những khoảnh khắc khiến bạn rơi nước mắt – vì xúc động.\n• Không chỉ \"thêm vào CV\", mà là bớt đi sự vô cảm.\n\nBạn sẽ học được cách:\n• Tự tay tạo nên một dự án vì người khác.\n• Đứng trước khó khăn, không lùi bước.\n• Yêu quý từng nụ cười mà mình góp phần mang đến.",
    quote: "“Sunshare không bán nắng, chỉ sưởi ấm lòng người.”",
    image: "/images/CLB Sunshare.jpg",
    logoImg: "/images/logos/sunshare-logo.png",
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
    position: "Tầng 1 - Studio sáng tạo",
    looking: "Bạn không chỉ là người nói — bạn là người kể chuyện.\n🌟 Bạn yêu ánh đèn sân khấu.\n🎤 Bạn tin rằng từng câu chữ đều có sức mạnh.\n🔥 Và bạn muốn biến chất giọng của mình thành điều đặc biệt nhất.",
    emoji: "🎙️",
    shortIntro: "👉 Vậy thì F-MIC chính là nơi bạn cất giọng, viết nên hành trình riêng, và khiến đám đông lắng nghe.\n\n💖 Một chút về chúng tớ:\nF-MIC không chỉ là một câu lạc bộ dẫn chương trình – tụi mình là điểm chạm của những tâm hồn biết thể hiện, dám đứng trước công chúng và tạo nên cảm xúc bằng lời nói.\nỞ đây, bạn sẽ học được cách làm chủ sân khấu, tự tin giao tiếp và biến từng màn dẫn dắt thành một tác phẩm nghệ thuật.\n\n🎙️Cùng F-MIC, hãy để giọng nói của bạn tỏa sáng – theo cách mà không ai khác làm được.",
    description: "✨ Nói nhỏ cho bạn biết nhé đây là : \"Nơi Fschoolers cất giọng và tỏa sáng\"\n\n📌Mái nhà \"Ếp-êm-ai-xi\" ở đây nè : (cập nhập sau)\n\n✨ Mục tiêu hoạt động:\n• Không đơn thuần là kỹ năng dẫn chương trình, F-MIC giúp bạn phát triển tư duy ngôn ngữ, phong thái sân khấu và khả năng kết nối cảm xúc với khán giả – để mỗi lần cầm mic không chỉ là thể hiện, mà là chạm tới trái tim người nghe.\n\n💕 Ngoan xinh iu:\n• Là ngôi nhà nhỏ của 15 thành viên đầy đam mê và khát vọng\n• Dù chỉ mới được thành lập trong thời gian vừa qua nhưng với hướng đi bền bỉ và mục đích to lớn, chúng tớ sẽ là một chỗ dựa tiềm năng cùng bạn \"vượt ngàn chông gai\"\n\n🍓Những quả ngọt khi bạn là một mảnh ghép của F-MIC:\n• 🎤 Tự tin toả sáng trước đám đông\n• 🎤 Phong thái sân khấu chuyên nghiệp, phát triển kĩ năng giao tiếp, kết nối\n• 🎤 Cơ hội được chọn làm MC cho các sự kiện lớn\n• 🎤 Một gia đình \"thực thụ\" năng động - vui vẻ - cá tính",
    quote: "Nơi Fschoolers cất giọng và tỏa sáng",
    image: "/images/F-MIC.jpg",
    logoImg: "/images/logos/fmic-logo.png",
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
    position: "Cập nhập sau",
    looking: "Những bạn có mong muốn khám phá bản thân, hay học hỏi thêm những kĩ năng giúp ích trong cuộc sống, hoặc tìm kiếm những người bạn có cùng chung sở thích.",
    emoji: "🌟",
    shortIntro: "Chúng tớ không chỉ là câu lạc bộ về học thuật, mà còn kết hợp cả một số sự kiện của nhà trường. Đến với chúng tớ, các bạn vừa được học thêm những kĩ năng mới, không những thế, các bạn được vui chơi, tìm kiếm những thế mạnh khác của bản thân mình. Đây là mái nhà chung giúp các bạn phát triển bản thân, đồng thời gióp các bạn không cảm thấy quá gò bó nếu chỉ tập trung vào học thuật hay sự kiện.",
    description: "",
    quote: "Đến với F-Skill, bạn có thể đắm chìm vào những điều mới mẻ, những hoạt động bổ ích mà bản thân bạn chưa từng được trải nghiệm!",
    image: "/images/F-SKILL.jpg",
    logoImg: "/images/logos/fskill-logo.png",
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
    position: "Phòng nghệ thuật - Tầng 3",
    looking: "Những bạn từng thấy trái tim mình rung lên theo từng nhịp nhạc, tin rằng múa không chỉ là biểu diễn, mà là cách để bộc lộ bản ngã, giải phóng cảm xúc và kể nên những điều không lời",
    emoji: "💃",
    shortIntro: "Nơi những nhịp thở hóa thành chuyển động. FAS theo đuổi múa hiện đại và múa dân gian đương đại, kết hợp yếu tố truyền thống và hơi thở đương thời, tạo nên những phần trình diễn vừa gần gũi, vừa đầy sức sống.",
    description: "💥Tên Câu Lạc Bộ: FAS\nLĩnh vực hoạt động: CLB trình diễn múa nghệ thuật\nNơi những nhịp thở hóa thành chuyển động.\n\nBạn từng thấy trái tim mình rung lên theo từng nhịp nhạc?\nBạn tin rằng múa không chỉ là biểu diễn, mà là cách để bộc lộ bản ngã, giải phóng cảm xúc và kể nên những điều không lời?\n\nChào mừng bạn đến với FAS – một không gian nghệ thuật nơi tự do và cảm xúc là cốt lõi.\nTụi mình theo đuổi múa hiện đại và múa dân gian đương đại, kết hợp yếu tố truyền thống và hơi thở đương thời, tạo nên những phần trình diễn vừa gần gũi, vừa đầy sức sống.\n\n🌿 Ở FAS, bạn sẽ...\n✨ Được chuyển động bằng cảm xúc, không áp lực kỹ thuật, không sợ phán xét – chỉ cần bạn dám bắt đầu.\n✨ Thử nghiệm và khám phá bản thân qua từng chủ đề biểu diễn, từ nhẹ nhàng sâu lắng đến mạnh mẽ bùng nổ.\n✨ Tham gia các sân khấu lớn nhỏ, nơi bạn không chỉ đứng dưới ánh đèn, mà thực sự sống trong từng khoảnh khắc.\n✨ Gắn kết với những người bạn đồng hành cùng chung tình yêu với múa, cùng tạo nên những kỷ niệm không thể lặp lại.\n\n💫 FAS không đặt nặng \"đúng\" hay \"đẹp\"\nThay vào đó, chúng mình tìm kiếm:\n🔥 Cảm xúc thật – Chuyển động thật – Kết nối thật.\nDù bạn từng học múa hay chưa bao giờ nhảy trước đám đông – FAS luôn chừa chỗ cho bạn.\n\nHãy để cơ thể bạn lên tiếng,\nHãy để đam mê được thấy ánh sáng.",
    quote: "Hãy để cơ thể bạn lên tiếng, hãy để đam mê được thấy ánh sáng!",
    image: "/images/FAS .jpg",
    logoImg: "/images/logos/fas-logo.png",
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
    logoImg: "/images/logos/fba-logo.png",
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
    looking:
      "– Yêu thích sự tự do và nhảy múa\n– Không ngại thử thách, không ngại \"nhảy sai\"\n– Sẵn sàng dành thời gian và trái tim cho những giây phút biểu diễn!",
    emoji: "💃",
    shortIntro:
      "FDANX là câu lạc bộ nghệ thuật dành cho những tâm hồn yêu thích nhảy – từ street dance đầy cá tính, hiện đại cho tới những điệu nhảy tự do ngẫu hứng. Ở đây, tụi mình tin vào niềm vui và việc được ‘cháy’ hết mình hơn là sự hoàn hảo.",
    description:
      "Bạn yêu âm nhạc đến mức đôi chân không thể đứng yên? Bạn tin rằng mỗi bước nhảy là một cách để kể câu chuyện của riêng mình? Nếu có, bạn chính là mảnh ghép hoàn hảo của FDANX!\n\nFDANX không chỉ nhảy để biểu diễn, mà còn nhảy cho chính mình – để giải tỏa năng lượng, để kết nối với người khác, và để sống thật với niềm đam mê của bản thân.\n\nTụi mình tin rằng: Không cần phải là dancer chuyên nghiệp, bạn chỉ cần có đam mê thật sự. Những điều còn lại – kỹ thuật, thần thái, sự tự tin – hãy để FDANX cùng bạn rèn luyện và cải thiện nha!",
    quote: "Không cần là dancer chuyên nghiệp – chỉ cần đam mê thật sự!",
    image: "/images/FDANX.jpg",
    logoImg: "/images/logos/fdanx-logo.png",
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
    position: "Cập nhật sau",
    looking: "🎤 Cộng sự cháy hết mình - bạn đồng hành rực rỡ",
    emoji: "🎤",
    shortIntro:
      "Team đứng sau mọi spotlight! Nơi quy tụ những con người luôn cháy hết mình với đam mê tổ chức, sáng tạo và làm nên những khoảnh khắc đáng nhớ.",
    description:
      "FDN-Events không chỉ là một câu lạc bộ chạy sự kiện – mà còn là nơi tụi mình biến ý tưởng thành trải nghiệm có thật. Từ các chương trình hoành tráng đến sự kiện nhỏ, học thuật hay giải trí, bọn mình luôn cháy hết mình để mỗi chương trình đều trở thành spotlight!\n\nĐây là mái nhà của những bạn trẻ năng động, thích ứng nhanh và không ngại thử thách – đúng chất ‘Crew sự kiện’.\n\nChúng mình tin rằng:\n✨ Không có sự kiện nào là giống nhau – vì chính bạn là nhân tố tạo nên sự khác biệt!\n\nChúng mình ở: (cập nhật sau)",
    quote: "Không có sự kiện nào là giống nhau – vì bạn chính là nhân tố tạo nên sự khác biệt!",
    image: "/images/FDN-Events.jpg",
    logoImg: "/images/logos/fdn-events-logo.png",
    members: "100+ thành viên",
    experience: "7+ năm hoạt động",
    benefits: [
      "Kỹ năng tổ chức và điều phối sự kiện chuyên nghiệp",
      "Cơ hội phát triển khả năng sáng tạo, truyền thông và teamwork",
      "Môi trường trẻ trung, vui nhộn, nhiệt huyết",
      "Những đêm chạy sự kiện quên cả deadline nhưng không bao giờ quên tiếng cười!",
    ],
    googleForm: "",
    goals2024: [
      "Tổ chức sự kiện và hỗ trợ hoạt động truyền thông",
      "Thiết kế và hiện thực hóa ý tưởng sáng tạo dành cho học sinh",
      "Xây dựng đội ngũ crew sự kiện chuyên nghiệp",
      "Mở rộng quy mô và chất lượng các sự kiện toàn trường",
    ],
  },
  {
    id: 10,
    name: "🏋️‍♂️ FGYM CLUB",
    field: "Calisthenics – Tập luyện thể chất – Kỷ luật – Sức khỏe",
    position: "Sân thể thao - Khu vực ngoài trời",
    looking:
      "Những người sẵn sàng vượt giới hạn bản thân 💪\n🔥 Có đam mê, tinh thần thép và khát khao thay đổi",
    emoji: "🏋️‍♂️",
    shortIntro:
      "FGYM là nơi tụ hội của những con người có khát khao rèn luyện mỗi ngày để trở thành phiên bản tốt nhất của chính mình.\nDù bạn là người mới hay đã tập lâu, chỉ cần có quyết tâm – FGYM sẽ luôn đồng hành cùng bạn.",
    description:
      "Tại đây, mỗi lần kéo xà, mỗi cú chống đẩy là một bước tiến gần hơn tới sức mạnh – kỷ luật – bản lĩnh.\n\nGia nhập FGYM để:\n💪 Rèn luyện thể chất với động lực bất tận\n🔥 Tự tạo ra phiên bản bản lĩnh – kỷ luật – mạnh mẽ hơn mỗi ngày\n🤝 Gặp gỡ những người cùng chí hướng – cùng khao khát phát triển bản thân\n🏆 Tham gia các buổi workshop, thử thách, thi đấu đầy máu lửa!\n\nFGYM không phải phòng tập – mà là phong cách sống.\nSẵn sàng match với phiên bản mạnh mẽ của chính mình chưa?",
    quote: "FGYM không phải phòng tập – mà là phong cách sống.",
    image: "/images/FGym.png",
    logoImg: "/images/logos/fgym-logo.png",
    members: "35+ thành viên",
    experience: "4+ năm hoạt động",
    benefits: [
      "Rèn luyện thể chất với động lực bất tận",
      "Rèn ý chí – định hình bản lĩnh – vượt giới hạn",
      "Môi trường kỷ luật, năng lượng và tích cực",
      "Workshop, thử thách, thi đấu nội bộ",
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
    logoImg: "/images/logos/fmanga-anime-logo.png",
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
    logoImg: "/images/logos/fmelodies-logo.png",
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
    name: "💙FPT Things💙",
    field: "Truyền thông - Sáng tạo nội dung - Thiết kế - Nhiếp ảnh - Điện ảnh",
    position: "Cập nhập sau",
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
    name: "Fvolleyball",
    field: "Bóng chuyền – Rèn luyện thể lực – Tinh thần đồng đội",
    position: "Sân bóng chuyền",
    looking: "🔥 Những chiến binh mang trong mình ngọn lửa đam mê – sẵn sàng bứt phá mọi giới hạn 🔥",
    emoji: "🏐",
    shortIntro: "Chào mừng bạn đến với Fvolleyball – ngôi nhà của những trái tim yêu bóng chuyền tại THPT FPT Đà Nẵng.\nĐây không chỉ là nơi tập luyện – mà là nơi tinh thần thể thao được thắp sáng, nơi những:\n💥 cú đập cháy sân\n💥 pha cứu bóng nghẹt thở\n💥 và từng giọt mồ hôi trên sân đấu\n… tất cả hòa quyện tạo nên bản hoà tấu của sức mạnh, bản lĩnh và tinh thần đồng đội.",
    description: "🏐 Tại đây, bạn sẽ:\n✨ Rèn luyện kỹ thuật từ cơ bản đến nâng cao\n🧠 Làm quen với lối chơi chiến thuật hiện đại\n🤝 Kết nối – bứt phá – trưởng thành cùng những người bạn có chung đam mê\n\n💬 Fvolleyball chính là nơi để bạn:\n🔥 \"Bật cao hơn giới hạn – Đập tan mọi nỗi sợ – Và ghi điểm rực rỡ trên hành trình trưởng thành!\"\n\n📢 Bạn đã sẵn sàng trở thành một phần của chúng tôi chưa?\n🚀 Gia nhập Gen 1 – Bật tung năng lượng tuổi trẻ cùng Fvolleyball! 💪🔥",
    quote: "“Bật cao hơn giới hạn – Đập tan mọi nỗi sợ – Và ghi điểm rực rỡ trên hành trình trưởng thành!”",
    image: "/images/Fvolleyball.jpg",
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
    name: "🎌FManga-Anime (FM-A)",
    field: "Học thuật – Văn hóa Nhật Bản",
    position: "THPT FPT Đà Nẵng",
    looking: "Dành cho toàn thể học sinh THPT FPT Đà Nẵng – những người đam mê Manga, Anime và mong muốn khám phá văn hóa Nhật Bản một cách chân thực nhất.",
    emoji: "🎌",
    shortIntro: "🎂 Tuổi: 3 tuổi (since 2022)\n❤️ Độ Hiếm: SSR (Super Super Rare)\n💬 Giới Thiệu:\n\"Một CLB với plot twist: Không phải harem anime mà là nơi mọi otaku đều có thể tỏa sáng!\"\n\n✨ Đặc Điểm:\n▸ Tính Cách: Samurai học đường (trung thành + kỷ luật)\n▸ Sở Thích: \"Ship\" mọi người với văn hóa Nhật\n▸ Ưu Điểm: 100% không có tsundere trong ban chủ nhiệm",
    description: "🎮 Lựa Chọn Tương Tác:\n[ 1 ] [Đọc \"Route\" Của CLB]\nRoute Học Thuật: \"Debate như Death Note\"\nRoute Sự Kiện: \"Lễ hội anime real-life\"\nRoute Bí Mật: \"Tại sao senpai không chú ý đến em?\" (chỉ unlock khi tham gia)\n\n[ 2 ] [Tương Tác]\n💬 \"Bạn muốn FM-A gọi bạn là: a) Nakama b) Senpai c) Kawaii kouhai\"\n\n📊 Chỉ Số CLB (Stats):\nKiến Thức Nhật Bản: ⭐⭐⭐⭐⭐\nNăng Lực Tổ Chức: ⭐⭐⭐⭐☆\nĐộ Cuồng Anime: MAX LEVEL\n\n⚠️ Cảnh Báo: CLB có thể khiến bạn:\n• Muốn học tiếng Nhật\n• Tốn tiền mua figure\n• \"Phân tích\" anime như một học giả\n\n🎯 Mục tiêu: FM-A hướng đến việc tạo ra một không gian học thuật sôi động, nơi các thành viên có thể giao lưu, chia sẻ kiến thức và trải nghiệm văn hóa Nhật Bản thông qua Manga, Anime và nhiều hoạt động đặc sắc khác.\n\n👥 Ban Lãnh Đạo:\n• Chủ nhiệm đời thứ 5: Nguyễn Đình Lợi\n• Phó chủ nhiệm: Nguyễn Tấn Thiên\n\n🏛️ Cơ Cấu Tổ Chức:\nFM-A không phân chia rạch ròi các đội nhóm mà hướng đến sự đoàn kết, đồng lòng của tất cả thành viên. Mỗi người đều có cơ hội đảm nhiệm nhiều vai trò khác nhau, trải nghiệm tinh thần làm việc nhóm quy mô lớn thực thụ.\n\n🏆 Thành Tích Nổi Bật:\n• CLB Manga-Anime hàng đầu tại THPT FPT Đà Nẵng – Bởi chúng tôi là những người tiên phong và duy nhất theo đuổi đam mê này một cách chuyên nghiệp!\n• Phong cách đa dạng: FM-A là tập hợp của những cá tính độc đáo, nơi mỗi thành viên được tự do thể hiện phong cách riêng.\n• Tinh thần Võ sĩ đạo: Trung thành – Kỷ luật – Sẵn sàng hi sinh vì chủ công, chúng tôi luôn nỗ lực hết mình vì cộng đồng yêu văn hóa Nhật.",
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
    position: "Trường THPT FPT Đà Nẵng",
    looking: "Người thiếu vốn từ vựng – Người ngoại giao tốt.\nHướng nội – Hướng ngoại.\nTinh thần làm việc.\nTrách nhiệm với đồng đội và công việc.\nĐam mê về tranh biện(Học thuật)\nMuốn phát triển/trao dồi kỹ năng: tự tin, học thuật, nói lách,….",
    emoji: "☀️",
    shortIntro: "SODES – Speak Out, Debate Everything, Shine!\nSODES là câu lạc bộ tranh biện dành cho những bạn trẻ tin vào sức mạnh của ngôn từ, lý trí và lắng nghe. Được thành lập tại trường THPT FPT ĐN, SODES là mái nhà chung của những học sinh ham học hỏi, thích đặt câu hỏi \"Tại sao?\" và không ngại thử thách góc nhìn truyền thống.\n💡 Sứ mệnh của chúng tôi:\n\"Không ngừng học hỏi – Nói để hiểu – Tranh biện để trưởng thành.\"",
    description: "SODES không chỉ là nơi rèn luyện kỹ năng tranh biện chuyên sâu, mà còn là không gian để mỗi bạn học sinh:\n• Phát triển tư duy phản biện và kỹ năng nói trước đám đông\n• Biết lắng nghe trong khác biệt\n• Tự tin bảo vệ quan điểm bằng lý lẽ và sự tôn trọng\n\n🔍 Tại đây, bạn sẽ:\n• Tổ chức các buổi tranning kỹ năng tranh biện theo tuần\n• Tham gia các cuộc thi tranh biện từ cấp trường đến Thành Phố\n• Tổ chức giải tranh biện nội bộ và các hoạt động ngoại khóa.\n• Tham gia cộng tác viên/đồng ban tổ chức cuộc thi tranh biện do nhà trường và SODES sáng lập.\n\n💬 SODES chính là nơi để bạn:\n• Speak: Dám nói lên chính kiến\n• Open-minded: Cởi mở tiếp nhận ý kiến đối lập\n• Debate: Biết lập luận vững vàng, phản biện thông minh\n• Empathy: Thấu cảm trong mọi góc nhìn\n• Shine: Tỏa sáng bằng trí tuệ và bản sắc riêng\n\n📣 Thông điệp gửi đến bạn:\nDù bạn là người hướng nội hay hướng ngoại, giỏi nói hay mới bắt đầu học cách nói – SODES luôn chào đón bạn.\nHãy để mỗi cuộc tranh luận là một lần bạn hiểu hơn về thế giới và chính mình.",
    quote: "Vào SODES, bạn không cần phải là người giỏi nhất – chỉ cần là người sẵn sàng học hỏi và dám cất tiếng nói.",
    image: "/images/SODES.png",
    logoImg: "/images/logos/sodes-logo.png",
    members: "Hơn 11 thành viên,chất lượng dẫn sđầu số lượng, chúng mình không chọn thành viên trên con số chúng mình chọn trên năng lực, đến với SODES bạn sẽ sở hưởng những giải thưởng nóng tay.",
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
    position: "Trường THPT FPT Đà Nẵng",
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
    position: "Phòng lab stem 111",
    looking: "Những bạn dám thử thách, có đam mê, muốn được thử sức và phát triển bản thân mình.",
    emoji: "🤖",
    shortIntro: "📩 Chúng tôi là một đội ngũ CLB làm việc chuyên nghiệp, là 1 CLB robotics tiêu biểu trong cộng đồng VSU (cộng đồng robotics có hơn 30 CLB trên cả nước).\nỞ đây các bạn sẽ được phát triển và nuôi dưỡng bản thân mình khi được học những kỹ năng mới: code, thiết kế 3D trên phần mềm Onshape và đặc biệt vô cùng quan trọng là những thành viên nữ được học về truyền thông, tài chính, v.v...\nNhững thành viên đã đem về cho CLB và trường vô số giải thưởng, là nôi sản sinh ra những khủng long tài năng, tiêu biểu, đặc biệt xuất sắc của trường.",
    description: "🎯 Mục tiêu hoạt động:\n• Xây dựng và phát triển CLB toàn diện, là chìa khóa đánh thức niềm đam mê với STEM & robotics cho các bạn trẻ, phát triển cộng đồng.\n\n👥 Thành viên:\nHiện có hơn 50 thành viên năng động, kỹ năng tốt, luôn sẵn sàng hỗ trợ, với 6 tiêu chí của FIRST.\n\n⏳ Thâm niên:\n3 năm hoạt động chính thức, tham gia và mang về hàng trăm giải thưởng to nhỏ trong nước và thế giới, được đăng lên báo, vinh danh khủng long,...\n\n🎁 Gia nhập bạn sẽ nhận được:\n• Cơ hội phát triển bản thân toàn diện\n• Cơ hội tham gia và giành giải thưởng các cuộc thi lớn như FIRST, ENJOY AI, VEX, ROBO G, ORC,... (được đi chơi xa, được trải nghiệm từ teamwork, cho đến những tri kỉ, giành nhiều giải thưởng được vinh danh cấp học bổng ở nhiều trường đại học trên thế giới)\n• Làm việc trong môi trường chuyên nghiệp, tôn trọng, v.v...\n• Những kỉ niệm đặc biệt của tuổi trẻ mà không phải tham gia CLB nào cũng được như vậy.\n\n💡 Note: CLB thấy rằng những bạn nữ thường rất e dè khi tham gia một CLB liên quan đến kỹ thuật STEM và robotics vì sợ không hợp nhưng thật ra CLB rất muốn tìm những bạn có thế mạnh về truyền thông, các bạn sẽ trở thành những cá nhân tiêu biểu của CLB trong phong trào Women in STEM.",
    quote: "FSRC – Nơi đánh thức đam mê STEM & Robotics, nơi mọi thành viên đều có thể tỏa sáng!",
    image: "/images/FGym.png",
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
]
