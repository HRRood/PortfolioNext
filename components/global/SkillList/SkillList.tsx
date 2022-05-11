import React, { useState } from "react";

import styles from "../../../styles/components/SkillList.module.scss";
import SkillListData from "../../../utils/data/SkillList.json";
import { SkillListType } from "../../../@types/SkillList";

const SkillList = () => {
  const skills = SkillListData as SkillListType[];
  const [activeSkill, setActiveSkill] = useState<SkillListType>(skills[0]);
  return (
    <div className={styles.skillList}>
      <div>
        <h2 className={styles.skillListTitle}>Skills</h2>
        <p>
          These are my skills I am most interested in. <br /> I use confortable level as you can use experience level in percentage
        </p>
      </div>

      <div className={styles.skillListContainer}>
        {skills.map((skill) => (
          <div
            className={`${styles.skillListItem} ${skill.name === activeSkill.name ? styles.activeSkill : ""}`}
            key={skill.name}
            onClick={() => setActiveSkill(skill)}
          >
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
    </div>
  );
};

export default SkillList;
