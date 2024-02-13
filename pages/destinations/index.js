import dynamic from "next/dynamic";
import CallToActions from "../../components/common/CallToActions";
import Seo from "../../components/common/Seo";
import DefaultHeader from "../../components/header/default-header";
import DefaultFooter from "../../components/footer/default";
import TopHeaderFilter from "../../components/destination-list/destination-list-v2/TopHeaderFilter";
import Pagination from "../../components/destination-list/common/Pagination";
import {
  useDestinationFilterStore,
  useDestinationPaginationStore,
} from "../../lib/store";
import React from "react";
import DestinationGrid from "../../components/destination-list/destination-list-v2/DestinationGrid";
import DestinationSidebar from "../../components/destination-list/destination-list-v2/Sidebar";

const Destination = () => {
  const { setCurrentPage, totalPage, currentPage, dataPerPage } =
    useDestinationPaginationStore();
  // const [startTime, setStartTime] = React.useState(null);
  // const [endTime, setEndTime] = React.useState(null);
  // const [priceMax, setPriceMax] = React.useState(null);
  // const [location, setLocation] = React.useState(null);
  // const [priceMin, setPriceMin] = React.useState(null);
  // const [tagName, setTagName] = React.useState([]);
  const {
    startTime,
    endTime,
    priceMax,
    location,
    priceMin,
    tagName,
    continent,
    country,
    resetData,
  } = useDestinationFilterStore();
  const [filter, setFilter] = React.useState({
    priceMin: null,
    startDate: null,
    priceMax: null,
    location: null,
    endDate: null,
    continent: [],
    country: [],
    tagName: [],
  });

  React.useEffect(() => {
    resetData();
  }, []);

  // console.log("tag elected", tagName, priceMax, priceMin, location);
  React.useEffect(() => {
    // const filter = {};
    setFilter({
      priceMin: priceMin,
      startDate: startTime,
      priceMax: priceMax,
      location: location,
      endDate: endTime,
      tagName: tagName,
      continent: continent,
      country: country,
    });
  }, [
    priceMax,
    priceMin,
    startTime,
    endTime,
    location,
    tagName,
    continent,
    country,
  ]);
  return (
    <>
      <Seo pageTitle="Destinations" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      {/* <Header /> */}
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      {/* <section className="pt-40 pb-40 bg-light-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
              </div>
              <MainFilterSearchBox />
            </div>
          </div>
        </div>
      </section> */}
      {/* Top SearchBanner */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-3">
              <aside className="sidebar y-gap-40 xl:d-none">
                <DestinationSidebar />
              </aside>
              {/* End sidebar for desktop */}

              <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="listingSidebar"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasLabel">
                    Filter Destinations
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
                    <DestinationSidebar />
                  </aside>
                </div>
                {/* End offcanvas body */}
              </div>
              {/* End mobile menu sidebar */}
            </div>
            {/* End col */}

            <div className="col-xl-9 ">
              <TopHeaderFilter />
              <div className="mt-30"></div>
              {/* End mt--30 */}
              <div className="row y-gap-30">
                <DestinationGrid filter={filter} />
              </div>
              {/* End .row */}
              <Pagination
                setCurrentPage={setCurrentPage}
                totalPage={totalPage}
                currentPage={currentPage}
                dataPerPage={dataPerPage}
              />
            </div>
            {/* End .col for right content */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End layout for listing sidebar and content */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
    </>
  );
};

export default dynamic(() => Promise.resolve(Destination), { ssr: false });
