import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import PopularDestinations from "../../components/destinations/PopularDestinations";
import DefaultFooter from "../../components/footer/default";
import Header1 from "../../components/header/header-1";
import Hero1 from "../../components/hero/hero-1";
import BlockGuide from "../../components/block/BlockGuide";
import CallToActions from "../../components/common/CallToActions";
import FilterHotelsTabs from "../../components/hotels/filter-tabs/FilterHotelsTabs";
import Link from "next/link";
import FilterTabContent from "../../components/hotels/FilterTabContent";
import { useFilterStore } from "../../lib/store";
import { useData } from "../../lib/datacontext";
import React from "react";
import FilterTabsHotelsForContinent from "../../components/hotels/filter-tabs/FilterHotelsContinent";
import FilterTabContentContinent from "../../components/hotels/FilterTabContentContinent";
import AddBanner from "../../components/add-banner/AddBanner";
import DestinationsWeLove from "../../components/home/home-1/DestinationsWeLove";
import Testimonial from "../../components/home/home-1/Testimonial";
import TestimonialLeftCol from "../../components/home/home-1/TestimonialLeftCol";
const Home_1 = () => {
  const { filterOption } = useFilterStore();
  const { destinationData, destinationLoading, destinationError, contentData } =
    useData();
  const { attractionData, attractionLoading, attractionError } = useData();
  const { tourData, tourLoading, tourError } = useData();
  // console.log("api server RUNNING", process.env.NEXT_PUBLIC_API_URL);
  // console.log(
  //   "destination data---------",
  //   destinationData,
  //   attractionData,
  //   tourData
  // );
  const [destinations, setDestinations] = React.useState([]);
  React.useState(() => {
    if (destinationData?.getDestinations?.length) {
      setDestinations(destinationData.getDestinations);
    }
  }, [destinationData]);
  const [destinationGroup, setDestinationGroup] = React.useState({});
  React.useEffect(() => {
    setDestinationGroup({});
    if (destinationData?.getDestinations?.length) {
      setDestinationGroup((prev) => {
        destinationData?.getDestinations.forEach((destination) => {
          if (destination.isPopular)
            prev[destination.continent] = prev[destination.continent]?.length
              ? [...prev[destination.continent], destination]
              : [destination];
        });
        return { ...prev };
      });
    }
  }, [destinationData]);
  // console.log("destination Group Data:--", destinationGroup, destinationData);
  const {
    filterOptionEurope,
    filterOptionAsia,
    setFilterOptionEurope,
    setFilterOptionAsia,
    filterOptionIndia,
    setFilterOptionIndia,
  } = useFilterStore();
  return (
    <>
      <Seo pageTitle="Home" />
      {/* End Page Title */}

      <Header1 />
      {/* End Header 1 */}

      <Hero1 />
      {/* End Hero 1 */}

      {/* 

      Logo: Company Name
      Header : Work with Us Button
      Footer: Agent Login


      LENGTH: 3 (Europe, Asia)
      Popular Destination in Europe
      Top Tours and Attraction Tickets in Europe

      Popular Destination in Asia
      Top Tours and Attraction Tickets in Asia
      


      TODO: Destinations We Love, Continent Wise Tabs


      */}

      {/* <section className="layout-pt-lg layout-pb-md" data-aos="fade-up">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Popular Destinations </h2>

                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>

            <div className="col-auto md:d-none">
              <Link
                href="/destinations"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                View All Destinations
                <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
          </div>
          <div className="relative pt-40 sm:pt-20">
            <PopularDestinations
              popularDestinations={destinations}
              destinationError={destinationError}
              destinationLoading={destinationLoading}
              id={100140929}
            />

          </div>
        </div>
      </section> */}

      {/* <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-10 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Best Seller</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Our best selling {filterOption}
                </p>
              </div>
            </div>

            <div className="col-auto tabs -pills-2 ">
              <FilterHotelsTabs />
            </div>
          </div>

          <div className="relative overflow-hidden pt-40 sm:pt-20">
            <div className="row y-gap-30">
              <FilterTabContent
                tourData={tourData}
                tourLoading={tourLoading}
                tourError={tourError}
                attractionData={attractionData}
                attractionLoading={attractionLoading}
                attractionError={attractionError}
                contentData={contentData}
              />
            </div>
          </div>
        </div>
      </section> */}

      {destinationGroup.Europe ? (
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
                {destinationGroup?.Europe ? (
                  <PopularDestinations
                    popularDestinations={destinationGroup.Europe}
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
              {tourData?.getTours?.length &&
              attractionData?.getAttractions?.length ? (
                <div className="relative overflow-hidden pt-40 sm:pt-20">
                  <div className="row y-gap-30">
                    <FilterTabContentContinent
                      loading={destinationLoading}
                      error={destinationError}
                      dataToRender={
                        filterOptionEurope == "tour"
                          ? tourData?.getTours?.filter(
                              (el) => el.destination.continent == "Europe"
                            )
                          : attractionData?.getAttractions?.filter(
                              (el) => el.destination.continent == "Europe"
                            )
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

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-between">
            <BlockGuide />
          </div>
        </div>
      </section>
      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20">
            <AddBanner />
          </div>
        </div>
      </section>
      {/* ////////////////////////////////Start of India/////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {destinationGroup?.Asia?.filter(
        (destination) => destination.country == "India"
      ).length ? (
        <>
          <section className="layout-pt-lg layout-pb-md" data-aos="fade-up">
            <div className="container">
              <div className="row y-gap-20 justify-between items-end">
                <div className="col-auto">
                  <div className="sectionTitle -md">
                    <h2 className="sectionTitle__title">
                      Popular Destinations In India{" "}
                    </h2>
                    {/* <h2 className="sectionTitle__title">Popular Destinations in {el}</h2> */}

                    <p className=" sectionTitle__text mt-5 sm:mt-0">
                      These popular destinations in India have a lot to offer
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
                {destinationGroup.Asia ? (
                  <PopularDestinations
                    popularDestinations={destinationGroup.Asia.filter(
                      (destination) => destination.country == "India"
                    )}
                    destinationError={destinationError}
                    destinationLoading={destinationLoading}
                    id={10014092955}
                  />
                ) : (
                  "No Popular destination in India"
                )}

                {/* <PopularDestinations /> */}
              </div>
            </div>
            {/* End .container */}
          </section>

          {/* TOURS IN ASIA */}
          <section className="layout-pt-md layout-pb-lg">
            <div className="container">
              <div className="row y-gap-10 justify-between items-end">
                <div className="col-auto">
                  <div className="sectionTitle -md">
                    <h2 className="sectionTitle__title">
                      Best Tours and Attraction Tickets in India
                    </h2>
                    <p className=" sectionTitle__text mt-5 sm:mt-0">
                      {/* Our best selling {filterOption} */}
                      <div className="col-4 md:d-none ml-auto">
                        <Link
                          href={
                            filterOptionIndia == "tour"
                              ? "/tours?continent=Asia"
                              : "/attractions?country=India"
                          }
                          className="button -md -pink-1 bg-pink-1-05 text-pink-1"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          View All{" "}
                          {filterOptionIndia == "tour"
                            ? "Tours"
                            : "Attractions"}
                          <div className="icon-arrow-top-right ml-15" />
                        </Link>
                      </div>
                    </p>
                  </div>
                </div>
                <div className="col-auto tabs -pills-2 ">
                  <FilterTabsHotelsForContinent
                    filter={filterOptionIndia}
                    setFilter={setFilterOptionIndia}
                  />
                </div>
                <div className="relative overflow-hidden pt-40 sm:pt-20">
                  <div className="row y-gap-30">
                    <FilterTabContentContinent
                      loading={destinationLoading}
                      error={destinationError}
                      dataToRender={
                        filterOptionIndia == "tour"
                          ? tourData?.getTours?.filter(
                              (el) => el.destination.country == "India"
                            )
                          : attractionData?.getAttractions?.filter(
                              (el) => el.destination.country == "India"
                            )
                      }
                      filter={filterOptionIndia}
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className=" d-none sm:d-block sectionTitle__text mt-5 sm:mt-0">
              {/* Our best selling {filterOption} */}
              <div className="col-auto ml-auto">
                <Link
                  href={
                    filterOptionIndia == "tour"
                      ? "/tours?continent=India"
                      : "/attractions?continent=India"
                  }
                  className="button -md  bg-pink-1 text-white"
                >
                  View All{" "}
                  {filterOptionIndia == "tour"
                    ? "Tours in India"
                    : "Attractions in India"}
                  <div className="icon-arrow-top-right ml-15" />
                </Link>
              </div>
            </p>
          </section>
        </>
      ) : (
        ""
      )}

      {/* //////////////////////////////////////////End of India///////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}

      {destinationGroup.Asia ? (
        <>
          <section className="layout-pt-lg layout-pb-md" data-aos="fade-up">
            <div className="container">
              <div className="row y-gap-20 justify-between items-end">
                <div className="col-auto">
                  <div className="sectionTitle -md">
                    <h2 className="sectionTitle__title">
                      Popular Destinations In Asia{" "}
                    </h2>
                    {/* <h2 className="sectionTitle__title">Popular Destinations in {el}</h2> */}

                    <p className=" sectionTitle__text mt-5 sm:mt-0">
                      These popular destinations in Asia have a lot to offer
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
                {destinationGroup.Asia ? (
                  <PopularDestinations
                    popularDestinations={destinationGroup.Asia.filter(
                      (destination) => destination.country !== "India"
                    )}
                    destinationError={destinationError}
                    destinationLoading={destinationLoading}
                    id={10014092955}
                  />
                ) : (
                  "No Popular destination in Asia"
                )}

                {/* <PopularDestinations /> */}
              </div>
            </div>
            {/* End .container */}
          </section>

          {/* TOURS IN ASIA */}
          <section className="layout-pt-md layout-pb-lg">
            <div className="container">
              <div className="row y-gap-10 justify-between items-end">
                <div className="col-auto">
                  <div className="sectionTitle -md">
                    <h2 className="sectionTitle__title">
                      Best Tours and Attraction Tickets in Asia
                    </h2>
                    <p className=" sectionTitle__text mt-5 sm:mt-0">
                      {/* Our best selling {filterOption} */}
                      <div className="col-4 md:d-none ml-auto">
                        <Link
                          href={
                            filterOptionAsia == "tour"
                              ? "/tours?continent=Asia"
                              : "/attractions?continent=Asia"
                          }
                          className="button -md -pink-1 bg-pink-1-05 text-pink-1"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          View All{" "}
                          {filterOptionAsia == "tour" ? "Tours" : "Attractions"}
                          <div className="icon-arrow-top-right ml-15" />
                        </Link>
                      </div>
                    </p>
                  </div>
                </div>
                <div className="col-auto tabs -pills-2 ">
                  <FilterTabsHotelsForContinent
                    filter={filterOptionAsia}
                    setFilter={setFilterOptionAsia}
                  />
                </div>
                <div className="relative overflow-hidden pt-40 sm:pt-20">
                  <div className="row y-gap-30">
                    <FilterTabContentContinent
                      loading={destinationLoading}
                      error={destinationError}
                      dataToRender={
                        filterOptionAsia == "tour"
                          ? tourData?.getTours?.filter(
                              (el) =>
                                el.destination.continent == "Asia" &&
                                el.destination.country != "India"
                            )
                          : attractionData?.getAttractions?.filter(
                              (el) =>
                                el.destination.continent == "Asia" &&
                                el.destination.country != "India"
                            )
                      }
                      filter={filterOptionAsia}
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className=" d-none sm:d-block sectionTitle__text mt-5 sm:mt-0">
              {/* Our best selling {filterOption} */}
              <div className="col-auto ml-auto">
                <Link
                  href={
                    filterOptionAsia == "tour"
                      ? "/tours?continent=Asia"
                      : "/attractions?continent=Asia"
                  }
                  className="button -md  bg-pink-1 text-white"
                >
                  View All{" "}
                  {filterOptionAsia == "tour"
                    ? "Tours in Asia"
                    : "Attractions in Asia"}
                  <div className="icon-arrow-top-right ml-15" />
                </Link>
              </div>
            </p>
          </section>
        </>
      ) : (
        ""
      )}
      {/* DESTINATIONS WE LOVE */}
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Destinations we love</h2>
              </div>
            </div>
          </div>

          <div className="tabs -pills pt-40 js-tabs">
            <DestinationsWeLove />
          </div>
        </div>
      </section>
      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Home_1), { ssr: false });
