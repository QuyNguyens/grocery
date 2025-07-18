import React from 'react';
import Banner from './components/Banner';
import FeatureCollection from './components/FeatureCollection';

const HomeScreen = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1200px]">
        <Banner />
        <FeatureCollection />
      </div>
    </div>
  );
};

export default HomeScreen;
