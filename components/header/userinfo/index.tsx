import { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { AppContext } from "../../../contexts/AppContext";
import styles from "../../../styles/components/header/UserInfo.module.scss"

export default function UserInfo() {
  const { user } = useContext(AppContext);
  if (!user) return <></>;
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <CgProfile size={40} />
      </div>
      <div className={styles.infodropdown}>
        <p>
          {user.firstname} {user.lastname}
        </p>
      </div>
    </div>
  );
}
