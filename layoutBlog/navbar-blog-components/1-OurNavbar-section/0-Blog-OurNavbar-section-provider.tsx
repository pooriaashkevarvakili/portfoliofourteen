import React from "react";
import { OneCatalogData } from "../../../types/OneCatalogData";
import { BlogOurNavbarCatalog } from "./1-Blog-OurSidebar-Menu-section-catalog";
// ------------------------------ ---------------------- -------
interface AppProps {
  navbarStrings: any;
  ourSideBarmenuBlog: any;
}

export const BlogOurNavbarSectionProvider: React.FunctionComponent<AppProps> = ({
  navbarStrings,
  ourSideBarmenuBlog,
}) => {
  // ------------------------------ ---------------------------------------------

  // ------------------------------ ---------------------------------------------
  return (
    <>
      <BlogOurNavbarCatalog
        navbarStrings={navbarStrings[0]}
        ourSideBarmenuBlog={ourSideBarmenuBlog[0]}
      />
    </>
  );
};
