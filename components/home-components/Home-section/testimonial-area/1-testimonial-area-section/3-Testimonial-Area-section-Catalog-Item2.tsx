import { OneCatalogData } from "../../../../../types/OneCatalogData";

import { GetStaticProps } from "next";
import React from "react";

// ------------------------------ ---------------------- --------
interface AppProps {
  testimonialCatalogItemTwo: OneCatalogData;
}
export const TestimonialCatalogItemTwo: React.FunctionComponent<AppProps> = ({
  testimonialCatalogItemTwo,
}) => {
  const {
    ContentAttachment,
    FirstHeader,
    SecondHeader,
    ShortDescription,
  } = testimonialCatalogItemTwo;

  return (
    <>
      <div className="testimonial-area">
        <div className="testimonial-bg">
          <div className="container">
            <div className="single-testimonial">
              <div className="testimonial-details text-center">
                <div className="testimonial-img2"></div>
                <p
                  style={{
                    fontFamily: "IRANSansWeb",
                    direction: "rtl",
                  }}
                  className="bold"
                >
                  {FirstHeader}
                </p>
                <p
                  style={{
                    fontFamily: "IRANSansWeb",
                    direction: "rtl",
                  }}
                  className="light"
                >
                  {SecondHeader}
                </p>
                <p
                  style={{
                    fontFamily: "IRANSansWeb",
                    direction: "rtl",
                  }}
                  className="testimonial-text"
                >
                  {ShortDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonial-area {
            background-image: url(${ContentAttachment[0] +
            "?width=1920&height=1200"});
          }
          .testimonial-img2 {
            background-image: url(${ContentAttachment[1] +
            "?width=150&height=150"});
          }
          @media screen and (max-width: 300px) {
          .testimonial-text{
            font-size:0.7rem;
            text-align:right;
          }
        }
        @media screen and (max-width: 250px) {
          .testimonial-text{
            font-size:0.2rem;
            text-align:right;
          }
        }
        @media screen and (max-width: 200px) {
          .testimonial-text{
           display:none;
          }
        }
        `}
      </style>
    </>
  );
};
