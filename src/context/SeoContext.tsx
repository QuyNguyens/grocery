'use client';
import { createContext, useContext, useState } from 'react';

const SeoContext = createContext({
  setData: (data: { title: string; description: string }) => {},
  data: {
    title: '',
    description: '',
  },
});

export const SeoProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState({
    title: '',
    description: '',
  });

  return <SeoContext.Provider value={{ data, setData }}>{children}</SeoContext.Provider>;
};

export const useSeoContext = () => useContext(SeoContext);
