import { Container, Row, Col } from "react-bootstrap";

const Grades = (props) => {
  const { grades } = props;
  const mappedTest = grades.map((grade, index) => {
    return <Row xs={1} key={index}>{`Test ${index + 1}:`}</Row>;
  });
  const mappedGrades = grades.map((grade, index) => {
    return (
      <Row key={index}>
        {grade}
        {"%"}
      </Row>
    );
  });

  return (
    <>
      <Container>
        <Row>
          <Col xs={1}>{mappedTest}</Col>

          <Col xs={1}>{mappedGrades}</Col>
        </Row>
      </Container>
    </>
  );
};

export default Grades;
