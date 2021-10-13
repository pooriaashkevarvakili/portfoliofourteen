import { OneCatalogData } from "../../../../../types/OneCatalogData";
import { useSubmitHook } from "../../../../../hooks/useSubmitHook";
import { GetStaticProps } from "next";
import React from "react";
// ------------------------------ ---------------------- --------
interface AppProps {
  contactAreaItem: OneCatalogData;
}
export const ContactAreaCatalogItem: React.FunctionComponent<AppProps> = ({
  contactAreaItem,
}) => {
  const { onSubmit, myRef, handleChange } = useSubmitHook();
  const {
    FirstHeader,
    SecondHeader,
    ShortDescription,
    LongDescription,
    ChildFirstHeader,
    ChildSecondHeader,
  } = contactAreaItem;

  return (
    <>
      <div className="contact-area" id="contact">
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
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center">
              <div className="contact-form-box">
                <form onSubmit={onSubmit} ref={myRef} className="contact-form">
                  <div className="form-group">
                    <input
                      style={{
                        fontFamily: "IRANSansWeb",
                        direction: "rtl",
                      }}
                      onChange={handleChange}
                      type="text"
                      name="Name"
                      className="form-control"
                      placeholder={SecondHeader}
                      data-error="First name is required."
                    />
                  </div>
                  <div className="form-group">
                    <input
                      style={{
                        fontFamily: "IRANSansWeb",
                        direction: "rtl",
                      }}
                      type="email"
                      name="Email"
                      className="form-control"
                      onChange={handleChange}
                      placeholder={ShortDescription}
                      data-error="First name is required."
                    />
                  </div>
                  <div className="form-group">
                    <input
                      style={{
                        fontFamily: "IRANSansWeb",
                        direction: "rtl",
                      }}
                      type="tel"
                      name="Phone"
                      onChange={handleChange}
                      className="form-control"
                      placeholder={LongDescription}
                      data-error="First name is required."
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      style={{
                        fontFamily: "IRANSansWeb",
                        direction: "rtl",
                      }}
                      onChange={handleChange}
                      name="Message"
                      className="form-control"
                      placeholder={ChildFirstHeader}
                      data-error="First name is required."
                    ></textarea>
                  </div>
                  <div className="purchase2-btn">
                    <button
                      style={{
                        fontFamily: "IRANSansWeb",
                        direction: "rtl",
                      }}
                      type="submit"
                      id="submit"
                      className="button"
                    >
                      {ChildSecondHeader}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .button {
            text-decoration: none;
            color: #343536;
            text-transform: uppercase;
            border: 1px solid rgba(52, 53, 54, 0.45);
            padding: 10px 25px;
            font-weight: 700;
            font-size: 11px;
            font-family: "Montserrat", sans-serif;
            letter-spacing: 1px;
          }
          .button:hover {
            background: #343536;
            color: #fff;
          }
        `}
      </style>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
