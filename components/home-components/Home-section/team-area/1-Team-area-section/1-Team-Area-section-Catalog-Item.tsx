import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { TeamAreaCatalogItemSliderOne } from "./1-Team-Area-section-Catalog-Item-SliderOne";
import { GetStaticProps } from "next";
import React from "react";
import Carousel from "nuka-carousel";
import { TeamAreaCatalogItemSliderTwo } from "./2-Team-Area-section-Catalog-Item-SliderTwo";
import { TeamAreaCatalogHeader } from "./1-Team-Area-section-Catalog-Header";
// ------------------------------ ---------------------- --------
interface AppProps {
  teamAreaCatalogItem: OneCatalogData;
  teamAreaCatalogItemThree: OneCatalogData;
  teamAreaCatalogHeader: OneCatalogData;
  teamAreaCatalogItemSliderOne: OneCatalogData;
  teamAreaCatalogItemSliderTwo: OneCatalogData;
}
export const TeamAreaCatalogItem: React.FunctionComponent<AppProps> = ({
  teamAreaCatalogItem,
  teamAreaCatalogHeader,
  teamAreaCatalogItemSliderOne,
  teamAreaCatalogItemThree,
  teamAreaCatalogItemSliderTwo,
}) => {
  const { ContentAttachment } = teamAreaCatalogItem;

  return (
    <>
     
      <Carousel
        autoplay={true}
        wrapAround={true}
        autoGenerateStyleTag={true}

        renderTopCenterControls={({ currentSlide }) => <div></div>}
        renderCenterLeftControls={({ previousSlide }) => (
          <button style={{ display: "none" }} onClick={previousSlide}>
            Previous
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button style={{ display: "none" }} onClick={nextSlide}>
            Next
          </button>
        )}
        renderBottomCenterControls={({ currentSlide }) => <div>{false}</div>}
      >
        <div>
     	<div className="team-area" id="team">
		<div className="team-bg">
            <div className="container">
                <TeamAreaCatalogHeader
                teamAreaCatalogHeader={teamAreaCatalogHeader}
                />
                <TeamAreaCatalogItemSliderOne
                teamAreaCatalogItemSliderOne={teamAreaCatalogItemSliderOne}
                />
            </div>
          </div>
          </div>
        </div>
        <div>
     	<div className="team-area" id="team">
		<div className="team-bg">
            <div className="container">
            <TeamAreaCatalogHeader
                teamAreaCatalogHeader={teamAreaCatalogHeader}
                />
                <TeamAreaCatalogItemSliderTwo
                teamAreaCatalogItemSliderTwo={teamAreaCatalogItemSliderTwo}
                />
            </div>
          </div>
          </div>
          </div>
      </Carousel>
      <style jsx>{`
        .team-area {
          background-image: url(${ContentAttachment[0] +
          "?width=500&height=333"});
        }
      `}</style>
       
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
