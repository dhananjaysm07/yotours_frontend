import React from "react";
import PackageDetailsWrap from "./PackageDetailsWrap";
import Seo from "../../components/common/Seo";
import DefaultHeader from "../../components/header/default-header";
import DefaultFooter from "../../components/footer/default";

function PackageDetails() {
  return (
    <>
      <Seo pageTitle="Package" />
      <div className="header-margin"></div>
      <DefaultHeader />
      <PackageDetailsWrap />
      <DefaultFooter />
    </>
  );
}

export default PackageDetails;
