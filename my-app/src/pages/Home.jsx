import React, { useEffect, useState } from "react";
import Student from "../components/Student";
import Search from "../components/Search";
const axios = require('axios').default;

const Home = (props) => {
  const [response, setResponse] = useState([]);
  const [search, setSearch] = useState("");
  // const [tagSearch, setTagSearch] = useState("");

  useEffect(() => {
    axios
      .request({
        method: "GET",
        url: "https://api.hatchways.io/assessment/students"
      })
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
          tags={[]}
        />
      );
    });

  

  return (
    <>
      <section>
        <Search 
          search = {search}
          setSearch = {setSearch}
        />
        <div className="students">{students}</div>
      </section>
    </>
  );
};

export default Home;
