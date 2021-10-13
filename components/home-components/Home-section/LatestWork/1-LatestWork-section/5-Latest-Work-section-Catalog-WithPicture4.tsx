import { OneCatalogData } from "../../../../../types/OneCatalogData";

import { GetStaticProps } from "next";
import React from "react";
// ------------------------------ ---------------------- --------
interface AppProps {
  latestWorkCatalogPictureFour: OneCatalogData;
}
export const LatestWorkCatalogPictureFour: React.FunctionComponent<AppProps> = ({
  latestWorkCatalogPictureFour,
}) => {
  const {
    FirstHeader,
    SecondHeader,
    ContentAttachment,
  } = latestWorkCatalogPictureFour;

  return (
    <div className="col-md-4">
      <div className="latest-img">
        <img src={ContentAttachment[0] + "?width=340&height=340"} alt="work" />
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
