import React from "react";
import { MdOutlineSchool, MdOutlineWorkOutline } from "react-icons/md";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styles from "../../styles/components/TimeLineVertical.module.scss";
type Props = {};

const VerticalTimeLine = (props: Props) => {
  return (
    <div className={styles.VerticalTimeLine}>
      <h1>My IT Career so far</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          date="Sept 2016 - Jul 2019"
          dateClassName={styles.verticalTimelineElementDate}
          contentStyle={{ background: "#e4f9ff", color: "#0a192f" }}
          contentArrowStyle={{ borderRight: "7px solid  #e4f9ff" }}
          icon={<MdOutlineSchool />}
          iconStyle={{ background: "#e4f9ff", color: "#0a192f" }}
        >
          <h3 className="vertical-timeline-element-title">MBO Applicatie en Media ontwikkelaar (Application and media developer)</h3>
          <h5 className="vertical-timeline-element-subtitle">Student</h5>
          <p>Learned the fundamentals of programming mostly web development</p>
          <p>Java | JavaScript</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="Mar 2018 - Jul 2018"
          dateClassName={styles.verticalTimelineElementDate}
          contentStyle={{ background: "#0a192f", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #0a192f" }}
          icon={<MdOutlineSchool />}
          iconStyle={{ background: "#0a192f", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Buro CITE</h3>
          <h5 className="vertical-timeline-element-subtitle">Intern</h5>
          <p>A variaty of assignments to develop components for DALI LIOR made with ReactJS, a user friendly web application used by Municipalities.</p>
          <p>JavaScript | ReactJS</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="Sept 2018 - Feb 2018"
          dateClassName={styles.verticalTimelineElementDate}
          contentStyle={{ background: "#0a192f", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #0a192f" }}
          icon={<MdOutlineSchool />}
          iconStyle={{ background: "#0a192f", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Deverence Group</h3>
          <h5 className="vertical-timeline-element-subtitle">Intern</h5>
          <p>
            Maintained and created new features for their low code platform RUAL, and used this low code platform to maintain and create an ERP-System for a big
            Flower Exporter
          </p>
          <p>JavaScript | VueJS | NodeJS | ExpressJS</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="Sept 2019 - Present"
          dateClassName={styles.verticalTimelineElementDate}
          contentStyle={{ background: "#0fabbc", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #0fabbc" }}
          icon={<MdOutlineSchool />}
          iconStyle={{ background: "#0fabbc", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">HBO-ICT Deeltijd (Parttime)</h3>
          <h5 className="vertical-timeline-element-subtitle">Student</h5>
          <p>
            I started the HBO with the intention of working and learning at the same time, so that I would gain experience in the IT field and get my HBO
            degree.
          </p>
          <p>Java | JavaScript | Variaty of design patterns | BigData | MySql | CI/CD</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="Nov 2020"
          dateClassName={styles.verticalTimelineElementDate}
          contentStyle={{ background: "#e4f9ff", color: "#0a192f" }}
          contentArrowStyle={{ borderRight: "7px solid  #e4f9ff" }}
          icon={<MdOutlineSchool />}
          iconStyle={{ background: "#e4f9ff", color: "#0a192f" }}
        >
          <h3 className="vertical-timeline-element-title">HBO-ICT Bachelor Propedeuse)</h3>
          <h5 className="vertical-timeline-element-subtitle">Student</h5>
          <p>Received my bachelor degree.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="Sept 2019 - Jan 2021"
          dateClassName={styles.verticalTimelineElementDate}
          contentStyle={{ background: "#0a192f", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #0a192f" }}
          icon={<MdOutlineWorkOutline />}
          iconStyle={{ background: "#0a192f", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Deverence Group</h3>
          <h5 className="vertical-timeline-element-subtitle">Web developer</h5>
          <p>
            Got the opportunity to work and learn at my internship at Deverence Group. I worked on the same projects as my intern period. Increased my knowledge
            of javascript (vuejs), working with customers and the logic behind programming
          </p>
          <p>JavaScript | VueJS | NodeJS | ExpressJS</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="Mar 2021 - Present"
          dateClassName={styles.verticalTimelineElementDate}
          contentStyle={{ background: "#0fabbc", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #0fabbc" }}
          icon={<MdOutlineWorkOutline />}
          iconStyle={{ background: "#0fabbc", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Pangaea Digital Agency</h3>
          <h5 className="vertical-timeline-element-subtitle">Technical Frontend Developer</h5>
          <p>
            Currently working for Pangaea Digital Agency. Working on small and large web applications with a variaty of web sites, web shops and hotel sites.
          </p>
          <p>JavaScript | ReactJS | C# | SCSS | Mongo | MsSql | GitFlow</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default VerticalTimeLine;
