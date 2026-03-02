'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal'
import { budgetData, BUDGET_PER_PERSON, GROUP_SIZE } from '@/data/tripData'

export default function Budget() {
  const [showCalculator, setShowCalculator] = useState(false)

  const totalPerPerson = budgetData.reduce(
    (sum, cat) => sum + cat.items.reduce((s, item) => s + item.perPerson, 0), 0
  )
  const totalGroup = totalPerPerson * GROUP_SIZE
  const surplus = BUDGET_PER_PERSON - totalPerPerson

  const formatVND = (n: number) =>
    n.toLocaleString('vi-VN') + 'đ'

  return (
    <section id="budget" className="section-padding bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="section-title">
            <span className="gradient-text">Ngân Sách Chi Tiết</span>
          </h2>
          <p className="section-subtitle">
            Mỗi người 2.000.000đ — Tổng nhóm 10.000.000đ. Đã tính giá lễ 30/4–1/5!
          </p>
        </ScrollReveal>

        {/* Summary cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Mỗi người', value: formatVND(BUDGET_PER_PERSON), color: 'from-blue-500 to-cyan-500' },
            { label: 'Tổng nhóm', value: formatVND(BUDGET_PER_PERSON * GROUP_SIZE), color: 'from-purple-500 to-pink-500' },
            { label: 'Dự kiến chi', value: formatVND(totalPerPerson), color: 'from-orange-500 to-red-500' },
            { label: 'Dư dự phòng', value: formatVND(surplus), color: 'from-green-500 to-emerald-500' },
          ].map((card, i) => (
            <ScrollReveal key={card.label} delay={i * 0.1}>
              <div className={`rounded-2xl p-5 text-white bg-gradient-to-br ${card.color}`}>
                <p className="text-white/80 text-sm">{card.label}</p>
                <p className="text-xl md:text-2xl font-bold mt-1">{card.value}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Budget breakdown */}
        <StaggerContainer className="space-y-6">
          {budgetData.map(category => {
            const catTotal = category.items.reduce((s, i) => s + i.perPerson, 0)
            const percentage = (catTotal / totalPerPerson) * 100

            return (
              <StaggerItem key={category.category}>
                <div className="card p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{category.icon}</span>
                      <h3 className="font-bold text-lg">{category.category}</h3>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">{formatVND(catTotal)}/người</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{formatVND(catTotal * GROUP_SIZE)} nhóm</p>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full mb-4 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </div>

                  {/* Items */}
                  <div className="space-y-2">
                    {category.items.map(item => (
                      <div key={item.name} className="flex items-center justify-between py-2 border-b border-slate-50 dark:border-slate-700/50 last:border-0">
                        <div>
                          <p className="text-sm font-medium">{item.name}</p>
                          {item.note && <p className="text-xs text-slate-400">{item.note}</p>}
                        </div>
                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 whitespace-nowrap ml-4">
                          {formatVND(item.perPerson)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* Chia tiền calculator */}
        <ScrollReveal className="mt-10">
          <button
            onClick={() => setShowCalculator(!showCalculator)}
            className="w-full card p-4 flex items-center justify-between hover:border-primary dark:hover:border-primary transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧮</span>
              <span className="font-bold">Máy tính chia tiền</span>
            </div>
            <svg className={`w-5 h-5 transition-transform ${showCalculator ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showCalculator && <BudgetCalculator />}
        </ScrollReveal>
      </div>
    </section>
  )
}

function BudgetCalculator() {
  const [expenses, setExpenses] = useState([
    { id: 1, payer: 'Người 1', description: 'Vé xe (cả nhóm)', amount: 4_000_000 },
    { id: 2, payer: 'Người 2', description: 'Phòng nghỉ', amount: 1_000_000 },
    { id: 3, payer: 'Người 3', description: 'Thuê xe máy', amount: 675_000 },
  ])
  const [newPayer, setNewPayer] = useState('')
  const [newDesc, setNewDesc] = useState('')
  const [newAmount, setNewAmount] = useState('')

  const totalSpent = expenses.reduce((s, e) => s + e.amount, 0)
  const perPerson = totalSpent / GROUP_SIZE

  const payerTotals = expenses.reduce((acc, e) => {
    acc[e.payer] = (acc[e.payer] || 0) + e.amount
    return acc
  }, {} as Record<string, number>)

  const addExpense = () => {
    if (!newPayer || !newDesc || !newAmount) return
    setExpenses([...expenses, {
      id: Date.now(),
      payer: newPayer,
      description: newDesc,
      amount: parseInt(newAmount),
    }])
    setNewPayer('')
    setNewDesc('')
    setNewAmount('')
  }

  const removeExpense = (id: number) => {
    setExpenses(expenses.filter(e => e.id !== id))
  }

  return (
    <motion.div
      className="card p-6 mt-4"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
    >
      <h4 className="font-bold text-lg mb-4">Ai trả gì — Tổng mỗi người</h4>

      {/* Expense list */}
      <div className="space-y-2 mb-6">
        {expenses.map(exp => (
          <div key={exp.id} className="flex items-center justify-between py-2 px-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <div>
              <span className="font-medium text-sm">{exp.payer}</span>
              <span className="text-slate-400 mx-2">—</span>
              <span className="text-sm">{exp.description}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm">{exp.amount.toLocaleString('vi-VN')}đ</span>
              <button onClick={() => removeExpense(exp.id)} className="text-red-400 hover:text-red-600 text-sm">✕</button>
            </div>
          </div>
        ))}
      </div>

      {/* Add expense */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 mb-6">
        <input
          type="text"
          placeholder="Ai trả"
          value={newPayer}
          onChange={e => setNewPayer(e.target.value)}
          className="px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm"
        />
        <input
          type="text"
          placeholder="Chi gì"
          value={newDesc}
          onChange={e => setNewDesc(e.target.value)}
          className="px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm"
        />
        <input
          type="number"
          placeholder="Số tiền (VNĐ)"
          value={newAmount}
          onChange={e => setNewAmount(e.target.value)}
          className="px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm"
        />
        <button
          onClick={addExpense}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium"
        >
          + Thêm
        </button>
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-r from-primary/10 to-cyan-500/10 dark:from-primary/20 dark:to-cyan-500/20 rounded-xl p-4">
        <div className="flex justify-between mb-2">
          <span className="font-medium">Tổng chi:</span>
          <span className="font-bold">{totalSpent.toLocaleString('vi-VN')}đ</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="font-medium">Mỗi người cần trả:</span>
          <span className="font-bold text-primary">{Math.round(perPerson).toLocaleString('vi-VN')}đ</span>
        </div>
        <div className="border-t border-primary/20 pt-3 space-y-1">
          {Object.entries(payerTotals).map(([payer, paid]) => {
            const diff = paid - perPerson
            return (
              <div key={payer} className="flex justify-between text-sm">
                <span>{payer} (đã trả {paid.toLocaleString('vi-VN')}đ)</span>
                <span className={diff > 0 ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
                  {diff > 0 ? `Được nhận lại ${Math.round(diff).toLocaleString('vi-VN')}đ` : `Cần trả thêm ${Math.round(Math.abs(diff)).toLocaleString('vi-VN')}đ`}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}
