// ============================================================
// DỮ LIỆU CHUYẾN ĐI DU LỊCH VINH - CỬA LÒ
// 30/04 - 01/05/2026 | 5 người | 2 ngày 1 đêm
// ============================================================

export const TRIP_DATE = new Date('2026-04-30T07:00:00+07:00')
export const TRIP_END = new Date('2026-05-02T01:00:00+07:00')
export const GROUP_SIZE = 5
export const BUDGET_PER_PERSON = 2_000_000
export const TOTAL_BUDGET = BUDGET_PER_PERSON * GROUP_SIZE

// ============================================================
// NGÂN SÁCH CHI TIẾT
// ============================================================
export interface BudgetItem {
  category: string
  icon: string
  items: { name: string; perPerson: number; perGroup: number; note?: string }[]
}

export const budgetData: BudgetItem[] = [
  {
    category: 'Di chuyển liên tỉnh',
    icon: '🚌',
    items: [
      { name: 'Xe Hà Nội → Vinh (giá lễ)', perPerson: 400_000, perGroup: 2_000_000, note: 'Xe giường nằm/limousine' },
      { name: 'Xe Vinh → Hà Nội (giá lễ)', perPerson: 400_000, perGroup: 2_000_000, note: 'Xe giường nằm/limousine' },
    ],
  },
  {
    category: 'Di chuyển nội vùng',
    icon: '🏍️',
    items: [
      { name: 'Thuê xe máy (3 xe × 1,5 ngày)', perPerson: 135_000, perGroup: 675_000, note: '150K/xe/ngày, chia 5 người' },
      { name: 'Xăng xe máy', perPerson: 30_000, perGroup: 150_000 },
    ],
  },
  {
    category: 'Lưu trú',
    icon: '🏨',
    items: [
      { name: '1 đêm nhà nghỉ gần biển (2 phòng)', perPerson: 200_000, perGroup: 1_000_000, note: '1 phòng 3 giường + 1 phòng 2 giường' },
    ],
  },
  {
    category: 'Ăn uống',
    icon: '🍜',
    items: [
      { name: 'Trưa ngày 1 — Hải sản Cửa Lò', perPerson: 100_000, perGroup: 500_000, note: 'Combo hải sản chia sẻ' },
      { name: 'Tối ngày 1 — Hải sản BBQ + bia', perPerson: 150_000, perGroup: 750_000, note: 'Nướng tại bãi biển' },
      { name: 'Sáng ngày 2 — Cháo lươn đặc sản', perPerson: 50_000, perGroup: 250_000, note: 'Đặc sản xứ Nghệ' },
      { name: 'Trưa ngày 2 — Bún bò / Cơm Vinh', perPerson: 80_000, perGroup: 400_000 },
      { name: 'Tối ngày 2 — Cơm / bún nhẹ', perPerson: 50_000, perGroup: 250_000, note: 'Trước khi lên xe' },
    ],
  },
  {
    category: 'Hoạt động & Khác',
    icon: '🎯',
    items: [
      { name: 'Kem chống nắng, nước, snack', perPerson: 80_000, perGroup: 400_000 },
      { name: 'Quà (kẹo cu đơ, bánh đa...)', perPerson: 50_000, perGroup: 250_000 },
    ],
  },
]

// ============================================================
// THỜI TIẾT
// ============================================================
export interface WeatherInfo {
  label: string
  value: string
  icon: string
  color: string
}

export const weatherData: WeatherInfo[] = [
  { label: 'Nhiệt độ cao nhất', value: '30–33°C', icon: '🌡️', color: 'text-red-500' },
  { label: 'Nhiệt độ thấp nhất', value: '23–25°C', icon: '🌙', color: 'text-blue-400' },
  { label: 'Độ ẩm', value: 'Cao, oi bức', icon: '💧', color: 'text-cyan-500' },
  { label: 'Lượng mưa', value: '~33mm cả tháng 4', icon: '🌧️', color: 'text-gray-500' },
  { label: 'Gió', value: 'Nhẹ ~11 km/h', icon: '💨', color: 'text-teal-500' },
  { label: 'Nước biển', value: '25–27°C (lý tưởng)', icon: '🌊', color: 'text-blue-500' },
  { label: 'Mây che phủ', value: '40–50%', icon: '☁️', color: 'text-gray-400' },
  { label: 'Chỉ số UV', value: 'Cao (8–10)', icon: '☀️', color: 'text-orange-500' },
]

// ============================================================
// RỦI RO
// ============================================================
export interface Risk {
  level: 'low' | 'medium' | 'high'
  title: string
  color: string
  bgColor: string
  borderColor: string
  icon: string
  items: string[]
}

export const risks: Risk[] = [
  {
    level: 'low',
    title: 'Rủi ro THẤP',
    color: 'text-green-700 dark:text-green-400',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    borderColor: 'border-green-200 dark:border-green-800',
    icon: '✅',
    items: [
      'Thời tiết: Tháng 4 nằm ngoài mùa mưa bão (mùa bão: tháng 8–11). Mưa rào ngắn có thể xảy ra nhưng không ảnh hưởng lớn.',
      'Biển: Sóng nhẹ, phù hợp tắm biển. Nước biển ấm áp.',
    ],
  },
  {
    level: 'medium',
    title: 'Rủi ro TRUNG BÌNH',
    color: 'text-yellow-700 dark:text-yellow-400',
    bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
    borderColor: 'border-yellow-200 dark:border-yellow-800',
    icon: '⚡',
    items: [
      'Đông đúc: 30/4–1/5 là dịp nghỉ lễ lớn nhất, Cửa Lò sẽ rất đông khách. Đặt phòng và vé xe TRƯỚC ít nhất 2 tuần.',
      'Giá tăng: Giá phòng, vé xe, đồ ăn tăng 20–50% so với ngày thường.',
      'Giao thông: Đường Hà Nội – Vinh có thể kẹt xe, thời gian di chuyển tăng thêm 1–2 tiếng.',
      'Nắng nóng: UV cao, cần kem chống nắng SPF50+, mũ, kính mát.',
    ],
  },
  {
    level: 'high',
    title: 'Rủi ro CẦN ĐỀ PHÒNG',
    color: 'text-red-700 dark:text-red-400',
    bgColor: 'bg-red-50 dark:bg-red-900/20',
    borderColor: 'border-red-200 dark:border-red-800',
    icon: '🔶',
    items: [
      'An toàn tắm biển: Chỉ tắm ở khu vực có cờ xanh, có lực lượng cứu hộ. Tránh tắm đêm.',
      'Xe máy: Đội mũ bảo hiểm, không uống rượu bia khi lái xe. Đường Vinh – Cửa Lò dễ đi.',
      'Mất cắp: Dịp lễ đông đúc, cẩn thận đồ đạc cá nhân trên bãi biển.',
    ],
  },
]

