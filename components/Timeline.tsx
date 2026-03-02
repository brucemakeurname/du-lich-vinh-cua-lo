'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import type { TimeBlock } from '@/data/tripData'

export default function TimelineBlock({ block, index }: { block: TimeBlock; index: number }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <ScrollReveal delay={index * 0.05} className="relative">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-cyan-400/50 hidden md:block" />

      <div className="md:pl-16 relative">
        {/* Timeline dot */}
        <div className="absolute left-4 top-6 w-5 h-5 rounded-full bg-primary border-4 border-white dark:border-slate-900 shadow-md hidden md:block" />

        {/* Card */}
        <motion.div
          className="card overflow-hidden cursor-pointer"
          onClick={() => setExpanded(!expanded)}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          {/* Header */}
          <div className="p-5 md:p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3 flex-1">
                <span className="text-3xl flex-shrink-0">{block.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-primary/10 text-primary font-bold text-sm">
                      {block.time}
                    </span>
                    <h4 className="font-bold text-lg">{block.title}</h4>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 leading-relaxed">
                    {block.description}
                  </p>

                  {/* Tags */}
                  {block.tags && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {block.tags.map(tag => (
                        <span key={tag} className="tag bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <svg
                className={`w-5 h-5 flex-shrink-0 text-slate-400 transition-transform mt-1 ${expanded ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Expanded content */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-5 md:px-6 pb-6 space-y-5 border-t border-slate-100 dark:border-slate-700 pt-5">
                  {/* Details */}
                  {block.details && (
                    <div>
                      <h5 className="font-semibold text-sm mb-2 text-slate-700 dark:text-slate-300">Chi tiết:</h5>
                      <ul className="space-y-1.5">
                        {block.details.map((d, i) => (
                          <li key={i} className="flex gap-2 text-sm">
                            <span className="text-primary mt-0.5">▸</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Options */}
                  {block.options && (
                    <div>
                      <h5 className="font-semibold text-sm mb-2 text-slate-700 dark:text-slate-300">Lựa chọn:</h5>
                      <div className="grid gap-2">
                        {block.options.map(opt => (
                          <div key={opt.name} className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3">
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <p className="font-semibold text-sm">{opt.name}</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{opt.info}</p>
                                {opt.phone && <p className="text-xs mt-0.5">📞 {opt.phone}</p>}
                              </div>
                              <div className="text-right flex-shrink-0">
                                {opt.price && <p className="font-bold text-sm text-primary">{opt.price}</p>}
                                {opt.link && (
                                  <a
                                    href={opt.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={e => e.stopPropagation()}
                                    className="text-xs text-blue-500 hover:underline"
                                  >
                                    Xem thêm →
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Menu items */}
                  {block.menuItems && (
                    <div>
                      <h5 className="font-semibold text-sm mb-2 text-slate-700 dark:text-slate-300">Menu gợi ý & Giá:</h5>
                      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3">
                        {block.menuItems.map((item, i) => (
                          <div key={i} className={`flex justify-between py-1.5 text-sm ${item.item.startsWith('—') ? 'pl-4' : ''} ${item.item.includes('💡') ? 'border-t border-slate-200 dark:border-slate-700 mt-2 pt-2 font-semibold text-primary' : ''}`}>
                            <span>{item.item}</span>
                            <span className="font-medium text-slate-700 dark:text-slate-300 whitespace-nowrap ml-3">{item.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Prices */}
                  {block.prices && (
                    <div>
                      <h5 className="font-semibold text-sm mb-2 text-slate-700 dark:text-slate-300">Bảng giá dịch vụ:</h5>
                      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3">
                        {block.prices.map((p, i) => (
                          <div key={i} className="flex justify-between py-1.5 text-sm">
                            <span>{p.item}</span>
                            <span className="font-medium text-slate-700 dark:text-slate-300 whitespace-nowrap ml-3">{p.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tips */}
                  {block.tips && (
                    <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
                      <h5 className="font-semibold text-sm mb-2 text-amber-700 dark:text-amber-400">💡 Mẹo hay:</h5>
                      <ul className="space-y-1.5">
                        {block.tips.map((tip, i) => (
                          <li key={i} className="flex gap-2 text-sm text-amber-800 dark:text-amber-200">
                            <span className="text-amber-500">•</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Map link */}
                  {block.mapLink && (
                    <a
                      href={block.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors text-sm font-medium"
                    >
                      📍 Xem trên Google Maps
                    </a>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </ScrollReveal>
  )
}
