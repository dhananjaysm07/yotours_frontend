import React from "react";
import WidgetForm from "./WidgetForm";
import WidgetPackageOffer from "./WidgetPackageOffer";
import WidgetPackageTag from "./WidgetPackageTag";
import PackageHeader from "./PackageHeader";
import PackageDetailsTab from "./PackageDetailsTab";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_COMPLETE_PACKAGE_DETAIL } from "../../graphql/packageQuery";
import LoadingDestinationBanner from "../../components/Loading/LoadingDestinationBanner";

function PackageDetailsWrap() {
  const router = useRouter();
  const { packageID } = router.query;
  const { data, loading, error } = useQuery(GET_COMPLETE_PACKAGE_DETAIL, {
    variables: {
      getHolidayId: packageID,
    },
  });
  if (loading)
    return (
      <section className="layout-pb-sm">
        <div className="container">
          <div className="row">
            <LoadingDestinationBanner />
          </div>
        </div>
      </section>
    );
  if (error) return <p>Error loading package.</p>;
  // console.log("holiday data", data);
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
                <PackageHeader data={data.getHoliday} />
                <PackageDetailsTab data={data.getHoliday} />
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
