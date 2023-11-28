import dynamic from "next/dynamic";
import CallToActions from "../../components/common/CallToActions";
import Seo from "../../components/common/Seo";
import DefaultHeader from "../../components/header/default-header";
import DefaultFooter from "../../components/footer/default";
import Tours from "../../components/tours/Tours";
import { useData } from "../../lib/datacontext";
import Activity from "../../components/activity/Activity";

const AllAttractions = () => {
  const { attractionData, attractionLoading, attractionError } = useData();

  return (
    <>
      <Seo pageTitle="Tours" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <section className="layout-pt-md layout-pb-md" data-aos="fade-up">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">All Attractions</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular attractions have a lot to offer
                </p>
              </div>
            </div>
          </div>

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
          {attractionData ? (
              <Activity attractions={attractionData.getAttractions} />
            ) : (
              <h2 className="text-center">No Attractions</h2>
            )}
          </div>
        </div>
        {/* End .container */}
      </section>

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(AllAttractions), { ssr: false });
