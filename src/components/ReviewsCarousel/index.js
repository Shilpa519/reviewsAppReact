import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewIndex: 0}

  onClickOfLeftArrow = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  onClickOfRightArrow = () => {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props
    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevSate => ({
        activeReviewIndex: prevSate.activeReviewIndex + 1,
      }))
    }
  }

  renderActiveReviewIndex = review => {
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="profile-container">
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    const currentReviewDetails = reviewsList[activeReviewIndex]
    return (
      <div className="bg-container">
        <h1 className="title">Reviews</h1>
        <div className="user-review-container">
          <button
            className="button"
            type="button"
            data-testid="leftArrow"
            onClick={this.onClickOfLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.renderActiveReviewIndex(currentReviewDetails)}
          <button
            className="button"
            type="button"
            data-testid="rightArrow"
            onClick={this.onClickOfRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
