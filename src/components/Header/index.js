import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const overlayStyles = {
  backgroundColor: '#ffff',
}
const Header = () => (
  <div className="header-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
    </Link>

    <Popup
      modal
      trigger={
        <button
          type="button"
          data-testid="hamburgerIconButton"
          className="trigger-button"
        >
          <GiHamburgerMenu className="menu-icon" />
        </button>
      }
      overlayStyle={overlayStyles}
    >
      {close => (
        <>
          <button
            type="button"
            data-testid="closeButton"
            className="cross-btn"
            onClick={() => close()}
          >
            <IoMdClose className="cross-icon" />
          </button>
          <ul className="popup-container">
            <Link to="/" className="link-container">
              <li className="link-container">
                <AiFillHome className="link-icon" />
                <h1>Home</h1>
              </li>
            </Link>

            <Link to="/about" className="link-container">
              <li className="link-container">
                <BsInfoCircleFill className="link-icon" />
                <h1>About</h1>
              </li>
            </Link>
          </ul>
        </>
      )}
    </Popup>
  </div>
)

export default Header
