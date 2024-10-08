export default function getStudentsByLocation(students) {
  const sumID = students.reduce((accumulator, student) => accumulator + student.id, 0);
  return sumID;
}
