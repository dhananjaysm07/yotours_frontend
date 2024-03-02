import CategoryTypes from "../sidebar/CategoryTypes";

import MainFilterSearchBox from "./MainFilterSearchBox";
import { useData } from "../../../lib/datacontext";
import React from "react";
import { countryData } from "../../../utils/country";
import {
  useDestinationFilterStore,
  useTourFilterStore,
} from "../../../lib/store";
import CountryContinentFilter from "../../attraction-list/sidebar/CountryContinentFilter";

const DestinationSidebar = () => {
  const { destCCData, destCCLoading } = useData();
  const {
    setContinent,
    removeContinent,
    setCountry,
    removeCountry,
    continent: selectedContinents,
  } = useDestinationFilterStore();
  if (destCCLoading) return <div>Loading...</div>;
  // Extract unique countries and continents using a Set
  const uniqueCountries = [
    ...new Set(
      destCCData?.getCountriesAndContinents.map((item) => item.country)
    ),
  ].sort();
  const uniqueContinents = [
    ...new Set(
      destCCData?.getCountriesAndContinents.map((item) => item.continent)
    ),
  ].sort();

  function handleChangeContinent(event, category) {
    if (event.target.checked) {
      setContinent(category);
    } else {
      removeContinent(category);
    }
  }

  function handleChangeCountry(event, category) {
    if (event.target.checked) {
      setCountry(category);
    } else {
      removeCountry(category);
    }
  }

  // Filter countries based on the selected continents
  const filteredCountries = destCCData?.getCountriesAndContinents
    .filter((item) =>
      selectedContinents.length
        ? selectedContinents.includes(item.continent)
        : true
    )
    .map((item) => item.country);

  const countsByContinent = {};
  const countsByCountry = {};
  destCCData?.getCountriesAndContinents.forEach((item) => {
    countsByContinent[item.continent] =
      item.destinationCount + (countsByContinent[item.continent] || 0);
    countsByCountry[item.country] =
      item.destinationCount + (countsByCountry[item.country] || 0);
  });
  return (
    <>
      {uniqueContinents && (
        <div className="sidebar__item -no-border">
          <h5 className="text-18 fw-500 mb-10">Continents</h5>
          <div className="sidebar-checkbox">
            <CountryContinentFilter
              categories={uniqueContinents}
              handleChange={handleChangeContinent}
              continentCounts={countsByContinent}
            />
          </div>
        </div>
      )}
      {filteredCountries && (
        <div className="sidebar__item -no-border">
          <h5 className="text-18 fw-500 mb-10">Countries</h5>
          <div className="sidebar-checkbox">
            <CountryContinentFilter
              categories={filteredCountries}
              handleChange={handleChangeCountry}
              countryCounts={countsByCountry}
            />
          </div>
        </div>
      )}
      {/* End popular filter */}
      {/* 
      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Other</h5>
        <div className="sidebar-checkbox">
          <OthersFilter />
        </div>
      </div> */}
      {/* End Aminities filter */}

      {/* <div className="sidebar__item pb-30">
        <h5 className="text-18 fw-500 mb-10">Price</h5>
        <div className="row x-gap-10 y-gap-30">
          <div className="col-12">
            <PirceSlider />
          </div>
        </div>
      </div> */}
      {/* End Nightly priceslider */}
      {/* 
      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Duration</h5>
        <div className="sidebar-checkbox">
          <Duration />
        </div>
      </div> */}
      {/* End style filter */}

      {/* <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Languages</h5>
        <div className="sidebar-checkbox">
          <Languages />
        </div>
      </div> */}
      {/* End Aminities filter */}
    </>
  );
};

export default DestinationSidebar;
