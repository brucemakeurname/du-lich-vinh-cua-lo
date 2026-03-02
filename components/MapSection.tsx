'use client'

import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal'
import { mapLocations } from '@/data/tripData'

export default function MapSection() {
  return (
    <section id="map" className="section-padding bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="section-title">
            <span className="gradient-text">Bản Đồ Các Điểm Đến</span>
          </h2>
          <p className="section-subtitle">
            Tất cả địa điểm trong lịch trình — bấm để mở Google Maps chỉ đường!
          </p>
        </ScrollReveal>

        {/* Google Maps embed */}
        <ScrollReveal className="mb-12">
          <div className="card overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d244062.0!2d105.5!3d18.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3139ce55d9bce6b5%3A0x52a8e9b3e34b9f3e!2zVGjDoG5oIHBo4buRIFZpbmgsIE5naOG7hyBBbg!3m2!1d18.6796!2d105.6813!4m5!1s0x3139cd7a8e1a1b1f%3A0x5c2b0f8c7c1d1e1e!2zQ%E1%BB%ADaIEzDsiwgTmdo4buHIEFu!3m2!1d18.7969!2d105.7197!5e0!3m2!1svi!2svn!4v1709000000000!5m2!1svi!2svn"
              className="w-full h-[400px] md:h-[500px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bản đồ Vinh - Cửa Lò"
            />
          </div>
        </ScrollReveal>

        {/* Location cards */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {mapLocations.map(loc => (
            <StaggerItem key={loc.name}>
              <a
                href={loc.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-4 flex items-start gap-3 hover:border-primary dark:hover:border-primary transition-colors group block"
              >
                <span className="text-2xl flex-shrink-0">{loc.icon}</span>
                <div>
                  <p className="font-semibold text-sm group-hover:text-primary transition-colors">{loc.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{loc.description}</p>
                  {loc.day && (
                    <span className="inline-block mt-1.5 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      Ngày {loc.day}
                    </span>
                  )}
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
