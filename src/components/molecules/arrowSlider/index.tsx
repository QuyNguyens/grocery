import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

export function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="absolute z-5 right-3 top-1/2 -translate-y-1/2 cursor-pointer p-1 rounded-full bg-green-500 hover:bg-green-600"
      onClick={onClick}
    >
      <ChevronRightIcon className="w-5 h-5 text-white!" />
    </div>
  );
}

export function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="absolute z-5 left-3 top-1/2 -translate-y-1/2 cursor-pointer p-1 rounded-full bg-green-500 hover:bg-green-600"
      onClick={onClick}
    >
      <ChevronLeftIcon className="w-5 h-5 text-white!" />
    </div>
  );
}
