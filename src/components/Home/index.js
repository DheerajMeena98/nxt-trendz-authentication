import {Component} from 'react'

import Header from '../Header/index'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="nxt-trendz-home-container">
        <Header />
        <div className="home-body-container">
          <div className="body-text-container">
            <h1 className="body-home-heading">
              {' '}
              Clothes That Get You Noticed{' '}
            </h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
              className="nxt-trendz-home-sm-image"
            />
            <p className="body-home-clothes-description">
              {' '}
              Fashion is part of the daily air and it does not quite help that
              it changes all the time. Clothes have always been market of the
              era and we are in a revolution. Your fashion makes you been seen
              and heard that way you are. So, celebrate the sessions new and
              eciting fashion in your own way.{' '}
            </p>
            <button type="button" className="shop-now-button">
              {' '}
              Shop Now{' '}
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="nxt-trendz-home-lg-image"
          />
        </div>
      </div>
    )
  }
}

export default Home
