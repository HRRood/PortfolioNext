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
          <p>
            During my internship, I undertook diverse assignments to develop ReactJS components for DALI LIOR, a user-friendly web application widely used by
            Municipalities.
          </p>
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
            During my internship, I worked on maintaining and adding new features to the low-code platform RUAL. Additionally, I used this platform to create
            and maintain an ERP-System for a prominent Flower Exporter.
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
            With the goal of both working and learning simultaneously, I enrolled in HBO. This decision was driven by my desire to gain valuable experience in
            the IT field while also obtaining my HBO degree.
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
          <h3 className="vertical-timeline-element-title">HBO-ICT Propedeuse</h3>
          <h5 className="vertical-timeline-element-subtitle">Student</h5>
          <p>Received my propedeuse degree.</p>
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
            Upon the conclusion of my internship at Deverence Group, I was offered a full-time position, which I gladly accepted. This job allowed me to
            continue working on the same projects as during my internship period. Throughout this experience, I significantly enhanced my proficiency in
            JavaScript, particularly with a focus on Vue.js. Moreover, I had the opportunity to engage with customers, further refining my interpersonal skills,
            and gained deeper insights into programming logic.
          </p>
          <p>JavaScript | VueJS | NodeJS | ExpressJS</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="Mar 2021 - Present"
          dateClassName={styles.verticalTimelineElementDate}
          contentStyle={{ background: "#0a192f", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #0a192f" }}
          icon={<MdOutlineWorkOutline />}
          iconStyle={{ background: "#0a192f", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">PANGAEA Digital Agency</h3>
          <h5 className="vertical-timeline-element-subtitle">Software developer</h5>
          <p>
            I am currently employed at Pangaea Digital Agency, actively engaged in developing a diverse range of web applications, encompassing web shops, hotel
            sites, and various other websites, with a primary emphasis on ecommerce solutions.
          </p>
          <p>JavaScript | ReactJS | NestJS | C# | SCSS | Mongo | MsSql | GitFlow</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="Jul 2023"
          dateClassName={styles.verticalTimelineElementDate}
          contentStyle={{ background: "#e4f9ff", color: "#0a192f" }}
          contentArrowStyle={{ borderRight: "7px solid  #e4f9ff" }}
          icon={<MdOutlineSchool />}
          iconStyle={{ background: "#e4f9ff", color: "#0a192f" }}
        >
          <h3 className="vertical-timeline-element-title">HBO-ICT Bachelor of Sience</h3>
          <h5 className="vertical-timeline-element-subtitle">Student</h5>
          <p>
            I successfully completed my graduating assignment for PANGAEA, wherein I conducted research to devise and implement an optimal performance dashboard
            for their ecommerce sites within their CMS platform.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default VerticalTimeLine;
