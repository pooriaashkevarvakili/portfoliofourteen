import { DataService } from "../../../service/data.service";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Carousel from "nuka-carousel";
import { BlogOurSliderNavbarCatalgTwo } from "./3-Blog-OurSidebar-Menu-section-catalog"
import {BlogOurSliderNavbarCatalgThree} from "./4-Blog-OurSidebar-Menu-section-catalog"
import {BlogOurSliderNavbarCatalogOne} from "./2-Blog-OurSidebar-Menu-section-catalog"
import { OneCatalogData } from "../../../types/OneCatalogData";
// ------------------------------ ---------------------- --------

interface PassingProps {
  ourSideBarmenuBlog: OneCatalogData;
  navbarStrings: OneCatalogData;
}

type AppProps = PassingProps & InferGetStaticPropsType<typeof getStaticProps>;

// ------------------------------ ---------------------- --------

export const BlogOurNavbarCatalog: React.FunctionComponent<AppProps> = ({
  navbarStrings,
  ourSideBarmenuBlog,
}) => {
  const {
    FirstHeader,
    SecondHeader,
    ShortDescription,
    ContentAttachment,
    LongDescription,
  } = navbarStrings;

  return (
    <>
      <div className="header-top">
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">
                <img
                  src={ContentAttachment[0] + "?width=150.39&height=60.78"}
                  alt="logo"
                />
              </a>
            </div>
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a
                    style={{
                      fontFamily: "IRANSansWeb",
                      direction: "rtl",
                      textAlign: "right",
                    }}
                    href="#"
                  >
                    {FirstHeader}
                  </a>
                </li>

                <li>
                  <a
                    style={{
                      fontFamily: "IRANSansWeb",
                      direction: "rtl",
                      textAlign: "right",
                    }}
                    href="#blog"
                  >
                    {SecondHeader}
                  </a>
                </li>
                <li>
                  <a
                    style={{
                      fontFamily: "IRANSansWeb",
                      direction: "rtl",
                      textAlign: "right",
                    }}
                    href="/"
                  >
                    {ShortDescription}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Carousel
        autoplay={true}
        autoGenerateStyleTag={true}
        dragging={true}
        wrapAround={true}
        renderTopCenterControls={({ currentSlide }) => <div></div>}
        renderBottomCenterControls={({ currentSlide }) => <div>{false}</div>}
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
      >
        <div>
          <BlogOurSliderNavbarCatalogOne
          ourSideBarmenuBlog={ourSideBarmenuBlog}
          />
        </div>
        <div>
        <BlogOurSliderNavbarCatalgTwo
            ourSideBarmenuBlog={ourSideBarmenuBlog}
            />
        </div>
        <div>
        <BlogOurSliderNavbarCatalgThree
            ourSideBarmenuBlog={ourSideBarmenuBlog}
            />
        </div>
      </Carousel>

    </>
  );
};

// ---------------- -------------- ---------------- ------ --------

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
