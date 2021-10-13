import { OneCatalogData } from "../../../../../types/OneCatalogData";

import { GetStaticProps } from "next";
import React from "react";
// ------------------------------ ---------------------- --------
interface AppProps {
  latestWorkCatalogPictureOne: OneCatalogData;
}
export const LatestWorkCatalogPictureOne: React.FunctionComponent<AppProps> = ({
  latestWorkCatalogPictureOne,
}) => {
  const {
    ContentAttachment,
    FirstHeader,
    SecondHeader,
  } = latestWorkCatalogPictureOne;

  return (
    <div className="col-md-4">
      <div className="latest-img">
        <img src={ContentAttachment[0] + "?width=340&height=255"} alt="work" />
        <p
          style={{ marginTop: 45, fontFamily: "IRANSansWeb", direction: "rtl" }}
        >
          {FirstHeader}
        </p>
        <p
          style={{
            fontFamily: "IRANSansWeb",
            direction: "rtl",
          }}
        >
          {SecondHeader}
        </p>
      </div>
    </div>
  );
};
