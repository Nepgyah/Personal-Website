import { Button, Tag } from "@chakra-ui/react";
import React from "react";
import { AiFillApi  } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { AiFillDatabase } from "react-icons/ai";
import { AiFillCodeSandboxSquare } from "react-icons/ai";
import { AiFillDashboard } from "react-icons/ai";
import { AiOutlineArrowsAlt } from "react-icons/ai";

export default function Home() {
  return (
    <React.Fragment>
      <div id="hero"></div>
      <div id="skills" className="section">
        <div className="section__wrapper">
          <div id="skills-container">
            <SkillBox icon={<AiFillApi />} title="API Development" />
            <SkillBox icon={<AiFillSetting />} title="Frontend Optimization" />
            <SkillBox icon={<AiFillCodeSandboxSquare />} title="Full-Stack Architecture" />
            <SkillBox icon={<AiFillDashboard />} title="Unit/E2E Testing" />
            <SkillBox icon={<AiOutlineArrowsAlt />} title="Responsive User Interfaces" />
            <SkillBox icon={<AiFillDatabase />} title="Database Modeling" />
          </div>
          <div className="section__text">
            <h2>Skills</h2>
            <p>Here are some skills I believe help define my role as a full stack developer.</p>
          </div>
        </div>
      </div>
      <div id="stack" className="section">
        <div className="section__wrapper">
          <div id="stack-first-row">
            <div className="section__text">
              <h2>My Tech Stack</h2>
              <p>Check out my tech stack. All the languages, libraries, tools and more that I have worked with in both a professional and hobbyist environment.</p>
            </div>
            <div id="languages">
              <h3>Languages</h3>
              <div className="stack-container">
                <StackItem icon="languages/html" title="HTML" />
                <StackItem icon="languages/css" title="CSS" />
                <StackItem icon="languages/javascript" title="Javascript" />
                <StackItem icon="languages/typescript" title="Typescript" />
                <StackItem icon="languages/python" title="Python" />
                <StackItem icon="languages/java" title="Java" />
                <StackItem icon="languages/c" title="C++" />
              </div>
            </div>
          </div>
          <div id="stack-second-row">
            <div id="frameworks">
              <h3>Frameworks / Libraries</h3>
              <div className="stack-container">
                <StackItem icon="frameworks/nextjs" title="Next.js" />
                <StackItem icon="frameworks/django" title="Django" />
                <StackItem icon="frameworks/mui" title="Material UI" />
                <StackItem icon="frameworks/sass" title="sass" />
                <StackItem icon="frameworks/rest-framework" title="Django Rest Framework" />
                <StackItem icon="frameworks/redux" title="Redux" />
                <StackItem icon="frameworks/react" title="React.js" />
                <StackItem icon="frameworks/pytest" title="Pytest" />
                <StackItem icon="frameworks/chakra" title="Chakra UI" />
              </div>
            </div>
            <div id="tools">
              <h3>Tools & Platforms</h3>
              <div className="stack-container">
                <StackItem icon="tools/github" title="Github" />
                <StackItem icon="tools/figma" title="Figma" />
                <StackItem icon="tools/jira" title="Jira" />
                <StackItem icon="tools/vercel" title="Vercel" />
                <StackItem icon="tools/koyeb" title="Koyeb" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="experience"></div>
      <div id="arcadia"></div>
      <div id="education"></div>
      <div id="misc"></div>
    </React.Fragment>
  );
}

function SkillBox( 
  {
    icon, title
  } : {
    icon: React.ReactNode,
    title: string
  }
) {
  return (
    <div className="skill-box">
      {icon}
      <p>{title}</p>
    </div>
  )
}

function StackItem(
  {
    icon, title
  } : {
    icon: string,
    title: string
  }
) {
  return (
    <div>
      <Tag.Root size={'lg'}>
        <Tag.StartElement>
          <img src={`/stack/${icon}.png`} />
        </Tag.StartElement>
        <Tag.Label>
          {title}
        </Tag.Label>
      </Tag.Root>
    </div>
  )
}