export const contingencyPlan = {
  title: 'Kịch bản dự phòng nếu MƯA',
  items: [
    { time: 'Sáng', plan: 'Ghé thăm Đền Cờn (di tích lịch sử) hoặc Chùa Đại Tuệ' },
    { time: 'Trưa', plan: 'Ăn hải sản trong nhà hàng có mái che' },
    { time: 'Chiều', plan: 'Đi chợ Vinh mua quà, tham quan Quảng trường HCM' },
    { time: 'Tối', plan: 'Uống cà phê, karaoke, chơi bida' },
  ],
}

// ============================================================
// LỊCH TRÌNH NGÀY 1 — 30/04/2026
// ============================================================
export interface TimeBlock {
  time: string
  title: string
  icon: string
  description: string
  details?: string[]
  tips?: string[]
  prices?: { item: string; price: string }[]
  mapLink?: string
  address?: string
  phone?: string
  tags?: string[]
  options?: { name: string; info: string; price?: string; phone?: string; link?: string }[]
  menuItems?: { item: string; price: string }[]
}

export const itineraryDay1: TimeBlock[] = [
  {
    time: '07:00',
    title: 'Xuất phát từ Hà Nội',
    icon: '🚌',
    description: 'Tập trung tại bến xe, lên xe giường nằm/limousine đi Vinh. Thời gian di chuyển 5,5–7 tiếng (dịp lễ có thể lâu hơn do kẹt xe).',
    details: [
      'Điểm đón: Bến xe Nước Ngầm hoặc Bến xe Giáp Bát',
      'Thời gian: 5,5–7 tiếng (lễ có thể + 1–2 tiếng)',
      'Mang theo: Đồ ăn nhẹ, nước, sạc dự phòng, thuốc say xe',
    ],
    options: [
      { name: 'Xe Văn Minh', info: 'Giường nằm chất lượng cao, wifi, nước uống', price: '350–400K/người (lễ)', link: 'https://vexere.com/en-US/bus-ticket-booking-from-ha-noi-to-vinh-nghe-an-124t24701.html' },
      { name: 'FUTA Hà Sơn', info: 'Limousine, ghế massage, USB sạc', price: '350–450K/người (lễ)', link: 'https://motogo.vn/xe-ha-noi-vinh-nghe-an/' },
      { name: 'Nam Quỳnh Anh', info: 'Giường nằm, giá bình dân', price: '320–420K/người (lễ)' },
    ],
    tips: [
      'Đặt vé trên Vexere.com hoặc Traveloka trước 2 tuần',
      'Chọn chuyến 7h sáng hoặc sớm hơn để tránh kẹt',
      'Ăn sáng nhẹ trước khi lên xe, tránh say xe',
      'Mang tai nghe, nhạc, phim offline cho chuyến đi dài',
    ],
    mapLink: 'https://www.google.com/maps/place/B%E1%BA%BFn+xe+N%C6%B0%E1%BB%9Bc+Ng%E1%BA%A7m',
    tags: ['di chuyển', 'đặt trước'],
  },
  {
    time: '12:30',
    title: 'Đến Vinh — Nhận xe máy',
    icon: '🏍️',
    description: 'Đến bến xe Vinh, nhận 3 xe máy đã đặt trước. Kiểm tra xe kỹ trước khi đi.',
    details: [
      'Thuê 3 xe máy: 2 người/xe + 1 xe solo',
      'Giá thuê: 100–150K/xe/ngày (tổng 1,5 ngày ≈ 675K cho 3 xe)',
      'Kiểm tra: phanh, đèn, còi, xăng, lốp trước khi nhận',
      'Chụp ảnh xe trước khi đi để tránh tranh chấp',
    ],
    options: [
      { name: 'Anh Dũng Motorbike', info: 'Số 18 Phượng Hoàng, Trung Đô, Vinh', price: '100–150K/xe/ngày', phone: 'Liên hệ qua TripBike', link: 'https://tripbike.net/thue-xe-may-o-vinh/' },
    ],
    tips: [
      'Gọi trước để chủ xe giao tận bến xe',
      'Đặt cọc: thường 1–2 triệu hoặc CMND/CCCD',
      'Nên thuê xe số (Honda Wave) dễ đi hơn xe tay ga trên đường xa',
    ],
    mapLink: 'https://www.google.com/maps/place/Vinh,+Ngh%E1%BB%87+An,+Vietnam',
    tags: ['di chuyển', 'đặt trước'],
  },
  {
    time: '13:00',
    title: 'Chạy xe đến Cửa Lò — Check-in nhà nghỉ',
    icon: '🏨',
    description: 'Đường Vinh → Cửa Lò khoảng 16km, chạy xe máy tầm 30 phút. Đường đẹp, dễ đi. Check-in nhà nghỉ, để đồ, thay đồ biển.',
    details: [
      'Khoảng cách: Vinh → Cửa Lò ~16km (30 phút xe máy)',
      'Chiến lược: 2 phòng (1 phòng 3 giường + 1 phòng 2 giường)',
      'Tổng chi phí phòng: ~1.000.000đ (200K/người)',
      'GỌI TRƯỚC đặt phòng — dịp lễ phòng cháy rất nhanh!',
    ],
    options: [
      { name: 'Nhà nghỉ Cương Thanh', info: '170 Bình Minh, Cửa Lò. Sạch sẽ, gần biển 200m', price: '300–500K/phòng (lễ)', phone: '0352 233 563' },
      { name: 'Nhà nghỉ Sơn Nguyệt', info: '168 Bình Minh, Cửa Lò. Phòng rộng, có máy lạnh', price: '300–500K/phòng (lễ)', phone: '0973 484 042' },
      { name: 'Nhà nghỉ Truyền Tải Điện 1', info: '215 Bình Minh. Gần biển NHẤT (~100m), sân rộng', price: '300–500K/phòng (lễ)', phone: '0238 395 1623' },
    ],
    tips: [
      'GỌI TRƯỚC ít nhất 2 tuần đặt phòng',
      'Nói rõ số người để được bố trí phòng phù hợp',
      'Hỏi về có gửi xe máy miễn phí không',
      'Check xem phòng có nước nóng, máy lạnh, wifi không',
    ],
    mapLink: 'https://www.google.com/maps/place/C%E1%BB%ADa+L%C3%B2+Beach',
    tags: ['lưu trú', 'đặt trước'],
  },
  {
    time: '13:30',
    title: 'Ăn trưa hải sản Cửa Lò',
    icon: '🍽️',
    description: 'Bữa hải sản đầu tiên! Chọn quán có bảng giá niêm yết. Gọi combo chia sẻ cho nhóm 5 người tiết kiệm hơn gọi lẻ.',
    details: [
      'Budget: ~100K/người (tổng ~500K cho 5 người)',
      'HỎI GIÁ TRƯỚC khi gọi món',
      'Gọi combo chia sẻ tiết kiệm hơn gọi lẻ',
      'Ưu tiên quán có bảng giá niêm yết, đông khách địa phương',
    ],
    options: [
      { name: 'Nhà hàng Hành Hiệp', info: 'Hải sản tươi sống, giá niêm yết rõ ràng, 20+ năm kinh nghiệm', price: '~100K/người' },
      { name: 'Biển Nhớ Cửa Hội', info: 'View biển đẹp, không gian rộng thoáng', price: '150–300K/người', link: 'https://hoabinhtourist.com/cam-nang-du-lich/nha-hang-cua-lo' },
      { name: 'Nhà hàng Thủy Minh Châu 2', info: 'Nổi tiếng lẩu hải sản, ốc xào các loại', price: '~100K/người' },
    ],
    menuItems: [
      { item: 'Tôm hùm bông nướng phô mai', price: '350–500K/con' },
      { item: 'Ghẹ hấp / rang me (1kg)', price: '250–400K' },
      { item: 'Mực nướng sa tế (1 đĩa)', price: '120–180K' },
      { item: 'Nghêu / sò huyết xào tỏi', price: '80–120K' },
      { item: 'Ốc hương luộc (1 đĩa)', price: '150–250K' },
      { item: 'Cơm trắng', price: '10K/bát' },
      { item: '💡 Combo 5 người (gợi ý)', price: '~500K tổng' },
    ],
    tips: [
      'Combo gợi ý 5 người: 1 đĩa nghêu xào + 1 đĩa mực nướng + 1 đĩa ốc + cơm = ~500K',
      'Kiểm tra hải sản còn tươi sống trước khi gọi',
      'Tránh gọi tôm hùm nếu muốn tiết kiệm budget',
      'Uống nước mía / trà đá tại quán (5–10K/ly)',
    ],
    mapLink: 'https://www.google.com/maps/search/nh%C3%A0+h%C3%A0ng+h%E1%BA%A3i+s%E1%BA%A3n+C%E1%BB%ADa+L%C3%B2',
    tags: ['ăn uống', 'hải sản'],
  },
  {
    time: '15:00',
    title: 'Chiều tại bãi biển Cửa Lò',
    icon: '🏖️',
    description: 'Thời gian tự do tại bãi biển dài 10km. Tắm biển, chơi thể thao bãi biển, chụp ảnh. Nhiều dịch vụ MIỄN PHÍ!',
    details: [
      'Bãi biển Cửa Lò dài 10km, cát mịn, sóng nhẹ',
      'Hoạt động MIỄN PHÍ: tắm biển, đá bóng, đi dạo, chơi cát',
      'Dịch vụ MIỄN PHÍ: 16 trạm tắm tráng nước ngọt, bãi đỗ xe, WiFi',
      'Chỉ tắm ở khu vực có cờ XANH và lực lượng cứu hộ',
    ],
    prices: [
      { item: 'Ghế bãi biển + ô che', price: '50–80K/bộ' },
      { item: 'Phao bơi thuê', price: '30–50K' },
      { item: 'Jet ski', price: '300–500K/15 phút' },
      { item: 'Banana boat', price: '100K/người' },
      { item: 'Nước dừa tươi', price: '20–30K' },
    ],
    tips: [
      'Thoa kem chống nắng SPF50+ trước 15 phút khi ra biển',
      'Thoa lại mỗi 2 tiếng, đặc biệt sau khi tắm',
      'Mang kính râm, mũ rộng vành',
      'Để đồ quý giá tại nhà nghỉ, chỉ mang tiền lẻ ra biển',
      'Uống đủ nước — nắng nóng dễ mất nước',
    ],
    mapLink: 'https://www.google.com/maps/place/C%E1%BB%ADa+L%C3%B2+Beach',
    tags: ['biển', 'miễn phí', 'hoạt động'],
  },
  {
    time: '17:30',
    title: 'Hoàng hôn tại Đảo Lan Châu',
    icon: '🌅',
    description: 'Đảo nhỏ nối với bờ bằng cầu, nằm ngay trung tâm Cửa Lò. Điểm ngắm hoàng hôn đẹp nhất Cửa Lò. Miễn phí vào!',
    details: [
      'Đảo Lan Châu nối với bờ, đi bộ qua được',
      'View hoàng hôn tuyệt đẹp từ phía Tây đảo',
      'Có đền thờ trên đảo, không gian yên bình',
      'Thời gian hoàng hôn: khoảng 17:45–18:15',
    ],
    tips: [
      'Đến sớm 15 phút để chọn vị trí đẹp',
      'View đẹp nhất: phía Tây đảo, hướng ra vịnh',
      'Mang camera/điện thoại sạc đầy pin',
      'Chế độ chụp: HDR hoặc golden hour filter',
      'Nên mang dép có quai hậu vì có đá trơn',
    ],
    mapLink: 'https://www.google.com/maps/place/%C4%90%E1%BA%A3o+Lan+Ch%C3%A2u',
    tags: ['tham quan', 'miễn phí', 'check-in'],
  },
  {
    time: '18:30',
    title: 'Ăn tối hải sản BBQ bãi biển',
    icon: '🦐',
    description: 'Bữa tối đỉnh cao! Hải sản nướng ngay trên bãi biển, bia hơi mát lạnh, gió biển vi vu. Gọi combo nhóm 5 người tiết kiệm nhất.',
    details: [
      'Budget: ~150K/người (tổng ~750K cho 5 người)',
      'Chọn quán có bếp nướng ngay bàn',
      'Gọi combo nhóm 5 người tiết kiệm hơn gọi lẻ',
      'Bia hơi Nghệ An chỉ ~15K/cốc!',
    ],
    menuItems: [
      { item: 'Combo nướng hải sản 5 người', price: '~600–800K' },
      { item: '— Nghêu nướng mỡ hành (1kg)', price: '100–150K' },
      { item: '— Mực nướng sa tế (0,5kg)', price: '120–180K' },
      { item: '— Tôm nướng muối ớt (0,5kg)', price: '150–200K' },
      { item: '— Sò điệp nướng phô mai', price: '120–160K' },
      { item: '— Ngô nướng, khoai nướng', price: '15–20K/cái' },
      { item: 'Bia hơi Nghệ An', price: '15K/cốc' },
      { item: 'Bia Hà Nội / Tiger lon', price: '20–25K/lon' },
      { item: 'Nước ngọt / nước suối', price: '10–15K' },
    ],
    tips: [
      'Combo gợi ý: 1kg nghêu + 0,5kg mực + 0,5kg tôm + bia = ~750K cho 5 người',
      'Chọn quán trên đường Bình Minh sát biển',
      'Hỏi giá trước, chọn quán có menu rõ giá',
      'Ăn từ từ, ngắm biển đêm — trải nghiệm tuyệt vời!',
      'Nhớ ai lái xe thì KHÔNG uống bia rượu',
    ],
    mapLink: 'https://www.google.com/maps/search/h%E1%BA%A3i+s%E1%BA%A3n+n%C6%B0%E1%BB%9Bng+C%E1%BB%ADa+L%C3%B2',
    tags: ['ăn uống', 'BBQ', 'biển đêm'],
  },
  {
    time: '20:30',
    title: 'Đêm Cửa Lò — Phố đi bộ & Bia hơi',
    icon: '🌙',
    description: 'Khám phá đêm Cửa Lò! Phố đi bộ ven biển, uống bia hơi, hòa mình vào không khí lễ hội 30/4. Dịp lễ thường có chương trình văn nghệ.',
    details: [
      'Phố đi bộ Cửa Lò dọc đường Bình Minh',
      'Dịp lễ 30/4 thường có chương trình pháo hoa, văn nghệ',
      'Nhiều quán bia, quán nhậu dọc bờ biển',
      'Có thể tắm biển đêm NẾU có đèn chiếu sáng (cẩn thận)',
    ],
    prices: [
      { item: 'Bia hơi bãi biển', price: '15K/cốc' },
      { item: 'Trà chanh / nước ép', price: '15–25K' },
      { item: 'Ốc luộc vỉa hè', price: '40–60K/đĩa' },
      { item: 'Bắp nướng / khoai nướng', price: '10–20K' },
    ],
    tips: [
      'Đi dép có quai, đường cát có thể trơn',
      'Mang áo khoác mỏng nếu gió biển mạnh',
      'Cẩn thận đồ đạc — dịp lễ đông người',
      'Về nhà nghỉ trước 23h để nghỉ ngơi cho ngày mai',
    ],
    tags: ['giải trí', 'đêm', 'lễ hội'],
  },
  {
    time: '22:30',
    title: 'Về nhà nghỉ nghỉ ngơi',
    icon: '😴',
    description: 'Tắm rửa, nghỉ ngơi. Ngày mai dậy sớm xem bình minh trên biển! Đặt báo thức 5:15.',
    tips: [
      'Đặt báo thức 5:15 sáng để kịp xem bình minh',
      'Sạc đầy pin điện thoại',
      'Chuẩn bị đồ tắm biển sẵn cho buổi sáng',
      'Uống nước, bôi kem dưỡng da sau ngày nắng',
    ],
    tags: ['nghỉ ngơi'],
  },
]

// ============================================================
// LỊCH TRÌNH NGÀY 2 — 01/05/2026
// ============================================================
export const itineraryDay2: TimeBlock[] = [
  {
    time: '05:30',
    title: 'Ngắm bình minh trên biển',
    icon: '🌅',
    description: 'Cửa Lò hướng Đông — bình minh cực đẹp! Biển sáng sớm mát mẻ, ít người, nước trong. Trải nghiệm không thể bỏ lỡ.',
    details: [
      'Bình minh khoảng 5:15–5:45 (cuối tháng 4)',
      'Ra bờ biển trước khoảng 5:00 để đón ánh bình minh đầu tiên',
      'Nước biển buổi sáng mát, sạch, sóng nhẹ',
      'Ít người — chụp ảnh thoải mái, tắm biển yên bình',
    ],
    tips: [
      'Mang camera để chụp golden hour buổi sáng',
      'Tắm biển sáng sớm: nước mát, sạch nhất trong ngày',
      'Đừng quên kem chống nắng dù mới sáng sớm',
    ],
    mapLink: 'https://www.google.com/maps/place/C%E1%BB%ADa+L%C3%B2+Beach',
    tags: ['biển', 'bình minh', 'check-in'],
  },
  {
    time: '07:30',
    title: 'Ăn sáng — Cháo lươn xứ Nghệ',
    icon: '🍜',
    description: 'Đặc sản PHẢI THỬ khi đến Nghệ An! Cháo lươn / Súp lươn nấu kiểu Nghệ An khác hoàn toàn miền Bắc — nước dùng đậm đà, lươn giòn thơm.',
    details: [
      'Đặc sản số 1 xứ Nghệ — không ăn = chưa đến Nghệ An!',
      'Cháo lươn Nghệ An: nước dùng ninh xương, lươn xào nghệ',
      'Ăn kèm: bánh mì, rau sống, chanh ớt',
      'Giá: 40–50K/tô (tô đặc biệt 60–70K)',
    ],
    options: [
      { name: 'Quán lươn trên đường Bình Minh', info: 'Ngay Cửa Lò, tiện không cần chạy xa', price: '40–50K/tô' },
      { name: 'Quán Trang Lành', info: '12 Ngô Đức Mai, TP Vinh — nổi tiếng nhất', price: '40–60K/tô', link: 'https://vinwonders.com/vi/wonderpedia/news/quan-luon-nghe-an-ngon/' },
      { name: 'Quán Tư Tại', info: 'Đường Nguyễn Văn Cừ, Vinh — locals yêu thích', price: '35–50K/tô' },
    ],
    menuItems: [
      { item: 'Cháo lươn thường', price: '40–50K' },
      { item: 'Cháo lươn đặc biệt (nhiều lươn)', price: '60–70K' },
      { item: 'Súp lươn (nước trong hơn cháo)', price: '40–50K' },
      { item: 'Miến lươn', price: '40–50K' },
      { item: 'Cháo lươn + bánh mì', price: '50–60K' },
      { item: 'Trà đá', price: 'Miễn phí' },
    ],
    tips: [
      'Gọi "cháo lươn đặc biệt" để được nhiều lươn hơn',
      'Ăn kèm bánh mì giòn chấm nước dùng — cực ngon',
      'Thêm chanh + ớt tươi cho đúng vị Nghệ An',
      'Quán ngon thường đông từ 6–8h sáng, đi sớm!',
    ],
    mapLink: 'https://www.google.com/maps/search/ch%C3%A1o+l%C6%B0%C6%A1n+Vinh+Ngh%E1%BB%87+An',
    tags: ['ăn uống', 'đặc sản', 'phải thử'],
  },
  {
    time: '08:30',
    title: 'Check-out & Tắm biển buổi sáng',
    icon: '🏖️',
    description: 'Trả phòng nhà nghỉ, gửi đồ tại quầy lễ tân. Tắm biển thêm 1–2 tiếng — session cuối cùng ở Cửa Lò!',
    details: [
      'Trả phòng, nhờ nhà nghỉ giữ hộ hành lý',
      'Tắm biển buổi sáng: nước trong, sóng nhẹ, nắng chưa gắt',
      'Khoảng 8:30–10:00 là thời điểm tắm lý tưởng',
    ],
    tips: [
      'Nhờ nhà nghỉ giữ đồ miễn phí sau khi trả phòng',
      'Mang theo quần áo khô để thay sau khi tắm',
      'Thoa lại kem chống nắng trước khi ra biển',
    ],
    tags: ['biển', 'nhà nghỉ'],
  },
  {
    time: '10:30',
    title: 'Khám phá bãi biển Cửa Hội',
    icon: '🏝️',
    description: 'Chạy xe 6km về phía Cửa Hội — bãi biển hoang sơ, ít đông hơn Cửa Lò. Cát trắng, nước trong, cảnh đẹp thiên nhiên.',
    details: [
      'Cửa Hội cách Cửa Lò ~6km về phía Nam',
      'Bãi biển hoang sơ, ít du khách hơn',
      'Cảnh đẹp tự nhiên, chụp ảnh tuyệt vời',
      'Nằm ở nơi sông Lam đổ ra biển — phong cảnh hùng vĩ',
    ],
    tips: [
      'Chạy xe máy dọc đường ven biển — đường đẹp, nhiều view',
      'Cẩn thận dòng nước tại cửa sông — không nên tắm ở khu vực cửa sông',
      'Mang nước uống theo vì ít quán hơn Cửa Lò',
    ],
    mapLink: 'https://www.google.com/maps/place/C%E1%BB%ADa+H%E1%BB%99i',
    tags: ['tham quan', 'biển', 'hoang sơ'],
  },
  {
    time: '12:00',
    title: 'Ăn trưa tại TP Vinh — Bún bò Vinh',
    icon: '🍲',
    description: 'Chạy xe về TP Vinh (~20 phút). Thưởng thức bún bò Vinh — khác hoàn toàn bún bò Huế, nước dùng thanh nhẹ hơn, thịt bò tươi ngọt.',
    details: [
      'Cửa Lò → TP Vinh: ~16km, 20 phút xe máy',
      'Bún bò Vinh: nước dùng ninh xương, vị thanh, thịt bò tươi',
      'Ăn kèm: rau sống, bắp chuối, chanh ớt',
      'Budget: ~50–80K/người',
    ],
    options: [
      { name: 'Quán bún bò đường Nguyễn Văn Cừ', info: 'Bún bò truyền thống, đông khách địa phương', price: '40–50K/tô' },
      { name: 'Quán bún bò Bà Lý', info: 'Nổi tiếng TP Vinh, nước dùng đậm đà', price: '45–55K/tô' },
    ],
    menuItems: [
      { item: 'Bún bò thường', price: '40–50K' },
      { item: 'Bún bò đặc biệt (thêm giò, gân)', price: '55–70K' },
      { item: 'Bún bò + chả viên', price: '50–60K' },
      { item: 'Cơm bình dân (thay thế)', price: '35–45K' },
      { item: 'Nước mía', price: '10–15K' },
    ],
    tips: [
      'Bún bò Vinh khác bún bò Huế — ít cay hơn, nước dùng thanh hơn',
      'Gọi tô đặc biệt để thử đầy đủ topping',
      'Quán ngon nhất thường đông trưa 11:30–13:00',
    ],
    mapLink: 'https://www.google.com/maps/search/b%C3%BAn+b%C3%B2+Vinh',
    tags: ['ăn uống', 'đặc sản'],
  },
  {
    time: '13:30',
    title: 'Tham quan Quảng trường HCM & Chợ Vinh',
    icon: '📸',
    description: 'Quảng trường Hồ Chí Minh Vinh — một trong những quảng trường lớn nhất Đông Nam Á. Sau đó ghé Chợ Vinh mua quà đặc sản về.',
    details: [
      'Quảng trường HCM: rộng 10 hecta, tượng Bác Hồ lớn nhất VN',
      'Check-in, chụp ảnh tại quảng trường',
      'Chợ Vinh: chợ lớn nhất Nghệ An, đầy đủ đặc sản',
    ],
    prices: [
      { item: 'Kẹo Cu Đơ (đặc sản Hà Tĩnh)', price: '30–50K/hộp' },
      { item: 'Bánh đa vừng Nghệ An', price: '20–30K/xấp' },
      { item: 'Tương Nam Đàn', price: '25–40K/chai' },
      { item: 'Hải sản khô (tôm, mực)', price: '100–200K/túi' },
      { item: 'Nước mắm Cửa Lò', price: '40–60K/chai' },
      { item: 'Cam Vinh (mùa từ tháng 10)', price: 'Hết mùa' },
    ],
    tips: [
      'Mua quà ở Chợ Vinh rẻ hơn mua ở bãi biển',
      'Trả giá 70–80% giá ban đầu ở chợ',
      'Kẹo Cu Đơ: mua loại đóng hộp để mang về',
      'Kiểm tra hạn sử dụng trước khi mua',
    ],
    mapLink: 'https://www.google.com/maps/place/Qu%E1%BA%A3ng+tr%C6%B0%E1%BB%9Dng+H%E1%BB%93+Ch%C3%AD+Minh+Vinh',
    tags: ['tham quan', 'mua sắm', 'quà'],
  },
  {
    time: '15:00',
    title: 'Tắm biển chiều — Session cuối cùng',
    icon: '🏖️',
    description: 'Quay lại Cửa Lò lần cuối. Tắm biển chiều, nghỉ ngơi trên bãi, uống nước dừa. Tận hưởng thời gian cuối ở biển!',
    details: [
      'Quay lại Cửa Lò: ~20 phút từ Vinh',
      'Tắm biển chiều: nắng dịu, nước ấm',
      'Nghỉ ngơi, uống nước dừa trên bãi',
      'Lần cuối ở biển — tận hưởng hết mình!',
    ],
    prices: [
      { item: 'Nước dừa tươi', price: '20–30K' },
      { item: 'Ghế bãi biển', price: '50K/bộ' },
      { item: 'Kem / kem que', price: '10–20K' },
    ],
    tips: [
      'Thoa kem chống nắng lại — nắng chiều vẫn mạnh',
      'Tắm tráng nước ngọt miễn phí tại các trạm dọc bãi',
      'Chuẩn bị quần áo khô để thay trước khi trả xe',
    ],
    tags: ['biển', 'nghỉ ngơi'],
  },
  {
    time: '17:00',
    title: 'Trả xe máy — Chuẩn bị về',
    icon: '🏍️',
    description: 'Chạy xe về TP Vinh, trả xe cho chủ thuê. Tắm rửa sạch sẽ trước khi lên xe về Hà Nội.',
    details: [
      'Cửa Lò → TP Vinh: ~16km, 30 phút',
      'Trả xe đúng giờ, kiểm tra lại xe cùng chủ',
      'Tắm rửa: nhờ nhà xe cho dùng nhà vệ sinh hoặc tìm toilet công cộng',
    ],
    tips: [
      'Đổ đầy xăng trước khi trả xe (nếu hợp đồng yêu cầu)',
      'Lấy lại tiền cọc / CMND',
      'Kiểm tra không bỏ quên đồ trên xe',
    ],
    tags: ['di chuyển'],
  },
  {
    time: '17:30',
    title: 'Ăn tối nhẹ trước khi lên xe',
    icon: '🍽️',
    description: 'Ăn nhẹ ở TP Vinh trước khi lên xe đêm về Hà Nội. Không nên ăn quá no tránh say xe.',
    details: [
      'Budget: ~50K/người',
      'Ăn nhẹ nhàng, tránh đồ tanh/béo nếu hay say xe',
      'Mua thêm đồ ăn vặt, nước mang lên xe',
    ],
    menuItems: [
      { item: 'Cơm bình dân', price: '35–45K' },
      { item: 'Bún / Phở', price: '35–50K' },
      { item: 'Bánh mì', price: '15–25K' },
      { item: 'Nước suối + snack mang lên xe', price: '20–30K' },
    ],
    tips: [
      'Ăn trước 1 tiếng khi lên xe để tránh say',
      'Mua nước + bánh mì dự phòng cho chuyến xe đêm',
      'Nếu hay say xe, uống thuốc trước 30 phút',
    ],
    tags: ['ăn uống'],
  },
  {
    time: '19:00',
    title: 'Lên xe về Hà Nội',
    icon: '🚌',
    description: 'Xe giường nằm Vinh → Hà Nội. Đến Hà Nội khoảng 00:30–01:00 sáng ngày 02/05. Kết thúc chuyến đi!',
    details: [
      'Xe giường nằm: ~5,5–7 tiếng',
      'Đến Hà Nội: khoảng 00:30–01:00 sáng',
      'Bến đến: Nước Ngầm hoặc Giáp Bát',
    ],
    tips: [
      'Sạc đầy điện thoại trước khi lên xe',
      'Mang tai nghe, tải phim offline',
      'Uống thuốc say xe nếu cần',
      'Đặt Grab/taxi sẵn để về nhà từ bến xe',
      'Ngủ trên xe để mai đi làm nếu cần 😄',
    ],
    tags: ['di chuyển', 'kết thúc'],
  },
]

