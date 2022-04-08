import Head from "next/head";
import Infocontainer from "../components/global/InfoContainer";
import SkillList from "../components/global/SkillList/SkillList";
import Socialicons from "../components/global/SocialIcons";
import styles from "../styles/pages/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Roy Roodenburg</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <Infocontainer />
        <SkillList />
      </div>

      <Socialicons />
    </>
  );
}
