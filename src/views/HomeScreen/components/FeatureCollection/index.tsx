'use client';

import React from 'react';
import Special from 'views/NavBarItems/components/Special';
import BannerFeature from './components/BannerFeature';

const FeatureCollection = () => {
  return (
    <div className="md:mt-10 lg:mt-20">
      <h1 className="text-xl font-semibold text-center">Featured Collection</h1>
      <Special />
      <BannerFeature />
    </div>
  );
};

export default FeatureCollection;
