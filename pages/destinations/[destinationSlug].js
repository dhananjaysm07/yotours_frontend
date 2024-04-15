import dynamic from "next/dynamic";
import React, { useState } from 'react';
import Loader from "../../components/common/loader"
import { FaChevronDown , FaChevronUp  } from 'react-icons/fa';
import CallToActions from "../../components/common/CallToActions";
import Seo from "../../components/common/Seo";
import DefaultHeader from "../../components/header/default-header";
import DefaultFooter from "../../components/footer/default";
import Faq from "../../components/faq/Faq";
import Link from "next/link";
import LocationTopBar from "../../components/common/LocationTopBar";
import Banner from "../../components/destinations/components/Banner";
import GeneralInfo from "../../components/destinations/components/GeneralInfo";
import Tours from "../../components/tours/Tours";
import Activity from "../../components/activity/Activity";
import { useRouter } from "next/router";
// import { GET_DESTINATION } from "../../graphql/query";
import { useQuery } from "@apollo/client";
import { useData } from "../../lib/datacontext";
import Things from "../../components/things/Things";
import IntroTown from "../../components/destinations/components/IntroTown";
import Categories from "../../components/destinations/components/Categories";
import ActivityCar from "../../components/activity/ActivityCar";
import {
  GET_ATTRACTION_CARS_FOR_DESTINATION,
  GET_DESTINATION,
  GET_SINGLE_DESTINATION,
  GET_THINGS_FOR_DESTINATION,
  GET_TOUR_FOR_DESTINATION,
} from "../../graphql/singleQuery";
import LoadingDestinationBanner from "../../components/Loading/LoadingDestinationBanner";

