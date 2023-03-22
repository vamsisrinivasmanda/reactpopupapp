import Header from '../Header/index'
import './index.css'

const About = () => (
  <>
    <Header />
    <hr className="line" />
    <div className="about-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="about-image"
      />
    </div>
  </>
)

export default About
