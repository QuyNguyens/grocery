import React from 'react';

type ItemsProps = {
  title: string;
  list: string[];
};
const Items = ({ title, list }: ItemsProps) => {
  return (
    <div>
      <h4 className="font-semibold mb-2 text-sm">{title}</h4>
      <ul className="space-y-1 text-sm text-gray-600">
        {list.map((item, index) => (
          <li key={index} className="hover:text-green-500 cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;
