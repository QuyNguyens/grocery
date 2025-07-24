import React from 'react';
import Header from './components/Header';

const CheckoutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default CheckoutLayout;
