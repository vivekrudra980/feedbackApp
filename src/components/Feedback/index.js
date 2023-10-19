import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackGiven: false}

  giveFeedback = () => {
    this.setState({isFeedbackGiven: true})
  }

  render() {
    const {isFeedbackGiven} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        {isFeedbackGiven ? (
          <div className="card-container">
            <img src={loveEmojiUrl} alt="love emoji" />
            <h1>Thank you</h1>
            <p>
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        ) : (
          <div className="card-container">
            <h1 className="heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="list-container">
              {emojis.map(eachItem => (
                <li className="list-item" key={eachItem.id}>
                  <button
                    className="button"
                    type="button"
                    onClick={this.giveFeedback}
                  >
                    <img
                      className="emoji"
                      src={eachItem.imageUrl}
                      alt={eachItem.name}
                    />
                  </button>
                  <span className="emoji-name">{eachItem.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback
