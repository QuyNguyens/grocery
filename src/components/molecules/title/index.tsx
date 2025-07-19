import React from 'react';

type TitleProps = {
  title: string;
  className?: string;
};

const Title = ({ title, className }: TitleProps) => {
  return <h1 className={`${className} text-[#184363] text-xl text-center font-bold`}>{title}</h1>;
};

export default Title;
