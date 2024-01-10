import React from "react";
import DateSearch from "../common/DateSearch";
import GuestSearch from "../common/GuestSearch";
import LocationSearch from "../common/LocationSearch";
import { useTourFilterStore } from "../../../lib/store";

const MainFilterSearchBox = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const { setLocation } = useTourFilterStore();
  return (
    <>
      <div className="mainSearch -col-3-big bg-white px-10 py-10 lg:px-20 lg:pt-5 lg:pb-20 rounded-4 mt-30">
        {/* <div className="button-grid items-center"> */}
        <div
          className="button-grid"
          // style={{ justifyContent: "space-between" }}
        >
          <LocationSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          {/* End Location */}
          <div className="searchMenu-date px-30 lg:py-20  sm:px-20 js-form-dd js-calendar">
            {/* <div className="d-flex">
              <i className="icon-calendar-2 text-20 text-light-1 mt-5"></i>
              <div className="ml-10">
                <h4 className="text-15 fw-500 ls-2 lh-16">
                  Check in - Check out
                </h4>
                <DateSearch />
              </div>
            </div> */}
          </div>
          {/* End check-in-out */}
          {/* <GuestSearch /> */}
          {/* End guest */}
          {/* <div className="button-item h-full"> */} {/* This was before*/}
          <div className="button-item h-full col-6 ml-auto">
            <button
              className="button -dark-1 py-15 px-40 h-full col-12 rounded-0 bg-blue-1 text-white"
              onClick={() => {
                setLocation(searchValue);
              }}
            >
              <i className="icon-search text-20 mr-10" />
              Search
            </button>
          </div>
          {/* End search button_item */}
        </div>
      </div>
    </>
  );
};

export default MainFilterSearchBox;
