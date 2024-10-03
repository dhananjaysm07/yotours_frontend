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
import AddBanner from "../../components/add-banner/AddBanner";
import DestinationsWeLove from "../../components/home/home-1/DestinationsWeLove";
import Europe from "./../../components/destinationGroup/Europe";
import Asia from "../../components/destinationGroup/Asia";
import India from "../../components/destinationGroup/India";
import CookieConsent from "react-cookie-consent";
const Home_1 = () => {
  const { filterOption } = useFilterStore();

  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="myAwesomeCookieName2"
        style={{ background: "rgb(201, 48, 95)" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        buttonClasses="tabs__button text-14 fw-500 px-20 py-10 rounded-4 bg-light-2 js-tabs-button"
        enableDeclineButton={true}
        declineButtonClasses="tabs__button text-14 fw-500 px-20 py-10 rounded-4 bg-light-2 js-tabs-button"
        declineButtonStyle={{ color: "red", fontSize: "13px" }}
      >
        This website uses cookies to enhance the user experience.{" "}
      </CookieConsent>
      <Seo pageTitle="Home" />
      {/* End Page Title */}

      <Header1 />
      {/* End Header 1 */}

      <Hero1 />
      {/* End Hero 1 */}

      {/* 


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
