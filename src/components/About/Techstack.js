import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiPostgresql,
  SiHtml5,
  SiJquery,
  SiPhp,
  SiPhpmyadmin,
  SiCss3,
  SiGitlab,
  SiGithub,
  SiTailwindcss,
  SiLaragon,
  SiLaravel,
} from "react-icons/si";
// import { TbBrandGolang, SiHtml5 } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        {/* C++ */}
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* jajvaScript */}
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* html5 */}
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* node.js */}
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* react.js */}
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* phpadmin */}
        <SiPhpmyadmin />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* mongoDB */}
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* next.js */}
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* git */}
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* php */}
        <SiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* css */}
        <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* postgresSQL */}
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* python */}
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* java */}
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* jquery */}
        <SiJquery />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* gitlab */}
        <SiGitlab />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* github */}
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* github */}
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* laragon */}
        <SiLaragon />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* laravel */}
        <SiLaravel />
      </Col>
    </Row>
  );
}

export default Techstack;
