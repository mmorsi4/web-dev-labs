export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/logo-udemy.svg" width="100" />
        <a href="#" className="nav-link">
          Explore
        </a>
        <input type="text" className="search" placeholder="Search for anything" />
      </div>
      <div className="header-right">
        <a href="#" className="nav-link">
          Plans & Pricing
        </a>
        <a href="#" className="nav-link">
          Udemy Business
        </a>
        <a href="#" className="nav-link">
          Teach on Udemy
        </a>
        <button className="btn-login">Log in</button>
        <button className="btn-signup">Sign up</button>
      </div>
    </header>
  )
}
