import React, { useState } from "react";

import styles from "../../../styles/components/SkillList.module.scss";

const SkillList = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const skills = [
    { name: "JavaScript", experienceSince: 2016, knowledge: 95 },
    { name: "Git", experienceSince: 2017, knowledge: 95 },
    {
      name: "ReactJS",
      experienceSince: 2018,
      knowledge: 85,
    },
    { name: "NodeJS (ExpressJS)", experienceSince: 2019, knowledge: 85 },
    { name: "CSS (SCSS)", experienceSince: 2021, knowledge: 70 },
    {
      name: "NextJS",
      experienceSince: 2022,
      knowledge: 50,
    },
    { name: "MySQL", experienceSince: 2018, knowledge: 50 },
    { name: "Mongo", experienceSince: 2021, knowledge: 30 },
  ];
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