const Destinations = () => {
  const router = useRouter();
  const { query } = router;
  const { destinationSlug, city } = query;

  const {
    data: destinationData,
    loading: destinationLoading,
    error: destinationError,
  } = useQuery(GET_DESTINATION, {
    variables: { destinationName: city },
  });

  const {
    data: tourData,
    loading: tourLoading,
    error: tourError,
  } = useQuery(GET_TOUR_FOR_DESTINATION, {
    variables: { destinationName: city },
  });

  const {
    data: thingData,
    loading: thingLoading,
    error: thingError,
  } = useQuery(GET_THINGS_FOR_DESTINATION, {
    variables: { destinationName: city },
  });

  const {
    data: attraction_cars_Data,
    loading: attractionLoading,
    error: attractionError,
  } = useQuery(GET_ATTRACTION_CARS_FOR_DESTINATION, {
    variables: { destinationName: city },
  });
  const destination = destinationData?.getDestinationByCity;
  const tour = tourData?.getDestinationByCity;
  const attraction_car = attraction_cars_Data?.getDestinationByCity;
  const thing = thingData?.getDestinationByCity;
  const [expandedSections, setExpandedSections] = useState({
    introduction: false,
    generalInfo: false,
    bestThings: false
  });
  const [visibleTours, setVisibleTours] = useState(8);
  const [loading, setLoading] = useState(false); 

  const handleLoadMore = () => {
    setLoading(true); 
    setTimeout(() => {
      setVisibleTours(prevCount => prevCount + 8);
      setLoading(false);
    }, 500);
  };

  const allTours = tour?.tours?.filter(el => el.active) || [];
  const toggleSection = (section) => {
    setExpandedSections(prevState => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };
  return (
    <>
      <Seo pageTitle="Destinations" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      {/* End location top bar section */}

      {/* 

Dynamic Tours, Attractions fetching with pagination logic in slider
TODO:


*/}
      {destination ? (
        <>
          <LocationTopBar props={destination} />
          <section className="layout-pb-sm">
            <div className="container">
              <div className="row">
                <Banner props={destination} />
              </div>
              {/* End .row */}

              <div className="row x-gap-20 y-gap-20 items-center pt-20 item_gap-x10 destination_cat">
                <Categories />
              </div>
              {/* End .row */}
              {destination?.introduction ? (
                <div className="row y-gap-20 pt-20">
                  <div className="col-auto">
                  <h2 onClick={() => toggleSection('introduction')} className="expand">
                     What to know before visiting {destination.destinationName} {expandedSections.introduction ? <FaChevronUp /> : <FaChevronDown />} 
                  </h2>
                  </div>
                  {expandedSections.introduction && <IntroTown introduction={destination?.introduction} />}
                </div>
              ) : (
                ""
              )}

              {/* <div className="pt-30 mt-30 border-top-light" /> */}
              {/* 
          <div className="row y-gap-20">
            <div className="col-12">
              <h2 className="text-22 fw-500">Local weather</h2>
            </div>

            <Weather />
          </div> */}

              <div className="pt-30 mt-45 border-top-light" />
              <div className="row y-gap-20">
                <div className="col-12">
                <h2 onClick={() => toggleSection('generalInfo')} className="expand">
                        General info {expandedSections.generalInfo ? <FaChevronUp /> : <FaChevronDown />}   
                </h2>                
                </div>
                {/* End .col */}
                {expandedSections.generalInfo && <GeneralInfo destination={destination} />}
              </div>
              {/* End .row */}
              <div className="mt-30 border-top-light" />
              {/* border separation */}
            </div>
            {/* End .container */}
          </section>
          <section className="layout-pb-sm">
            <div className="container">
              <div className="row y-gap-20 justify-between items-end">
                <div className="col-auto">
                  <div className="sectionTitle -md">
                  <h2 onClick={() => toggleSection('bestThings')} className="sectionTitle__title expand">
                        Best Things{expandedSections.bestThings ? <FaChevronUp  /> : <FaChevronDown />}
                  </h2>                    
                    
                  </div>
                </div>
              </div>
              {/* End .row */}

              {expandedSections.bestThings &&
              <div className="row y-gap-30 pt-0 sm:pt-20 item_gap-x30">
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                      These are the best things available for{" "}
                      {destination.destinationName}
                    </p>
                {thing?.things ? (
                  <Things things={thing?.things} />
                ) : (
                  <h2 className="text-center">No Things</h2>
                )}
              </div>
                }
              {/* End .row */}
            </div>
            {/* End .container */}
          </section>

          <section className="layout-pt-sm layout-pb-sm">
            <div className="container">
              <div className="row y-gap-20 justify-between items-end">
                <div className="col-auto">
                  <div className="sectionTitle -md">
                    <h2 className="sectionTitle__title">Most Popular Tours</h2>
                    <p className=" sectionTitle__text mt-5 sm:mt-0">
                      These are the popular tours for{" "}
                      {destination.destinationName}
                    </p>
                  </div>
                </div>
                {/* End .col */}

                {/* <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div> */}
                {/* End .col */}
              </div>
              {/* End .row */}

              <div className="row y-gap-30 pt-10 sm:pt-20 item_gap-x30">
                    <>
                          {allTours.length > 0 ? (
                            <>
                              <Tours tours={allTours.slice(0, visibleTours)} />
                              {allTours.length > visibleTours && (
                                <div className="show-more-container">
                                  {loading ? (
                                     <Loader />
                                  ) : (
                                    <button className="showmore" onClick={handleLoadMore}>Show More</button>
                                  )}
                                </div>
                              )}
                            </>
                          ) : (
                            <h2 className="text-center">No Tours</h2>
                          )}
                        </>
              </div>
              {/* End .row */}
            </div>
            {/* End .container */}
          </section>
          {/* End Tours Sections */}

          <section className="layout-pt-md layout-pb-md">
            <div className="container">
              <div className="row y-gap-20 justify-between items-end">
                {attraction_car?.attractions?.length ? (
                  <div className="col-auto">
                    <div className="sectionTitle -md">
                      <h2 className="sectionTitle__title">
                        Trending Attraction Tickets
                      </h2>
                      <p className=" sectionTitle__text mt-5 sm:mt-0">
                        Following are the attraction tickets for{" "}
                        {destination?.destinationName}
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {/* End .col */}

                {/* <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div> */}
                {/* End .col */}
              </div>
              {/* End .row */}
              {attraction_car?.attractions?.length ? (
                <div className="row y-gap-30 pt-10 sm:pt-20 item_gap-x30">
                  {attraction_car.attractions ? (
                    <Activity attractions={attraction_car.attractions} />
                  ) : (
                    <h2 className="text-center">No Attractions</h2>
                  )}
                </div>
              ) : (
                ""
              )}

              {attraction_car?.cars?.length ? (
                <div className="col-auto">
                  <div className="sectionTitle -md">
                    <h2 className="sectionTitle__title">Trending Cars</h2>
                    <p className=" sectionTitle__text mt-5 sm:mt-0">
                      Following are the cars for {destination.destinationName}
                    </p>
                  </div>
                </div>
              ) : (
                ""
              )}

              {attraction_car?.cars?.length ? (
                <div className="row y-gap-30 pt-10 sm:pt-20 item_gap-x30">
                  {attraction_car?.cars ? (
                    <ActivityCar attractions={attraction_car?.cars} />
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                ""
              )}
              {/* End .row */}
            </div>
            {/* End .container */}
          </section>
          {/* Trending Activity Sections */}

          {/* <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Top sights in London</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>

          <div className="row y-gap-30 pt-40">
            <Slights />
          </div>

          <div className="row justify-center mt-40">
            <div className="col-auto">
              <Link
                href="#"
                className="button h-50 w-250 -outline-blue-1 text-blue-1"
              >
                Explore more <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
          </div>
        </div>
      </section> */}
          {/* End Top sights in London */}

          {/* <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row y-gap-20">
            <div className="col-lg-4">
              <h2 className="text-30 fw-500">
                FAQs about
                <br />
                {destination.destinationName}
              </h2>
            </div>
            <div className="col-lg-8">
              <div className="accordion -simple row y-gap-20 js-accordion">
                <Faq />
              </div>
            </div>
          </div>
        </div>
      </section> */}
          {/* End Faq Section */}

          {/* <CallToActions /> */}
          {/* End Call To Actions Section */}
        </>
      ) : (
        <section className="layout-pb-sm">
          <div className="container">
            <div className="row">
              <LoadingDestinationBanner />
            </div>
          </div>
        </section>
      )}
      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Destinations), { ssr: false });
