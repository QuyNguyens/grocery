import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar as AvatarIcon,
} from '@heroui/react';
import {
  UserCircleIcon,
  ArrowDownOnSquareIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline';
import { useUserContext } from 'context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { checkImageExists } from 'utils/checkImageExists';
import { ROUTES } from 'constants/routes';
import authServices from 'services/auth.service';

export default function Avatar() {
  const { user, setUser } = useUserContext();
  const [avatarUrlExists, setAvatarUrlExists] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    checkImageExists(user?.avatar || '').then(setAvatarUrlExists);
  }, [user]);

  const handleLogout = async () => {
    const rfToken = localStorage.getItem('refresh_token') || '';
    try {
      await authServices.logout(rfToken);
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user');
      setUser({ _id: '', name: '', email: '', avatar: undefined, role: '', address: [] });
      router.push('/login');
    } catch (error) {
      console.error('Lỗi khi đăng xuất: ', error);
    }
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        {avatarUrlExists ? (
          <AvatarIcon src={user.avatar} />
        ) : (
          <AvatarIcon
            classNames={{
              base: 'bg-linear-to-br from-[#FFB457] to-[#FF705B]',
              icon: 'text-black/80',
            }}
            icon={<AvatarIcon />}
          />
        )}
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
        <DropdownItem
          onClick={() => router.push(ROUTES.profile)}
          startContent={<UserCircleIcon className="w-6 h-6" />}
          key="profile"
        >
          <h3>Profile</h3>
        </DropdownItem>
        <DropdownItem
          onClick={() => router.push(ROUTES.orderDetail)}
          startContent={<ShoppingBagIcon className="w-6 h-6" />}
          key="order"
        >
          <h3>Order</h3>
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
