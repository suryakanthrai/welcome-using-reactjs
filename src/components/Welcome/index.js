// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  changeButtontext = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="welcome-bg-container">
        <h1 className="welcome-heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <div>
          <button
            type="button"
            className="button-style"
            onClick={this.changeButtontext}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
