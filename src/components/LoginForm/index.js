import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isLoginFailed: false,
    errorMsg: null,
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value, isLoginFailed: false})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value, isLoginFailed: false})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    console.log(errorMsg)
    this.setState({username: '', password: '', isLoginFailed: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const credentials = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(credentials),
    }

    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderLoginForm = () => {
    const {username, password, isLoginFailed, errorMsg} = this.state

    return (
      <form className="login-form-container" onSubmit={this.submitForm}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website  login"
          className="nxt-trendz-login-sm-img"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="nxt-trendz-lg-logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="nxt-trendz-sm-logo"
        />
        <div className="username-container">
          <label htmlFor="username" className="username-password-text">
            {' '}
            USERNAME{' '}
          </label>
          <input
            type="text"
            id="username"
            className="login-input"
            value={username}
            placeholder="Username"
            onChange={this.onChangeUserName}
          />
        </div>

        <div className="password-container">
          <label htmlFor="password" className="username-password-text">
            {' '}
            PASSWORD{' '}
          </label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Password"
            onChange={this.onChangePassword}
            className="login-input"
          />
        </div>

        <button type="submit" className="login-button">
          {' '}
          Login{' '}
        </button>
        {isLoginFailed ? (
          <p className="login-failure-error-message"> {errorMsg} </p>
        ) : null}
      </form>
    )
  }

  render() {
    return (
      <div className="login-form-bcg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="nxt-trendz-login-lg-img"
        />
        {this.renderLoginForm()}
      </div>
    )
  }
}

export default LoginForm
