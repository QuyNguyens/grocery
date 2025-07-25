import React from 'react';

interface CollectionLoaderProps {
  isLoading: boolean;
  error: string | null;
  children: React.ReactNode;
}

const CollectionLoader: React.FC<CollectionLoaderProps> = ({ isLoading, error, children }) => {
  if (isLoading) {
    return <div className="text-center py-4">Đang tải dữ liệu...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">Lỗi: {error}</div>;
  }

  return <>{children}</>;
};

export default CollectionLoader;
