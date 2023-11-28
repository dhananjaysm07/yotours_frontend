import dynamic from "next/dynamic";
import CallToActions from "../../../components/common/CallToActions";
import Seo from "../../../components/common/Seo";
import DefaultHeader from "../../../components/header/default-header";
import DefaultFooter from "../../../components/footer/default";
import Tours from "../../../components/tours/Tours";
import { useSearchStore } from "../../../lib/store";
import { useData } from "../../../lib/datacontext";
import { useEffect } from "react";
import { useState } from "react";

const SearchedTours = () => {
  const { selectFilteredTours } = useSearchStore();
  const { tourData, tourLoading, tourError } = useData();

  const [filteredTours, setFilteredTours] = useState([]);
  // Here you would implement your filtering logic based on the state
  const { destinationId } = useSearchStore();

  const filterTourData = (toursData, destinationId) => {
    return toursData.filter((tour) => {
      return tour.destination.id === destinationId;
      // Add more conditions based on guestCounts, dates, etc.
    });
  };

  useEffect(() => {
    if (tourData && !tourLoading && !tourError) {
      setFilteredTours(filterTourData(tourData.getTours, destinationId));
    }
  }, [tourData, tourLoading, tourError, selectFilteredTours]);

  if (tourLoading) {
    return <>Loading...</>;
  }

  if (tourError) {
    return <>Error loading tours: {tourError.message}</>;
  }
  console.log("Tourdata", tourData);
  console.log(filteredTours);

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
                  These popular Tours have a lot to offer
                </p>
              </div>
            </div>
          </div>
          <div className="relative pt-40 sm:pt-20">
            <Tours tours={filteredTours} />
          </div>
        </div>
      </section>
      <CallToActions />
      <DefaultFooter />
    </>
  );
};
export default dynamic(() => Promise.resolve(SearchedTours), { ssr: false });
