import CategoryTypes from "../sidebar/CategoryTypes";
import OthersFilter from "../sidebar/OthersFilter";
import Duration from "../sidebar/Duration";
import Languages from "../sidebar/Languages";
import PirceSlider from "../sidebar/PirceSlider";
import MainFilterSearchBox from "./MainFilterSearchBox";
import { useData } from "../../../lib/datacontext";
import React from "react";
import { countryData } from "../../../utils/country";
import {
  useDestinationFilterStore,
  useTourFilterStore,
} from "../../../lib/store";

const Sidebar = () => {
  const { tagNameList } = useData();
  const [categories, setCategories] = React.useState([]);
  const { setTag, removeTag, setContinent, removeContinent } =
    useDestinationFilterStore();
  // const [category,setCategory]=React.useState("")
  const continent = countryData.map((el) => el.continent);
  React.useEffect(() => {
    setCategories(tagNameList?.getAllTags?.map((tag) => tag.name));
  }, [tagNameList]);
  function handleChangeTag(event, category) {
    if (event.target.checked) {
      setTag(category);
    } else {
      removeTag(category);
    }
  }
  function handleChangeContinent(event, category) {
    if (event.target.checked) {
      setContinent(category);
    } else {
      removeContinent(category);
    }
  }
  return (
    <>
      <div className="sidebar__item -no-border">
        <div className="px-20 py-20 bg-light-2 rounded-4">
          <h5 className="text-18 fw-500 mb-10">Search Tours</h5>

          <div className="row y-gap-20 pt-20">
            <MainFilterSearchBox />
          </div>
        </div>
      </div>
      {/* End search tours */}

      <div className="sidebar__item -no-border">
        <h5 className="text-18 fw-500 mb-10">Category Types</h5>
        <div className="sidebar-checkbox">
          <CategoryTypes
            categories={categories}
            handleChange={handleChangeTag}
          />
        </div>
      </div>
      <div className="sidebar__item -no-border">
        <h5 className="text-18 fw-500 mb-10">Continents</h5>
        <div className="sidebar-checkbox">
          <CategoryTypes
            categories={continent}
            handleChange={handleChangeContinent}
          />
        </div>
      </div>
      {/* End popular filter */}
      {/* 
      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Other</h5>
        <div className="sidebar-checkbox">
          <OthersFilter />
        </div>
      </div> */}
      {/* End Aminities filter */}

      {/* <div className="sidebar__item pb-30">
        <h5 className="text-18 fw-500 mb-10">Price</h5>
        <div className="row x-gap-10 y-gap-30">
          <div className="col-12">
            <PirceSlider />
          </div>
        </div>
      </div> */}
      {/* End Nightly priceslider */}
      {/* 
      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Duration</h5>
        <div className="sidebar-checkbox">
          <Duration />
        </div>
      </div> */}
      {/* End style filter */}

      {/* <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Languages</h5>
        <div className="sidebar-checkbox">
          <Languages />
        </div>
      </div> */}
      {/* End Aminities filter */}
    </>
  );
};

export default Sidebar;
