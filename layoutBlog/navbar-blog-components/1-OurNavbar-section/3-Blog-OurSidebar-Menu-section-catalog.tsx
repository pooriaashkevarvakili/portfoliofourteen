import { DataService } from "../../../service/data.service";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Carousel from "nuka-carousel";

import { OneCatalogData } from "../../../types/OneCatalogData";
// ------------------------------ ---------------------- --------

interface PassingProps {
  ourSideBarmenuBlog: OneCatalogData;

}

type AppProps = PassingProps & InferGetStaticPropsType<typeof getStaticProps>;

// ------------------------------ ---------------------- --------

export const BlogOurSliderNavbarCatalgTwo: React.FunctionComponent<AppProps> = ({

  ourSideBarmenuBlog,
}) => {


  return (
    <>
      <div className="banner-area">
            <div className="banner-bg">
              <div className="container">
                <div className="single-banner">
                  <h2
                    style={{
                      fontFamily: "IRANSansWeb",
                      direction: "rtl",
                      textAlign: "right",
                    }}
                  >
                    {ourSideBarmenuBlog.ShortDescription}
                  </h2>
                  <h5
                    style={{
                      fontFamily: "IRANSansWeb",
                      direction: "rtl",
                      textAlign: "right",
                    }}
                  >
                    {ourSideBarmenuBlog.LongDescription}
                  </h5>
                </div>
              </div>
            </div>
          </div>
      <style jsx>{`
        .banner-area {
          background-image: url(${ourSideBarmenuBlog.ContentAttachment[1] +
          "?width=1600&height=850"});
        }
      `}</style>
    </>
  );
};

// ---------------- -------------- ---------------- ------ --------

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
