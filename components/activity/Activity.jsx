import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import activityData from "../../data/activity";
import isTextMatched from "../../utils/isTextMatched";
import { useEffect } from "react";
import { useData } from "../../lib/datacontext";

const Activity = ({ attractions }) => {
  const { contentData } = useData();
  useEffect(() => {
    const bokunChannelId = contentData?.getContent.bokunChannelId;

    console.log("Bokun Channel ID:", bokunChannelId);

    if (bokunChannelId) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=${bokunChannelId}`;
      script.async = true;

      console.log("Bokun Widget Script URL:", script.src);

      document.body.appendChild(script);

      return () => {
        // Cleanup script when the component unmounts
        document.body.removeChild(script);
      };
    }

    // Log a message if Bokun Channel ID is not available
    console.error("Bokun Channel ID is not available.");
  }, [contentData?.getContent.bokunChannelId]);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  var itemSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // custom navigation
  function Arrow(props) {
    let className =
      props.type === "next"
        ? "slick_arrow-between slick_arrow -next arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-next"
        : "slick_arrow-between slick_arrow -prev arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-prev";
    className += " arrow";
    const char =
      props.type === "next" ? (
        <>
          <i className="icon icon-chevron-right text-12"></i>
        </>
      ) : (
        <>
          <span className="icon icon-chevron-left text-12"></span>
        </>
      );
    return (
      <button className={className} onClick={props.onClick}>
        {char}
      </button>
    );
  }

  return (
    <>
      {/* <Slider {...settings}> */}
      <div className="relative overflow-hidden pt-40 sm:pt-20">
        <div className="row y-gap-30">
          {attractions.map((item) => (
            // <div key={item?.id} data-aos="fade" data-aos-delay={100}>
            <div
              className="col-xl-3 col-lg-3 col-sm-6"
              key={item?.id}
              data-aos="fade"
              data-aos-delay="100"
            >
              <div
                // target="_blank"
                // rel="noopener noreferrer"
                // href={item.tourHyperlink || "#"}
                // className="tourCard -type-1 rounded-4 hover-inside-slider"
                style={{ cursor: "pointer" }}
                className="bokunButton tourCard -type-1 rounded-4 hover-inside-slider"
                //  data-src={`https://widgets.bokun.io/online-sales/3bdde112-69ab-4048-8c0e-db68a5080978/experience/795431`}
                data-src={`https://widgets.bokun.io/online-sales/${contentData?.getContent.bokunChannelId}/experience/${item?.attractionBokunId}?partialView=1`}
              >
                <div className="activityCard__image position-relative">
                  <div className="inside-slider">
                    <Slider
                      {...itemSettings}
                      arrows={true}
                      nextArrow={<Arrow type="next" />}
                      prevArrow={<Arrow type="prev" />}
                    >
                      {item?.images?.map((slide, i) => (
                        <div className="cardImage ratio ratio-1:1" key={i}>
                          <div className="cardImage__content ">
                            <Image
                              width={300}
                              height={300}
                              className="col-12 js-lazy"
                              src={slide.imageUrl}
                              alt="image"
                            />
                          </div>
                        </div>
                      ))}
                    </Slider>

                    <div className="cardImage__wishlist">
                      <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                        <i className="icon-heart text-12" />
                      </button>
                    </div>

                    <div className="cardImage__leftBadge">
                      <div
                        className={`py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase ${
                          isTextMatched(item?.tag?.name, "trending")
                            ? "bg-dark-1 text-white"
                            : isTextMatched(item?.tag?.name, "best seller")
                            ? "bg-blue-1 text-white"
                            : isTextMatched(item?.tag?.name, "top rated")
                            ? "bg-yellow-1 text-dark-1"
                            : "bg-blue-1 text-white" // Add your default classes here
                        }`}
                      >
                        {item.tag?.name}
                      </div>
                    </div>
                  </div>
                </div>
                {/* End .tourCard__image */}

                <div className="activityCard__content mt-10">
                  <h4 className="activityCard__title lh-16 fw-500 text-dark-1 text-18">
                    <span>{item?.attractionTitle}</span>
                  </h4>
                  <p className="text-light-1 text-14 lh-14 mt-5">
                    {item?.location}
                  </p>

                  <div className="row justify-between items-center pt-10">
                    {item.price ? (
                      <div className="col-auto">
                        <div className="text-14 text-light-1">
                          From{" "}
                          <span className="text-16 fw-500 text-dark-1">
                            {item.currency || "US$"} {item.price}
                          </span>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* </Slider> */}
    </>
  );
};

export default Activity;
