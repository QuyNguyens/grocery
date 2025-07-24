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
        <DropdownItem key="about-us">About Us</DropdownItem>
        <DropdownItem key="blogs">Blogs</DropdownItem>
        <DropdownItem key="contact">Contact</DropdownItem>
        <DropdownItem key="faqs">FAQs</DropdownItem>
        <DropdownItem key="compare">Compare</DropdownItem>
        <DropdownItem key="whish-list">Wishlist</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
