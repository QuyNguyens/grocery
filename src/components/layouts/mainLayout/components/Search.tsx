import { Input } from '@heroui/input';
import React, { useState, useRef, useEffect } from 'react';

const SearchBox = () => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestions = ['Apple', 'Banana', 'Cherry', 'Grapes', 'Orange', 'Strawberry'];
  const filtered = suggestions.filter((item) =>
    item.toLowerCase().includes(inputValue.toLowerCase()),
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={inputRef}>
      <div className="flex border-2 border-green-500 rounded-full overflow-hidden cursor-text">
        <Input
          fullWidth
          placeholder="Search for items..."
          type="text"
          radius="none"
          value={inputValue}
          onFocus={() => setIsFocused(true)}
          onChange={(e: any) => setInputValue(e.target.value)}
          className="border-none outline-none focus:outline-none focus:border-none"
        />
        <div className="flex items-center justify-center px-4 py-2 bg-green-600 text-white!">
          <span className="font-bold text-white!">Search</span>
        </div>
      </div>

      {isFocused && inputValue.trim().length > 0 && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-200 shadow-md rounded-md mt-1 z-50 max-h-60 overflow-y-auto">
          {filtered.length > 0 ? (
            filtered.map((item, idx) => (
              <div
                key={idx}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setInputValue(item);
                  setIsFocused(false);
                }}
              >
                {item}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">Không có kết quả</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
