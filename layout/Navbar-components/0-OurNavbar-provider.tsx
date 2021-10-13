import { OurNavbarSectionProvider } from "./1-OurNavbar-section/0-OurNavbar-section-provider";
// -------------------------------------------
interface AppProps {
  navbarStrings: any;
  ourSideBarmenu: any;
}
// -------------------------------------------
export const OurNavbarProvider: React.FunctionComponent<AppProps> = ({
  navbarStrings,
  ourSideBarmenu,
}) => {
  return (
    <>
      <OurNavbarSectionProvider
        ourSideBarmenu={ourSideBarmenu[0]}
        navbarStrings={navbarStrings}
      />
    </>
  );
};
