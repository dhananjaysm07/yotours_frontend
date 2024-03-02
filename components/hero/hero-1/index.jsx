import { useData } from "../../../lib/datacontext";
import MainFilterSearchBox from "./MainFilterSearchBox";

const Index = () => {
  const { contentData, contentLoading, contentError } = useData();
  //handle error
  if (contentError) {
    return <div>failed to load</div>;
  }
  //handle loading
  if (contentLoading) {
    return <div>loading...</div>;
  }

  //firebase

  return (
    <section className="masthead -type-1 z-5">
      <div className="masthead__bg">
        <img
          alt="image"
          src={
            contentData
              ? contentData.getContent.heroImage
              : "/img/masthead/1/bg.webp"
          }
          className="js-lazy"
          //Opacity to modify
          //TODO:
        />
      </div>
      <div className="container">
        <div className="row justify-center">
          <div className="col-auto">
            <div className="text-center">
              <h1
                className="text-60 lg:text-40 md:text-30 text-white"
                data-aos="fade-up"
              >
                {contentData.getContent
                  ? contentData.getContent.heroHeading
                  : "Find Next Place To Visit"}
              </h1>
              <p
                className="text-white mt-6 md:mt-10 text-25"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {contentData.getContent
                  ? contentData.getContent.heroSubheading
                  : "Discover amzaing places at exclusive deals"}
              </p>
            </div>
            {/* End hero title */}

            <div
              className="tabs -underline mt-60 js-tabs"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <MainFilterSearchBox />
            </div>
            {/* End tab-filter */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
