import { DataService } from "../../../service/data.service";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { OneCatalogData } from "../../../types/OneCatalogData";
// ------------------------------ ---------------------- --------


interface PassingProps {
 
  ourSideBarmenu: OneCatalogData;
}

type AppProps = PassingProps & InferGetStaticPropsType<typeof getStaticProps>;

// ------------------------------ ---------------------- --------

export const OurNavbarSlideBannerMenuCatalogOne: React.FunctionComponent<AppProps> = ({

  ourSideBarmenu,
}) => {
  console.log(ourSideBarmenu)
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
        {ourSideBarmenu.FirstHeader}
      </h2>
      <h5
        style={{
          fontFamily: "IRANSansWeb",
          direction: "rtl",
          textAlign: "right",
        }}
      >
        {ourSideBarmenu.SecondHeader}
      </h5>
    </div>
  </div>
</div>
      </div>
      <style jsx>{`
        .banner-area {
          background-image: url(${ourSideBarmenu.ContentAttachment[0] +
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
