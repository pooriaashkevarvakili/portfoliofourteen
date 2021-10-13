import { OneCatalogData } from "../../../types/OneCatalogData";
import Carousel from "nuka-carousel";
import { GetStaticProps } from "next";
import React from "react";
import Link from "next/link";
import slugify from "slugify";

// ------------------------------ ---------------------- --------
interface AppProps {
  blogTwoAreaCatalogItem: OneCatalogData;
}
export const BlogTwoAreaCatalogItem: React.FunctionComponent<AppProps> = ({
  blogTwoAreaCatalogItem,
}) => {
  const {
    FirstHeader,
    SecondHeader,
    ShortDescription,
    ContentAttachment,
    LongDescription,
    ChildFirstHeader,
    ChildSecondHeader,
    ChildShortDescription,
    ChildContentAttachment,
  } = blogTwoAreaCatalogItem;

  return (
    <>
      <div className="blog2-area" id="blog">
        <div className="blog2-bg">
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
            <div className="col-md-4">
              <div className="blogall-details">
                <div className="img-hover">
                  <img
                    src={ContentAttachment[0] + "?width=354&height=217"}
                    alt="blog"
                  />
                </div>
                <Link
                  href="/blog-post"
                  as={`/blog-post/${LongDescription.split(" ").join("-")}`}
                >
                  <a>
                    <h3
                      style={{
                        fontFamily: "IRANSansWeb",
                        direction: "rtl",
                        textAlign: "right",
                      }}
                    >
                      {SecondHeader}
                    </h3>
                  </a>
                </Link>
                <p
                  style={{
                    fontFamily: "IRANSansWeb",
                    direction: "rtl",
                    textAlign: "right",
                  }}
                >
                  {ShortDescription}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blogall-details">
                <div className="img-hover">
                  <img src={ChildContentAttachment[0]} alt="blog" />
                </div>
                <Link
                  href="/post"
                  as={`/post/${ChildShortDescription.split(" ").join("-")}`}
                >
                  <a>
                    <h3 style={{ direction: "rtl", textAlign: "right" }}>
                      {ChildFirstHeader}
                    </h3>
                  </a>
                </Link>
                <p style={{ direction: "rtl", textAlign: "right" }}>
                  {ChildSecondHeader}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-md-offset-3 text-center"></div>
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
