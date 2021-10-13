import React from "react";
import Head from "next/head";
// ---------------------------------------------------------------------
import Layout from "../layoutBlog/Layout";
import { BlogTwoAreaProvider } from "../components/blog-component/0-Blog-area-provider";
import { DataService } from "../service/data.service";
import { OneSEOTagData } from "../types/OneSEOTagData";
import { InferGetStaticPropsType, GetStaticProps, NextPage } from "next";
import { PageNames } from "../constants/PageNames.enum";
import { OneCatalogData } from "../types/OneCatalogData";

// ---------------------------------------------------------------------

// export const config = { amp: true };
// ------------------------------ ---------------------- --------

interface PassingProps {}

type AppProps = NextPage &
  PassingProps &
  InferGetStaticPropsType<typeof getStaticProps>;

// ---------------------------------------------------------------------
const Blog: React.FunctionComponent<AppProps> = ({
  tagsAndSeo: {
    blogPage: { Name, Description, Keywords, PageTitle },
  },
  OurFooter,
  navbarStrings: { navbarStrings },
  ourSideBarmenuBlog: {   ourSideBarmenuBlog },
  data,
}) => {
  return (
    <>
      <Head>
        <head>
          <meta name="text" content={Name} />
          <meta name="description" content={Description} />
          <meta name="keywords" content={Keywords} />
        </head>
      </Head>
      <Layout
        OurFooter={OurFooter}
        navbarStrings={navbarStrings}
        titleName={PageTitle}
        ourSideBarmenuBlog={  ourSideBarmenuBlog}
      >
        <BlogTwoAreaProvider apiProps={data} />
      </Layout>
    </>
  );
};

export default Blog;

// ------------------------------ ---------------------- --------

export const getStaticProps: GetStaticProps = async () => {
  // for make sure data is available
  await DataService.getCatalogData();
  return {
    props: {
      ourSideBarmenuBlog:{  ourSideBarmenuBlog:await DataService.filterCatalogDataBySectionField(
        "2-Blog-OurSidebar-Menu-section-catalog")},
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
        blogPage: await DataService.getCurrentPageForCatchSEOTags("blog"),
      },
      data: {
        blogBannerAreaTwoSection: {
          bannerAreaItem: await DataService.filterCatalogDataBySectionField(
            "1-Banner-Area-section-Catalog-Item"
          ),
          blogBannerAreaCatalogItemOne: await DataService.filterCatalogDataBySectionField(
            "1-BlogTwo-Banner-Area-section-Catalog-Item"
          ),
          blogBannerAreaCatalogItemTwo: await DataService.filterCatalogDataBySectionField(
            "2-BlogTwo-Banner-Area-section-Catalog-Item"
          ),
          blogBannerAreaCatalogItemThree: await DataService.filterCatalogDataBySectionField(
            "3-BlogTwo-Banner-Area-section-Catalog-Item"
          ),
        },
        blogAreaTwoSection: {
          blogTwoAreaCatalogItemOne: await DataService.filterCatalogDataBySectionField(
            "1-blogTwo-area-section-Catalog-item"
          ),

          blogTwoAreaCatalogItem: await DataService.filterCatalogDataBySectionField(
            "4-blogTwo-area-section-Catalog-item"
          ),
        },
      },
    },
  };
};
