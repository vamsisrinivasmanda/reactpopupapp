import Header from '../Header/index'
import './index.css'

const Home = () => (
  <>
    <Header />
    <hr className="line" />
    <div className="home-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        className="home-image"
        alt="home"
      />
    </div>
  </>
)

export default Home
