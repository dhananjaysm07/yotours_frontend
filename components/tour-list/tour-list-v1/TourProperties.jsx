import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import toursData from "../../../data/tours";
import Link from "next/link";
import { useData } from "../../../lib/datacontext";
import { useTourPaginationStore } from "../../../lib/store";
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_FILTERED_TOURS } from "../../../graphql/query";
// import { filter } from "../../../data/footerContent";
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
    setIsLoading(false);
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
  // console.log("toour data", tourData);
  // console.log(currentPage, dataPerPage);
  return (
    <>
      {tourList
        ?.slice((currentPage - 1) * dataPerPage, currentPage * dataPerPage)
        .map((item, index) => (
          <div
            className="col-12"
            key={item?.id}
            data-aos="fade"
            data-aos-delay={(index + 1) * 100}
          >
            <div className="border-top-light pt-30">
              <div className="row x-gap-20 y-gap-20">
                <div className="col-md-auto">
                  <div className="cardImage ratio ratio-1:1 w-250 md:w-1/1 rounded-4">
                    <div className="cardImage__content custom_inside-slider">
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
                    {/* End .cardImage__content */}

                    <div className="cardImage__wishlist">
                      <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                        <i className="icon-heart text-12" />
                      </button>
                    </div>
                    {/* End .cardImage__wishlist */}
                  </div>
                  {/* End cartImage */}
                </div>
                {/* End .col-auto */}

                <div className="col-md">
                  <div className="row x-gap-10 items-center">
                    <div className="col-auto">
                      <p className="text-14 lh-14 mb-5">
                        {item?.duration}+ hours
                      </p>
                    </div>
                    {/* End col-auto */}

                    <div className="col-auto">
                      <div className="size-3 rounded-full bg-light-1 mb-5"></div>
                    </div>
                    {/* End col-auto */}

                    <div className="col-auto">
                      <p className="text-14 lh-14 mb-5">{item?.tourType}</p>
                    </div>
                    {/* End col-auto */}
                  </div>
                  {/* End .row */}
                  <h3 className="text-18 lh-16 fw-500">
                    {item?.tourTitle} <br />
                    {/* London with Guided Cathedral Tour */}
                  </h3>
                  <p className="text-14 lh-14 mt-5">
                    {item?.destination?.destinationName}
                  </p>
                  <div className="text-14 lh-15 fw-500 mt-20">
                    Taking safety measures
                  </div>
                  <div className="text-14 text-green-2 fw-500 lh-15 mt-5">
                    Free cancellation
                  </div>
                </div>
                {/* End col-md */}

                <div className="col-md-auto text-right md:text-left">
                  <div className="d-flex x-gap-5 items-center justify-end md:justify-start">
                    <i className="icon-star text-10 text-yellow-1"></i>
                    <i className="icon-star text-10 text-yellow-1"></i>
                    <i className="icon-star text-10 text-yellow-1"></i>
                    <i className="icon-star text-10 text-yellow-1"></i>
                    <i className="icon-star text-10 text-yellow-1"></i>
                  </div>

                  {/* <div className="text-14 lh-14 text-light-1 mt-10">
                    {item?.numberOfReviews} reviews
                  </div> */}

                  <div className="text-14 text-light-1 mt-50 md:mt-20">
                    From
                  </div>
                  <div className="text-22 lh-12 fw-600 mt-5">
                    {item?.currency} {item?.price}
                  </div>
                  <div className="text-14 text-light-1 mt-5">per adult</div>

                  <div
                    // href={`/tour/tour-single/${item.id}`}
                    // className=""
                    style={{ cursor: "pointer" }}
                    className="bokunButton tourCard -type-1 rounded-4 hover-inside-slider button -md -dark-1 bg-blue-1 text-white mt-24"
                    //  data-src={`https://widgets.bokun.io/online-sales/3bdde112-69ab-4048-8c0e-db68a5080978/experience/795431`}
                    data-src={`https://widgets.bokun.io/online-sales/${contentData?.getContent.bokunChannelId}/experience/${item.tourBokunId}?partialView=1`}
                  >
                    View Detail{" "}
                    <div className="icon-arrow-top-right ml-15"></div>
                  </div>
                </div>
                {/* End col-md */}
              </div>
              {/* End .row */}
            </div>
            {/* End border-top */}
          </div>
        ))}
    </>
  );
};

export default TourProperties;
