// MenuDropdown.tsx
import { useRef } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useClickOutside } from 'hooks/useClickOutside';

type Props = {
  id: string;
  label: string;
  children: React.ReactNode;
  activeId: string | null;
  setActiveId: (id: string | null) => void;
};

export default function MenuDropdown({ id, label, children, activeId, setActiveId }: Props) {
  const isOpen = activeId === id;
  const wrapperRef = useRef<HTMLDivElement>(null);

  useClickOutside(wrapperRef as React.RefObject<HTMLElement>, () => {
    if (isOpen) setActiveId(null);
  });

  const toggle = () => {
    setActiveId(isOpen ? null : id);
  };

  return (
    <div ref={wrapperRef}>
      <button
        onClick={toggle}
        className="flex items-center gap-2 font-semibold hover:text-green-500 duration-300"
      >
        {label}
        <ChevronDownIcon className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full w-screen max-w-[1200px] bg-white shadow-lg z-20">
          {children}
        </div>
      )}
    </div>
  );
}
