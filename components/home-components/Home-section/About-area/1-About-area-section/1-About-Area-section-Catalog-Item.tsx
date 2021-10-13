import { OneCatalogData } from "../../../../../types/OneCatalogData";

import { GetStaticProps } from "next";
import React from "react";
// ------------------------------ ---------------------- --------
interface AppProps {
  aboutAreaItem: OneCatalogData;
}
export const AboutAreaCatalogItem: React.FunctionComponent<AppProps> = ({
  aboutAreaItem,
}) => {
  const {
    FirstHeader,
    SecondHeader,
    ContentAttachment,
    ShortDescription,
    LongDescription,
    ChildFirstHeader,
  } = aboutAreaItem;

  return (
    <>
      <div className="about-area" id="about">
        <div className="about-bg">
          <div className="container">
            <div className="title text-center">
              <h2
                style={{
                  fontFamily: "IRANSansWeb",
                  direction: "rtl",
                }}
              >
                {FirstHeader}
              </h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="img-hover">
                  <img
                    src={ContentAttachment[0] + "?width=470&height=549"}
                    alt="about"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-details">
                  <h3
                    style={{
                      fontFamily: "IRANSansWeb",
                      direction: "rtl",
                      textAlign:"right"
                    }}
                  >
                    {SecondHeader}
                  </h3>
                  <div className="about-para">
                    <p
                      style={{
                        fontFamily: "IRANSansWeb",
                        direction: "rtl",
                        textAlign:"right"
                      }}
                    >
                      {ShortDescription}
                    </p>
                  </div>
                  <div className="para-other">
                    <p
                      style={{
                        fontFamily: "IRANSansWeb",
                        direction: "rtl",
                        textAlign:"right"
                      }}
                    >
                      {LongDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
