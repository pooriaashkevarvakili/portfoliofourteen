import { GetStaticProps, InferGetStaticPropsType } from "next";
import { OneCatalogData } from "../../../types/OneCatalogData";
// ------------------------------ ---------------------- --------
import { FaTelegram } from "react-icons/fa";

import React from "react";
interface PassingProps {
  OurFooter: OneCatalogData;
  ourFooterAllRightCatalog: OneCatalogData;
}

type AppProps = PassingProps & InferGetStaticPropsType<typeof getStaticProps>;

// ------------------------------ ---------------------- --------

export const FooterSectionCatalog: React.FunctionComponent<AppProps> = ({
  OurFooter,
  ourFooterAllRightCatalog,
}) => {
  const {
    FirstHeader,
    ContentAttachment,
    SecondHeader,
    ShortDescription,
    LongDescription,
  } = ourFooterAllRightCatalog;

  return (
    <div className="footer-area">
      <div className="footer-bg">
        <div className="container">
          <div className="social-icons">
            <a href={LongDescription}>
              <i className="fa fa-whatsapp"></i>
            </a>
            <a href={ShortDescription}>
              <i>
                <FaTelegram style={{ marginLeft: -1 }} />
              </i>
            </a>
            <a href={SecondHeader}>
              <i className="fa fa-instagram"></i>
            </a>
          </div>
          <div className="copy-right">
            <p
              style={{
                fontFamily: "IRANSansWeb",
                direction: "rtl",
              }}
            >
              {FirstHeader}
            </p>
          </div>
          <div className="top-arrow">
            <i className="fa fa-angle-up"></i>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer-area {
          background-image: url(${ContentAttachment[0] +
          "?width=1920&height=250"});
        }
      `}</style>
    </div>
  );
};

// ---------------- -------------- ---------------- ------ --------

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
