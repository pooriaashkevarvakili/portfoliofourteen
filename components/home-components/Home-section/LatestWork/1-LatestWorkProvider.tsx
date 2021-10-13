import { LatestWorkSectionCatalogProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const LatestWorkProvider: React.FunctionComponent<AppProps> = ({
  apiProps: { latestWorkSection },
}) => (
  <>
    <LatestWorkSectionCatalogProvider latestWorkSection={latestWorkSection} />
  </>
);
