import { Helmet } from "react-helmet-async";

export const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>휴가YUM? | {title}</title>
    </Helmet>
  );
};
