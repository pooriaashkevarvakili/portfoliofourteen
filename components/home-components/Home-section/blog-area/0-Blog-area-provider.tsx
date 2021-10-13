import { BlogAreaSectionCatalogProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const AboutAreaProvider: React.FunctionComponent<AppProps> = ({
  apiProps: { blogAreaSection },
}) => (
  <>
    <BlogAreaSectionCatalogProvider blogAreaSection={blogAreaSection} />
  </>
);
