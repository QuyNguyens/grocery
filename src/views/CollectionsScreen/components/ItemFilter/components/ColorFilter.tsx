import { COLORS_FILTER } from 'constants/filter';
import React, { useCallback, useMemo, useState } from 'react';

type ColorFilterProps = {
  colors: string[];
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
};

const ColorFilter = ({ colors, color, setColor }: ColorFilterProps) => {
  const filteredColors = useMemo(() => {
    return COLORS_FILTER.filter((item) => colors.includes(item.name));
  }, [colors]);

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
      {filteredColors.map((item, index) => (
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
