import { OneCatalogData } from "../../../../../types/OneCatalogData";

import { GetStaticProps } from "next";
import React from "react";
// ------------------------------ ---------------------- --------
interface AppProps {
  blogAreaItemHeader: OneCatalogData;
}
export const BlogAreaCatalogItemHeader: React.FunctionComponent<AppProps> = ({
  blogAreaItemHeader,
}) => {
  const { FirstHeader } = blogAreaItemHeader;
  return (
    <div className="title text-center">
      <h2
        style={{
          fontFamily: "IRANSansWeb",
          direction: "rtl",
        }}
      >
        {FirstHeader}
      </h2>
    </div>
  );
};
