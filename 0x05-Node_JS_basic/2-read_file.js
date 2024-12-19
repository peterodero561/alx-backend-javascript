const fs = require('fs');

function countStudents(filePath) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(filePath, 'utf-8');
    const lines = data.trim().split('\n');

    // Validate that there is data and ignore the header line
    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    const header = lines[0].split(',');
    const students = lines.slice(1).filter((line) => line.trim() !== '');

    console.log(`Number of students: ${students.length}`);

    const fieldIndex = header.indexOf('field'); // Locate the 'field' column index
    const firstNameIndex = header.indexOf('firstname'); // Locate the 'firstname' column index

    const fields = {};

    for (const student of students) {
      const details = student.split(',');
      const field = details[fieldIndex].trim();
      const firstName = details[firstNameIndex].trim();

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    }

    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    // Handle error and throw with the specific message
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
