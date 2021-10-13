import { OneCatalogData } from "../../../../../types/OneCatalogData";

import { GetStaticProps } from "next";
import React from "react";
// ------------------------------ ---------------------- --------
interface AppProps {
  latestWorkCatalogPictureTwo: OneCatalogData;
}
export const LatestWorkCatalogPictureTwo: React.FunctionComponent<AppProps> = ({
  latestWorkCatalogPictureTwo,
}) => {
  const {
    FirstHeader,
    SecondHeader,
    ContentAttachment,
  } = latestWorkCatalogPictureTwo;

  return (
    <div className="col-md-4">
      <div className="latest-img">
        <img src={ContentAttachment[0] + "?width=340&height=255"} alt="work" />
        <p
          style={{
            fontFamily: "IRANSansWeb",
            direction: "rtl",
            marginTop: 45,
          }}
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
