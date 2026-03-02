'use client'

import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal'
import { contacts } from '@/data/tripData'

const typeLabels: Record<string, { label: string; color: string }> = {
  accommodation: { label: 'Nhà nghỉ', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400' },
  transport: { label: 'Di chuyển', color: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' },
  emergency: { label: 'Khẩn cấp', color: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400' },
  booking: { label: 'Đặt vé', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400' },
}

export default function Contacts() {
  return (
    <section id="contacts" className="section-padding bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="section-title">
            <span className="gradient-text">Liên Hệ Quan Trọng</span>
          </h2>
          <p className="section-subtitle">
            Lưu sẵn các số điện thoại quan trọng vào điện thoại trước chuyến đi!
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 gap-4">
          {contacts.map(contact => {
            const typeInfo = typeLabels[contact.type]
            return (
              <StaggerItem key={contact.name}>
                <div className="card p-4 flex items-center gap-4 hover:border-primary dark:hover:border-primary transition-colors">
                  <span className="text-3xl flex-shrink-0">{contact.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm">{contact.name}</p>
                    <span className={`tag text-xs mt-1 ${typeInfo.color}`}>{typeInfo.label}</span>
                  </div>
                  <div className="flex-shrink-0">
                    {contact.link ? (
                      <a
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                      >
                        Mở web
                      </a>
                    ) : (
                      <a
                        href={`tel:${contact.phone.replace(/\s/g, '')}`}
                        className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors"
                      >
                        {contact.phone}
                      </a>
                    )}
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* Sources */}
        <ScrollReveal className="mt-12">
          <div className="card p-6">
            <h3 className="font-bold text-lg mb-4">📚 Nguồn Tham Khảo</h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                { title: 'Weather Spark — Thời tiết Vinh', url: 'https://weatherspark.com/y/115919' },
                { title: 'VnExpress — Du lịch Nghệ An', url: 'https://vnexpress.net/cam-nang-du-lich-nghe-an-4455646.html' },
                { title: 'VinWonders — Khu du lịch Nghệ An', url: 'https://vinwonders.com/vi/wonderpedia/news/khu-du-lich-nghe-an/' },
                { title: 'Vexere — Vé xe Hà Nội Vinh', url: 'https://vexere.com' },
                { title: 'TripBike — Thuê xe máy Vinh', url: 'https://tripbike.net/thue-xe-may-o-vinh/' },
                { title: 'Toplist — Nhà nghỉ Cửa Lò', url: 'https://toplistnghean.com/top-du-lich/nha-nghi-gan-bien-cua-lo' },
                { title: 'Lao Động — Miễn phí Cửa Lò 2025', url: 'https://laodong.vn/du-lich/tin-tuc/4-dich-vu-mien-phi-tai-mua-du-lich-bien-cua-lo-2025-1494172.html' },
                { title: 'Traveloka — Khách sạn Cửa Lò', url: 'https://www.traveloka.com/vi-vn/hotel/vietnam/city/cua-lo-town-10010156' },
              ].map(source => (
                <a
                  key={source.title}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm text-slate-600 dark:text-slate-400 hover:text-primary"
                >
                  <span className="text-primary">→</span>
                  {source.title}
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
