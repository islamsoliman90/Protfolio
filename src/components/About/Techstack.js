import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillHtml5 } from "react-icons/ai";
import {
  DiGit,
  DiJavascript1,
  DiReact,
  DiSass,
  DiNodejsSmall,
} from "react-icons/di";
import { SiCss3, SiBootstrap, SiPug, SiJest, SiExpress } from "react-icons/si";
import { BsHddNetworkFill, BsWindows } from "react-icons/bs";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejsSmall />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSass />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPug />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJest />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsHddNetworkFill />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;
