import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import toursData from "../../../data/tours";
import isTextMatched from "../../../utils/isTextMatched";
import { useData } from "../../../lib/datacontext";
import { useTourPaginationStore } from "../../../lib/store";
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_FILTERED_TOURS } from "../../../graphql/query";
const TourProperties = ({ filter }) => {
  const {
    contentData,
    refetch,
    tourFilteredData,
    tourFilteredError,
    tourFilteredLoading,
  } = useData();
  const [isLoading, setIsLoading] = React.useState(false);

  const {
    setTourPaginationData,
    currentPage,
    dataPerPage,
    loadCount,
    totalPageLoaded,
    setCurrentPage,
    setTourData,
    tourList,
    totalResult,
  } = useTourPaginationStore();

  const handleRefetchData = async () => {
    const dataNew = await refetch({
      page: totalPageLoaded + 1,
      loadCount,
      filter,
    });
    // console.log("data new", dataNew);
    // console.log("new data", dataNew?.data?.getFilteredTours?.tours);
    setIsLoading(dataNew.loading);
    // if (dataNew?.data?.getFilteredTours) {
    //   setIsLoading(false);
    // } else {
    //   setTimeout(() => {
    //     setIsLoading(false);
    //   }, 2000);
    // }
    setTourData(dataNew?.data?.getFilteredTours?.tours, totalPageLoaded + 1);
  };

  const handleRefetchDataForFirstTime = async () => {
    setIsLoading(true);
    const dataNew = await refetch({
      page: 1,
      loadCount,
      filter,
    });
    // console.log("new data", dataNew?.data?.getFilteredTours?.tours);
    setIsLoading(dataNew.loading);
    setTourPaginationData(
      Math.ceil(dataNew?.data?.getFilteredTours?.totalCount / dataPerPage),
      1, ///current page
      1, ////page loaded from api
      dataNew?.data?.getFilteredTours?.totalCount,
      dataNew?.data?.getFilteredTours?.tours
    );
  };

  React.useEffect(() => {
    // console.log("inside use effect");
    // console.log(
    //   "total result",
    //   totalResult,
    //   currentPage * dataPerPage < totalResult,
    //   currentPage * dataPerPage >= loadCount * totalPageLoaded,
    //   currentPage,
    //   totalPageLoaded
    // );
    if (currentPage == 0) {
      // console.log("called for the first tiime😚", filter);
      handleRefetchDataForFirstTime();
    } else if (
      currentPage * dataPerPage >= loadCount * totalPageLoaded &&
      // currentPage * dataPerPage < totalResult &&
      currentPage != 0
      // !isLoading
    ) {
      handleRefetchData();
    }
  }, [currentPage]);

  React.useEffect(() => {
    setTourPaginationData(0, 0, 0, 0, []);
  }, [filter]);
  // console.log("tour list", tourList);
  React.useEffect(() => {
    const bokunChannelId = contentData?.getContent.bokunChannelId;
    if (bokunChannelId) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=${bokunChannelId}`;
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }

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
  if (isLoading) return <p>Loading...</p>;
  if (tourFilteredError) return <p>Error: {tourFilteredError.message}</p>;
  console.log("tour list", tourList);
  return (
    <>
      {tourList
        ?.slice((currentPage - 1) * dataPerPage, currentPage * dataPerPage)
        .map((item, index) => (
          <div
            className="col-lg-4 col-sm-6"
            key={item?.id}
            data-aos="fade"
            data-aos-delay={(index + 1) * 100}
          >
            <Link
              href={`/tour/tour-single/${item.id}`}
              className="tourCard -type-1 rounded-4 position-relative"
            >
              <div className="tourCard__image">
                <div className="cardImage ratio ratio-2:1">
                  <div className="cardImage__content">
                    <div className="cardImage-slider rounded-4 overflow-hidden custom_inside-slider">
                      <Swiper
                        className="mySwiper"
                        modules={[Pagination, Navigation]}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={true}
                      >
                        {item?.images?.map((slide, i) => (
                          <SwiperSlide key={i}>
                            <Image
                              width={300}
                              height={300}
                              className="rounded-4 col-12 js-lazy"
                              src={slide.imageUrl}
                              alt="image"
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                </div>

                <div className="cardImage__wishlist">
                  <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                    <i className="icon-heart text-12" />
                  </button>
                </div>

                {item?.tag?.name ? (
                  <div className="cardImage__leftBadge">
                    <div
                      className={`py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase ${
                        isTextMatched(item?.tag?.name, "Big Sale")
                          ? "bg-dark-1 text-white"
                          : ""
                      } ${
                        isTextMatched(item?.tag?.name, "Top Selling Tours")
                          ? "bg-blue-1 text-white"
                          : ""
                      }  ${
                        isTextMatched(item?.tag?.name, "top rated")
                          ? "bg-yellow-1 text-dark-1"
                          : ""
                      }`}
                    >
                      {item?.tag?.name}
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              {/* End .tourCard__image */}

              <div className="tourCard__content mt-10">
                <div className="d-flex items-center lh-14 mb-5">
                  <div className="text-14 text-light-1">
                    {/* {item?.duration}+ hours */}
                  </div>
                  <div className="size-3 bg-light-1 rounded-full ml-10 mr-10" />
                  <div className="text-14 text-light-1">{item?.tourType}</div>
                </div>
                <h4 className="tourCard__title text-dark-1 text-18 lh-16 fw-500">
                  <span> {item?.tourTitle}</span>
                </h4>
                <p className="text-light-1 lh-14 text-14 mt-5">
                  {item?.location}
                </p>

                <div className="row justify-between items-center pt-15">
                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <div className="d-flex items-center x-gap-5">
                        <div className="icon-star text-yellow-1 text-10" />
                        <div className="icon-star text-yellow-1 text-10" />
                        <div className="icon-star text-yellow-1 text-10" />
                        <div className="icon-star text-yellow-1 text-10" />
                        <div className="icon-star text-yellow-1 text-10" />
                      </div>
                      {/* End ratings */}

                      {/* <div className="text-14 text-light-1 ml-10">
                        {item?.numberOfReviews} reviews
                      </div> */}
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="text-14 text-light-1">
                      From
                      <span className="text-16 fw-500 text-dark-1">
                        {" "}
                        {item?.currency} {item?.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </>
  );
};

export default TourProperties;
