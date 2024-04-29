import React from "react";
import Link from 'next/link';

function WidgetPackageTag() {
  return (
    <>
      <aside className="package-widget-style-2 widget-tag-cloud mt-30">
        <div className="widget-title text-center">
          <h4>Package Tag</h4>
        </div>
        <div className="tag-cloud widget-body">
          <Link href="/packageDetails/PackageDetails">Adventure</Link>
          <Link href="/packageDetails/PackageDetails">Trip</Link>
          <Link href="/packageDetails/PackageDetails">Guided</Link>
          <Link href="/packageDetails/PackageDetails">Historical</Link>
          <Link href="/packageDetails/PackageDetails">Road Trips</Link>
          <Link href="/packageDetails/PackageDetails">Tourist</Link>
          <Link href="/packageDetails/PackageDetails">Weekend</Link>
          <Link href="/packageDetails/PackageDetails">Hill</Link>
        </div>
      </aside>
    </>
  );
}

export default WidgetPackageTag;
