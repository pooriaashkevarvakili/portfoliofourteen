import React from "react";
import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { ContactAreaCatalogItem } from "./1-Contact-Area-section-Catalog-Item";
// ------------------------------ ---------------------- -------
interface AppProps {
  contactAreaSection: any;
}

export const ContactAreaSectionCatalogProvider: React.FunctionComponent<AppProps> = ({
  contactAreaSection: { contactAreaItem },
}) => {
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <>
      <ContactAreaCatalogItem contactAreaItem={contactAreaItem[0]} />
    </>
  );
};
