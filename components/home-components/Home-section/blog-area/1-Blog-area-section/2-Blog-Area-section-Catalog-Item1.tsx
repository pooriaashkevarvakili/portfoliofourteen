import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { GetStaticProps } from "next";
import React from "react";
// ------------------------------ ---------------------- --------
interface AppProps {
  blogAreaCatalogItemOne: OneCatalogData;
}
export const BlogAreaCatalogItemOne: React.FunctionComponent<AppProps> = ({
  blogAreaCatalogItemOne,
}) => {
  const {
    FirstHeader,
    SecondHeader,
    ShortDescription,
    ContentAttachment,
    LongDescription,
  } = blogAreaCatalogItemOne;

  return (
    <div className="row">
      <div className="blog-details">
        <div className="col-md-5 col-md-offset-1">
          <div className="blog-meta">
            <h3
              style={{
                fontFamily: "IRANSansWeb",
                direction: "rtl",
                textAlign:"right"
              }}
            >
              <a
                style={{
                  fontFamily: "IRANSansWeb",
                  direction: "rtl",
                  textAlign:"right"
                }}
                href={LongDescription}
              >
                {SecondHeader}
              </a>
            </h3>
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
          <div className="blog-btn blog-btn2">
            <div className="hire-btn">
              <a
                href="/blog"
                style={{
                  fontFamily: "IRANSansWeb",
                  direction: "rtl",
                  marginLeft: 360,
                }}
              >
                {FirstHeader}
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="img-hover">
            <img
              src={ContentAttachment[0] + "?width=457.5&height=281.34"}
              alt="blog"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        @media screen and (max-width: 1000px) {
          .blog-btn2 {
            position: relative;
            left: -60px;
          }
        }
        @media screen and (max-width: 800px) {
          .blog-btn2 {
            display: flex;
            justify-content: flex-end;
          }
        }
        @media screen and (max-width: 600px) {
        }
      `}</style>
    </div>
  );
};
