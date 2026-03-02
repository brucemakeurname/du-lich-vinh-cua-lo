'use client'

import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal'
import { foodSpecialties } from '@/data/tripData'

export default function Food() {
  return (
    <section id="food" className="section-padding bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="section-title">
            <span className="gradient-text">Ẩm Thực Đặc Sản</span>
          </h2>
          <p className="section-subtitle">
            Nghệ An — vùng đất của cháo lươn, hải sản tươi, bún bò, kẹo cu đơ. Không thử là phí cả chuyến đi!
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodSpecialties.map(food => (
            <StaggerItem key={food.name}>
              <div className="card p-6 h-full flex flex-col">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-4xl">{food.emoji}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold">{food.name}</h3>
                      {food.mustTry && (
                        <span className="tag bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">
                          Phải thử!
                        </span>
                      )}
                    </div>
                    <p className="font-semibold text-primary text-sm mt-1">{food.priceRange}</p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 flex-1 leading-relaxed">
                  {food.description}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">Quán gợi ý:</p>
                  <ul className="space-y-1">
                    {food.restaurants.map((r, i) => (
                      <li key={i} className="text-xs text-slate-500 dark:text-slate-400 flex gap-1.5">
                        <span className="text-primary">▸</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
