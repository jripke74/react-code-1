function Header() {
  return (
    <header className="main-header">
      <img className="nav-logo" src="/src/assets/react.svg" alt="React Logo"/>
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
