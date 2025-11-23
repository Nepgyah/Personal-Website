'use client';

import React from "react";
import { Button, Card, Tag } from "@chakra-ui/react";
import { AiFillApi  } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { AiFillDatabase } from "react-icons/ai";
import { AiFillCodeSandboxSquare } from "react-icons/ai";
import { AiFillDashboard } from "react-icons/ai";
import { AiOutlineArrowsAlt } from "react-icons/ai";

export default function Home() {
  return (
    <React.Fragment>
      <div id="hero" className="section">
        <img id="hero-rectangle" className="section__bg-element" src="/hero-rectangle.png" alt="" />
        <div className="section__wrapper">
          <div className="section__text">
            <h1>Junior Full Stack Web Developer</h1>
            <p>I’m a web developer with over 2 years of experience in web application development. From database design to responsive frontends, I have dipped my toes into almost all aspects of web development. Thanks for stopping by!</p>
            <div id="hero-cta">
              <a href="#stack">
                <Button size={'xl'}>
                  My Tech Stack
                </Button>
              </a>
              <a href="#arcadia">
                <Button id="view-project" size={'lg'} variant={"outline"}>
                  View Main Project
                </Button>
              </a>
            </div>
          </div>
          <div id="me">
            <img className="box-shadow" src="/me.jpg" alt="" />
          </div>
        </div>
      </div>
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
        <img id="bg-stack-triangles-one" className="section__bg-element" src="/bg-stack-triangles-one.png" alt="" />
        <img id="bg-stack-triangles-two" className="section__bg-element" src="/bg-stack-triangles-two.png" alt="" />
        <div className="section__wrapper">
          <div id="stack-first-row">
            <div className="section__text">
              <h2>My Tech <span className="underline underline--red">Stack</span></h2>
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
                <StackItem icon="frameworks/zustand" title="Zustand" />
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
      <div id="experience" className="section">
        <img id="bg-work-triangles-one" className="section__bg-element" src="/bg-work-triangles-one.png" alt="" />
        <img id="bg-work-triangles-two" className="section__bg-element" src="/bg-work-triangles-two.png" alt="" />
        <div className="section__wrapper">
          <div className="section__text">
            <h2>My <span className="underline underline--red">Work Experience</span></h2>
          </div>
          <div className="work-block">
            <div className="work-block__headline">
              <div>
                <div>
                  <img src="/mnzt-logo.png" alt="" />
                  <div>
                    <p className="title">Junior Full Stack Web Developer</p>
                    <p className="location">Manzanita K.K - Tokyo, Japan</p>
                  </div>
                </div>
              </div>
              <p>Jan 2024 - Present</p>
            </div>
            <div className="work-block__text">
              <ul>
                <li>Assisted in the design and implementation of <b>ax3</b>,  a web platform that focuses on ad creatives using psychology</li>
                <li>Developed a REST API for <b>ax3</b> using Django and the Django Rest Framework</li>
                <li>Integrated third-party APIs for features such as payment processing (Stripe), data storage (AWS), and creative assistance (OpenAI, Dall-e, ImageFX)</li>
                <li>Let the development of 3 websites using Next.js, HTML and SCSS</li>
                <li>Improve the main company websites with image optimization, accessibility and animations</li>
                <li>Created over 300 backend unit tests using Pytest and 100+ frontend e2e tests using Jest, achieving 98% test coverage of the <b>ax3</b> platform</li>
                <li>Supervised 2 UX/UI interns, assisting with design reviews and providing experience on working closely with development teams</li>
              </ul>
            </div>
          </div>
          <div className="work-block">
            <div className="work-block__headline">
              <div>
                <div>
                  <img src="/mnzt-logo.png" alt="" />
                  <div>
                    <p className="title">Intern Web Developer</p>
                    <p className="location">Manzanita K.K - Tokyo, Japan</p>
                  </div>
                </div>
              </div>
              <p>Feb 2023 - April 2023</p>
            </div>
            <div className="work-block__text">
              <ul>
                <li>Assisted lead developer in expanding web platform stack with React.js and the MUI library</li>
                <li>Developed website pages using HTML and CSS</li>
                <li>Developed simple scripts using Python to parse social media data such as Reddit and Twitter</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="arcadia" className="section">
        <div className="section__wrapper">
          <div className="section__text">
            <h2>Premier Personal <span className="underline underline--red">Project:</span> <br />Arcadia</h2>
            <p>The current project I’m working on. Arcadia aims to combine all sorts of hobbies into one web platform. Track anime, manga and games, build your dream pc, stream music and more. Its your otaku sanctuary.</p>
          </div>
          <div className="arc-section" id="arc-summary">
            <div className="arc-image">
              <img className="screenshot box-shadow" src="/arc-website.jpg" alt="" />
            </div>
            <div className="arc-text-container">
              <div className="arc-text">
                  <h3>Uniting Otaku Activities In a Singular Solution</h3>
                  <p>Arcadia combines the most popular otaku activities and hosts them in one singular platform. No need to have multiple windows or accounts. Track anime, manga, and games. Discover PC builds and find your next event. Its all in one place.</p>
              </div>
            </div>
          </div>
          <div className="arc-section" id="arc-frontend">
            <div className="arc-text-container">
              <div className="arc-text">
                  <h3>Building the Arcadia Universe Using Modern Frontend Tech</h3>
                  <p>Arcadia’s platform and website are being built using Next.js along with typescript. This allows Arcadia to reach its goal of being a rich and deep platform but one that is robust/scalable with a strong foundation using well defined typing.</p>
              </div>
            </div>
            <div className="arc-image">
              <img className="screenshot box-shadow" src="/arc-platform.jpg" alt="" />
              <div className="stack-container">
                <StackItem icon="languages/typescript" title="Typescript" />
                <StackItem icon="frameworks/nextjs" title="Nextjs" />
                <StackItem icon="frameworks/zustand" title="Zustand" />
                <StackItem icon="frameworks/chakra" title="ChakraUI" />
                <StackItem icon="frameworks/cypress" title="Cypress" />
                <StackItem icon="frameworks/zod" title="zod" />
              </div>
            </div>
          </div>
          <div className="arc-section" id="arc-backend">
            <div className="arc-image">
              <img className="screenshot box-shadow" src="/arc-api.png" alt="" />
              <div className="stack-container">
                <StackItem icon="languages/python" title="Python" />
                <StackItem icon="frameworks/django" title="Django" />
                <StackItem icon="frameworks/graphql" title="Graphql" />
                <StackItem icon="frameworks/rest-framework" title="Django Rest Framework" />
                <StackItem icon="frameworks/pytest" title="Pytest" />
              </div>
            </div>
            <div className="arc-text-container">
              <div className="arc-text">
                  <h3>A Hybrid Backend To Support Future Expansion</h3>
                  <p>Arcadia utilizes both REST and GraphQl API architecture to maximize potential and ensure its capable of any edge case that comes up. And the addition of Django and its app structure helps Arcadia place it self in prime position when its ready for microservicing.</p>
              </div>
            </div>
          </div>
          <div className="arc-section" id="arc-cta">
            <div id="explore-arcadia" className="arc-text">
                <h3>Explore the World of Arcadia Today</h3>
                <p>Check out the potential of the Arcadia platform, or explore the website to learn more the platform and the world building I'm creating for it.</p>
                <div className="button-container">
                  <a href="https://arcadia-inky.vercel.app" target="blank">
                    <Button variant={'solid'}>Check out the Platform</Button>
                  </a>
                  <a href="https://project-arcadia-jade.vercel.app" target="_blank">
                    <Button variant={"outline"}>See the Website</Button>
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div id="education" className="section">
        <img id="bg-education-lines-one" className="section__bg-element" src="/bg-education-lines-one.png" alt="" />
        <img id="bg-education-lines-two" className="section__bg-element" src="/bg-education-lines-two.png" alt="" />
        <div className="section__wrapper">
          <div className="section__text">
            <h2>My <span className="underline underline--red">Education History</span></h2>
          </div>
          <div className="work-block">
            <div className="work-block__headline">
              <div>
                <div>
                  <img src="/lewis-logo.svg" alt="" />
                  <div>
                    <p className="title">B.S Computer Science</p>
                    <p className="location">Lewis University - Illinois, USA</p>
                  </div>
                </div>
              </div>
              <p>Jan 2022 - Dec 2022</p>
            </div>
            <div className="work-block__text">
              <ul>
                <li>GPA: 3.7/4.0</li>
              </ul>
            </div>
          </div>
          <div className="work-block">
            <div className="work-block__headline">
              <div>
                <div>
                  <img src="/cod-logo.png" alt="" />
                  <div>
                    <p className="title">A.S Software Development</p>
                    <p className="location">College Of DuPage - Illinois, USA</p>
                  </div>
                </div>
              </div>
              <p>Aug 2017 - Dec 2021</p>
            </div>
            <div className="work-block__text">
              <ul>
                <li>GPA: 3.6/4.0</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="other-projects" className="section">
        <div className="section__wrapper">
          <div className="section__text">
            <h2>Other Projects</h2>
            <div className="projects-container">
              <Card.Root className="box-shadow">
                <Card.Body gap={2}>
                  <Card.Title>Pokemon Battle Frontier</Card.Title>
                  <Card.Description>
                    Recreating gen 1/2 Pokemon battles with a focus on battle logic.
                  </Card.Description>
                  <div className="skills-container">
                    <StackItem icon="languages/java" title="Java" />
                  </div>
                </Card.Body>
                <Card.Footer gap={2}>
                  <a href="https://github.com/Nepgyah/Pokemon-Battle-Frontier" target="_blank">
                    <Button>Github</Button>
                  </a>
                </Card.Footer>
              </Card.Root>

              <Card.Root className="arcadia-feat box-shadow">
                <Card.Body gap={2}>
                  <Card.Title>Astral Express Website</Card.Title>
                  <Card.Description>
                    A simple website representing the Astral Express from the mobile game Honkai Star Rail.
                  </Card.Description>
                  <div className="skills-container">
                    <StackItem icon="languages/html" title="HTML" />
                    <StackItem icon="languages/css" title="CSS" />
                  </div>
                </Card.Body>
                <Card.Footer gap={2}>
                  <a href="https://nepgyah.github.io/astral-express-website" target="_blank">
                    <Button>Website</Button>
                  </a>
                </Card.Footer>
              </Card.Root>
            </div>
          </div>
        </div>
      </div>
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
    <div className="skill-box box-shadow">
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
      <Tag.Root size={'lg'} className="box-shadow">
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