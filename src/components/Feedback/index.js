// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isFeedback: false,
  }

  onClickEmoji = () => this.setState({isFeedback: true})

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="app-container">
        <h1>heading</h1>

        <ul className="emoji-list">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button type="button" onClick={this.onClickEmoji}>
                <img src={emoji.imageUrl} alt={emoji.name} />
              </button>
              <br />
              <span>{emoji.name}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Feedback