// ============================================================
// NHÀ NGHỈ
// ============================================================
export interface Accommodation {
  name: string
  address: string
  priceRange: string
  phone: string
  distanceToBeach: string
  features: string[]
  recommended?: boolean
  mapLink?: string
}

export const accommodations: Accommodation[] = [
  {
    name: 'Nhà nghỉ Truyền Tải Điện 1',
    address: '215 Bình Minh, Cửa Lò',
    priceRange: '300–500K/phòng (lễ)',
    phone: '0238 395 1623',
    distanceToBeach: '~100m — GẦN BIỂN NHẤT',
    features: ['Gần biển nhất', 'Sân rộng để xe', 'Phòng máy lạnh', 'Nước nóng'],
    recommended: true,
    mapLink: 'https://www.google.com/maps/search/Truy%E1%BB%81n+T%E1%BA%A3i+%C4%90i%E1%BB%87n+C%E1%BB%ADa+L%C3%B2',
  },
  {
    name: 'Nhà nghỉ Cương Thanh',
    address: '170 Bình Minh, Cửa Lò',
    priceRange: '300–500K/phòng (lễ)',
    phone: '0352 233 563',
    distanceToBeach: '~200m',
    features: ['Sạch sẽ', 'Gần biển', 'Chủ nhiệt tình', 'WiFi miễn phí'],
    mapLink: 'https://www.google.com/maps/search/C%C6%B0%C6%A1ng+Thanh+C%E1%BB%ADa+L%C3%B2',
  },
  {
    name: 'Nhà nghỉ Sơn Nguyệt',
    address: '168 Bình Minh, Cửa Lò',
    priceRange: '300–500K/phòng (lễ)',
    phone: '0973 484 042',
    distanceToBeach: '~200m',
    features: ['Phòng rộng', 'Máy lạnh', 'Bãi đỗ xe rộng', 'Gần quán ăn'],
    mapLink: 'https://www.google.com/maps/search/S%C6%A1n+Nguy%E1%BB%87t+C%E1%BB%ADa+L%C3%B2',
  },
]

