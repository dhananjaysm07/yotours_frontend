import React from "react";
import PackageCard from "./PackageCard";
import Pagination from "../../components/attraction-list/common/Pagination";
import Sidebar from "../../components/attraction-list/tour-list-v2/Sidebar";
function PackageGridWrapper() {
  
  return (
    <>
      {/* ===============  Package gird area start =============== */}
      <div className="package-wrapper py-20">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
                  <aside className="sidebar y-gap-40 xl:d-none">
                    <Sidebar />
                  </aside>
                  {/* End sidebar for desktop */}

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
                    {/* End offcanvas header */}

                    <div className="offcanvas-body">
                      <aside className="sidebar y-gap-40  xl:d-block">
                        <Sidebar />
                      </aside>
                    </div>
                    {/* End offcanvas body */}
                  </div>
                  {/* End mobile menu sidebar */}
              </div>
              <div className="col-xl-9">
                <div className="row g-4">
                  <div className="col-lg-4 col-md-6">
                    <PackageCard
                      image={"/img/package/p-alpha1.png"}
                      date="7 Day &amp; 6 night"
                      title="Etiam placerat dictum consequat an pellentesque habitant."
                      price="$88.00"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6 uuu">
                    <PackageCard
                      image="/img/package/p-alpha2.png"
                      date="7 Day &amp; 6 night"
                      title="Varius condimentum consequat frin Aenean pretium risus."
                      price="$89.00"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <PackageCard
                      image="/img/package/p-alpha3.png"
                      date="5 Day &amp; 6 night"
                      title="Praesent sed elit mil In risus nullaam efficitur none."
                      price="$99.00"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <PackageCard
                      image={"/img/package/p-alpha4.png"}
                      date="8 Day &amp; 7 night"
                      title="Sed ultricies sapien arcu, sed cong feugiat sapien."
                      price="$299.00"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6">
                  <PackageCard
                      image={"/img/package/p-alpha5.png"}
                      date="2 Day &amp; 3 night"
                      title="Pellentesque habitant morbi malesua tristique senectus."
                      price="$299.00"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6">
                  <PackageCard
                      image={"/img/package/p-alpha6.png"}
                      date="9 Day &amp; 5 night"
                      title="San francisco golden gate bridge, cable & fog."
                      price="$199.00"
                    />
                    
                  </div>
                  <div className="col-lg-4 col-md-6">
                  <PackageCard
                      image={"/img/package/p-alpha7.png"}
                      date="9 Day &amp; 5 night"
                      title="Etiam placerat dictum consequat an pellentesque habitant."
                      price="$120.00"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6">
                  <PackageCard
                      image={"/img/package/p-alpha8.png"}
                      date="9 Day &amp; 5 night"
                      title="Varius condimentum consequat frin Aenean pretium risus."
                      price="$119.00"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6">
                  <PackageCard
                      image={"/img/package/p-alpha9.png"}
                      date="9 Day &amp; 5 night"
                      title="Praesent sed elit mil In risus nullaam efficitur none."
                      price="$159.00"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6">
                  <PackageCard
                      image={"/img/package/p-alpha10.png"}
                      date="9 Day &amp; 5 night"
                      title="Sed ultricies sapien arcu, sed cong feugiat sapien."
                      price="$199.00"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6">
                  <PackageCard
                      image={"/img/package/p-alpha11.png"}
                      date="9 Day &amp; 5 night"
                      title="Pellentesque habitant morbi malesua tristique senectus."
                      price="$119.00"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6">
                  <PackageCard
                      image={"/img/package/p-alpha8.png"}
                      date="9 Day &amp; 5 night"
                      title="San francisco golden gate bridge, cable & fog."
                      price="$119.00"
                    />
                  </div>
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
