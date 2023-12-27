const GeneralInfo = ({destination}) => {
  return (
    <>
      {/* <div className="col-xl-3 col-6">
        <div className="text-15">Time Zone</div>
        <div className="fw-500">GMT +00:00</div>
        <div className="text-15 text-light-1">3 hours behind</div>
      </div> */}
      {/* End .col */}

      {/* <div className="col-xl-3 col-6">
        <div className="text-15">Currency</div>
        <div className="fw-500">British Pound</div>
        <div className="text-15 text-light-1">1USD = 0.76GBP</div>
      </div> */}

      <div className="col-xl-3 col-6">
        <div className="text-15">Best time to visit</div>
        <div className="row y-gap-20">
          <div className="col-auto">
            <div className="fw-500">{destination.fromDate || "All Year"}</div>
            <div className="text-15 text-light-1">
            {destination.fromOccasion || ""}
            </div>
          </div>
          {/* End .col */}

          <div className="col-auto">
            <div className="fw-500">{destination.toDate || "All Year"}</div>
            <div className="text-15 text-light-1">
            {destination.toOccasion || ""}
            </div>
          </div>
        </div>
        {/* End .row */}
      </div>
      {/* End .col */}
    </>
  );
};

export default GeneralInfo;
