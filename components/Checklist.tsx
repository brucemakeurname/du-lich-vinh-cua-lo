'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal'
import { checklistItems, checklistCategories } from '@/data/tripData'

const STORAGE_KEY = 'vinh-trip-checklist'

export default function Checklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({})

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) setChecked(JSON.parse(saved))
    } catch {}
  }, [])

  const toggle = (id: string) => {
    const next = { ...checked, [id]: !checked[id] }
    setChecked(next)
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)) } catch {}
  }

  const totalItems = checklistItems.length
  const checkedCount = Object.values(checked).filter(Boolean).length
  const progress = totalItems > 0 ? (checkedCount / totalItems) * 100 : 0

  const categories = Object.entries(checklistCategories) as [string, { label: string; icon: string; color: string }][]

  return (
    <section id="checklist" className="section-padding bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="section-title">
            <span className="gradient-text">Checklist Chuẩn Bị</span>
          </h2>
          <p className="section-subtitle">
            Tick từng mục để theo dõi tiến độ chuẩn bị. Dữ liệu được lưu trên thiết bị của bạn!
          </p>
        </ScrollReveal>

        {/* Progress bar */}
        <ScrollReveal className="mb-10">
          <div className="card p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="font-semibold">Tiến độ chuẩn bị</p>
              <p className="text-sm font-bold text-primary">{checkedCount}/{totalItems} ({Math.round(progress)}%)</p>
            </div>
            <div className="h-3 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-green-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            {progress === 100 && (
              <p className="text-green-600 dark:text-green-400 text-sm mt-2 font-medium">
                Tuyệt vời! Mọi thứ đã sẵn sàng cho chuyến đi! 🎉
              </p>
            )}
          </div>
        </ScrollReveal>

        {/* Checklist by category */}
        <StaggerContainer className="space-y-6">
          {categories.map(([catKey, catInfo]) => {
            const items = checklistItems.filter(i => i.category === catKey)
            const catChecked = items.filter(i => checked[i.id]).length

            return (
              <StaggerItem key={catKey}>
                <div className={`card p-5 border-l-4 ${catInfo.color}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold flex items-center gap-2">
                      <span>{catInfo.icon}</span>
                      {catInfo.label}
                    </h3>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {catChecked}/{items.length}
                    </span>
                  </div>

                  <div className="space-y-1">
                    {items.map(item => (
                      <label
                        key={item.id}
                        className={`flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 ${
                          checked[item.id] ? 'opacity-60' : ''
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked[item.id] || false}
                          onChange={() => toggle(item.id)}
                          className="w-5 h-5 rounded border-2 border-slate-300 dark:border-slate-600 text-primary focus:ring-primary cursor-pointer flex-shrink-0"
                        />
                        <span className={`text-sm ${checked[item.id] ? 'line-through text-slate-400' : ''}`}>
                          {item.task}
                          {item.important && !checked[item.id] && (
                            <span className="ml-1.5 text-red-500 text-xs font-bold">QUAN TRỌNG</span>
                          )}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
