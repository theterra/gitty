import { Skeleton, Stack } from "@chakra-ui/react";

const SkeletonLoader = () => (
  <Stack data-testid="skeleton-loader">
    <Skeleton height="20px" data-testid="skeleton-item" />
    <Skeleton height="20px" data-testid="skeleton-item" />
    <Skeleton height="20px" data-testid="skeleton-item" />
  </Stack>
);

export default SkeletonLoader;
