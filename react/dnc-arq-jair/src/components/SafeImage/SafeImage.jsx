// src/components/SafeImage.jsx
import React, { useState } from 'react';

const SafeImage = ({ src, alt, fallback = '/fallback.jpg', className }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(fallback);
  };

  return <img src={imgSrc} alt={alt} onError={handleError} className={className} loading='lazy' />;
};

export default SafeImage;
