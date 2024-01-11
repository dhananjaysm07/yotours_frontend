import Link from "next/link";
import { useState } from "react";
import { destinations1 } from "../../../data/desinations";
import { useData } from "../../../lib/datacontext";

const DestinationsWeLove = () => {
  const [filterOption, setFilterOption] = useState("all");
const {destinationData,destinationLoading,destinationError}= useData();
  const filterOptions = [
    { label: "All", value: "all" },
    { label: "Europe", value: "europe" },
    { label: "Asia", value: "asia" },
    { label: "India", value: "india" },
    // add more options as needed
  ];
  const filteredDestinations = destinationData.getDestinations.filter(destination => {
    if (filterOption === "all") {
      // If filterOption is "all", include all destinations
      return true;
    } else if (filterOption === "india"){
      return destination.country.toLowerCase() === filterOption;
    }     
    else {
      // Otherwise, filter based on the selected continent
      return destination.continent.toLowerCase() === filterOption;
    }
  });
  return (
    <>
      <div className="tabs__controls d-flex js-tabs-controls">
        {filterOptions.map((option) => (
          <div key={option.value}>
            <button
              className={`tabs__button fw-500 text-15 px-30 py-15 rounded-4 js-tabs-button ${
                filterOption === option.value ? "is-tab-el-active" : ""
              }`}
              onClick={() => setFilterOption(option.value)}
            >
              {option.label}
            </button>
          </div>
        ))}
      </div>

      <div className="tabs__content pt-30 js-tabs-content">
        <div className="tabs__pane -tab-item-1 is-tab-el-active">
          <div className="row y-gap-20">
            {filteredDestinations && filteredDestinations.map((item) => (
              <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2" key={item.id}>
                <Link href="/destinations" className="d-block">
                  <div className="text-15 fw-500">{item.destinationName}</div>
                  <div className="text-14 text-light-1">
                    {item.tours.length} tours
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End .tabs__content */}
    </>
  );
};

export default DestinationsWeLove;