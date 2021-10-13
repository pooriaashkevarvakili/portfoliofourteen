import { OneCatalogData } from "../../../../../types/OneCatalogData";
import Carousel from "nuka-carousel";
import { TestimonialCatalogItemThree } from "./4-Testimonial-Area-section-Catalog-Item3";
import { GetStaticProps } from "next";
import { TestimonialCatalogItemTwo } from "./3-Testimonial-Area-section-Catalog-Item2";
import React from "react";
import { TestimonialCatalogItemOne } from "./2-Testimonial-Area-section-Catalog-Item1";
// ------------------------------ ---------------------- --------
interface AppProps {
  testimonialCatalogItem: OneCatalogData;
  testimonialCatalogItemOne: OneCatalogData;
  testimonialCatalogItemTwo: OneCatalogData;
  testimonialCatalogItemThree: OneCatalogData;
}
export const TestimonialCatalogItem: React.FunctionComponent<AppProps> = ({
  testimonialCatalogItem,
  testimonialCatalogItemOne,
  testimonialCatalogItemTwo,
  testimonialCatalogItemThree,
}) => {
  const {
    ContentAttachment,
    FirstHeader,
    SecondHeader,
  } = testimonialCatalogItem;

  return (
    <>
      <Carousel
        autoplay={true}
        wrapAround={true}
        autoGenerateStyleTag={true}
        renderTopCenterControls={({ currentSlide }) => <div></div>}
        renderBottomCenterControls={({ currentSlide }) => <div>{false}</div>}
        renderCenterLeftControls={({ previousSlide }) => (
          <button
            style={{ display: "none" }}
            className="Prev PrevOne"
            onClick={previousSlide}
          >
            {SecondHeader}
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button
            style={{ display: "none" }}
            className="Next NextOne"
            onClick={nextSlide}
          >
            {FirstHeader}
          </button>
        )}
      >
        <div>
          <TestimonialCatalogItemOne
            testimonialCatalogItemOne={testimonialCatalogItemOne}
          />
        </div>
        <div>
          <TestimonialCatalogItemTwo
            testimonialCatalogItemTwo={testimonialCatalogItemTwo}
          />
        </div>
        <div>
          <TestimonialCatalogItemThree
            testimonialCatalogItemThree={testimonialCatalogItemThree}
          />
        </div>
      </Carousel>
      <style jsx>{`
        .testimonial-area {
          background-image: url(${ContentAttachment[0]});
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
