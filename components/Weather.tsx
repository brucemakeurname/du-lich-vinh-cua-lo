'use client'

import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal'
import { weatherData, risks, contingencyPlan } from '@/data/tripData'

export default function Weather() {
  return (
    <section id="weather" className="section-padding bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="section-title">
            <span className="gradient-text">Thời Tiết & Rủi Ro</span>
          </h2>
          <p className="section-subtitle">
            Cuối tháng 4 — thời điểm lý tưởng cho du lịch biển: trước mùa mưa, nước biển ấm, nắng đẹp.
          </p>
        </ScrollReveal>

        {/* Weather cards */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {weatherData.map(w => (
            <StaggerItem key={w.label}>
              <div className="card p-5 text-center hover:scale-105 transition-transform">
                <span className="text-3xl">{w.icon}</span>
                <p className={`text-lg font-bold mt-2 ${w.color}`}>{w.value}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{w.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Risk assessment */}
        <ScrollReveal>
          <h3 className="text-2xl font-bold text-center mb-8">Đánh Giá Rủi Ro</h3>
        </ScrollReveal>

        <StaggerContainer className="space-y-6 mb-12">
          {risks.map(risk => (
            <StaggerItem key={risk.title}>
              <div className={`rounded-2xl border-2 ${risk.borderColor} ${risk.bgColor} p-6`}>
                <h4 className={`font-bold text-lg mb-3 ${risk.color}`}>
                  {risk.icon} {risk.title}
                </h4>
                <ul className="space-y-2">
                  {risk.items.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm">
                      <span className="text-slate-400 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Contingency plan */}
        <ScrollReveal>
          <div className="card p-6 border-2 border-dashed border-blue-300 dark:border-blue-700 bg-blue-50/50 dark:bg-blue-900/10">
            <h4 className="font-bold text-lg mb-4 text-blue-700 dark:text-blue-400">
              🌧️ {contingencyPlan.title}
            </h4>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {contingencyPlan.items.map(item => (
                <div key={item.time} className="bg-white dark:bg-slate-800 rounded-xl p-4">
                  <p className="font-semibold text-blue-600 dark:text-blue-400 text-sm">{item.time}</p>
                  <p className="text-sm mt-1">{item.plan}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
