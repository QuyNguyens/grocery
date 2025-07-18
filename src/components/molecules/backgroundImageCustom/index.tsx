import React from 'react';

type BackgroundImageCustomProps = {
  image: string;
  children: React.ReactNode;
  className: string;
};

const BackgroundImageCustom = ({ image, children, className }: BackgroundImageCustomProps) => {
  return (
    <div
      className={`bg-cover bg-center rounded-lg ${className}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {children}
    </div>
  );
};

export default BackgroundImageCustom;
