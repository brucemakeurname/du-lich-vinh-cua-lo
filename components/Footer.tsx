export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">🏖️ Du Lịch Vinh — Cửa Lò</h3>
            <p className="text-sm">
              Kế hoạch du lịch 2 ngày 1 đêm cho nhóm 5 anh em.
              30/04 — 01/05/2026.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Nguồn tham khảo</h4>
            <ul className="text-sm space-y-1.5">
              <li><a href="https://weatherspark.com/y/115919" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Weather Spark — Thời tiết Vinh</a></li>
              <li><a href="https://vnexpress.net/cam-nang-du-lich-nghe-an-4455646.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">VnExpress — Du lịch Nghệ An</a></li>
              <li><a href="https://vexere.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Vexere — Đặt vé xe</a></li>
              <li><a href="https://tripbike.net/thue-xe-may-o-vinh/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TripBike — Thuê xe máy Vinh</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Số khẩn cấp</h4>
            <ul className="text-sm space-y-1.5">
              <li>🚑 Cấp cứu: <span className="text-white font-medium">115</span></li>
              <li>🚔 Công an: <span className="text-white font-medium">113</span></li>
              <li>🌊 Cứu nạn: <span className="text-white font-medium">114</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-6 text-center text-sm">
          <p>Kế hoạch được tạo ngày 02/03/2026. Giá cả mang tính tham khảo, có thể thay đổi vào dịp lễ 30/4–1/5.</p>
        </div>
      </div>
    </footer>
  )
}
