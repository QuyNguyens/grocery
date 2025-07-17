"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useSEOMetadata } from "hooks/useSEOMetadata";
import { useSeoContext } from "context/SeoContext";

export const SeoUpdater = () => {
  const pathname = usePathname();
  let { title, description } = useSEOMetadata();
  const { data } = useSeoContext();

  useEffect(() => {
    if(data?.title) {
      title = data.title;
    }
    if(data?.description) { 
      description = data.description;
    }

    if (title) {
      document.title = title;
    }

    const observer = new MutationObserver(() => {
      if (document.title !== title) {
        document.title = title;
      }
    });

    observer.observe(document.querySelector("title")!, {
      childList: true,
    });

    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", description || "");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description || "";
      document.head.appendChild(meta);
    }

    return () => observer.disconnect();
  }, [pathname, title, description, data.title, data.description]);

  return null;
};
