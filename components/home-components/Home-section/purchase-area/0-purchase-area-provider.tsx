import { PurchaseAreaSectionCatalogProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const PurchaseAreaProvider: React.FunctionComponent<AppProps> = ({
  apiProps: { purchaseSection },
}) => (
  <>
    <PurchaseAreaSectionCatalogProvider purchaseSection={purchaseSection} />
  </>
);
