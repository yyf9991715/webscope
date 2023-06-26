import React, { useState } from 'react';
import './Reviewandrating.css';
import Starrating from '../components/Starrating';

const Reviewandrating = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleCancel = () => {
    // Handle cancel logic here
    console.log('Cancel');
  };

  const handleSendReview = () => {
    // Handle send review logic here
    console.log('Send Review');
  };

  return (
    <div className="review-container">
      <div className="review-header">
        <h2>Write a Review</h2>
        <p>Rate and review the product</p>
      </div>
      <div className="rating-container">
        <Starrating rating={rating} onChange={handleRatingChange} />
      </div>
      <div className="review-input">
        <textarea
          placeholder="Write your review..."
          value={review}
          onChange={handleReviewChange}
        ></textarea>
      </div>
      <div className="button-container">
        <button className="cancel-button" onClick={handleCancel}>
          Cancel
        </button>
        <button className="send-button" onClick={handleSendReview}>
          Send Review
        </button>
      </div>
    </div>
  );
};

export default Reviewandrating;

