import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar as AvatarIcon,
} from '@heroui/react';
import {
  UserCircleIcon,
  ShoppingCartIcon,
  ArrowDownOnSquareIcon,
} from '@heroicons/react/24/outline';

export default function Avatar() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <AvatarIcon
          isBordered
          radius="full"
          src="https://i.pravatar.cc/150?u=a04258114e29026708c"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem startContent={<UserCircleIcon className="w-6 h-6" />} key="profile">
          Profile
        </DropdownItem>
        <DropdownItem startContent={<ShoppingCartIcon className="w-6 h-6" />} key="cart">
          Cart
        </DropdownItem>
        <DropdownItem startContent={<ArrowDownOnSquareIcon className="w-6 h-6" />} key="logout">
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
