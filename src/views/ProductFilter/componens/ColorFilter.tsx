import { COLORS_FILTER } from 'constants/filter';
import React, { useCallback, useState } from 'react';

const ColorFilter = () => {
  const [color, setColor] = useState<string>('');

  const handleClickColor = useCallback(
    (name: string) => {
      if (name === color) {
        setColor('');
      } else {
        setColor(name);
      }
    },
    [color],
  );

  return (
    <div className="flex gap-2">
      {COLORS_FILTER.map((item, index) => (
        <div
          onClick={() => handleClickColor(item.name)}
          key={index}
          className={`${item.color} w-6 h-6 rounded-full ${item.name === color ? 'border border-gray-500' : ''}`}
        ></div>
      ))}
    </div>
  );
};

export default ColorFilter;
