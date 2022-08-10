import Head from "next/head";
import Infocontainer from "../components/global/InfoContainer";
import SkillList from "../components/global/SkillList";

import styles from "../styles/pages/Home.module.scss";
import VerticalTimeLine from "../components/global/VerticalTimeLine";

export default function Home() {
  return (
    <>
      <Head>
        <title>Roy Roodenburg</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.home}>
        <Infocontainer />
        <SkillList />
        <VerticalTimeLine />
      </div>
    </>
  );
}
