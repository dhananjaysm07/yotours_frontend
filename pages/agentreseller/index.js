import dynamic from "next/dynamic";
import CallToActions from "../../components/common/CallToActions";
import Seo from "../../components/common/Seo";
import DefaultHeader from "../../components/header/default-header";
import DefaultFooter from "../../components/footer/default";
import { useData } from "../../lib/datacontext";
import parse from "html-react-parser";
import styles from "./agent.module.scss";
// import { contextType } from "google-map-react";

const AgentReseller = () => {
  const { contentLoading, contentData } = useData();
  console.log("content data", contentData, contentLoading);
  return (
    <>
      <Seo pageTitle="Agents & Resellers" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}
      <div className={styles.container}>
        <h1>Agent and Reseller</h1>
        <div className={styles.content}>
          <p>
            {contentLoading
              ? "Content loading"
              : parse(contentData.getContent.agent || "")}
          </p>
        </div>
      </div>

      {/* <CallToActions /> */}
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(AgentReseller), { ssr: false });
