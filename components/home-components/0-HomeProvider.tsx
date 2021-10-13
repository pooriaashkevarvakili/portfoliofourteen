import {
  
  AboutAreaSectionCatalogProvider,
  LatestWorkSectionCatalogProvider,
  ServiceAreaSectionCatalogProvider,
  TestimonialAreaSectionCatalogProvider,
  BlogAreaSectionCatalogProvider,
  ContactAreaSectionCatalogProvider,
} from ".";
import React from "react";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const HomeProvider: React.FunctionComponent<AppProps> = ({
  apiProps: {
    aboutAreaSection,
    latestWorkSection,
    testimonialSection,
    serviceAreaSection,
    teamAreaSection,
    blogAreaSection,

    contactAreaSection,
  },
}) => (
  <>
    <AboutAreaSectionCatalogProvider aboutAreaSection={aboutAreaSection} />
    <LatestWorkSectionCatalogProvider latestWorkSection={latestWorkSection} />
    <TestimonialAreaSectionCatalogProvider
      testimonialSection={testimonialSection}
    />
    <ServiceAreaSectionCatalogProvider
      serviceAreaSection={serviceAreaSection}
    />
    <BlogAreaSectionCatalogProvider blogAreaSection={blogAreaSection} />
    <ContactAreaSectionCatalogProvider
      contactAreaSection={contactAreaSection}
    />
  </>
);
