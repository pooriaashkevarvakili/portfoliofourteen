import React from "react";
import { OneCatalogData } from "../../../types/OneCatalogData";
import { OurNavbarCatalog } from "./1-OurSidebar-Menu-section-catalog";
// ------------------------------ ---------------------- -------
interface AppProps {
  navbarStrings: any;
  ourSideBarmenu: any;
}

export const OurNavbarSectionProvider: React.FunctionComponent<AppProps> = ({
  navbarStrings,
  ourSideBarmenu,
}) => {
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <>
      <OurNavbarCatalog
        navbarStrings={navbarStrings[0]}
        ourSideBarmenu={ourSideBarmenu}
      />
    </>
  );
};
