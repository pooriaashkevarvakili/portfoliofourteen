import { OneCatalogData } from "../../../../../types/OneCatalogData";

import { GetStaticProps } from "next";
import React from "react";
import Carousel from "nuka-carousel";
// ------------------------------ ---------------------- --------
interface AppProps {
  teamAreaCatalogItemSliderTwo: OneCatalogData;
}
export const TeamAreaCatalogItemSliderTwo: React.FunctionComponent<AppProps> = ({
  teamAreaCatalogItemSliderTwo,
}) => {
  const { ContentAttachment } = teamAreaCatalogItemSliderTwo;

  return (
    <>
         <div className="single-client">
						<div className="client-img">
                  <img src={ContentAttachment[0]+"?width=140&height=100"} alt="team" />
                  <img src={ContentAttachment[1]+"?width=140&height=100"} alt="team" />
          <img src={ContentAttachment[2]+"?width=140&height=100"}alt="team" />
                  <img src={ContentAttachment[3]+"?width=140&height=100"} alt="team" />
                  <img src={ContentAttachment[4]+"?width=140&height=100"} alt="team"/>
						</div>
					</div>
    </>
  );
};
