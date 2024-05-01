import React from "react";
import Link from "next/link";

function PackageCard(props) {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="package-card-alpha">
        <div className="package-thumb">
          <Link href={`/packageDetails/${props.id}`}>
            <img src={props.image} alt="images" />
          </Link>
          <p className="card-lavel">
            <i className="bi bi-clock" /> <a>{props.date}</a>
          </p>
        </div>
        <div className="package-card-body">
          <h3 className="p-card-title">
            <Link href={`/packageDetails/${props.id}`}>{props.title}</Link>
          </h3>
          <div className="p-card-bottom">
            <div className="book-btn">
              <Link href={`/packageDetails/${props.id}`}>
                Book Now <i className="bx bxs-right-arrow-alt" />
              </Link>
            </div>
            <div className="p-card-info">
              <a>From</a>
              <h6>{props.price}</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PackageCard;
