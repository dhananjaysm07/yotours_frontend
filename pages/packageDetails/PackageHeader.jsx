import React from "react";

function PackageHeader({ data }) {
  return (
    <>
      <div className="pd-header">
        <div className=" pd-top row row-cols-lg-4 row-cols-md-2 row-cols-2 gy-4">
          <div className="col">
            <div className="pd-single-info">
              <div className="info-icon">
                <img src={"/img/package/package-sm2.png"} alt="PackageIMG" />
              </div>
              <div className="info">
                <h6>Duration</h6>
                <span>{data?.durationData?.days || 0} Days</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="pd-single-info">
              <div className="info-icon">
                <img src={"/img/icons/pd2.svg"} alt="PackageIMG" />
              </div>
              <div className="info">
                <h6>Tour Type</h6>
                <span>
                  {data?.type?.[0].toUpperCase() +
                    data?.type?.slice(1).toLowerCase()}
                </span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="pd-single-info">
              <div className="info-icon">
                <img src={"/img/icons/pd3.svg"} alt="PackageIMG" />
              </div>
              <div className="info">
                <h6>Group Size</h6>
                <span>30 People</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="pd-single-info">
              <div className="info-icon">
                <img src={"/img/icons/pd4.svg"} alt="PackageIMG" />
              </div>
              <div className="info">
                <h6>Tour Guide</h6>
                <span>05 People</span>
              </div>
            </div>
          </div>
        </div>
        <div className="pd-thumb">
          <img src={data?.summaryData?.photos?.[0].url} alt="PackageIMG" />
        </div>
        <div className="header-bottom">
          <div className="pd-lavel d-flex justify-content-between align-items-center flex-wrap gap-2">
            {/* <h5 className="location">
              <i className="bi bi-geo-alt" /> Mount Dtna, Spain
            </h5> */}
            <ul className="d-flex align-items-center rating">
              <li>
                <i className="bi bi-star-fill" />
              </li>
              <li>
                <i className="bi bi-star-fill" />
              </li>
              <li>
                <i className="bi bi-star-fill" />
              </li>
              <li>
                <i className="bi bi-star-fill" />
              </li>
              <li>
                <i className="bi bi-star-fill" />
              </li>
            </ul>
          </div>
          <h2 className="pd-title">{data?.title}</h2>
        </div>
      </div>
    </>
  );
}

export default PackageHeader;
