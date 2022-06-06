import Head from "next/head";
import Infocontainer from "../components/global/InfoContainer";
import SkillList from "../components/global/SkillList/SkillList";
import Socialicons from "../components/global/SocialIcons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Roy Roodenburg</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Infocontainer />
        <SkillList />
      </div>

      <Socialicons />
    </>
  );
}
