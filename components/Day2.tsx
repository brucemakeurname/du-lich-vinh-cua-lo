'use client'

import ScrollReveal from './ScrollReveal'
import TimelineBlock from './Timeline'
import { itineraryDay2 } from '@/data/tripData'

export default function Day2() {
  return (
    <section id="day2" className="section-padding bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-sm font-semibold mb-4">
              Thứ Sáu — Ngày Quốc tế Lao động
            </span>
            <h2 className="section-title">
              <span className="gradient-text">Ngày 2 — 01/05/2026</span>
            </h2>
            <p className="section-subtitle">
              Bình minh biển, cháo lươn đặc sản, Cửa Hội, bún bò Vinh, mua quà, tắm biển cuối, về Hà Nội.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {itineraryDay2.map((block, i) => (
            <TimelineBlock key={block.time} block={block} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
