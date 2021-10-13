import { ContactAreaSectionCatalogProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const ContactAreaProvider: React.FunctionComponent<AppProps> = ({
  apiProps: { contactAreaSection },
}) => (
  <>
    <ContactAreaSectionCatalogProvider
      contactAreaSection={contactAreaSection}
    />
  </>
);