// ============================================================
// ẨM THỰC ĐẶC SẢN
// ============================================================
export interface FoodSpecialty {
  name: string
  description: string
  priceRange: string
  mustTry: boolean
  restaurants: string[]
  emoji: string
}

export const foodSpecialties: FoodSpecialty[] = [
  {
    name: 'Cháo lươn / Súp lươn Nghệ An',
    description: 'Đặc sản số 1 xứ Nghệ! Lươn đồng xào nghệ giòn rụm, nước dùng ninh xương trong veo, thơm nồng. Ăn kèm bánh mì giòn, rau sống.',
    priceRange: '40–70K/tô',
    mustTry: true,
    restaurants: ['Quán Trang Lành (12 Ngô Đức Mai, Vinh)', 'Quán Tư Tại (Nguyễn Văn Cừ, Vinh)', 'Quán cháo lươn đường Bình Minh, Cửa Lò'],
    emoji: '🍜',
  },
  {
    name: 'Hải sản tươi Cửa Lò',
    description: 'Tôm, cua, ghẹ, mực, nghêu, sò, ốc — đánh bắt mỗi sáng. Nướng, hấp, xào đều ngon. Ưu tiên quán có bảng giá niêm yết.',
    priceRange: '80–200K/đĩa',
    mustTry: true,
    restaurants: ['Nhà hàng Hành Hiệp', 'Biển Nhớ Cửa Hội', 'Nhà hàng Thủy Minh Châu 2'],
    emoji: '🦐',
  },
  {
    name: 'Bún bò Vinh',
    description: 'Khác hoàn toàn bún bò Huế! Nước dùng thanh nhẹ hơn, ít cay hơn. Thịt bò tươi ngọt tự nhiên, ăn kèm rau sống và bắp chuối.',
    priceRange: '40–70K/tô',
    mustTry: true,
    restaurants: ['Quán bún bò đường Nguyễn Văn Cừ', 'Quán bún bò Bà Lý'],
    emoji: '🍲',
  },
  {
    name: 'Kẹo Cu Đơ',
    description: 'Đặc sản Hà Tĩnh, bán rộng rãi ở Nghệ An. Kẹo lạc đậu phộng giòn, mật mía thơm. Quà mua về ý nghĩa và rẻ.',
    priceRange: '30–50K/hộp',
    mustTry: false,
    restaurants: ['Chợ Vinh', 'Các cửa hàng đặc sản trên đường Bình Minh'],
    emoji: '🍬',
  },
  {
    name: 'Bánh đa vừng',
    description: 'Bánh đa giòn rắc vừng (mè) — đặc sản Nghệ An. Ăn không hoặc kẹp với nem chua. Mua về làm quà tiện và nhẹ.',
    priceRange: '20–30K/xấp',
    mustTry: false,
    restaurants: ['Chợ Vinh', 'Cửa hàng đặc sản'],
    emoji: '🫓',
  },
  {
    name: 'Tương Nam Đàn',
    description: 'Tương làm từ đậu nành lên men truyền thống huyện Nam Đàn. Vị mặn ngọt đặc biệt, dùng chấm hoặc nấu canh.',
    priceRange: '25–40K/chai',
    mustTry: false,
    restaurants: ['Chợ Vinh', 'Siêu thị TP Vinh'],
    emoji: '🫙',
  },
]

