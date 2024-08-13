import { Helmet } from "react-helmet-async";

export const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>부산YUM | {title}</title>
    </Helmet>
  );
};
