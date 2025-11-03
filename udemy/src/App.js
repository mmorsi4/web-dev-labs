"use client"

import Header from "./components/Header"
import Hero from "./components/Hero"
import CategoryCards from "./components/CategoryCards"
import AISection from "./components/AISection"
import SkillsSection from "./components/SkillsSection"
import Footer from "./components/Footer"
import "./styles.css"

export default function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <CategoryCards />
      <AISection />
      <SkillsSection />
      <Footer />
    </div>
  )
}