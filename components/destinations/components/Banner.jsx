const Banner = ({ props }) => {
  return (
    <div className="col-12">
      <div className="relative d-flex">
        <img
          src={`${props.bannerImage}` ?? "/img/pages/destinations/1.png"}
          alt="image"
          className="col-12 rounded-4"
          style={{ minHeight: " 300px" }}
        />
        <div className="absolute z-2 px-50 py-60 md:py-20 md:px-30">
          <h1 className="text-50 fw-600 text-white lg:text-40 md:text-30">
            Explore {props.destinationName}
          </h1>
          <div className="text-white" style={{ background: 'rgba(0, 0, 0, 0.5)', padding: '10px', borderRadius: '5px' }}>{props.bannerHeading}</div>
        </div>
        {/* <div className="absolute d-flex justify-end items-end col-12 h-full z-1 px-10 py-10">
          <button className="button -md -blue-1 bg-white text-dark-1 text-14 fw-500">
            See All 90 Photos
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
