import { SEO_METADATA, SEO_METADATA_LIST } from 'constants/common';
import { usePathname } from 'next/navigation';

export const useSEOMetadata = () => {
  const pathname = usePathname();
  const matched = SEO_METADATA_LIST.find((item) => {
    if (item?.isPrefix) {
      return pathname.startsWith(item.key);
    }
    return item.key === pathname;
  });

  return {
    title: matched?.title || SEO_METADATA.title,
    description: matched?.descriptions || SEO_METADATA.descriptions,
  };
};
