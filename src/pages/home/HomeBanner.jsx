import React, { useEffect, useState } from 'react';
// import SwikarWebsite2 from '../../assets/SwikarWebsite2.png';
import bannerimg2 from '../../assets/bannerimg2.png';
import HELPSUPPORTDAILYWEAGEARNERS4 from '../../assets/HELP_SUPPORT-DAILY-WAGE-EARNERS-4.png';
import bannerimg1 from '../../assets/bannerimg1.jpg';


const HomeBanner = () => {
  const [index, setIndex] = useState(0);

  const data = [
    // SwikarWebsite2,
    bannerimg2,
    HELPSUPPORTDAILYWEAGEARNERS4,
    bannerimg1,
  ];

  const handleNext = () => {
    setIndex(index === data.length - 1 ? 0 : index + 1);
  };

  const handlePrev = () => {
    setIndex(index === 0 ? data.length - 1 : index - 1);
  };

  useEffect(() => {
    const indexClear = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(indexClear);
  }, [index]);

  return (
    <div className="w-full relative mt-10 overflow-hidden h-[200px] sm:h-[550px] xs:h-[300px]">
    <img
      className="w-full h-full object-content object-center" 
      src={data[index]}
      alt="Swikar Charitable-Banner"
    />
    <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
      <button onClick={handlePrev} className="text-white text-5xl">{'<'}</button>
    </div>
    <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
      <button onClick={handleNext} className="text-white text-5xl">{'>'}</button>
    </div>
  </div>
  
  );
};

export default HomeBanner;
