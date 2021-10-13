import React from "react";
import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { TeamAreaCatalogItem } from "./1-Team-Area-section-Catalog-Item";
// ------------------------------ ---------------------- -------
interface AppProps {
  teamAreaSection: any;
}

export const TeamAreaSectionCatalogProvider: React.FunctionComponent<AppProps> = ({
  teamAreaSection: {
    teamAreaCatalogItem,
    teamAreaCatalogHeader,
    teamAreaCatalogItemSliderOne,
    teamAreaCatalogItemSliderTwo,
    teamAreaCatalogItemThree,
  },
}) => {
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <>
      <TeamAreaCatalogItem
        teamAreaCatalogItemThree={teamAreaCatalogItemThree}
        teamAreaCatalogItemSliderOne={teamAreaCatalogItemSliderOne[0]}
        teamAreaCatalogItem={teamAreaCatalogItem[0]}
        teamAreaCatalogItemSliderTwo={teamAreaCatalogItemSliderTwo[0]}
        teamAreaCatalogHeader={teamAreaCatalogHeader[0]}
      />
    </>
  );
};
