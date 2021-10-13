import Head from "next/head";
import { InferGetStaticPropsType, GetStaticProps } from "next";
import { NextPage } from "next";
import { GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import slugify from "slugify";
import Layout from "./../../layoutBlog/Layout";
import { DataService } from "./../../service/data.service";
import { OneCatalogData } from "./../../types/OneCatalogData";
// ------------------------------ ---------------------- --------

// ------------------------------ ---------------------- --------

interface PassingProps {
  apiProps: any;
}

type AppProps = NextPage &
  PassingProps &
  InferGetStaticPropsType<typeof getStaticProps>;

// ---------------------------------------------------------------------
const sl: React.FunctionComponent<AppProps> = ({
  tagsAndSeo,
  OurFooter,

  data,
  navbarStrings: { navbarStrings },
  ourSideBarmenuBlog: { ourSideBarmenuBlog },
}) => {

  if (!data) {
    return (
      <>
        <div>loading ...</div>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <head>
            <meta name="text" content={tagsAndSeo!.postPage.Name} />
            <meta
              name="description"
              content={tagsAndSeo!.postPage.Description}
            />
            <meta name="keywords" content={tagsAndSeo!.postPage.Keywords} />
            <meta name="viewport" content="sfsdfsdl" />
          </head>
        </Head>
        <Layout
          OurFooter={OurFooter}
          navbarStrings={navbarStrings}
          ourSideBarmenuBlog={ourSideBarmenuBlog}
          titleName={tagsAndSeo!.postPage.PageTitle}
        >
          <div className="blog2-area" id="blog">
            <div className="blog2-bg">
              <div className="container">
                <div className="title text-center"></div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                  }}
                >
                  <div className="blogall-details">
                    <div className="img-hover">
                      <img
                        src={
                          data.ChildContentAttachment[0] +
                          "?width=961&height=591"
                        }
                        alt="blog"
                      />
                    </div>
                  </div>
                </div>
                <h5
                  style={{
                    fontFamily: "IRANSansWeb",
                    direction: "rtl",
                    textAlign: "right",
                  }}
                >
                  {data.ChildFirstHeader}
                </h5>
                <h3
                  style={{
                    fontFamily: "IRANSansWeb",
                    direction: "rtl",
                    textAlign: "right",
                  }}
                >
                  {data.ChildSecondHeader}
                </h3>
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
  }
};

export const getStaticPaths: GetStaticPaths<ParsedUrlQuery> = async () => {
  // ...
  const data = await DataService.filterCatalogDataBySectionField(
    "4-blogTwo-area-section-Catalog-item"
  );

  const paths = data.map(
    (item: OneCatalogData) =>
      `/post/${item.ChildShortDescription.split(" ").join("-")}`
  );

  return {
    paths,
    fallback: false,
  };
};
// ------------------------------ ---------------------- --------

export const getStaticProps: GetStaticProps = async ({ params }) => {
  await DataService.getCatalogData();

  const blogTwoAreaCatalogItem = await DataService.filterCatalogDataBySectionField(
    "4-blogTwo-area-section-Catalog-item"
  );

  let infoForUseInThisPageBaseOnId = blogTwoAreaCatalogItem.filter(
    (item: OneCatalogData) =>
      item.ChildShortDescription.split(" ").join("-") === params!.id
  );

  return {
    props: {
      ourSideBarmenuBlog: {
        ourSideBarmenuBlog: await DataService.filterCatalogDataBySectionField(
          "2-Blog-OurSidebar-Menu-section-catalog"
        ),
      },
      navbarStrings: {
        navbarStrings: await DataService.filterCatalogDataBySectionField(
          "1-Blog-OurSidebar-Menu-section-catalog"
        ),
      },
      OurFooter: {
        ourFooterAllRightCatalog: await DataService.filterCatalogDataBySectionField(
          "1-OurFooter-AllRight-catalog"
        ),
      },
      tagsAndSeo: {
        postPage: await DataService.getCurrentPageForCatchSEOTags("post"),
      },
      data: infoForUseInThisPageBaseOnId[0],
    },
  };
};

// ------------------------------ ---------------------- --------

export default sl;