// ============================================================
// CHECKLIST CHUẨN BỊ
// ============================================================
export interface ChecklistItem {
  id: string
  task: string
  category: 'before-2-weeks' | 'before-1-week' | 'pack-clothes' | 'pack-essentials' | 'pack-documents'
  important?: boolean
}

export const checklistItems: ChecklistItem[] = [
  // TRƯỚC 2 TUẦN
  { id: 'c1', task: 'Đặt vé xe Hà Nội → Vinh (7h sáng 30/04)', category: 'before-2-weeks', important: true },
  { id: 'c2', task: 'Đặt vé xe Vinh → Hà Nội (19h ngày 01/05)', category: 'before-2-weeks', important: true },
  { id: 'c3', task: 'Gọi đặt phòng nhà nghỉ (2 phòng, đêm 30/04)', category: 'before-2-weeks', important: true },
  { id: 'c4', task: 'Liên hệ thuê xe máy, hẹn giờ giao tại bến xe Vinh', category: 'before-2-weeks', important: true },
  { id: 'c5', task: 'Thu tiền mỗi người 2 triệu, cử 1 người giữ quỹ', category: 'before-2-weeks' },
  { id: 'c6', task: 'Tạo nhóm chat riêng cho chuyến đi', category: 'before-2-weeks' },

  // TRƯỚC 1 TUẦN
  { id: 'c7', task: 'Xác nhận lại vé xe (check email/app)', category: 'before-1-week' },
  { id: 'c8', task: 'Xác nhận lại phòng nghỉ (gọi lại)', category: 'before-1-week' },
  { id: 'c9', task: 'Xác nhận lại xe máy thuê', category: 'before-1-week' },
  { id: 'c10', task: 'Check thời tiết 30/04–01/05', category: 'before-1-week' },
  { id: 'c11', task: 'Mua kem chống nắng SPF50+', category: 'before-1-week' },
  { id: 'c12', task: 'Mua thuốc say xe, thuốc tiêu hoá, băng cá nhân', category: 'before-1-week' },
  { id: 'c13', task: 'Rút tiền mặt dự phòng (nhiều quán không nhận chuyển khoản)', category: 'before-1-week' },

  // ĐỒ MANG — QUẦN ÁO
  { id: 'c14', task: '2–3 bộ quần áo (thoáng, mau khô)', category: 'pack-clothes' },
  { id: 'c15', task: '1 bộ đồ bơi / quần đi biển', category: 'pack-clothes' },
  { id: 'c16', task: '1 áo khoác mỏng (gió biển đêm)', category: 'pack-clothes' },
  { id: 'c17', task: 'Dép có quai hậu (đi biển an toàn)', category: 'pack-clothes' },
  { id: 'c18', task: 'Khăn tắm (nhà nghỉ có thể không sạch)', category: 'pack-clothes' },
  { id: 'c19', task: 'Mũ / nón rộng vành', category: 'pack-clothes' },
  { id: 'c20', task: 'Kính râm', category: 'pack-clothes' },

  // ĐỒ MANG — THIẾT YẾU
  { id: 'c21', task: 'Kem chống nắng SPF50+', category: 'pack-essentials', important: true },
  { id: 'c22', task: 'Sạc dự phòng (pin đầy)', category: 'pack-essentials', important: true },
  { id: 'c23', task: 'Thuốc say xe, thuốc tiêu hoá', category: 'pack-essentials' },
  { id: 'c24', task: 'Bọc chống nước cho điện thoại (tắm biển)', category: 'pack-essentials' },
  { id: 'c25', task: 'Tai nghe (cho chuyến xe)', category: 'pack-essentials' },
  { id: 'c26', task: 'Túi zip bọc đồ tránh ướt', category: 'pack-essentials' },
  { id: 'c27', task: 'Tiền mặt dự phòng', category: 'pack-essentials', important: true },

  // GIẤY TỜ
  { id: 'c28', task: 'CMND / CCCD (bắt buộc thuê xe + nhà nghỉ)', category: 'pack-documents', important: true },
  { id: 'c29', task: 'Bằng lái xe máy (nếu lái)', category: 'pack-documents', important: true },
  { id: 'c30', task: 'Vé xe (screenshot hoặc in)', category: 'pack-documents' },
  { id: 'c31', task: 'Thông tin nhà nghỉ + SĐT (lưu điện thoại)', category: 'pack-documents' },
]

