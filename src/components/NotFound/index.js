import Header from '../Header/index'
import './index.css'

const NotFound = () => (
  <>
    <Header />
    <hr className="line" />
    <div className="notfound-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="error-image"
      />
      <h1>Lost Your Way?</h1>
      <p className="error-desc">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </>
)

export default NotFound
