"use client";
import React, { useState } from "react";
import Link from "next/link";
import { SRLWrapper } from "simple-react-lightbox";
import ModalVideo from "react-modal-video";
import parse from "html-react-parser";
function PackageDetailsTab({ data }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="package-details-tabs">
        <ul
          className="nav nav-pills tab-switchers gap-xxl-4 gap-3"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-package1"
              data-bs-toggle="pill"
              data-bs-target="#pill-body1"
              type="button"
              role="tab"
              aria-controls="pill-body1"
              aria-selected="true"
            >
              <i className="bi bi-info-lg" /> Information
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-package2"
              data-bs-toggle="pill"
              data-bs-target="#pill-body2"
              type="button"
              role="tab"
              aria-controls="pill-body2"
              aria-selected="false"
            >
              <i className="bi bi-file-earmark-spreadsheet" />
              Travel Plan
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-package3"
              data-bs-toggle="pill"
              data-bs-target="#pill-body3"
              type="button"
              role="tab"
              aria-controls="pill-body3"
              aria-selected="false"
            >
              <i className="bi bi-images" /> Tour Gallary
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-package4"
              data-bs-toggle="pill"
              data-bs-target="#pill-body4"
              type="button"
              role="tab"
              aria-controls="pill-body4"
              aria-selected="false"
            >
              <i className="bi bi-geo-alt" /> Travel Details
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          {/* package info tab */}
          <div
            className="tab-pane fade show active package-info-tab mt-5"
            id="pill-body1"
            role="tabpanel"
            aria-labelledby="pills-package1"
          >
            <h3 className="d-subtitle">Package Details</h3>
            <p>{parse(data?.summaryData?.summary || "")}</p>
            <div className="p-info-featured-img row position-relative g-3  row-cols-1 row-cols-sm-2">
              {data?.summaryData?.photos?.slice(1, 3).map((photo, index) => {
                return (
                  <div className="col" key={index}>
                    <div className="featured-img">
                      <img src={photo.url} alt="PackageIMG" />
                    </div>
                  </div>
                );
              })}
              {/* <div className="featured-video position-absolute ">
                <img src={"/img/package/feat-img3.png"} alt="PackageIMG" />
                <div className="video-overlay">
                  <div className="play-icon video-popup">
                    <i
                      onClick={() => setOpen(true)}
                      className="bi bi-play-fill"
                    ></i>
                  </div>
                </div>
              </div> */}
            </div>
            <table className="table package-info-table mb-0">
              <tbody>
                <tr>
                  <th>Destination</th>
                  <td>
                    {data?.destinations
                      ?.map((el) => el.destinationName)
                      .join(", ")}
                  </td>
                </tr>
                <tr>
                  <th>Depature</th>
                  <td>Yes Required</td>
                </tr>
                <tr>
                  <th>Departure Date</th>
                  <td>
                    {data?.datesData?.[0]?.travelDates?.[0].fromDate &&
                      new Date(
                        data?.datesData?.[0]?.travelDates?.[0].fromDate
                      ).toDateString()}
                  </td>
                </tr>
                <tr>
                  <th>Return Date</th>
                  <td>
                    {data?.datesData?.[0]?.travelDates?.[0].toDate &&
                      new Date(
                        data?.datesData?.[0]?.travelDates?.[0].toDate
                      ).toDateString()}
                  </td>
                </tr>
                <tr>
                  <th>Included</th>
                  <td>
                    <ul className="included-list">
                      {data?.summaryData?.inclusions.map((inclusion, index) => {
                        return (
                          <li key={index}>
                            <i className="bi bi-check2" />
                            {inclusion}
                          </li>
                        );
                      })}
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>Excluded</th>
                  <td>
                    <ul className="excluded-list">
                      {data?.summaryData?.exclusions.map((exclusion, index) => {
                        return (
                          <li key={index}>
                            <i className="bi bi-check2" />
                            {exclusion}
                          </li>
                        );
                      })}
                    </ul>
                  </td>
                </tr>
                <tr>
                  {/* <td colSpan={2} className="tour-transport-col">
                    <div className="tour-transport  d-flex align-items-center justify-content-center">
                      <img src={"/img/icons/bus.svg"} alt="PackageIMG" />
                      <span>Travel With Bus</span>
                    </div>
                  </td> */}
                </tr>
              </tbody>
            </table>
            <div className="rating-overview">
              <h3 className="d-subtitle">Overview</h3>
              <div className="rating-overview-row row g-0">
                <div className="col-lg-4 col-md-5 col-sm-5">
                  <div className="total-rating d-flex justify-content-center align-items-center flex-column h-100 ">
                    <h3>10.00</h3>
                    <h5>Excellent</h5>
                  </div>
                </div>
                <div className="col-lg-8 col-md-7 col-sm-7">
                  <div className="rating-info">
                    <div className="rating-box">
                      <h6>
                        Accommodation <span>5.0</span>
                      </h6>
                      <div className="rating-bar" />
                    </div>
                    <div className="rating-box">
                      <h6>
                        Transport <span>5.0</span>
                      </h6>
                      <div className="rating-bar" />
                    </div>
                    <div className="rating-box">
                      <h6>
                        Comfort <span>5.0</span>
                      </h6>
                      <div className="rating-bar" />
                    </div>
                    <div className="rating-box">
                      <h6>
                        Hospitality <span>5.0</span>
                      </h6>
                      <div className="rating-bar" />
                    </div>
                    <div className="rating-box">
                      <h6>
                        Food <span>5.0</span>
                      </h6>
                      <div className="rating-bar" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="comment-section">
              <ul className="comment-list">
                <li className="single-comment d-flex flex-sm-row flex-column ">
                  <div className="commmentor">
                    <img
                      src="/img/reviewer/commertor2.png"
                      alt="PackageIMG"
                    />
                  </div>
                  <div className="comment mt-4 mt-sm-0">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="info">
                        <h6>Silvia Perry</h6>
                        <span>2 April, 2021 10.00PM</span>
                      </div>
                      <ul className="rating d-flex ">
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
                    <p>
                      Morbi dictum pulvinar velit, id mollis lorem faucibus acUt
                      sed lacinia ipsum. cibuses acUt sed lacinia ipsum.
                      Suspendisse
                    </p>
                    <div className="reply-btn">
                      <Link to={"#"}>
                        <i className="bi bi-reply-all-fill" /> Reply
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="single-comment d-flex flex-sm-row flex-column">
                  <div className="commmentor">
                    <img
                      src="/img/reviewer/commertor3.png"
                      alt="PackageIMG"
                    />
                  </div>
                  <div className="comment mt-4 mt-sm-0">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="info">
                        <h6>Lilyan Antu</h6>
                        <span>2 April, 2021 10.00PM</span>
                      </div>
                      <ul className="rating d-flex ">
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
                    <p>
                      Morbi dictum pulvinar velit, id mollis lorem faucibus acUt
                      sed lacinia ipsum. cibuses acUt sed lacinia ipsum.
                      Suspendisse
                    </p>
                    <div className="reply-btn">
                      <Link to={"#"}>
                        <i className="bi bi-reply-all-fill" /> Reply
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="single-comment d-flex flex-sm-row flex-column">
                  <div className="commmentor">
                    <img
                      src="/img/reviewer/commertor1.png"
                      alt="PackageIMG"
                    />
                  </div>
                  <div className="comment mt-4 mt-sm-0">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="info">
                        <h6>Adama Grof</h6>
                        <span>2 April, 2021 10.00PM</span>
                      </div>
                      <ul className="rating d-flex ">
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
                    <p>
                      Morbi dictum pulvinar velit, id mollis lorem faucibus acUt
                      sed lacinia ipsum. cibuses acUt sed lacinia ipsum.
                      Suspendisse
                    </p>
                    <div className="reply-btn">
                      <Link to={"#"}>
                        <i className="bi bi-reply-all-fill" /> Reply
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="comment-btn text-center">
                <Link to={"#"}>View All Comment</Link>
              </div>
            </div> */}
            {/* <form
              onSubmit={(e) => e.preventDefault()}
              id="comment_form"
              method="post"
            >
              <div className="comment-form">
                <h4>Leave Your Comment</h4>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="custom-input-group">
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        id="name1"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="custom-input-group">
                      <input type="text" placeholder="Your Email" id="email1" />
                    </div>
                  </div>
                </div>
                <div className="custom-input-group">
                  <input type="text" placeholder="Tour Type" id="type" />
                </div>
                <div className="custom-input-group">
                  <textarea
                    cols={20}
                    rows={7}
                    placeholder="Write Message"
                    defaultValue={""}
                  />
                </div>
                <ul className="form-rating d-flex">
                  <li>
                    <i className="bi bi-star" />
                  </li>
                  <li>
                    <i className="bi bi-star" />
                  </li>
                  <li>
                    <i className="bi bi-star" />
                  </li>
                  <li>
                    <i className="bi bi-star" />
                  </li>
                  <li>
                    <i className="bi bi-star" />
                  </li>
                </ul>
                <div className="custom-input-group">
                  <div className="submite-btn">
                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </div>
            </form> */}
          </div>
          {/* package plans tab */}
          <div
            className="tab-pane fade package-plan-tab tab-body"
            id="pill-body2"
            role="tabpanel"
            aria-labelledby="pills-package2"
          >
            <h3 className="d-subtitle">Details</h3>
            <p>
              Pellentesque accumsan magna in augue sagittis, non fringilla eros
              molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci
              semper. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Donec tristique commodo
              fringilla. Duis aliquet varius mauris eget rutrum. Nullam sit amet
              justo consequat, bibendum orci in, convallis enim. Proin convallis
              neque viverra finibus cursus. Mauris lacinia lacinia erat in
              finibus.
            </p>
            <div className="accordion plans-accordion" id="planAccordion">
              {data?.daywiseItinerary.map((single, index) => {
                return (
                  <div
                    className="accordion-item plans-accordion-single"
                    key={index}
                  >
                    <div className="accordion-header" id="planHeadingOne">
                      <div
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target={`#planCollapse${index + 1}`}
                        role="navigation"
                      >
                        <div className="paln-index-circle">
                          <h4>{index + 1}</h4>
                        </div>
                        <div className="plan-title">
                          <h5>
                            DAY {index + 1} {}
                          </h5>
                          {/* <h6>10.00 AM to 10.00 PM</h6> */}
                        </div>
                      </div>
                    </div>
                    <div
                      id={`planCollapse${index + 1}`}
                      className={`accordion-collapse collapse`}
                      aria-labelledby="planHeadingTwo"
                      data-bs-parent={`#planAccordion${index + 1}`}
                    >
                      <div className="accordion-body plan-info">
                        <p>{single.description}</p>
                        <ul>
                          {single?.meals?.length ? (
                            <>
                              <li className="d-flex">
                                <h4 className="">Meals</h4>
                              </li>
                              {single.meals.map((meal, key) => (
                                <li key={key}>
                                  <i className="bi bi-check-lg" /> {meal}
                                </li>
                              ))}
                            </>
                          ) : (
                            ""
                          )}
                          {single?.inclusions?.length ? (
                            <>
                              <li className="d-flex">
                                <h4 className="">Inclusions</h4>
                              </li>
                              {single.inclusions.map((incl, index) => (
                                <li key={index}>
                                  <i className="bi bi-check-lg" /> {incl}
                                </li>
                              ))}
                            </>
                          ) : (
                            ""
                          )}
                          {single?.exclusions?.length ? (
                            <>
                              <li className="d-flex">
                                <h4 className="">Exclusions</h4>
                              </li>
                              {single.exclusions.map((excl, index) => (
                                <li key={index}>
                                  <i className="bi bi-x-lg" /> {excl}
                                </li>
                              ))}
                            </>
                          ) : (
                            ""
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* package gallery tab */}
          <div
            className="tab-pane fade package-gallery-tab"
            id="pill-body3"
            role="tabpanel"
            aria-labelledby="pills-package3"
          >
            <SRLWrapper>
              <div className="row g-4">
                {data?.summaryData?.photos?.map((photo, index) => {
                  return (
                    <div
                      className={`col-${(index + 1) % 3 == 0 ? "12" : "6"}`}
                      key={index}
                    >
                      <div
                        className="package-gallery-item"
                        style={{ height: "100%" }}
                      >
                        <img
                          src={photo.url}
                          alt="PackageIMG"
                          style={{ objectFit: "cover", height: "100%" }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </SRLWrapper>
          </div>
          <div
            className="tab-pane fade package-location-tab"
            id="pill-body4"
            role="tabpanel"
            aria-labelledby="pills-package4"
          >
            <div className="mapouter">
              <div className="siteseen">
                {" "}
                <h4 className="site">Sightseeing</h4>
                <div className="accordion plans-accordion" id="planAccordion">
                  {data?.locationData?.sightData?.map((sightData, index) => {
                    return (
                      <div
                        className="accordion-item plans-accordion-single"
                        key={index}
                      >
                        <div className="accordion-header" id="planHeadingOne">
                          <div
                            className="accordion-button collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target={`#planCollapse${index + 1}`}
                            role="navigation"
                          >
                            <div className="paln-index-circle">
                              <h4>City</h4>
                            </div>
                            <div className="plan-title">
                              <h5>{sightData.city.name}</h5>
                              <h6>Sightseeing</h6>
                            </div>
                          </div>
                        </div>
                        <div
                          id={`planCollapse${index + 1}`}
                          className="accordion-collapse collapse"
                          aria-labelledby="planHeadingOne"
                          data-bs-parent="#planAccordion"
                        >
                          <div className="accordion-body plan-info">
                            <ul>
                              {sightData.sights?.map((sight, index) => (
                                <li key={index}>
                                  <i className="bi bi-check-lg" key={index} />{" "}
                                  {sight}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="hoteldetail mt-30">
                <h6 className="text-center">Hotel Details</h6>
                <table className="table package-info-table mb-0">
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <th>Category</th>
                      <th>City</th>
                      <th>Duration</th>
                    </tr>
                    {data?.locationData?.hotels?.map((hotel, index) => {
                      return (
                        <tr key={index}>
                          <td>{hotel.name}</td>
                          <td>{hotel.rating}</td>
                          <td>
                            {hotel.cities?.map((city) => city.name).join(", ")}
                          </td>
                          <td>
                            {hotel.days}D {hotel.nights}N
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="transportdetail mt-30">
                <h6 className="text-center">Transportation Details</h6>
                <table className="table package-info-table mb-0">
                  <tbody>
                    <tr>
                      <th>From</th>
                      <th>To</th>
                      <th>Mode</th>
                      <th>Discription</th>
                    </tr>
                    {data?.locationData?.intercityData.map(
                      (intercity, index) => (
                        <tr key={index}>
                          <td>{intercity?.fromCity?.name}</td>
                          <td>{intercity?.toCity?.name}</td>
                          <td>{intercity?.mode}</td>
                          <td>{intercity?.description}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="L61p2uyiMSo"
          onClose={() => setOpen(false)}
        />
      </React.Fragment>
    </>
  );
}

export default PackageDetailsTab;
