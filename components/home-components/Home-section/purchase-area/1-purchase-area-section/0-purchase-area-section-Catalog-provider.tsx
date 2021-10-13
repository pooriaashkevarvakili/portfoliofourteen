import React from "react";
import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { PurchaseAreaSectionCatalogItem } from "./1-purchase-area-section-Catalog-Item";

// ------------------------------ ---------------------- -------
interface AppProps {
  purchaseSection: any;
}

export const PurchaseAreaSectionCatalogProvider: React.FunctionComponent<AppProps> = ({
  purchaseSection: { purchaseAreaCatalogItem },
}) => {
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <>
      <PurchaseAreaSectionCatalogItem
        purchaseAreaCatalogItem={purchaseAreaCatalogItem[0]}
      />
    </>
  );
};
