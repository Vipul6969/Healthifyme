import React, { useState } from "react";
import { customerReviews } from "../Scripts/reviews";
import "../Styles/Reviews.css";

const Reviews = () => {
  const [reviewIndex, setReviewIndex] = useState(0);
  const reviewsLength = customerReviews.length;

  const handleNextReview = () => {
    setReviewIndex((reviewIndex + 1) % reviewsLength);
  };

  const handlePrevReview = () => {
    setReviewIndex((reviewIndex - 1 + reviewsLength) % reviewsLength);
  };

  const currentReview = customerReviews[reviewIndex];

  return (
    <div className="review-section">
      <div className="review-container">
        <div className="review-text">
          <p className="review-title">
            Over <span className="review-num">1500+</span> Customers
          </p>
          <p className="review-subtitle">Don't believe us? Check our clients' words:</p>
          <div className="quote">
            <span className="quote-start">“</span>
            <p className="review-message">{currentReview.message}</p>
            <span className="quote-end">”</span>
          </div>
          <div className="review-author">
            <p className="reviewer-name">{currentReview.name}</p>
            <p className="reviewer-place">{currentReview.location}</p>
          </div>
        </div>
        <div className="review-buttons">
          <button className="review-prev" onClick={handlePrevReview}>
            Prev
          </button>
          <button className="review-next" onClick={handleNextReview}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
