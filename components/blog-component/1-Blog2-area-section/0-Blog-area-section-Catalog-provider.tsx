import React from "react";
import { OneCatalogData } from "../../../types/OneCatalogData";
import { BlogTwoAreaCatalogItem } from "./2-Blog-area-section-Catalog-Item";
// ------------------------------ ---------------------- -------
interface AppProps {
  blogAreaTwoSection: any;
}

export const BlogAreaSectionCatalogProvider: React.FunctionComponent<AppProps> = ({
  blogAreaTwoSection: { blogTwoAreaCatalogItem },
}) => {
  const renderItems = () => {
    return blogTwoAreaCatalogItem
      .slice()
      .map((item: OneCatalogData) => (
        <BlogTwoAreaCatalogItem blogTwoAreaCatalogItem={item} key={item.Id} />
      ));
  };
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <>
      <BlogTwoAreaCatalogItem
        blogTwoAreaCatalogItem={blogTwoAreaCatalogItem[0]}
      >
        {renderItems()}
      </BlogTwoAreaCatalogItem>
    </>
  );
};
