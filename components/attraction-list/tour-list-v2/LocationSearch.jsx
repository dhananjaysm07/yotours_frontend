import { useState } from "react";
import { countryData } from "../../../utils/country";
import { useData } from "../../../lib/datacontext";
import { GET_ATTRACTION_LOCATIONS } from "../../../graphql/query";
import { useQuery } from "@apollo/client";

const SearchBar = ({ searchValue, setSearchValue }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const { data, error, loading } = useQuery(GET_ATTRACTION_LOCATIONS);
  // let locationData = [];
  // countryData.forEach((data) => {
  //   const newArray = data.countries.map((el, index) => ({
  //     id: index + Math.random(),
  //     name: el.name,
  //     address: data.continent,
  //   }));
  //   // console.log("neww array", newArray);
  //   locationData = [...locationData, ...newArray];
  // });
  // // console.log("locaiion array", locationData);
  // const locationSearchContent = [...locationData];
  // console.log("location array", locationSearchContent);

  // const { attractionData, attractionLoading } = useData();

  if (loading) return <div>Loading...</div>;
  // Create a Map to store unique destinations based on id
  // const uniqueDestinationsMap = new Map();

  // Iterate through tourData and add each destination to the Map
  // attractionData?.getAttractions.forEach((attraction) => {
  //   const destination = attraction.destination;
  //   if (destination && destination.id) {
  //     uniqueDestinationsMap.set(destination.id, {
  //       destinationName: destination.destinationName,
  //       id: destination.id,
  //     });
  //   }
  // });

  // Convert Map values to an array
  // const uniqueDestinations = Array.from(uniqueDestinationsMap.values());

  console.log(searchValue);
  // Filter destinations based on the search input
  // const filteredDestinations = uniqueDestinations
  //   .filter((item) =>
  //   item && item.destinationName
  //     ? item.destinationName.toLowerCase().includes(searchValue.toLowerCase())
  //     : false
  //   )
  //   .sort((a, b) => a.destinationName.localeCompare(b.destinationName));
  const handleOptionClick = (item) => {
    setSearchValue(item);
    setSelectedItem(item);
  };

  return (
    <>
      <div className="searchMenu-loc px-20 py-10 bg-white rounded-4 js-form-dd js-liverSearch">
        <div
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          data-bs-offset="0,22"
        >
          <div className="d-flex">
            <i className="icon-location-2 text-20 text-light-1 mt-5"></i>

            <div className="ml-10 flex-grow-1">
              <h4 className="text-15 fw-500 ls-2 lh-16">Location</h4>
              <div className="text-15 text-light-1 ls-2 lh-16">
                <input
                  autoComplete="off"
                  type="search"
                  placeholder="Where are you going?"
                  className="js-search js-dd-focus"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
            </div>
            {/* End ml-10 */}
          </div>
        </div>
        {/* End location Field */}

        <div className="shadow-2 dropdown-menu min-width-400">
          <div className="bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4">
            <ul className="y-gap-5 js-results">
              {data?.getUniqueAttractionLocations?.map((item, index) => (
                <li
                  className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${
                    selectedItem && selectedItem === item ? "active" : ""
                  }`}
                  key={index}
                  role="button"
                  onClick={() => handleOptionClick(item)}
                >
                  <div className="d-flex">
                    <div className="icon-location-2 text-light-1 text-20 pt-4" />
                    <div className="ml-10">
                      <div className="text-15 lh-12 fw-500 js-search-option-target">
                        {item}
                      </div>
                      {/* Additional details if needed */}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
