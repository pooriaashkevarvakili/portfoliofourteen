import React from "react";
import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { BlogAreaCatalogItem } from "./1-Blog-Area-section-Catalog-Item";
// ------------------------------ ---------------------- -------
interface AppProps {
  blogAreaSection: any;
}

export const BlogAreaSectionCatalogProvider: React.FunctionComponent<AppProps> = ({
  blogAreaSection: {
    blogAreaItem,
 
    blogAreaCatalogItemOne,
    blogAreaItemHeader,
  },
}) => {
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <>
      <BlogAreaCatalogItem
        blogAreaCatalogItemOne={blogAreaCatalogItemOne[0]}
        blogAreaItem={blogAreaItem}
        blogAreaItemHeader={blogAreaItemHeader[0]}
      />
    </>
  );
};
