import './index.css'

const Header = () => (
  <nav className="nxt-trendz-header">
    <div className="nxt-trendz-logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="nxt-trendz-lg-logo-home"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
        className="nxt-trendz-logout-image nav-items-header-small-devices"
      />
    </div>

    <div className="header-element-container-small-devices">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="nav home"
        className="nav-items-header-small-devices"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav products"
        className="nav-items-header-small-devices"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
        className="nav-items-header-small-devices"
      />
    </div>

    <ul className="header-element-container">
      <li className="nav-items-text"> Home </li>
      <li className="nav-items-text"> Products</li>
      <li className="nav-items-text"> Cart</li>
      <button type="button" className="logout-button">
        {' '}
        Logout{' '}
      </button>
    </ul>
  </nav>
)

export default Header
