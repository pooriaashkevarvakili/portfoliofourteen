import React from "react";
import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { LatestWorkCatalogWithPicture } from "./1-Latest-Work-section-Catalog-WithPicture";
// ------------------------------ ---------------------- -------
interface AppProps {
  latestWorkSection: any;
}

export const LatestWorkSectionCatalogProvider: React.FunctionComponent<AppProps> = ({
  latestWorkSection: {
    latestWorkCatalogPictureOne,
    latestWorkCatalogHeader,
    latestWorkCatalogPictureTwo,
    latestWorkCatalogPictureThree,
    latestWorkCatalogPictureFour,
    latestWorkCatalogPictureFive,
    latestWorkCatalogPictureSix,
  },
}) => {
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <>
      <LatestWorkCatalogWithPicture
        latestWorkCatalogPictureSix={latestWorkCatalogPictureSix[0]}
        latestWorkCatalogPictureFive={latestWorkCatalogPictureFive[0]}
        latestWorkCatalogPictureFour={latestWorkCatalogPictureFour[0]}
        latestWorkCatalogPictureThree={latestWorkCatalogPictureThree[0]}
        latestWorkCatalogPictureTwo={latestWorkCatalogPictureTwo[0]}
        latestWorkCatalogPictureOne={latestWorkCatalogPictureOne[0]}
        latestWorkCatalogHeader={latestWorkCatalogHeader[0]}
      />
    </>
  );
};
