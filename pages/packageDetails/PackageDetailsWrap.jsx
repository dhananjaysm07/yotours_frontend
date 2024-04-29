import React from "react";
import WidgetForm from "./WidgetForm";
import WidgetPackageOffer from "./WidgetPackageOffer";
import WidgetPackageTag from "./WidgetPackageTag";
import PackageHeader from "./PackageHeader";
import PackageDetailsTab from "./PackageDetailsTab";

function PackageDetailsWrap() {

  return (
    <>
      <div className="package-details-wrapper pt-110 mb-20">
        
      <div className="container-fluid mx-0 mb-20 p-0">
        <div className="packagebg">
        <h2 className="bgtitle">Package Details</h2>
        </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="tour-package-details">
                <PackageHeader />
                <PackageDetailsTab />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="package-sidebar">
                <WidgetForm />
                <WidgetPackageOffer />
                <WidgetPackageTag />
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PackageDetailsWrap;
