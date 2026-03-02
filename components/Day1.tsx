'use client'

import ScrollReveal from './ScrollReveal'
import TimelineBlock from './Timeline'
import { itineraryDay1 } from '@/data/tripData'

export default function Day1() {
  return (
    <section id="day1" className="section-padding bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-sm font-semibold mb-4">
              Thứ Năm — Ngày Giải phóng miền Nam
            </span>
            <h2 className="section-title">
              <span className="gradient-text">Ngày 1 — 30/04/2026</span>
            </h2>
            <p className="section-subtitle">
              Hà Nội → Vinh → Cửa Lò. Hải sản tươi, biển chiều, hoàng hôn Đảo Lan Châu, BBQ đêm.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {itineraryDay1.map((block, i) => (
            <TimelineBlock key={block.time} block={block} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
