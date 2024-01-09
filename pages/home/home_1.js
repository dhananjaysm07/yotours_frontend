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

const Home_1 = () => {
  const { filterOption } = useFilterStore();
  const { destinationData, destinationLoading, destinationError } = useData();
  console.log("api server RUNNING", process.env.NEXT_PUBLIC_API_URL);
  console.log("destination data", destinationData);
  const [destinationGroup, setDestinationGroup] = React.useState({});
  React.useEffect(() => {
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

      <section className="layout-pt-lg layout-pb-md" data-aos="fade-up">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Popular Destinations </h2>
                {/* <h2 className="sectionTitle__title">Popular Destinations in {el}</h2> */}

                {/* <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p> */}
              </div>
            </div>
            {/* End col-auto */}

            <div className="col-auto md:d-none">
              <Link
                href="/destinations"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                View All Destinations
                <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}
          {Object.keys(destinationGroup).map((el, index) => {
            return (
              <>
                {" "}
                <div className="relative pt-40 sm:pt-20">
                  
                  <PopularDestinations
                    popularDestinations={destinationGroup[el]}
                    destinationError={destinationError}
                    destinationLoading={destinationLoading}
                    id={index + 1}
                  />

                  {/* <PopularDestinations /> */}
                </div>
              </>
            );
          })}
        </div>
        {/* End .container */}
      </section>
      {/* End Popular Destinations */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-between">
            <BlockGuide />
          </div>
        </div>
      </section>
      {/* Block Guide Section */}

      {/* COUPON SECTION */}

      <section className="layout-pt-md layout-pb-lg">
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
            {/* End .col-auto */}

            <div className="col-auto tabs -pills-2 ">
              <FilterHotelsTabs />
            </div>
            {/* End .col-auto */}
          </div>
          {/* End .row */}

          <div className="relative overflow-hidden pt-40 sm:pt-20">
            <div className="row y-gap-30">
              <FilterTabContent />
            </div>
          </div>
          {/* End relative */}
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
