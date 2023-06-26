import React from 'react';
import { Link } from 'react-router-dom';
import './Search.css';

const Search = () => {
  const resources = [
  {
    image: 'https://toppng.com/uploads/preview/code-interrogation-blank-red-book-cover-11569063098n6btr5iejc.png',
    title: 'Resource 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at pulvinar odio. Integer nec gravida libero. Aliquam eleifend facilisis tortor, eu aliquam ligula vulputate eget. ',
    rating: 4.5,
  },
  {
    image: 'https://toppng.com/uploads/preview/code-interrogation-blank-red-book-cover-11569063098n6btr5iejc.png',
    title: 'Resource 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis, risus eget cursus viverra, justo mauris auctor risus, ut vestibulum dui ante at metus. Sed commodo urna ut magna euismod, vitae pulvinar ligula malesuada.',
    rating: 3.8,
  },
  {
    image: 'https://toppng.com/uploads/preview/code-interrogation-blank-red-book-cover-11569063098n6btr5iejc.png',
    title: 'Resource 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus eleifend est, eu hendrerit nisi facilisis eget. Duis rhoncus eleifend dui, eu elementum nulla fringilla sit amet. Mauris eget nunc bibendum, hendrerit elit et, cursus erat.',
    rating: 4.2,
  },
  {
    image: 'https://toppng.com/uploads/preview/code-interrogation-blank-red-book-cover-11569063098n6btr5iejc.png',
    title: 'Resource 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at leo sit amet ante sodales euismod. Fusce ac consectetur sem, et fringilla turpis. Cras sem nunc, convallis vel suscipit vitae, congue id metus. Nullam et lacus ut tortor tristique sagittis.',
    rating: 3.5,
  },
  {
    image: 'https://toppng.com/uploads/preview/code-interrogation-blank-red-book-cover-11569063098n6btr5iejc.png',
    title: 'Resource 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed lectus et ante pulvinar lobortis. Phasellus non consequat est. Maecenas convallis nisl in facilisis ultrices. Fusce vitae lacinia dolor. Nam scelerisque lobortis dui, sed ultrices nisi efficitur id.',
    rating: 4.0,
  },
  {
    image: 'https://toppng.com/uploads/preview/code-interrogation-blank-red-book-cover-11569063098n6btr5iejc.png',
    title: 'Resource 6',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis dapibus nulla id euismod. Sed id finibus lectus. Aliquam erat volutpat. Sed id aliquam tellus, at pellentesque purus..',
    rating: 4.8,
  },
  {
    image: 'https://toppng.com/uploads/preview/code-interrogation-blank-red-book-cover-11569063098n6btr5iejc.png',
    title: 'Resource 7',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum ex ac ipsum mattis rhoncus. Nam non est semper, ultrices tortor id, egestas odio. Curabitur ac metus a neque pharetra malesuada. Duis convallis commodo tristique. Vestibulum feugiat ligula in justo vestibulum, id lobortis purus aliquet.',
    rating: 3.2,
  },
  {
    image: 'https://toppng.com/uploads/preview/code-interrogation-blank-red-book-cover-11569063098n6btr5iejc.png',
    title: 'Resource 8',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Vestibulum venenatis neque sit amet ex hendrerit, ut consectetur enim euismod. Suspendisse varius ultricies neque nec vestibulum. Nullam feugiat dui tortor, ut vestibulum leo dignissim non. ',
    rating: 4.6,
  },
];

  return (
    <div className="search-container">
      <div className="resources-container">
        {resources.map((resource, index) => (
          //<Link to={`/Resource/${index}`} key={index} className="resource-link">
          <Link to={`/Resource`} className="resource-link">
            <div className="resource">
              <img
                src={resource.image}
                alt="Resource"
                className="resource-image2"
              />
              <div className="resource-details2">
                <h3 className="resource-title2">
                  {resource.title}
                </h3>
                <p className="resource-description2">
                  {resource.description}
                </p>
                <div className="resource-rating2">
                  Rating: {resource.rating}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
