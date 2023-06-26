import React from 'react';
import './resource.css';

const Resource = () => {
  const resourceData = {
    image: 'https://toppng.com/uploads/preview/code-interrogation-blank-red-book-cover-11569063098n6btr5iejc.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut mauris et massa venenatis interdum. Proin ultrices auctor ligula, ac dignissim massa congue vitae. Sed consectetur, justo et volutpat finibus, nunc sem tincidunt arcu, id sollicitudin mi arcu et turpis. In id felis sed tortor luctus pulvinar. Aliquam quis pharetra felis. Phasellus ac mauris quis libero congue auctor. In consequat neque ac magna varius, ac fringilla dolor bibendum. Donec maximus laoreet tortor, ut pharetra tortor eleifend in. Etiam facilisis pellentesque mi nec pretium.',
    averageRating: 4.5,
    ratings: [
      { username: 'User1', rating: 4, comment: 'Great resource!' },
      { username: 'User2', rating: 5, comment: 'Highly recommended!' },
      { username: 'User3', rating: 3, comment: 'Good resource, but can be improved.' },
      { username: 'User4', rating: 4.5, comment: 'Excellent content!' },
      { username: 'User5', rating: 5, comment: 'Invaluable resource for learning.' },
    ],
    opinion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae lacus id justo interdum laoreet ut sed purus. Etiam ac consequat odio. Aliquam quis lectus ut arcu viverra gravida at non arcu. In gravida ex a enim maximus, at laoreet nisi lobortis. Proin non tellus volutpat, convallis orci vitae, pharetra nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc posuere auctor mi, vitae euismod nisl ullamcorper eu. Sed lobortis laoreet sollicitudin. Vestibulum pretium elit at lectus aliquam, vitae cursus quam ullamcorper. Sed aliquet felis vel vulputate efficitur. Fusce in lacus ac orci auctor bibendum. Cras bibendum tempor neque, eget varius ligula dictum at.",
  };

  const renderStarRating = (rating) => {
    // Rating rendering logic here
  };

  return (
    <div>
      <div className="resource-container">
        <div className="resource-image">
          <img src={resourceData.image} alt="Resource" />
        </div>
        <div className="resource-details">
          <h2>Title</h2>
          <p>{resourceData.description}</p>
          <div className="average-rating">
            Average Rating: {resourceData.averageRating}
          </div>
        </div>
      </div>
      <div className="content-container">
        <div className="ratings">
          {resourceData.ratings.map((rating) => (
            <div className="rating-item">
              <div className="user-details">
                <div className="user-name">{rating.username}</div>
                <div className="user-comment">
                  {rating.comment}
                  <div className="user-rating">
                    Rating: {rating.rating}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="opinion-container">
          <div className="opinion-title">ChatGPT's Opinion</div>
          <div className="opinion-text">{resourceData.opinion}</div>
        </div>
      </div>
    </div>
  );
};

export default Resource;