export const checklistCategories = {
  'before-2-weeks': { label: 'Trước 2 tuần', icon: '📋', color: 'border-red-400 dark:border-red-600' },
  'before-1-week': { label: 'Trước 1 tuần', icon: '📅', color: 'border-orange-400 dark:border-orange-600' },
  'pack-clothes': { label: 'Đồ mang — Quần áo', icon: '👕', color: 'border-blue-400 dark:border-blue-600' },
  'pack-essentials': { label: 'Đồ mang — Thiết yếu', icon: '🎒', color: 'border-green-400 dark:border-green-600' },
  'pack-documents': { label: 'Giấy tờ quan trọng', icon: '📄', color: 'border-purple-400 dark:border-purple-600' },
}

// ============================================================
// BẢN ĐỒ CÁC ĐIỂM ĐẾN
// ============================================================
export interface MapLocation {
  name: string
  description: string
  mapLink: string
  icon: string
  day?: number
}

export const mapLocations: MapLocation[] = [
  { name: 'Bến xe Nước Ngầm', description: 'Điểm xuất phát — Hà Nội', mapLink: 'https://www.google.com/maps/place/B%E1%BA%BFn+xe+N%C6%B0%E1%BB%9Bc+Ng%E1%BA%A7m', icon: '🚌', day: 1 },
  { name: 'TP Vinh', description: 'Nhận xe máy, ăn trưa ngày 2', mapLink: 'https://www.google.com/maps/place/Vinh,+Ngh%E1%BB%87+An,+Vietnam', icon: '🏙️', day: 1 },
  { name: 'Bãi biển Cửa Lò', description: 'Bãi biển chính — dài 10km', mapLink: 'https://www.google.com/maps/place/C%E1%BB%ADa+L%C3%B2+Beach', icon: '🏖️', day: 1 },
  { name: 'Đảo Lan Châu', description: 'Ngắm hoàng hôn, check-in', mapLink: 'https://www.google.com/maps/place/%C4%90%E1%BA%A3o+Lan+Ch%C3%A2u', icon: '🌅', day: 1 },
  { name: 'Cửa Hội', description: 'Bãi biển hoang sơ phía Nam', mapLink: 'https://www.google.com/maps/place/C%E1%BB%ADa+H%E1%BB%99i', icon: '🏝️', day: 2 },
  { name: 'Quảng trường HCM', description: 'Quảng trường lớn nhất ĐNA', mapLink: 'https://www.google.com/maps/place/Qu%E1%BA%A3ng+tr%C6%B0%E1%BB%9Dng+H%E1%BB%93+Ch%C3%AD+Minh+Vinh', icon: '📸', day: 2 },
  { name: 'Chợ Vinh', description: 'Mua quà đặc sản', mapLink: 'https://www.google.com/maps/place/Ch%E1%BB%A3+Vinh', icon: '🛒', day: 2 },
  { name: 'Tuyến đường HN → Vinh', description: '~300km, QL1A / cao tốc', mapLink: 'https://www.google.com/maps/dir/H%C3%A0+N%E1%BB%99i/Vinh,+Ngh%E1%BB%87+An', icon: '🗺️' },
]

