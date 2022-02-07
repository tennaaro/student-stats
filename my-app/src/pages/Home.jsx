import React, { useEffect, useState } from "react";
import Student from "../components/Student";


const Home = (props) => {
  const [response, setResponse] = useState([]);
  const axios = require("axios").default;

  const options = {
    method: "GET",
    url: "https://api.hatchways.io/assessment/students"
  };

  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        // console.log(response.data.students);
        setResponse(response.data.students);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const students = response.map((student, index) => {
    return (
      <Student
        key = {index}
        name = {student.firstName + " " + student.lastName}
        email = {student.email}
        company = {student.company}
        skill = {student.skill}
        grades = {student.grades}
        pic = {student.pic}
      />
    )
  })

  return (
    <>
    <section>
      <div className="students">{students}</div>
    </section>
    </>
  )

}

export default Home;