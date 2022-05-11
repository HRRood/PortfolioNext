import React, { useState } from "react";

import styles from "../../../styles/components/SkillList.module.scss";
import SkillListData from "../../../utils/data/SkillList.json";
import { SkillListType } from "../../../@types/SkillList";

const SkillList = () => {
  const [activeSkill, setActiveSkill] = useState<SkillListType | null>(null);
  const skills = SkillListData as SkillListType[];
  return (
    <>
      <div className={styles.skillListContainer}>
        {skills.map((skill) => (
          <div className={styles.skillListItem} key={skill.name} onClick={() => setActiveSkill(skill)}>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
      {activeSkill ? (
        <div className={styles.skillDisplay}>
          <h2>{activeSkill.name}</h2>
          <span>Experience since: {activeSkill.experienceSince}</span>
          <div className={styles.skillProgress}>
            <div className={styles.skillProgressBar} style={{ width: `${activeSkill.knowledge}%` }}></div>
            <p className={styles.skillProgressText}>How comfortable I am</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default SkillList;
