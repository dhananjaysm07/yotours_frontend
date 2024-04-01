import Link from "next/link";
import React from "react";
import { useQuery } from "@apollo/client";
import {
  GetToursInHome,
  GetAttractionsInHome,
  GetDestinationsInHome,
} from "./../../graphql/homeQuery";
import PopularDestinations from "../destinations/PopularDestinations";
import FilterTabsHotelsForContinent from "../hotels/filter-tabs/FilterHotelsContinent";
import FilterTabContentContinent from "../hotels/FilterTabContentContinent";
import { useFilterStore } from "../../lib/store";
function Europe() {
  const {
    loading: destinationLoading,
    error: destinationError,
    data: destinationData,
  } = useQuery(GetDestinationsInHome, {
    variables: {
      page: 1,
      loadCount: 30,
      filter: {
        activeValues: [true],
        continent: ["Europe"],
        ispopular: true,
      },
    },
  });
  //   console.log("----destinations data----", destinationData);
  const { data: tourData } = useQuery(GetToursInHome, {
    variables: {
      page: 1,
      loadCount: 8,
      filter: {
        activeValues: [true],
        continent: ["Europe"],
      },
    },
  });
  const { data: attractionData } = useQuery(GetAttractionsInHome, {
    variables: {
      page: 1,
      loadCount: 8,
      filter: {
        activeValues: [true],
        continent: ["Europe"],
      },
    },
  });
  const { filterOptionEurope, setFilterOptionEurope } = useFilterStore();
  // console.log(
  //   "filtered destinations-----",
  //   destinationData?.getFilteredDestination
  // );
  return (
    <>
      {destinationData?.getFilteredDestination ? (
        <>
          <section className="layout-pt-lg layout-pb-md" data-aos="fade-up">
            <div className="container">
              <div className="row y-gap-20 justify-between items-end">
                <div className="col-auto">
                  <div className="sectionTitle -md">
                    <h2 className="sectionTitle__title">
                      Popular Destinations In Europe{" "}
                    </h2>
                    {/* <h2 className="sectionTitle__title">Popular Destinations in {el}</h2> */}

                    <p className=" sectionTitle__text mt-5 sm:mt-0">
                      These popular destinations in Europe have a lot to offer
                    </p>
                  </div>
                </div>
                {/* End col-auto */}

                <div className="col-auto">
                  <Link
                    href="/destinations"
                    className="button -md -pink-1 bg-pink-1-05 text-pink-1"
                  >
                    View All Destinations
                    <div className="icon-arrow-top-right ml-15" />
                  </Link>
                </div>
                {/* End col-auto */}
              </div>
              {/* End .row */}
              <div className="relative pt-40 sm:pt-20">
                {destinationData.getFilteredDestination?.destinations ? (
                  <PopularDestinations
                    popularDestinations={
                      destinationData?.getFilteredDestination?.destinations
                    }
                    destinationError={destinationError}
                    destinationLoading={destinationLoading}
                    id={100140929}
                  />
                ) : (
                  "No Destination in Europe"
                )}
              </div>
            </div>
            {/* End .container */}
          </section>
          <section className="layout-pt-md layout-pb-lg">
            <div className="container">
              <div className="row y-gap-10 justify-between items-end">
                <div className="col-auto">
                  <div className="sectionTitle -md">
                    <h2 className="sectionTitle__title">
                      {" "}
                      Best Tours and Attraction Tickets in Europe
                    </h2>
                    <p className=" sectionTitle__text mt-5 sm:mt-0">
                      {/* Our best selling {filterOption} */}
                      <div className="col-4 md:d-none ml-auto">
                        <Link
                          href={
                            filterOptionEurope == "tour"
                              ? "/tours?continent=Europe"
                              : "/attractions?continent=Europe"
                          }
                          className="button -md -pink-1 bg-pink-1-05 text-pink-1"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          View All{" "}
                          {filterOptionEurope == "tour"
                            ? "Tours"
                            : "Attractions"}
                          <div className="icon-arrow-top-right ml-15" />
                        </Link>
                      </div>
                    </p>
                  </div>
                </div>
                {/* End .col-auto */}

                <div className="col-auto tabs -pills-2 ">
                  <FilterTabsHotelsForContinent
                    filter={filterOptionEurope}
                    setFilter={setFilterOptionEurope}
                  />
                </div>
                {/* End .col-auto */}
              </div>
              {/* End .row */}
              {tourData?.getFilteredTours?.tours.length &&
              attractionData?.getFilteredAttractions?.attractions.length ? (
                <div className="relative overflow-hidden pt-40 sm:pt-20">
                  <div className="row y-gap-30">
                    <FilterTabContentContinent
                      loading={destinationLoading}
                      error={destinationError}
                      dataToRender={
                        filterOptionEurope == "tour"
                          ? tourData?.getFilteredTours?.tours
                          : attractionData?.getFilteredAttractions?.attractions
                      }
                      filter={filterOptionEurope}
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
              {/* End relative */}
            </div>
            <p className=" d-none sm:d-block sectionTitle__text mt-5 sm:mt-0">
              {/* Our best selling {filterOption} */}
              <div className="col-auto ml-auto">
                <Link
                  href={
                    filterOptionEurope == "tour"
                      ? "/tours?continent=Europe"
                      : "/attractions?continent=Europe"
                  }
                  className="button -md  bg-pink-1 text-white"
                >
                  View All{" "}
                  {filterOptionEurope == "tour"
                    ? "Tours in Europe"
                    : "Attractions in Europe"}
                  <div className="icon-arrow-top-right ml-15" />
                </Link>
              </div>
            </p>
          </section>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default Europe;
