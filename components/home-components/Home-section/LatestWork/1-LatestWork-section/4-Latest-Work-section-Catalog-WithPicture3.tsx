import { OneCatalogData } from "../../../../../types/OneCatalogData";

import { GetStaticProps } from "next";
import React from "react";
// ------------------------------ ---------------------- --------
interface AppProps {
  latestWorkCatalogPictureThree: OneCatalogData;
}
export const LatestWorkCatalogPictureThree: React.FunctionComponent<AppProps> = ({
  latestWorkCatalogPictureThree,
}) => {
  const {
    FirstHeader,
    SecondHeader,
    ContentAttachment,
  } = latestWorkCatalogPictureThree;

  return (
    <div className="col-md-4">
      <div className="latest-img">
        <img src={ContentAttachment[0] + "?width=340&height=255"} alt="work" />
        <p
          style={{ marginTop: 45, fontFamily: "IRANSansWeb", direction: "rtl" }}
        >
          {FirstHeader}
        </p>
        <p style={{ fontFamily: "IRANSansWeb", direction: "rtl" }}>
          {SecondHeader}
        </p>
      </div>
    </div>
  );
};
