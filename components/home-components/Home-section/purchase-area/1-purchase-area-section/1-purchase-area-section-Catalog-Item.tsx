import { OneCatalogData } from "../../../../../types/OneCatalogData";

import { GetStaticProps } from "next";

import React from "react";
// ------------------------------ ---------------------- --------
interface AppProps {
  purchaseAreaCatalogItem: OneCatalogData;
}
export const PurchaseAreaSectionCatalogItem: React.FunctionComponent<AppProps> = ({
  purchaseAreaCatalogItem,
}) => {
  const {
    FirstHeader,
    SecondHeader,
    ShortDescription,
    ContentAttachment,
  } = purchaseAreaCatalogItem;
  return (
    <>
      <div className="purchase-area">
        <div className="purchase-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 text-center">
                <h3>{SecondHeader}</h3>
                <p>{ShortDescription}</p>
                <div className="purchase-btn">
                  <a href="#">{FirstHeader}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .purchase-area {
            background-image: url(${ContentAttachment[0]});
          }
        `}</style>
      </div>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
