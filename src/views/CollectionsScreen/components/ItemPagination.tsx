import { Button, Pagination } from '@heroui/react';
import React from 'react';

type ItemPaginationProps = {
  currentPage: number;
  totalPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const ItemPagination = ({ currentPage, totalPage, setCurrentPage }: ItemPaginationProps) => {
  return (
    <div className="flex flex-col gap-5">
      <Pagination color="success" page={currentPage} total={totalPage} onChange={setCurrentPage} />
      <div className="flex gap-2">
        <Button
          color="success"
          size="sm"
          variant="flat"
          onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
        >
          Previous
        </Button>
        <Button
          color="success"
          size="sm"
          variant="flat"
          onPress={() => setCurrentPage((prev) => (prev < totalPage ? prev + 1 : prev))}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default React.memo(ItemPagination);
