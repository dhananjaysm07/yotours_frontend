import Image from "next/image";

const WhyChoose = () => {
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
      {blockContent.map((item) => (
        <div
          className="col-lg-3 col-sm-6"
          key={item.id}
          data-aos="fade"
          data-aos-delay={item.delayAnimation}
        >
          <div className="featureIcon -type-1 ">
            <div className="d-flex justify-center">
              <Image
                width={70}
                height={70}
                src={item.icon}
                alt="image"
                className="js-lazy"
              />
            </div>
            <div className="text-center mt-30">
              <h4 className="text-18 fw-500">{item.title}</h4>
              <p className="text-15 mt-10">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WhyChoose;
