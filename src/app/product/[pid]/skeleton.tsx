import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function ProductPageSkeleton() {
  return (
    <SkeletonTheme borderRadius="0.35rem">
      <Skeleton count={4} inline width="6%" className="mr-2" />
      <div className="flex gap-4">
        <div className="w-[60%]">
          <Skeleton height="2.5rem" width="60%" className="my-2" />
          <Skeleton height="550px" />
          <Skeleton
            height="100px"
            width="20%"
            inline
            className="mr-4 mt-4"
            count={4}
          />
        </div>
        <div className="flex-1">
          <Skeleton height="2.5rem" className="my-2" width="35%" />
          <Skeleton height="4.5rem" />
          <div className="py-8">
            <Skeleton width="30%" height="2.5rem" className="my-2" />
            <Skeleton width="55%" count={2} />
          </div>
          <div className="">
            <Skeleton width="30%" height="2.5rem" className="my-2" />
            <Skeleton width="90%" count={6} />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
}
