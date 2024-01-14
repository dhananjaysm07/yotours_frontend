import CategoryTypes from "../sidebar/CategoryTypes";
import PirceSlider from "../sidebar/PirceSlider";
import MainFilterSearchBox from "./MainFilterSearchBox";
import { useData } from "../../../lib/datacontext";
import React from "react";
import { countryData } from "../../../utils/country";
import { useTourFilterStore } from "../../../lib/store";
import CountryContinentFilter from "../../attraction-list/sidebar/CountryContinentFilter";

const Sidebar = () => {
  const { tourCCData,tourCCLoading } = useData();
  if (tourCCLoading) return <div>Loading...</div>;
  // Extract unique countries and continents using a Set
  const uniqueCountries = [
    ...new Set(
      tourCCData?.getCountriesAndContinentsForTours.map(
        (item) => item.country
      )
    ),
  ].sort();
  const uniqueContinents = [
    ...new Set(
      tourCCData?.getCountriesAndContinentsForTours.map(
        (item) => item.continent
      )
    ),
  ].sort();
  const { tagNameList } = useData();
  const [categories, setCategories] = React.useState([]);
  const {
    setTag,
    removeTag,
    setContinent,
    removeContinent,
    setCountry,
    removeCountry,
    continent: selectedContinents,
  } = useTourFilterStore();
  // const [category,setCategory]=React.useState("")
  const continent = countryData.map((el) => el.continent);
  React.useEffect(() => {
    setCategories(tagNameList?.getAllTags?.map((tag) => tag.name));
  }, [tagNameList]);
  function handleChangeTag(event, category) {
    if (event.target.checked) {
      setTag(category);
    } else {
      removeTag(category);
    }
  }
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
  const filteredCountries = tourCCData?.getCountriesAndContinentsForTours
    .filter((item) =>
      selectedContinents.length
        ? selectedContinents.includes(item.continent)
        : true
    )
    .map((item) => item.country);


    const countsByContinent = {};
    const countsByCountry = {};
  
    tourCCData?.getCountriesAndContinentsForTours.forEach((item) => {
      countsByContinent[item.continent] = item.tourCount + (countsByContinent[item.continent] || 0);
      countsByCountry[item.country] = item.tourCount + (countsByCountry[item.country] || 0);
    });
  return (
    <>
      <div className="sidebar__item -no-border">
        <div className="px-20 py-20 bg-light-2 rounded-4">
          <h5 className="text-18 fw-500 mb-10">Search Tours</h5>

          <div className="row y-gap-20 pt-20">
            <MainFilterSearchBox />
          </div>
        </div>
      </div>
      {/* End search tours */}

      <div className="sidebar__item -no-border">
        <h5 className="text-18 fw-500 mb-10">Category Types</h5>
        <div className="sidebar-checkbox">
          <CategoryTypes
            categories={categories}
            handleChange={handleChangeTag}
          />
        </div>
      </div>
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

      <div className="sidebar__item pb-30">
        <h5 className="text-18 fw-500 mb-10">Price</h5>
        <div className="row x-gap-10 y-gap-30">
          <div className="col-12">
            <PirceSlider />
          </div>
        </div>
      </div>
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

export default Sidebar;
