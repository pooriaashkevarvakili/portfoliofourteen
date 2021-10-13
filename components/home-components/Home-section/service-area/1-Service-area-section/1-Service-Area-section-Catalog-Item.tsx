import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { ServiceAreaCatalogHeader } from "./1-Service-Area-section-Catalog-Header";
import { GetStaticProps } from "next";
import React from "react";
// ------------------------------ ---------------------- --------
interface AppProps {
  serviceAreaItem: OneCatalogData;
  serviceAreaHeader: OneCatalogData;
}
export const ServiceAreaCatalogItem: React.FunctionComponent<AppProps> = ({
  serviceAreaItem,
  serviceAreaHeader,
}) => {
  const {
    FirstHeader,
    SecondHeader,
    ContentAttachment,
    ShortDescription,
    LongDescription,
    ChildFirstHeader,
    ChildSecondHeader,
    ChildShortDescription,
    ChildLongDescription,
  } = serviceAreaItem;

  return (
    <>
      <div className="service-area" id="service">
        <div className="service-bg">
          <div className="container">
            <ServiceAreaCatalogHeader serviceAreaHeader={serviceAreaHeader} />
            <div className="row">
              <div className="service-details">
                <div className="col-md-6">
                  <div className="img-hover">
                    <img
                      src={ContentAttachment[0] + "?width=555&height=529.83"}
                      alt="service"
                    />
                  </div>
                </div>
                <div className="service-text">
                  <div className="col-md-3">
                    <div className="service">
                      <h3
                         style={{ fontFamily: "IRANSansWeb", direction: "rtl",textAlign:"right" }}
                        className="text-uppercase">{FirstHeader}</h3>
                      <p
                        style={{ fontFamily: "IRANSansWeb", direction: "rtl",textAlign:"right" }}
                      >
                        {ShortDescription}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="service">
                      <h3
                         style={{ fontFamily: "IRANSansWeb", direction: "rtl",textAlign:"right" }}
                        className="text-uppercase">{SecondHeader}</h3>
                      <p
                        style={{ fontFamily: "IRANSansWeb", direction: "rtl",textAlign:"right" }}
                      >
                        {LongDescription}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="service">
                      <h3
                         style={{ fontFamily: "IRANSansWeb", direction: "rtl",textAlign:"right" }}
                        className="text-uppercase">
                        {ChildShortDescription}
                      </h3>
                      <p
                        style={{ fontFamily: "IRANSansWeb", direction: "rtl",textAlign:"right" }}
                      >
                        {ChildFirstHeader}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="service">
                      <h3
                         style={{ fontFamily: "IRANSansWeb", direction: "rtl",textAlign:"right" }}
                        className="text-uppercase">{ChildLongDescription}</h3>
                      <p
                        style={{ fontFamily: "IRANSansWeb", direction: "rtl",textAlign:"right" }}
                      >
                        {ChildSecondHeader}
                      </p>
                    </div>
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
