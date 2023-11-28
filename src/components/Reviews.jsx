import React from "react";
import '../stylesheets/Reviews.css'

const Reviews = ({ commenter, review, comment }) => {
  return (
    <div className="reviews-container">
      <div className="name-and-reputation">
        <p>{commenter}</p>
        <p>{review}</p>
      </div>
      <div className="comment-box">
        <p>{comment}</p>
      </div>
    </div>
  )
}

export default Reviews
