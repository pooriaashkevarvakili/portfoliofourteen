import React from "react";
import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { AboutAreaCatalogItem } from "./1-About-Area-section-Catalog-Item";
// ------------------------------ ---------------------- -------
interface AppProps {
  aboutAreaSection: any;
}

export const AboutAreaSectionCatalogProvider: React.FunctionComponent<AppProps> = ({
  aboutAreaSection: { aboutAreaItem },
}) => {
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <>
      <AboutAreaCatalogItem aboutAreaItem={aboutAreaItem[0]} />
    </>
  );
};
