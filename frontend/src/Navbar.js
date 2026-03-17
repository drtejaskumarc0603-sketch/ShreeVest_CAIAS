



function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom">
      <div className="container">

        {/* Logo + Name */}
        <a className="navbar-brand d-flex align-items-center" href="/">
  <img src="/assets/logo.png" className="logo-img me-2" alt="logo" />
  <span className="brand-text" style={{color : "rgb(242, 94, 34)"}}>ShreeVest</span>
</a>

        {/* Toggle button (mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3 me-4">
            <li className="nav-item">
              <a className="nav-link" href="/signup">Signup</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/support">Support</a>
            </li>
          </ul>

          {/* Hamburger Icon */}
          {/*<FaBars className="icon" />*/}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

