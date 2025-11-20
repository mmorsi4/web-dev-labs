"use client"

import { useState } from "react"

export default function SkillsSection() {
  const [courseIndex, setCourseIndex] = useState(0)

  const courses = [
    {
      id: 1,
      title: "Mastering ChatGPT: Unleash AI for Professional Excellence",
      instructor: "Omni Academy 500,000+ students, Mirko...",
      image: "/man-with-chatgpt-logo.jpg",
      rating: 4.4,
      reviews: 153,
      price: "£349.99",
      strikedprice: "£1000.99",
      badge: "365 Careers",
    },
    {
      id: 2,
      title: "The Complete AI Coding Course (2025) - Cursor, Claude Code",
      instructor: "Brendan AI",
      image: "/ai-coding-course.jpg",
      rating: 4.5,
      reviews: 1045,
      price: "£349.99",
      strikedprice: "£1000.99",
      badge: "Bestseller",
    },
    {
      id: 3,
      title: "Runway AI Video Creation: Generative AI Masterclass",
      instructor: "Skillademia Academy",
      image: "/runway-ai-video.jpg",
      rating: 4.5,
      reviews: 28,
      price: "£349.99",
      strikedprice: "£1000.99",
      badge: "Bestseller",
    },
    {
      id: 4,
      title: "Modern Artificial Intelligence Masterclass: Build 6 Projects",
      instructor: "Prof. Ryan Ahmed | 450K+ Students | Best-Sellin...",
      image: "/modern-ai-masterclass.jpg",
      rating: 4.5,
      reviews: 2012,
      price: "£349.99",
      strikedprice: "£1000.99",
      badge: "Premium",
    },
    {
      id: 5,
      title: "Advanced Machine Learning: Deep Learning Masterclass",
      instructor: "Dr. Sarah Chen",
      image: "/machine-learning-deep-learning.jpg",
      rating: 4.6,
      reviews: 892,
      price: "£399.99",
      strikedprice: "£1000.99",
      badge: "Popular",
    },
  ]

  const cardsPerView = 4
  const maxCourseIndex = Math.max(0, courses.length - cardsPerView)

  const handleCoursePrev = () => {
    setCourseIndex((prev) => Math.max(0, prev - 1))
  }

  const handleCourseNext = () => {
    setCourseIndex((prev) => Math.min(maxCourseIndex, prev + 1))
  }

  const visibleCourses = courses.slice(courseIndex, courseIndex + cardsPerView)

  return (
    <section className="skills-section">
      <h2>Skills to transform your career and life</h2>
      <p>From critical skills to technical topics, Udemy supports your professional development.</p>

      <div className="skills-tabs">
        <button className="tab active">Artificial Intelligence (AI)</button>
        <button className="tab">Python</button>
        <button className="tab">Microsoft Excel</button>
        <button className="tab">AI Agents & Agentic AI</button>
        <button className="tab">Digital Marketing</button>
        <button className="tab">Amazon AWS</button>
      </div>

      <div className="carousel-wrapper">
        <button
          className={`carousel-arrow left-arrow ${courseIndex === 0 ? "disabled" : ""}`}
          onClick={handleCoursePrev}
          disabled={courseIndex === 0}
        >
          ❮
        </button>

        <div className="carousel-container">
          {visibleCourses.map((course) => (
            <div key={course.id} className="course-card">
              <img src={course.image || "/placeholder.svg"} alt={course.title} />
              <h3>{course.title}</h3>
              <p className="instructor">{course.instructor}</p>
              <div className="course-footer">
                {course.badge && <span className="rating-pill badge-pill">{course.badge}</span>}
                <span className="rating-pill stars-pill">★ {course.rating}</span>
                <span className="rating-pill">{course.reviews} ratings</span>
              </div>
              <div className="price">{course.price}<s class='striked'>{course.strikedprice}</s></div>
            </div>
          ))}
        </div>

        <button
          className={`carousel-arrow right-arrow ${courseIndex === maxCourseIndex ? "disabled" : ""}`}
          onClick={handleCourseNext}
          disabled={courseIndex === maxCourseIndex}
        >
          ❯
        </button>
      </div>

      <a href="#" className="show-more">
        Show all Artificial Intelligence (AI) courses →
      </a>
    </section>
  )
}
