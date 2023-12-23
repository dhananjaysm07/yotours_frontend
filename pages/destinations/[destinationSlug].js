import dynamic from "next/dynamic";
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
import { GET_DESTINATION } from "../../graphql/query";
import { useQuery } from "@apollo/client";
import { useData } from "../../lib/datacontext";
import Things from "../../components/things/Things";
const Destinations = () => {
  const router = useRouter();
  const { query } = router;
  const { id, destinationSlug } = query;

  const { destinationData, tourData, attractionData, thingsData } = useData();

  console.log(destinationData);
  // Assuming destinationData and tourData contain arrays of destinations and tours respectively
  const destination = destinationData?.getDestinations?.find(
    (dest) => dest.id === id
  );
  const tours = tourData?.getTours?.filter(
    (tour) => tour.destination.id === id
  );
  const attractions = attractionData?.getAttractions?.filter(
    (attraction) => attraction.destination.id === id
  );
  const things = thingsData?.getThings?.filter(
    (thing) => thing.destination.id === id
  );

  if (!destination) return <p>Destination not found.</p>;
  return (
    <>
      <Seo pageTitle="Destinations" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <LocationTopBar props={destination} />
      {/* End location top bar section */}

      <section className="layout-pb-md">
        <div className="container">
          <div className="row">
            <Banner props={destination} />
          </div>
          {/* End .row */}

          {/* <div className="row x-gap-20 y-gap-20 items-center pt-20 item_gap-x10">
            <Categories />
          </div> */}
          {/* End .row */}

          {/* <div className="row y-gap-20 pt-40">
            <div className="col-auto">
              <h2>What to know before visiting London</h2>
            </div>

            <IntroTown />
          </div>

          <div className="pt-30 mt-30 border-top-light" />

          <div className="row y-gap-20">
            <div className="col-12">
              <h2 className="text-22 fw-500">Local weather</h2>
            </div>

            <Weather />
          </div> */}

          <div className="pt-30 mt-30 border-top-light" />
          <div className="row y-gap-20">
            <div className="col-12">
              <h2 className="text-22 fw-500">General info</h2>
            </div>
            {/* End .col */}
            <GeneralInfo />
          </div>
          {/* End .row */}
          <div className="mt-30 border-top-light" />
          {/* border separation */}
        </div>
        {/* End .container */}
      </section>
      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Best Things</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These are the best things available for{" "}
                  {destination.destinationName}
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            {things ? (
              <Things things={things} />
            ) : (
              <h2 className="text-center">No Things</h2>
            )}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Most Popular Tours</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These are the popular tours for {destination.destinationName}
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

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            {tours ? (
              <Tours tours={tours} />
            ) : (
              <h2 className="text-center">No Tours</h2>
            )}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Tours Sections */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Trending Attraction Tickets
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Following are the attraction tickets for{" "}
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

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            {attractions ? (
              <Activity attractions={attractions} />
            ) : (
              <h2 className="text-center">No Attractions</h2>
            )}
          </div>
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

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Destinations), { ssr: false });
