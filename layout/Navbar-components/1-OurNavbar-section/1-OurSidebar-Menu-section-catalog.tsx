import { DataService } from "../../../service/data.service";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { OneCatalogData } from "../../../types/OneCatalogData";
// ------------------------------ ---------------------- --------
import Carousel from "nuka-carousel";
import {OurNavbarSlideBannerMenuCatalogThree} from "./4-OurSidebar-Menu-section-catalog"
import {OurNavbarSlideBannerMenuCatalogTwo} from "./3-OurSidebar-Menu-section-catalog"
import { OurNavbarSlideBannerMenuCatalogOne } from "./2-OurSidebar-Menu-section-catalog"


interface PassingProps {
  navbarStrings: OneCatalogData;
  ourSideBarmenu: OneCatalogData;
}

type AppProps = PassingProps & InferGetStaticPropsType<typeof getStaticProps>;

// ------------------------------ ---------------------- --------

export const OurNavbarCatalog: React.FunctionComponent<AppProps> = ({
  navbarStrings,
  ourSideBarmenu,
}) => {
  const {
    FirstHeader,
    SecondHeader,
    ShortDescription,
    LongDescription,
    ChildFirstHeader,
    ChildSecondHeader,
    ChildShortDescription,
    ChildLongDescription,
    ContentAttachment,
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
                    href="#about"
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
                    href="#portfolio"
                  >
                    {ShortDescription}
                  </a>
                </li>
                <li>
                  <a
                    style={{
                      fontFamily: "IRANSansWeb",
                      direction: "rtl",
                      textAlign: "right",
                    }}
                    href="#service"
                  >
                    {LongDescription}
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
                    {ChildSecondHeader}
                  </a>
                </li>
                <li>
                  <a
                    style={{
                      fontFamily: "IRANSansWeb",
                      direction: "rtl",
                      textAlign: "right",
                    }}
                    href="#contact"
                  >
                    {ChildShortDescription}
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
          <OurNavbarSlideBannerMenuCatalogOne
          ourSideBarmenu={ourSideBarmenu}
          />
        </div>
        <div>
        <OurNavbarSlideBannerMenuCatalogTwo
          ourSideBarmenu={ourSideBarmenu}
          />
        </div>
        <div>
        <OurNavbarSlideBannerMenuCatalogThree
          ourSideBarmenu={ourSideBarmenu}
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
