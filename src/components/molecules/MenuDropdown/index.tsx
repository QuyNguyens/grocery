// MenuDropdown.tsx
import { useRef } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

type Props = {
  id: string;
  label: string;
  children: React.ReactNode;
  activeId: string | null;
  routeName: string;
  setActiveId: (id: string | null) => void;
};

export default function MenuDropdown({
  id,
  label,
  children,
  activeId,
  routeName,
  setActiveId,
}: Props) {
  const isOpen = activeId === id;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleMouseEnter = () => {
    setActiveId(id);
  };

  const handleMouseLeave = () => {
    setActiveId(null);
  };

  return (
    <div
      className="h-10 flex"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={wrapperRef}
    >
      <button
        onClick={() => router.push(routeName)}
        className="flex items-center gap-2 font-semibold hover:text-green-500 duration-300"
      >
        {label}
        <ChevronDownIcon className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-10 w-screen max-w-[1200px] bg-white shadow-lg z-20">
          {children}
        </div>
      )}
    </div>
  );
}
