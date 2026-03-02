'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Budget from '@/components/Budget'
import Weather from '@/components/Weather'
import Day1 from '@/components/Day1'
import Day2 from '@/components/Day2'
import MapSection from '@/components/MapSection'
import Accommodation from '@/components/Accommodation'
import Food from '@/components/Food'
import Checklist from '@/components/Checklist'
import Contacts from '@/components/Contacts'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Budget />
        <Weather />
        <Day1 />
        <Day2 />
        <MapSection />
        <Accommodation />
        <Food />
        <Checklist />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}
