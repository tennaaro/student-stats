
const Student = (props) => {
  const {name, pic, email, company, skill, grades} = props;
  const numberOfGrades = grades.length;
  const intGrades = grades.map(number => Number(number))
  const sumGrades = intGrades.reduce((a, b) => a + b, 0)
  const average = sumGrades / numberOfGrades
  

  return (
    <>
      <img src={pic} alt="student-pic" />
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{company}</p>
      <p>{skill}</p>
      <p>{average}{"%"}</p>
    </>
  )
}

export default Student;