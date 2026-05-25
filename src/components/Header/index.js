import {Link} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'

class Header extends Component {
  logout = () => {
    const {history} = this.props

    Cookies.remove('jwt_token')

    history.replace('/login')
  }

  render() {
    return (
      <nav className="nav-header">
        <div className="nav-content">
          <div className="nav-bar-mobile-logo-container">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />

            <button type="button" className="nav-mobile-btn">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
                alt="nav logout"
                className="nav-bar-img"
              />
            </button>
          </div>

          <div className="nav-content nav-bar-large-container">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />

            <ul className="nav-menu">
              <li className="nav-menu-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>

              <li className="nav-menu-item">
                <Link to="/products" className="nav-link">
                  Products
                </Link>
              </li>

              <li className="nav-menu-item">
                <Link to="/cart" className="nav-link">
                  Cart
                </Link>
              </li>
            </ul>

            <button
              type="button"
              className="logout-desktop-btn"
              onClick={this.logout}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
