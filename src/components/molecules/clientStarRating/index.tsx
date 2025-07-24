'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { StarRatingsProps } from 'react-star-ratings';

const StarRatings = dynamic(() => import('react-star-ratings'), {
  ssr: false,
});

const ClientStarRatings = (props: StarRatingsProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <StarRatings {...props} />;
};

export default ClientStarRatings;
