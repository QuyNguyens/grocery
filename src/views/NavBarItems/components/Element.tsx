import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@heroui/react';

export default function Element() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <button className="flex items-center gap-2 font-semibold hover:text-green-500 duration-300">
          Element
          <ChevronDownIcon className="w-4 h-4 " />
        </button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">About Us</DropdownItem>
        <DropdownItem key="copy">Blogs</DropdownItem>
        <DropdownItem key="copy">Contact</DropdownItem>
        <DropdownItem key="copy">FAQs</DropdownItem>
        <DropdownItem key="copy">Compare</DropdownItem>
        <DropdownItem key="copy">Wishlist</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
