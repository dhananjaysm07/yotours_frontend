import dynamic from "next/dynamic";
import CallToActions from "../../components/common/CallToActions";
import Seo from "../../components/common/Seo";
import DefaultHeader from "../../components/header/default-header";
import DefaultFooter from "../../components/footer/default";
import Tours from "../../components/tours/Tours";
import { useData } from "../../lib/datacontext";

const AllTours = () => {
  const { tourData, tourLoading, tourError } = useData();
  if (tourLoading) return <p>Loading...</p>;
  if (tourError) return <p>Error: {tourError.message}</p>;
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
                <h2 className="sectionTitle__title">All Tours</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular Tours have a lot to offer
                </p>
              </div>
            </div>
          </div>

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            {tourData ? (
              <Tours tours={tourData.getTours} />
            ) : (
              <h2 className="text-center">No Tours</h2>
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

export default dynamic(() => Promise.resolve(AllTours), { ssr: false });
