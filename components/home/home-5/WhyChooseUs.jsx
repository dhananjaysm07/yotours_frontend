import Image from "next/image";

const WhyChooseUs = () => {
  const blockContent = [
    {
      id: 1,
      icon: "/img/featureIcons/1/1.svg",
      title: "We are Tour Operators",
      text: `Yo Tour’s creative team designs and operates own tours to offer you best local experience `,
      delayAnim: "100",
    },
    {
      id: 2,
      icon: "/img/featureIcons/1/2.svg",
      title: "Instant Confirmation & Lowest Price",
      text: `Quickly and easily book tours and tickets online at lowest rates`,
      delayAnim: "200",
    },
    {
      id: 3,
      icon: "/img/featureIcons/1/3.svg",
      title: "Tours & Attraction Tickets in 100+ Cities Globally",
      text: `Enjoy tours in Europe, India, Dubai, Thailand, Bali, Singapore & more destinations`,
      delayAnim: "300",
    },
  ];

  return (
    <>
      <div className="section-bg__item -right -image col-5 md:mb-60 sm:mb-40">
        <Image
          width={450}
          height={350}
          src="/img/backgrounds/5.png"
          alt="image"
        />
      </div>
      {/* End right video popup icon with image */}

      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-md-7">
            <h2 className="text-30 fw-600">Why be a Local Expert</h2>
            <p className="mt-5">
              These popular destinations have a lot to offer
            </p>
            <div className="row y-gap-30 pt-60 md:pt-40">
              {expertContent.map((item) => (
                <div className="col-12" key={item.id}>
                  <div className="d-flex pr-30">
                    <Image
                      width={50}
                      height={50}
                      className="size-50"
                      src={item.icon}
                      alt="image"
                    />
                    <div className="ml-15">
                      <h4 className="text-18 fw-500">{item.title}</h4>
                      <p className="text-15 mt-10">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* End left local expert content */}
    </>
  );
};

export default WhyChooseUs;
