'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { User } from 'types/user';

const defaultUser: User = {
  _id: '',
  name: '',
  email: '',
  avatar: '',
  role: '',
  address: [],
};

const UserContext = createContext<{
  user: User;
  setUser: (user: User) => void;
}>({
  user: defaultUser,
  setUser: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(defaultUser);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
