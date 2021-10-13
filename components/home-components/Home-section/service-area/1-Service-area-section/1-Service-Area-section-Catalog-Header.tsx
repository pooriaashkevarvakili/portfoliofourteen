import { OneCatalogData } from "../../../../../types/OneCatalogData";

import { GetStaticProps } from "next";
import React from "react";
// ------------------------------ ---------------------- --------
interface AppProps {
  serviceAreaHeader: OneCatalogData;
}
export const ServiceAreaCatalogHeader: React.FunctionComponent<AppProps> = ({
  serviceAreaHeader,
}) => {
  const { FirstHeader } = serviceAreaHeader;

  return (
    <div className="title text-center">
      <h2 style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
        {FirstHeader}
      </h2>
    </div>
  );
};
