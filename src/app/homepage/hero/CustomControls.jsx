import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function CustomControls({ sliderRef }) {
  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <>
      <div
        className="absolute top-1/2 -left-12 transform -translate-y-1/2 z-10 cursor-pointer bg-white p-3 rounded-full shadow-md hover:bg-gray-100"
        onClick={handlePrev}
      >
        <FaChevronLeft />
      </div>
      <div
        className="absolute top-1/2 -right-12 transform -translate-y-1/2 z-10 cursor-pointer bg-white p-3 rounded-full shadow-md hover:bg-gray-100"
        onClick={handleNext}
      >
        <FaChevronRight />
      </div>
    </>
  );
}
