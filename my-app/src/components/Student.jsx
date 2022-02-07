import React from "react";
import "../styles/components/student.css";
import { Container, Row, Col } from "react-bootstrap";

const Student = (props) => {
  const { name, pic, email, company, skill, grades } = props;
  const numberOfGrades = grades.length;
  const intGrades = grades.map((number) => Number(number));
  const sumGrades = intGrades.reduce((a, b) => a + b, 0);
  const average = sumGrades / numberOfGrades;
  const nameUpperCase = name.toUpperCase()

  return (
    <>
      <Container fluid>
        <Row className="student">
          <Col className="col1" xs={3}>
            <img src={pic} alt="student-pic" />
          </Col>
          <Col xs={9}>
            <Row>
              <h1 className="student-name">{nameUpperCase}</h1>
            </Row>
            <Row className="student-info">
              <div>Email: {email}</div>
              <div>Company: {company}</div>
              <div>Skill: {skill}</div>
              <div>
                Average: {average}
                {"%"}
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Student;
