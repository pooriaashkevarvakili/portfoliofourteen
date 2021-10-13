import { ServiceAreaSectionCatalogProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const ServiceAreaProvider: React.FunctionComponent<AppProps> = ({
  apiProps: { serviceAreaSection },
}) => (
  <>
    <ServiceAreaSectionCatalogProvider
      serviceAreaSection={serviceAreaSection}
    />
  </>
);
