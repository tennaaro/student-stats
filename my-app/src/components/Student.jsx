import React, { useState } from "react";
import "../styles/components/student.css";
import { Container, Row, Col } from "react-bootstrap";
import Grades from "./Grades";

const Student = (props) => {
  const { name, pic, email, company, skill, grades } = props;
  const numberOfGrades = grades.length;
  const intGrades = grades.map((number) => Number(number));
  const sumGrades = intGrades.reduce((a, b) => a + b, 0);
  const average = sumGrades / numberOfGrades;
  const nameUpperCase = name.toUpperCase();

  const [show, setShow] = useState(null);
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

  const onClick = () => (show === "show" ? setShow(null) : setShow("show"));
  const handleSubmit = (e) => {
    e.preventDefault();
    setTags((prev) => [...prev, tag]);
    console.log(tags);
    setTag("");
  };

  const mappedTags = tags.map((item, index) => {
    return (
      <div key={index}>
        <button className="newTag">{item}</button>
      </div>
    );
  });

  return (
    <>
      <Container fluid>
        <Row className="student">
          <Col className="col1" xs={3}>
            <img src={pic} alt="student-pic" />
          </Col>
          <Col xs={7}>
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
              {mappedTags}
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="addTag"
                  placeholder="Add a tag"
                  value={tag}
                  onChange={(e) => {
                    setTag(e.target.value);
                  }}
                />
              </form>

              {show === "show" ? <Grades grades={intGrades} /> : null}
            </Row>
          </Col>
          <Col xs={2}>
            {show === null ? (
              <button className="button" onClick={onClick}>
                +
              </button>
            ) : (
              <button className="button" onClick={onClick}>
                _
              </button>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Student;
