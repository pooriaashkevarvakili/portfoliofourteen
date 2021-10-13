import { TeamAreaSectionCatalogProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const TeamAreaProvider: React.FunctionComponent<AppProps> = ({
  apiProps: { teamAreaSection },
}) => (
  <>
    <TeamAreaSectionCatalogProvider teamAreaSection={teamAreaSection} />
  </>
);
