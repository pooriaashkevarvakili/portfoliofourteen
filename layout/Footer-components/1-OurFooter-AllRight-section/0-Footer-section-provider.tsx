import { FooterSectionCatalog } from "./1-OurFooter-AllRight-catalog";

// ------------------------------ - --------------------- --------

interface AppProps {
  OurFooter: any;
  ourFooterAllRightCatalog: any;
}

// ------------------------------ - --------------------- --------

export const OurFooterAllRightSectionProvider: React.FunctionComponent<AppProps> = ({
  OurFooter,
  ourFooterAllRightCatalog,
}) => (
  <>
    <FooterSectionCatalog
      OurFooter={OurFooter}
      ourFooterAllRightCatalog={ourFooterAllRightCatalog[0]}
    />
  </>
);
