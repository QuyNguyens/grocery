// OurStore.tsx
import React from 'react';
import Items from './components/Items';
import FlatImage from '../../../../../public/images/ourstore-flat.avif';
import BannerImage from '../../../../../public/images/ourstore-shop-banner-01.avif';
import { Image } from '@heroui/image';

const items = {
  Beverages: ['Cold Drinks', 'Beer Items', 'Carbonated', 'Plant Drinks', 'Juices Items'],
  'Dairy Items': ['Bread Items', 'Ice Cream', 'Butter Items', 'Cookies Items', 'Cheese Items'],
};

const OurStore = () => {
  return (
    <div className="flex justify-between gap-6 p-4">
      <Items title="Beverages" list={items.Beverages} />
      <Items title="Dairy Items" list={items['Dairy Items']} />
      <Image alt="flat" src={FlatImage.src} />
      <Image alt="banner" src={BannerImage.src} />
    </div>
  );
};

export default OurStore;
