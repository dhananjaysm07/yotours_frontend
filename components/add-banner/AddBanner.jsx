import Image from "next/image";
import Link from "next/link";
import { useData } from "../../lib/datacontext";

const AddBanner = () => {

  const { contentData, contentLoading, contentError } = useData();

  // const addContent = [
  //   {
  //     id: 1,
  //     img: "/img/backgrounds/1.png",
  //     title: (
  //       <>
  //         Things To Do On
  //         <br /> Your Trip
  //       </>
  //     ),
  //     meta: "",
  //     routerPath: "/",
  //     delayAnimation: "0",
  //   },
  //   {
  //     id: 2,
  //     img: "/img/backgrounds/2.png",
  //     title: "Up to 70% Discount!",
  //     meta: "Enjoy Summer Deals",
  //     routerPath: "/",
  //     delayAnimation: "100",
  //   },
  // ];

  if (contentLoading) return <p>Loading content...</p>;
  if (contentError) return <p>Error loading content</p>;

  const rightImage = contentData.getContent.rightDiscountImage;
  const leftImage = contentData.getContent.leftDiscountImage;


  return (
    <>
     
        <div
          className="col-md-6"
          data-aos="fade-up"
          data-aos-delay={0}
        >
          <div className="ctaCard -type-1 rounded-4 ">
            <div className="ctaCard__image ratio ratio-63:55">
              <Image
                width={636}
                height={555}
                className="img-ratio js-lazy loaded"
                src={leftImage}
                alt="image"
              />
            </div>
            {/* <div className="ctaCard__content py-70 px-70 lg:py-30 lg:px-30">
              {item.meta ? (
                <>
                  <div className="text-15 fw-500 text-white mb-10">
                    Enjoy Summer Deals
                  </div>
                </>
              ) : (
                ""
              )}

              <h4 className="text-40 lg:text-26 text-white">{item.title}</h4>
              <div className="d-inline-block mt-30">
                <Link
                  href={item.routerPath}
                  className="button px-48 py-15 -blue-1 -min-180 bg-white text-dark-1"
                >
                  Learn More
                </Link>
              </div>
            </div> */}
          </div>
        </div>
        <div
          className="col-md-6"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="ctaCard -type-1 rounded-4 ">
            <div className="ctaCard__image ratio ratio-63:55">
              <Image
                width={636}
                height={555}
                className="img-ratio js-lazy loaded"
                src={rightImage}
                alt="image"
              />
            </div>
            {/* <div className="ctaCard__content py-70 px-70 lg:py-30 lg:px-30">
              {item.meta ? (
                <>
                  <div className="text-15 fw-500 text-white mb-10">
                    Enjoy Summer Deals
                  </div>
                </>
              ) : (
                ""
              )}

              <h4 className="text-40 lg:text-26 text-white">{item.title}</h4>
              <div className="d-inline-block mt-30">
                <Link
                  href={item.routerPath}
                  className="button px-48 py-15 -blue-1 -min-180 bg-white text-dark-1"
                >
                  Learn More
                </Link>
              </div>
            </div> */}
          </div>
        </div>
     
    </>
  );
};

export default AddBanner;
