import React from "react";
import Head from "next/head";
// ---------------------------------------------------------------------
import Layout from "../layout/Layout";
import { HomeProvider } from "./../components/home-components/0-HomeProvider";
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
const Index: React.FunctionComponent<AppProps> = ({
  tagsAndSeo: {
    homePage: { Name, Description, Keywords, PageTitle },
  },
  OurFooter,
  navbarStrings: { navbarStrings },
  ourSideBarmenu: { ourSideBarmenu },
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
        ourSideBarmenu={ourSideBarmenu}
        OurFooter={OurFooter}
        navbarStrings={navbarStrings}
        titleName={PageTitle}
      >
        <HomeProvider apiProps={data} />
      </Layout>
    </>
  );
};

export default Index;

// ------------------------------ ---------------------- --------

export const getStaticProps: GetStaticProps = async () => {
  // for make sure data is available
  await DataService.getCatalogData();
  return {
    props: {
      ourSideBarmenu: {
        ourSideBarmenu: await DataService.filterCatalogDataBySectionField(
          "2-OurSidebar-Menu-section-catalog") 
      },
      navbarStrings: {
        navbarStrings: await DataService.filterCatalogDataBySectionField(
          "1-OurSidebar-Menu-section-catalog"
        ),
        ourNavbarCatalogOne: await DataService.filterCatalogDataBySectionField(
          "2-OurSidebar-Menu-section-catalog"
        ),
      },
      OurFooter: {
        ourFooterAllRightCatalog: await DataService.filterCatalogDataBySectionField(
          "1-OurFooter-AllRight-catalog"
        ),
      },
      tagsAndSeo: {
        homePage: await DataService.getCurrentPageForCatchSEOTags("home"),
      },
      data: {
        bannerAreaSection: {
          bannerAreaItem: await DataService.filterCatalogDataBySectionField(
            "1-Banner-Area-section-Catalog-Item"
          ),
          bannerAreaCatalogItemOne: await DataService.filterCatalogDataBySectionField(
            "2-Banner-Area-section-Catalog-Item"
          ),
          bannerAreaCatalogItemTwo: await DataService.filterCatalogDataBySectionField(
            "3-Banner-Area-section-Catalog-Item"
          ),
          bannerAreaCatalogItemThree: await DataService.filterCatalogDataBySectionField(
            "4-Banner-Area-section-Catalog-Item"
          ),
        },
        aboutAreaSection: {
          aboutAreaItem: await DataService.filterCatalogDataBySectionField(
            "1-About-Area-section-Catalog-Item"
          ),
        },
        latestWorkSection: {
          latestWorkCatalogHeader: await DataService.filterCatalogDataBySectionField(
            "1-Latest-Work-section-Catalog-Header"
          ),
          latestWorkCatalogPictureOne: await DataService.filterCatalogDataBySectionField(
            "1-Latest-Work-section-Catalog-WithPicture"
          ),
          latestWorkCatalogPictureTwo: await DataService.filterCatalogDataBySectionField(
            "2-Latest-Work-section-Catalog-WithPicture"
          ),
          latestWorkCatalogPictureThree: await DataService.filterCatalogDataBySectionField(
            "3-Latest-Work-section-Catalog-WithPicture"
          ),
          latestWorkCatalogPictureFour: await DataService.filterCatalogDataBySectionField(
            "4-Latest-Work-section-Catalog-WithPicture"
          ),
          latestWorkCatalogPictureFive: await DataService.filterCatalogDataBySectionField(
            "5-Latest-Work-section-Catalog-WithPicture"
          ),
          latestWorkCatalogPictureSix: await DataService.filterCatalogDataBySectionField(
            "6-Latest-Work-section-Catalog-WithPicture"
          ),
        },
        testimonialSection: {
          testimonialCatalogItem: await DataService.filterCatalogDataBySectionField(
            "1-Testimonial-Area-section-Catalog-Item"
          ),
          testimonialCatalogItemOne: await DataService.filterCatalogDataBySectionField(
            "2-Testimonial-Area-section-Catalog-Item"
          ),
          testimonialCatalogItemTwo: await DataService.filterCatalogDataBySectionField(
            "3-Testimonial-Area-section-Catalog-Item"
          ),
          testimonialCatalogItemThree: await DataService.filterCatalogDataBySectionField(
            "4-Testimonial-Area-section-Catalog-Item"
          ),
        },
        serviceAreaSection: {
          serviceAreaItem: await DataService.filterCatalogDataBySectionField(
            "1-Service-Area-section-Catalog-Item"
          ),
          serviceAreaHeader: await DataService.filterCatalogDataBySectionField(
            "1-Service-Area-section-Catalog-Header"
          ),
        },
        teamAreaSection: {
          teamAreaCatalogItem: await DataService.filterCatalogDataBySectionField(
            "3-Team-Area-section-Catalog-Item"
          ),
          teamAreaCatalogHeader: await DataService.filterCatalogDataBySectionField(
            "1-Team-Area-section-Catalog-Header"
          ),
          teamAreaCatalogItemSliderOne: await DataService.filterCatalogDataBySectionField(
            "1-Team-Area-section-Catalog-Item-Slider-One"
          ),
          teamAreaCatalogItemSliderTwo: await DataService.filterCatalogDataBySectionField(
            "1-Team-Area-section-Catalog-Item-Slider-One"
          ),
        },
        blogAreaSection: {
          blogAreaItem: await DataService.filterCatalogDataBySectionField(
            "1-Service-Area-section-Catalog-Item"
          ),
          blogAreaItemHeader: await DataService.filterCatalogDataBySectionField(
            "1-Blog-Area-section-Catalog-Heder"
          ),
          blogAreaCatalogItemOne: await DataService.filterCatalogDataBySectionField(
            "1-Blog-Area-section-Catalog-Item"
          ),
          blogAreaCatalogItemTwo: await DataService.filterCatalogDataBySectionField(
            "2-Blog-Area-section-Catalog-Item"
          ),
        },
        purchaseSection: {
          purchaseAreaCatalogItem: await DataService.filterCatalogDataBySectionField(
            "1-purchase-area-section-Catalog-Item"
          ),
        },
        contactAreaSection: {
          contactAreaItem: await DataService.filterCatalogDataBySectionField(
            "1-Contact-Area-section-Catalog-Item"
          ),
        },
      },
    },
  };
};
