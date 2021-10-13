// ----------------------------------------------------
import { BlogAreaSectionCatalogProvider } from ".";
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const BlogTwoAreaProvider: React.FunctionComponent<AppProps> = ({
  apiProps: {blogAreaTwoSection},
}) => (
  <>
    <BlogAreaSectionCatalogProvider
      blogAreaTwoSection={blogAreaTwoSection}
    />
  </>
);
