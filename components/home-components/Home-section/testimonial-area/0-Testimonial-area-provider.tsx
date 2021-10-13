import { TestimonialAreaSectionCatalogProvider } from ".";

// ----------------------------------------------------
interface AppProps {
  apiProps: any;
}
// ----------------------------------------------------
export const TestimonialAreaProvider: React.FunctionComponent<AppProps> = ({
  apiProps: { testimonialSection },
}) => (
  <>
    <TestimonialAreaSectionCatalogProvider
      testimonialSection={testimonialSection}
    />
  </>
);
