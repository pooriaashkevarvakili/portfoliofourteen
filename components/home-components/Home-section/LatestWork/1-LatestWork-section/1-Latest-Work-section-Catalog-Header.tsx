import { OneCatalogData } from "../../../../../types/OneCatalogData";

import { GetStaticProps } from "next";
import React from "react";
// ------------------------------ ---------------------- --------
interface AppProps {
  latestWorkCatalogHeader: OneCatalogData;
}
export const LatestWorkCatalogHeader: React.FunctionComponent<AppProps> = ({
  latestWorkCatalogHeader,
}) => {
  const { FirstHeader, ShortDescription } = latestWorkCatalogHeader;
  return (
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <div className="title text-center">
          <h2
            style={{
              fontFamily: "IRANSansWeb",
              direction: "rtl",
            }}
          >
            {FirstHeader}
          </h2>
          <div className="title-para">
            <p
              style={{
                fontFamily: "IRANSansWeb",
                direction: "rtl",
                textAlign:"right"
              }}
            >
              {ShortDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
