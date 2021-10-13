import React from "react";
import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { ServiceAreaCatalogItem } from "./1-Service-Area-section-Catalog-Item";
// ------------------------------ ---------------------- -------
interface AppProps {
  serviceAreaSection: any;
}

export const ServiceAreaSectionCatalogProvider: React.FunctionComponent<AppProps> = ({
  serviceAreaSection: { serviceAreaItem, serviceAreaHeader },
}) => {
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <>
      <ServiceAreaCatalogItem
        serviceAreaItem={serviceAreaItem[0]}
        serviceAreaHeader={serviceAreaHeader[0]}
      />
    </>
  );
};
