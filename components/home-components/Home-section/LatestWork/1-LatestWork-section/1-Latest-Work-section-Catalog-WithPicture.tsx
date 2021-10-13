import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { LatestWorkCatalogHeader } from "./1-Latest-Work-section-Catalog-Header";
import { GetStaticProps } from "next";
import { LatestWorkCatalogPictureFour } from "./5-Latest-Work-section-Catalog-WithPicture4";
import { LatestWorkCatalogPictureThree } from "./4-Latest-Work-section-Catalog-WithPicture3";
import { LatestWorkCatalogPictureTwo } from "./3-Latest-Work-section-Catalog-WithPicture2";
import React from "react";
import { LatestWorkCatalogPictureSix } from "./7-Latest-Work-section-Catalog-WithPicture6";
import { LatestWorkCatalogPictureFive } from "./6-Latest-Work-section-Catalog-WithPicture5";
import { LatestWorkCatalogPictureOne } from "./2-Latest-Work-section-Catalog-WithPicture1";
// ------------------------------ ---------------------- --------
interface AppProps {
  latestWorkCatalogPictureFour: OneCatalogData;
  latestWorkCatalogPictureSix: OneCatalogData;
  latestWorkCatalogPictureThree: OneCatalogData;
  latestWorkCatalogPictureTwo: OneCatalogData;
  latestWorkCatalogPictureOne: OneCatalogData;
  latestWorkCatalogHeader: OneCatalogData;
  latestWorkCatalogPictureFive: OneCatalogData;
}
export const LatestWorkCatalogWithPicture: React.FunctionComponent<AppProps> = ({
  latestWorkCatalogPictureFour,
  latestWorkCatalogHeader,
  latestWorkCatalogPictureOne,
  latestWorkCatalogPictureTwo,
  latestWorkCatalogPictureThree,
  latestWorkCatalogPictureFive,
  latestWorkCatalogPictureSix,
}) => {
  return (
    <>
      <div className="latest-work" id="portfolio">
        <div className="latest-bg">
          <div className="container">
            <LatestWorkCatalogHeader
              latestWorkCatalogHeader={latestWorkCatalogHeader}
            />
            <div className="row">
              <LatestWorkCatalogPictureOne
                latestWorkCatalogPictureOne={latestWorkCatalogPictureOne}
              />
              <LatestWorkCatalogPictureTwo
                latestWorkCatalogPictureTwo={latestWorkCatalogPictureTwo}
              />
              <LatestWorkCatalogPictureThree
                latestWorkCatalogPictureThree={latestWorkCatalogPictureThree}
              />
              <LatestWorkCatalogPictureFour
                latestWorkCatalogPictureFour={latestWorkCatalogPictureFour}
              />
              <LatestWorkCatalogPictureFive
                latestWorkCatalogPictureFive={latestWorkCatalogPictureFive}
              />
              <LatestWorkCatalogPictureSix
                latestWorkCatalogPictureSix={latestWorkCatalogPictureSix}
              />
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
