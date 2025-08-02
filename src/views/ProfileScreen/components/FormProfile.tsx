'use client';

import { Input } from '@heroui/input';
import { addToast, Avatar, AvatarIcon, Button, Image } from '@heroui/react';
import { useUserContext } from 'context/AuthContext';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import authServices from 'services/auth.service';
import { ProfileFormData, User } from 'types/user';

const FormProfile = () => {
  const { user, setUser } = useUserContext();
  const [isCorrectPassword, setIsCorrectPassword] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<ProfileFormData>({
    name: user?.name || '',
    avatar: user?.avatar || '',
    avatarFile: null,
    phone: user?.phone || '',
    showPasswordFields: false,
    newPassword: '',
    confirmPassword: '',
  });

  useEffect(() => {
    setFormData({
      name: user?.name || '',
      avatar: user?.avatar || '',
      avatarFile: null,
      phone: user?.phone || '',
      showPasswordFields: false,
      newPassword: '',
      confirmPassword: '',
    });
  }, [user?._id]);

  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        avatarFile: file,
        avatar: URL.createObjectURL(file),
      }));
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'confirmPassword' || name === 'newPassword') {
      setIsCorrectPassword(false);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    const { newPassword, confirmPassword, name, phone, avatarFile } = formData;

    if (formData.showPasswordFields && newPassword !== confirmPassword) {
      setIsCorrectPassword(true);
      return;
    }

    try {
      const updatePayload = {
        userId: user._id,
        password: newPassword,
        name,
        phone,
        avatar: avatarFile,
      };

      const res = await authServices.update(updatePayload);

      if (res?.data.success) {
        const updatedUser: User = {
          ...user,
          avatar: res.data.data.avatar,
          name: res.data.data.name,
          phone: res.data.data.phone,
        };

        addToast({
          title: 'Profile',
          description: 'Cập nhật thông tin thành công',
          color: 'success',
        });

        localStorage.setItem('user', JSON.stringify(updatedUser));
        setUser(updatedUser);
      }
    } catch (error) {
      console.error(error);
      addToast({
        title: 'Profile',
        description: 'Cập nhật thông tin thất bại',
        color: 'warning',
      });
    }
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto space-y-3 p-6 shadow-xl rounded-md bg-white"
    >
      <h1 className="text-center text-3xl font-semibold">Profile</h1>
      <div className="w-full">
        <div className="w-fit mx-auto text-center p-3 border border-primary-1 rounded-md">
          <div
            onClick={handleAvatarClick}
            className="w-24 h-24 mx-auto rounded-full overflow-hidden cursor-pointer border border-gray-300"
          >
            {formData.avatar ? (
              <Image src={formData.avatar} alt="Avatar" className="z-5 w-full h-full" />
            ) : (
              <Avatar
                classNames={{
                  base: 'bg-linear-to-br from-[#FFB457] to-[#FF705B] w-full h-full',
                  icon: 'text-black/80',
                }}
                icon={<AvatarIcon />}
              />
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleAvatarChange}
            className="hidden"
          />
        </div>
      </div>

      <Input type="email" labelPlacement="outside-top" label="Email" value={user?.email} readOnly />

      <Input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        labelPlacement="outside-top"
        label="Username"
        placeholder="Nhập tên của bạn"
      />

      <Input
        type="number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        labelPlacement="outside-top"
        label="Phone"
        placeholder="Nhập số điện thoại"
      />

      <div>
        {!formData.showPasswordFields ? (
          <button
            type="button"
            onClick={() => setFormData((prev) => ({ ...prev, showPasswordFields: true }))}
            className="text-sm text-primary-1 hover:underline"
          >
            Thay đổi mật khẩu
          </button>
        ) : (
          <>
            <div className="mb-2">
              <label className="block font-semibold mb-1">Mật khẩu mới</label>
              <Input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="New password"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Xác nhận mật khẩu</label>
              <Input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
              />
            </div>
            {isCorrectPassword && (
              <p className="text-sm text-red-500!">Mật khẩu không trùng khớp</p>
            )}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    showPasswordFields: false,
                    newPassword: '',
                    confirmPassword: '',
                  }))
                }
                className="text-sm text-primary-1 hover:underline"
              >
                Ẩn mật khẩu
              </button>
            </div>
          </>
        )}
      </div>

      <div className="flex justify-end">
        <Button type="submit" className="bg-blue-500 text-white! font-semibold">
          Cập nhật
        </Button>
      </div>
    </form>
  );
};

export default FormProfile;
