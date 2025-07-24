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
import { useCallback } from 'react';
import { useUserContext } from 'context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Avatar() {
  const { user, setUser } = useUserContext();
  const router = useRouter();

  const handleLogout = useCallback(() => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    setUser({ _id: '', name: '', email: '', avatar: undefined, role: '', address: [] });
    router.push('/login');
  }, []);

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
        <DropdownItem key="signin">
          <div className="flex flex-col">
            <p>
              <span className="font-semibold">Login as</span>{' '}
              <span className="text-sm font-medium">{user.name}</span>
            </p>
            <p className="text-xs font-medium underline">{user.email}</p>
          </div>
        </DropdownItem>
        <DropdownItem startContent={<UserCircleIcon className="w-6 h-6" />} key="profile">
          <h3>Profile</h3>
        </DropdownItem>
        <DropdownItem startContent={<ShoppingCartIcon className="w-6 h-6" />} key="cart">
          <h3>Cart</h3>
        </DropdownItem>
        <DropdownItem
          onClick={handleLogout}
          startContent={<ArrowDownOnSquareIcon className="w-6 h-6" />}
          key="logout"
        >
          <h3>Logout</h3>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
