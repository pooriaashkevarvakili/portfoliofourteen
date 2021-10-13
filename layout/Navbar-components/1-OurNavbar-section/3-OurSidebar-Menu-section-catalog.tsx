import { DataService } from "../../../service/data.service";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { OneCatalogData } from "../../../types/OneCatalogData";
// ------------------------------ ---------------------- --------


interface PassingProps {
 
  ourSideBarmenu: OneCatalogData;
}

type AppProps = PassingProps & InferGetStaticPropsType<typeof getStaticProps>;

// ------------------------------ ---------------------- --------

export const OurNavbarSlideBannerMenuCatalogTwo: React.FunctionComponent<AppProps> = ({

  ourSideBarmenu,
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
                    {ourSideBarmenu.ShortDescription}
                  </h2>
                  <h5
                    style={{
                      fontFamily: "IRANSansWeb",
                      direction: "rtl",
                      textAlign: "right",
                    }}
                  >
                    {ourSideBarmenu.LongDescription}
                  </h5>
                </div>
              </div>
            </div>
      </div>
      <style jsx>{`
        .banner-area {
          background-image: url(${ourSideBarmenu.ContentAttachment[1] +
          "?width=1600&height=850"});
        }
      `}</style>
    </>

  )
}
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
