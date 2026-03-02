'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TRIP_DATE } from '@/data/tripData'

function useCountdown(target: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calc = () => {
      const now = new Date().getTime()
      const diff = target.getTime() - now
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      }
    }
    setTimeLeft(calc())
    const timer = setInterval(() => setTimeLeft(calc()), 1000)
    return () => clearInterval(timer)
  }, [target])

  return timeLeft
}

const stats = [
  { value: '5', label: 'Anh em', icon: '👥' },
  { value: '2N1Đ', label: 'Lịch trình', icon: '📅' },
  { value: '2M', label: 'Mỗi người', icon: '💰' },
  { value: '300km', label: 'HN → Vinh', icon: '🗺️' },
]

export default function Hero() {
  const countdown = useCountdown(TRIP_DATE)

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-900 via-sky-700 to-cyan-600" />

      {/* Animated wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 220" className="w-full text-slate-50 dark:text-slate-950">
          <path fill="currentColor" d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,181.3C672,192,768,160,864,138.7C960,117,1056,107,1152,117.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </div>

      {/* Floating decorations */}
      <motion.div
        className="absolute top-20 left-10 text-6xl opacity-20"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        🏖️
      </motion.div>
      <motion.div
        className="absolute top-40 right-20 text-5xl opacity-20"
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      >
        🌊
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-20 text-4xl opacity-20"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
      >
        🦐
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sky-200 font-medium mb-4 tracking-widest uppercase text-sm">
            30/04 — 01/05/2026
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 font-display">
            Vinh — Cửa Lò
          </h1>
          <p className="text-xl md:text-2xl text-sky-100 mb-2">
            Nghệ An • 2 Ngày 1 Đêm • 5 Anh Em
          </p>
          <p className="text-sky-200/80 text-base md:text-lg max-w-xl mx-auto mb-10">
            Hải sản tươi, biển xanh cát trắng, cháo lươn xứ Nghệ, hoàng hôn Đảo Lan Châu.
            Tất cả chỉ 2 triệu/người!
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-sky-200 text-sm mb-3 uppercase tracking-wider">Đếm ngược ngày đi</p>
          <div className="flex justify-center gap-3 md:gap-5">
            {[
              { value: countdown.days, label: 'Ngày' },
              { value: countdown.hours, label: 'Giờ' },
              { value: countdown.minutes, label: 'Phút' },
              { value: countdown.seconds, label: 'Giây' },
            ].map(item => (
              <div key={item.label} className="bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3 md:px-6 md:py-4 min-w-[70px] md:min-w-[90px]">
                <div className="text-3xl md:text-5xl font-bold tabular-nums">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-sky-200 text-xs md:text-sm mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
            >
              <span className="text-2xl">{stat.icon}</span>
              <div className="text-2xl md:text-3xl font-bold mt-1">{stat.value}</div>
              <div className="text-sky-200 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="mt-12"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <button
            onClick={() => document.getElementById('budget')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white/60 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
