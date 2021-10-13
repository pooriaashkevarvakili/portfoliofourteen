import { OneCatalogData } from "../../../../../types/OneCatalogData";

import { GetStaticProps } from "next";
import React from "react";
import Carousel from "nuka-carousel";
// ------------------------------ ---------------------- --------
interface AppProps {
  teamAreaCatalogHeader: OneCatalogData;
}
export const TeamAreaCatalogHeader: React.FunctionComponent<AppProps> = ({
  teamAreaCatalogHeader,
}) => {
  const { FirstHeader } = teamAreaCatalogHeader;
  return (
    <div className="title text-center">
      <h2   style={{
                fontFamily: "IRANSansWeb",
                direction: "rtl",
              }}>{FirstHeader}</h2>
  </div>
  );
};
