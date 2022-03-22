import Head from "next/head";
import Infocontainer from "../components/global/InfoContainer";
import SkillList from "../components/global/SkillList/SkillList";
import Socialicons from "../components/global/SocialIcons";
import styles from "../styles/pages/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Infocontainer />
        <SkillList />
      </main>

      <Socialicons />
    </div>
  );
}
