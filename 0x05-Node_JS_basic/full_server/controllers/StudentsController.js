const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const studentsByField = await readDatabase('path_to_your_database_file.csv');
      let output = 'This is the list of our students\n';

      // Get fields in alphabetical order
      const fields = Object.keys(studentsByField).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

      fields.forEach((field) => {
        const studentList = studentsByField[field];
        output += `Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}\n`;
      });

      response.status(200).send(output.trim());
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const studentsByField = await readDatabase('path_to_your_database_file.csv');
      const studentList = studentsByField[major] || [];
      const output = `List: ${studentList.join(', ')}`;
      response.status(200).send(output);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
