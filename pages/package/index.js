import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import DefaultHeader from "../../components/header/default-header";
import DefaultFooter from "../../components/footer/default";
import React from "react";
import PackageGridWrapper from "./PackageGridWrapper";

const Package = () => {
  return (
    <>
      <Seo pageTitle="Package" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      {/* <Header /> */}
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <PackageGridWrapper />
      <DefaultFooter />
    </>
  );
};

export default dynamic(() => Promise.resolve(Package), { ssr: false });
