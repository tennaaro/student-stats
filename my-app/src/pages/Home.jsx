import React, { useEffect, useState } from "react";
import Student from "../components/Student";

const Home = (props) => {
  const [response, setResponse] = useState([]);
  const [search, setSearch] = useState("");
  const axios = require("axios").default;

  const options = {
    method: "GET",
    url: "https://api.hatchways.io/assessment/students",
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

  const students = response
    .filter((val) => {
      if (search === "") {
        return val;
      } else if (
        val.firstName.toLowerCase().includes(search.toLowerCase()) ||
        val.lastName.toLowerCase().includes(search.toLowerCase())
      ) {
        return val;
      }
    })
    .map((student, index) => {
      return (
        <Student
          key={index}
          name={student.firstName + " " + student.lastName}
          email={student.email}
          company={student.company}
          skill={student.skill}
          grades={student.grades}
          pic={student.pic}
        />
      );
    });

  return (
    <>
      <section>
        <input
          className="nameSearch"
          type="text"
          placeholder="Search by name"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <div className="students">{students}</div>
      </section>
    </>
  );
};

export default Home;
