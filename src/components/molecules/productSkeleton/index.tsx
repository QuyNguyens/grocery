import { Card, Skeleton } from '@heroui/react';

type ProductSkeletonProps = {
  className: string;
  imageHeight: string;
};

export default function ProductSkeleton({ className, imageHeight }: ProductSkeletonProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 p-3 lg:p-0">
      {[1, 2, 3, 4, 5].map((item) => (
        <Card key={item} className={`${className} space-y-5 p-4`} radius="lg">
          <Skeleton className="rounded-lg">
            <div className={`${imageHeight} rounded-lg bg-default-300`} />
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-5/5 rounded-lg">
              <div className="h-3 w-5/5 rounded-lg bg-default-200" />
            </Skeleton>
            <Skeleton className="w-5/5 rounded-lg">
              <div className="h-3 w-5/5 rounded-lg bg-default-200" />
            </Skeleton>
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-300" />
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-300" />
            </Skeleton>
            <Skeleton className="w-5/5 rounded-lg">
              <div className="h-10 w-5/5 rounded-lg bg-default-200" />
            </Skeleton>
          </div>
        </Card>
      ))}
    </div>
  );
}
