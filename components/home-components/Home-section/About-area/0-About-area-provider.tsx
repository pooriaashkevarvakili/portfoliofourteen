import { AboutAreaSectionCatalogProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const AboutAreaProvider: React.FunctionComponent<AppProps> = ({
  apiProps: { aboutAreaSection },
}) => (
  <>
    <AboutAreaSectionCatalogProvider aboutAreaSection={aboutAreaSection} />
  </>
);
