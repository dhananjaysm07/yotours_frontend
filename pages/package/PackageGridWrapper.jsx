import React from "react";
import PackageCard from "./PackageCard";
import Pagination from "../../components/attraction-list/common/Pagination";
import Sidebar from "../../components/attraction-list/tour-list-v2/Sidebar";
import { useQuery } from "@apollo/client";
import { GET_All_PACKAGES } from "../../graphql/packageQuery";
import LoadingCard from "../../components/Loading/LoadingCard";
function PackageGridWrapper() {
  const { data, loading, error } = useQuery(GET_All_PACKAGES);
  if (loading)
    return (
      <>
        <div className="container">
          <div className="col-xl-9 ">
            <div className="row y-gap-30">
              {new Array(6).fill(0).map((_, index) => (
                <LoadingCard key={index} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  if (error) return <p>Error loading packages...</p>;
  return (
    <>
      {/* ===============  Package gird area start =============== */}
      <div className="package-wrapper py-20">
        <div className="container">
          <div className="row">
            {/* <div className="col-xl-3">
                  <aside className="sidebar y-gap-40 xl:d-none">
                    <Sidebar />
                  </aside>

                  <div
                    className="offcanvas offcanvas-start"
                    tabIndex="-1"
                    id="listingSidebar"
                  >
                    <div className="offcanvas-header">
                      <h5 className="offcanvas-title" id="offcanvasLabel">
                        Filter Packages
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>

                    <div className="offcanvas-body">
                      <aside className="sidebar y-gap-40  xl:d-block">
                        <Sidebar />
                      </aside>
                    </div>
                  </div>
              </div> */}
            <div className="col-xl-12">
              <div className="row g-4">
                {data?.getallpackages?.map((holiday, index) => {
                  return (
                    <div className="col-lg-3 col-md-6" key={index}>
                      <PackageCard
                        image={holiday?.summaryData?.photos?.[0]?.url || ""}
                        date={`${holiday.durationData?.days} days & ${holiday.durationData?.nights} nights `}
                        title={holiday.title || ""}
                        price={
                          holiday?.pricingData?.adultPrice +
                          (holiday?.pricingData?.type == "perperson"
                            ? "/Person"
                            : "/" +
                              holiday.pricingData?.maxMembers +
                              " Members")
                        }
                        id={holiday.id}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===============  Package gird area end =============== */}
    </>
  );
}

export default PackageGridWrapper;
