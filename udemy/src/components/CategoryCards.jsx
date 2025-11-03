"use client"

import { useState } from "react"

export default function CategoryCards() {
  const [categoryIndex, setCategoryIndex] = useState(0)

  const categoryCards = [
    {
      id: 1,
      title: "Generative AI",
      students: "34.2M",
      image: "/colorful-3d-people-learning-ai.jpg",
    },
    {
      id: 2,
      title: "IT Certifications",
      students: "12.8M",
      image: "/golden-trophy-award.jpg",
    },
    {
      id: 3,
      title: "Data Science 1",
      students: "8.5M",
      image: "/colorful-3d-chart-visualization.jpg",
    },
    {
      id: 4,
      title: "Data Science 2",
      students: "8.5M",
      image: "/colorful-3d-chart-visualization.jpg",
    },
    {
      id: 5,
      title: "Data Science 3",
      students: "8.5M",
      image: "/colorful-3d-chart-visualization.jpg",
    },
    {
      id: 6,
      title: "Data Science 4",
      students: "8.5M",
      image: "/colorful-3d-chart-visualization.jpg",
    },
  ]

  const cardsPerView = 3
  const maxIndex = Math.max(0, categoryCards.length - cardsPerView)

  const handlePrev = () => {
    setCategoryIndex((prev) => Math.max(0, prev - 3))
  }

  const handleNext = () => {
    setCategoryIndex((prev) => Math.min(maxIndex, prev + 3))
  }

  const visibleCards = categoryCards.slice(categoryIndex, categoryIndex + 3)

  return (
    <section className="category-section">
      <div className="category-content">
        <div className="category-header">
          <h2>Learn essential career and life skills</h2>
          <p>Udemy helps you build in-demand skills that advance your career in a changing job market.</p>
        </div>
        <div className="category-carousel-wrapper">
          <button
            className={`category-arrow left-arrow ${categoryIndex === 0 ? "disabled" : ""}`}
            onClick={handlePrev}
            disabled={categoryIndex === 0}
          >
            ❮
          </button>

          <div className="category-cards-container">
            {visibleCards.map((card) => (
              <div key={card.id} className="category-card">
                <img src={card.image || "/placeholder.svg"} alt={card.title} />
                <div className="category-card-footer">
                  <h3>{card.title}</h3>
                  <p>{card.students} students</p>
                </div>
              </div>
            ))}
          </div>

          <button
            className={`category-arrow right-arrow ${categoryIndex === maxIndex ? "disabled" : ""}`}
            onClick={handleNext}
            disabled={categoryIndex === maxIndex}
          >
            ❯
          </button>
        </div>
      </div>

      <div className="carousel-dots">
        {[0, 1].map((dot) => (
          <button
            key={dot}
            className={`dot ${dot === Math.floor(categoryIndex / cardsPerView) ? "active" : ""}`}
            onClick={() => setCategoryIndex(dot * cardsPerView)}
          />
        ))}
      </div>
    </section>
  )
}
