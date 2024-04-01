import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import PopularDestinations from "../../components/destinations/PopularDestinations";
import DefaultFooter from "../../components/footer/default";
import Header1 from "../../components/header/header-1";
import Hero1 from "../../components/hero/hero-1";
import BlockGuide from "../../components/block/BlockGuide";
import CallToActions from "../../components/common/CallToActions";
// import FilterHotelsTabs from "../../components/hotels/filter-tabs/FilterHotelsTabs";
import Link from "next/link";
// import FilterTabContent from "../../components/hotels/FilterTabContent";
import { useFilterStore } from "../../lib/store";
import { useData } from "../../lib/datacontext";
import React from "react";
import FilterTabsHotelsForContinent from "../../components/hotels/filter-tabs/FilterHotelsContinent";
import FilterTabContentContinent from "../../components/hotels/FilterTabContentContinent";
import AddBanner from "../../components/add-banner/AddBanner";
import DestinationsWeLove from "../../components/home/home-1/DestinationsWeLove";
import Europe from "./../../components/destinationGroup/Europe";
import Asia from "../../components/destinationGroup/Asia";
import India from "../../components/destinationGroup/India";
const Home_1 = () => {
  const { filterOption } = useFilterStore();
  // const { destinationData, destinationLoading, destinationError } = useData();
  // const { attractionData, attractionLoading, attractionError } = useData();
  // const { tourData, tourLoading, tourError } = useData();
  // React.useState(() => {
  //   if (destinationData?.getDestinations?.length) {
  //     setDestinations(destinationData.getDestinations);
  //   }
  // }, [destinationData]);

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
      <Europe />
      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between">
            <BlockGuide />
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row y-gap-20">
            <AddBanner />
          </div>
        </div>
      </section>
      {/* ////////////////////////////////Start of India/////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <India />

      {/* //////////////////////////////////////////End of India///////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}

      <Asia />
      {/* DESTINATIONS WE LOVE */}
      <section className="layout-pt-md layout-pb-md">
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
      {/* <CallToActions /> */}
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Home_1), { ssr: false });