// ============================================================
// LIÊN HỆ
// ============================================================
export interface Contact {
  name: string
  phone: string
  type: 'accommodation' | 'transport' | 'emergency' | 'booking'
  icon: string
  link?: string
}

export const contacts: Contact[] = [
  { name: 'Nhà nghỉ Cương Thanh', phone: '0352 233 563', type: 'accommodation', icon: '🏨' },
  { name: 'Nhà nghỉ Sơn Nguyệt', phone: '0973 484 042', type: 'accommodation', icon: '🏨' },
  { name: 'Nhà nghỉ Truyền Tải Điện 1', phone: '0238 395 1623', type: 'accommodation', icon: '🏨' },
  { name: 'Thuê xe Anh Dũng (Vinh)', phone: 'Qua TripBike', type: 'transport', icon: '🏍️', link: 'https://tripbike.net/thue-xe-may-o-vinh/' },
  { name: 'Đặt vé xe — Vexere', phone: 'vexere.com', type: 'booking', icon: '🎫', link: 'https://vexere.com' },
  { name: 'Đặt vé xe — Traveloka', phone: 'traveloka.com', type: 'booking', icon: '🎫', link: 'https://www.traveloka.com/vi-vn/bus-and-shuttle' },
  { name: 'Cấp cứu', phone: '115', type: 'emergency', icon: '🚑' },
  { name: 'Công an', phone: '113', type: 'emergency', icon: '🚔' },
  { name: 'Cứu nạn biển', phone: '114', type: 'emergency', icon: '🌊' },
]

// ============================================================
// NAV SECTIONS
// ============================================================
export const navSections = [
  { id: 'hero', label: 'Trang chủ' },
  { id: 'budget', label: 'Ngân sách' },
  { id: 'weather', label: 'Thời tiết' },
  { id: 'day1', label: 'Ngày 1' },
  { id: 'day2', label: 'Ngày 2' },
  { id: 'map', label: 'Bản đồ' },
  { id: 'accommodation', label: 'Nhà nghỉ' },
  { id: 'food', label: 'Ẩm thực' },
  { id: 'checklist', label: 'Checklist' },
  { id: 'contacts', label: 'Liên hệ' },
]
