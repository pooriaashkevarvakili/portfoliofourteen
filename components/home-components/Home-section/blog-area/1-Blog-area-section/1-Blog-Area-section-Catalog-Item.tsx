import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { BlogAreaCatalogItemHeader } from "./1-Blog-Area-section-Catalog-Heder";
import { GetStaticProps } from "next";
import { BlogAreaCatalogItemOne } from "./2-Blog-Area-section-Catalog-Item1";
import React from "react";
// ------------------------------ ---------------------- --------
interface AppProps {
  blogAreaItem: OneCatalogData;
  blogAreaItemHeader: OneCatalogData;
  blogAreaCatalogItemOne: OneCatalogData;
}
export const BlogAreaCatalogItem: React.FunctionComponent<AppProps> = ({
  blogAreaItem,
  blogAreaItemHeader,
  blogAreaCatalogItemOne,
}) => {
  return (
    <>
      <div className="blog-area" id="blog">
        <div className="blog-bg">
          <div className="container">
            <BlogAreaCatalogItemHeader
              blogAreaItemHeader={blogAreaItemHeader}
            />
            <BlogAreaCatalogItemOne
              blogAreaCatalogItemOne={blogAreaCatalogItemOne}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
