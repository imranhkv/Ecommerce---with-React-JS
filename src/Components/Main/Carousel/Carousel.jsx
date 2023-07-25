import React, { useState } from 'react';

const images = [
  'https://placeimg.com/640/480/nature',
  'https://placeimg.com/640/480/architecture',
  'https://placeimg.com/640/480/people',
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
  };

  return (
    <div className="carousel">
      <button onClick={handlePrevClick}>Prev</button>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default Carousel;
