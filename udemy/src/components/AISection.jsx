export default function AISection() {
  return (
    <section className="ai-section">
      <div className="ai-content">
        <h2>Reimagine your career in the AI era</h2>
        <p>
          Future-proof your skills with Personal Plan. Get access to a variety of fresh content from real-world experts
        </p>
        <div className="ai-features">
          <div className="feature">
            <span className="feature-icon">🤖</span>
            <span>Learn AI and more</span>
          </div>
          <div className="feature">
            <span className="feature-icon">📋</span>
            <span>Prep for a certification</span>
          </div>
          <div className="feature">
            <span className="feature-icon">👤</span>
            <span>Practice with AI coaching</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🎯</span>
            <span>Advance your career</span>
          </div>
        </div>
        <button className="btn-learn-more">Learn more</button>
        <p className="ai-pricing">Starting at £1,204.00/month</p>
      </div>
      <div className="ai-images">
        <img src="/colorful-3d-people-learning-ai-on-platform.jpg" alt="AI learning platform" className="ai-img-1" />
        <img src="/man-teaching-with-tech-icons-ai-vr.jpg" alt="Teaching with tech" className="ai-img-2" />
      </div>
    </section>
  )
}
