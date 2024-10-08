export default function updateStudentGradeByCity(students, city, newGrades) {
  const stuInCity = students.filter((student) => student.location === city);

  return stuInCity.map((student) => {
    const updatedStudent = { ...student };
    if (student.location === city) {
      const gradeEntry = newGrades.find((grade) => grade.studentId === student.id);
      if (gradeEntry) {
        updatedStudent.grade = gradeEntry.grade !== undefined ? gradeEntry.grade : 'N/A';
      } else {
        updatedStudent.grade = 'N/A';
      }
    }
    return updatedStudent;
  });
}
