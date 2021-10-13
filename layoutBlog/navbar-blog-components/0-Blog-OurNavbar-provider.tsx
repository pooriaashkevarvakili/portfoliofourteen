import { BlogOurNavbarSectionProvider } from "./1-OurNavbar-section/0-Blog-OurNavbar-section-provider";
// -------------------------------------------
interface AppProps {
  navbarStrings: any;
  ourSideBarmenuBlog: any;
}
// -------------------------------------------
export const BlogOurNavbarProvider: React.FunctionComponent<AppProps> = ({
  navbarStrings,
  ourSideBarmenuBlog,
}) => {
  return (
    <>
      <BlogOurNavbarSectionProvider
        navbarStrings={navbarStrings}
        ourSideBarmenuBlog={  ourSideBarmenuBlog}
      />
    </>
  );
};
