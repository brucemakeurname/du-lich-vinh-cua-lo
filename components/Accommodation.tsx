'use client'

import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal'
import { accommodations } from '@/data/tripData'

export default function Accommodation() {
  return (
    <section id="accommodation" className="section-padding bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="section-title">
            <span className="gradient-text">Nhà Nghỉ Gần Biển</span>
          </h2>
          <p className="section-subtitle">
            3 lựa chọn tốt nhất trên đường Bình Minh, Cửa Lò. GỌI TRƯỚC ít nhất 2 tuần!
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {accommodations.map(acc => (
            <StaggerItem key={acc.name}>
              <div className={`card p-6 relative ${acc.recommended ? 'ring-2 ring-primary' : ''}`}>
                {acc.recommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
                    Đề xuất
                  </span>
                )}

                <div className="text-center mb-4">
                  <span className="text-4xl">🏨</span>
                  <h3 className="font-bold text-lg mt-2">{acc.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{acc.address}</p>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-green-500">💰</span>
                    <span className="font-semibold text-primary">{acc.priceRange}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span>🏖️</span>
                    <span>{acc.distanceToBeach}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span>📞</span>
                    <a href={`tel:${acc.phone.replace(/\s/g, '')}`} className="text-primary hover:underline font-medium">
                      {acc.phone}
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {acc.features.map(f => (
                    <span key={f} className="tag bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                      {f}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <a
                    href={`tel:${acc.phone.replace(/\s/g, '')}`}
                    className="flex-1 text-center py-2.5 bg-primary text-white rounded-xl font-medium text-sm hover:bg-primary-dark transition-colors"
                  >
                    📞 Gọi ngay
                  </a>
                  {acc.mapLink && (
                    <a
                      href={acc.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-4 bg-slate-100 dark:bg-slate-700 rounded-xl text-sm hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                    >
                      📍
                    </a>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal className="mt-8">
          <div className="card p-5 bg-amber-50 dark:bg-amber-900/10 border-amber-200 dark:border-amber-800">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>💡 Chiến lược phòng:</strong> Thuê 2 phòng — 1 phòng 3 giường + 1 phòng 2 giường.
              Tổng ~1.000.000đ = 200K/người. Nói rõ số người khi đặt phòng!
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
