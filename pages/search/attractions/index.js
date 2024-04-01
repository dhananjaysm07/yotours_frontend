import dynamic from "next/dynamic";
import CallToActions from "../../../components/common/CallToActions";
import Seo from "../../../components/common/Seo";
import DefaultHeader from "../../../components/header/default-header";
import DefaultFooter from "../../../components/footer/default";
import { useSearchStore } from "../../../lib/store";
import { useData } from "../../../lib/datacontext";
import { useEffect } from "react";
import { useState } from "react";
import Activity from "../../../components/activity/Activity";

const AllAttractions = () => {
  const { attractionData, attractionLoading, attractionError } = useData();

  const [filteredAttractions, setFilteredAttractions] = useState([])
  // Here you would implement your filtering logic based on the state
  const { destinationId } = useSearchStore();

  const filterAttractionsData = (attractionData, destinationId) => {
    return attractionData.filter((attraction) => {
      return attraction.destination.id === destinationId;
      // Add more conditions based on guestCounts, dates, etc.
    });
  };

  useEffect(() => {
    if (attractionData && !attractionLoading && !attractionError) {
      setFilteredAttractions(filterAttractionsData(attractionData.getAttractions, destinationId));
    }
  }, [attractionData, attractionLoading, attractionError]);

  if (attractionLoading) {
    return <>Loading...</>;
  }

  if (attractionError) {
    return <>Error loading tours: {tourError.message}</>;
  }

  return (
    <>
      <Seo pageTitle="Tours" />
      <div className="header-margin"></div>
      <DefaultHeader />
      <section className="layout-pt-md layout-pb-md" data-aos="fade-up">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Best Matches</h2>
                <p className="sectionTitle__text mt-5 sm:mt-0">
                  These popular Attractions have a lot to offer
                </p>
              </div>
            </div>
          </div>
          <div className="relative pt-40 sm:pt-20">
            <Activity attractions={filteredAttractions} />
          </div>
        </div>
      </section>
      {/* <CallToActions /> */}
      <DefaultFooter />
    </>
  );
};
export default dynamic(() => Promise.resolve(AllAttractions), { ssr: false });
