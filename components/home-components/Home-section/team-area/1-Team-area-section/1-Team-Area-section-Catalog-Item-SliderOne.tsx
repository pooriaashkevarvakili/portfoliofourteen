import { OneCatalogData } from "../../../../../types/OneCatalogData";

import { GetStaticProps } from "next";
import React from "react";
import Carousel from "nuka-carousel";
// ------------------------------ ---------------------- --------
interface AppProps {
  teamAreaCatalogItemSliderOne: OneCatalogData;
}
export const TeamAreaCatalogItemSliderOne: React.FunctionComponent<AppProps> = ({
  teamAreaCatalogItemSliderOne,
}) => {
  const { ContentAttachment } = teamAreaCatalogItemSliderOne;

  return (
    <>
    <div className="single-client">
						<div className="client-img">
                  <img src={ContentAttachment[0] +"?width=140&height=100"} alt="team" />
                  <img src={ContentAttachment[1]+"?width=140&height=100"} alt="team" />
                  <img src={ContentAttachment[2]+"?width=140&height=100"} alt="team" />
                  <img src={ContentAttachment[3]+"?width=140&height=100"} alt="team" />
                  <img src={ContentAttachment[4]+"?width=140&height=100"} alt="team"/>
						</div>
					</div>
    </>
  );
};
