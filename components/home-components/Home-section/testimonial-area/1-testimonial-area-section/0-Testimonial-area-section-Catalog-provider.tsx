import React from "react";
import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { TestimonialCatalogItem } from "./1-Testimonial-Area-section-Catalog-Item";
// ------------------------------ ---------------------- -------
interface AppProps {
  testimonialSection: any;
}

export const TestimonialAreaSectionCatalogProvider: React.FunctionComponent<AppProps> = ({
  testimonialSection: {
    testimonialCatalogItem,
    testimonialCatalogItemTwo,
    testimonialCatalogItemOne,
    testimonialCatalogItemThree,
  },
}) => {
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <>
      <TestimonialCatalogItem
        testimonialCatalogItemThree={testimonialCatalogItemThree[0]}
        testimonialCatalogItemTwo={testimonialCatalogItemTwo[0]}
        testimonialCatalogItem={testimonialCatalogItem[0]}
        testimonialCatalogItemOne={testimonialCatalogItemOne[0]}
      />
    </>
  );
};
