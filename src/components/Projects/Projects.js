import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ReactDashboard from "../../Assets/Projects/temp-react-route.PNG";
import Reactrouter from "../../Assets/Projects/router.PNG";
import ReactTemp from "../../Assets/Projects/React-Temp.PNG";
import Template2 from "../../Assets/Projects/template2.PNG";
import HackerNews from "../../Assets/Projects/Hacker-News.PNG";
import ReactQuiz from "../../Assets/Projects/React-Quiz.PNG";
import generator from "../../Assets/Projects/generator.png";
import OurMenu from "../../Assets/Projects/Our-Menu.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ReactDashboard}
              isBlog={false}
              title="React-Dashboard"
              description="Template use react router and scss and components"
              ghLink="https://github.com/islamsoliman90/temp-react-route.git"
              demoLink="https://temp-react-route.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Reactrouter}
              isBlog={false}
              title="React-Router"
              description="practise on react-router-dom libarary"
              ghLink="https://github.com/islamsoliman90/React-Router"
              demoLink="https://loquacious-dieffenbachia-dfe8d3.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Template2}
              isBlog={false}
              title="Template by bootstrap"
              description="Template2 i created by bootstrap to practice"
              ghLink="https://github.com/islamsoliman90/Template2.git"
              demoLink="https://template2-pg156zkxx-islamsoliman90.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ReactTemp}
              isBlog={false}
              title="React-Temp"
              description="Template Design by React And Many Option Can User Use For Comfortable Experience"
              ghLink="https://github.com/islamsoliman90/react-temp"
              demoLink="https://react-temp.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HackerNews}
              isBlog={false}
              title="Hacker-News"
              description="Get News By Search and Get 20 Result For Each Page and 50 Pages Result Can Navigate Between Them"
              ghLink="https://github.com/islamsoliman90/hacker-news"
              demoLink="https://hacker-news-ashen.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ReactQuiz}
              isBlog={false}
              title="React-Quiz"
              description="Quiz User Can Choose The Subject and Count of Questions and The Level of Difficulty and Get How Many Question were Correct"
              ghLink="https://github.com/islamsoliman90/react-Quiz"
              demoLink="https://react-quiz-gules.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={generator}
              isBlog={false}
              title="generator Color"
              description="A simple React ِApp To Get gradations of colour, User Can Choose It"
              ghLink="https://github.com/islamsoliman90/color-generator-react"
              demoLink="https://color-generator-react-six.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OurMenu}
              isBlog={false}
              title="Our-Menu"
              description="A simple React ِApp To Filter The Result And Display Without Reload"
              ghLink="https://github.com/islamsoliman90/menu"
              demoLink="https://memes-sigma.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
