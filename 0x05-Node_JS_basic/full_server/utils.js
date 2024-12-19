const fs = require('fs').promises;

async function readDatabase(filePath) {
  try {
    // Read the file asynchronously
    const data = await fs.readFile(filePath, 'utf8');

    // Split the data into lines and remove any empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Extract the header to identify column indices
    const header = lines[0].split(',');

    // Determine the indices of 'firstname' and 'field' columns
    const firstNameIndex = header.indexOf('firstname');
    const fieldIndex = header.indexOf('field');

    if (firstNameIndex === -1 || fieldIndex === -1) {
      throw new Error('Invalid CSV format');
    }

    // Initialize an object to hold arrays of first names per field
    const studentsByField = {};

    // Process each line after the header
    for (let i = 1; i < lines.length; i+= 1) {
      const columns = lines[i].split(',');

      // Extract and trim the firstname and field values
      const firstName = columns[firstNameIndex].trim();
      const field = columns[fieldIndex].trim();

      // Skip lines with missing data
      if (firstName && field) {
    // Initialize the array for the field if it doesn't exist
    if (!studentsByField[field]) {
      studentsByField[field] = [];
    }

      // Add the student's first name to the appropriate field array
      studentsByField[field].push(firstName);
    }

    return studentsByField;
  } catch (error) {
    // Reject the promise with an error if file reading fails
    throw new Error('Cannot load the database');
  }
}

module.exports = readDatabase;
