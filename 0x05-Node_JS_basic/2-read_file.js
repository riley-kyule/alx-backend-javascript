const fs = require('fs');

/**
 * countStudents - Count the number of student per field
 * @path: name of database
 */
function countStudents(path) {
  const students = {};
  try {
    // Read the CSV file synchronously
    const data = fs.readFileSync(path, 'utf-8');

    // Split the data by newline character and filter out empty lines
    let lines = data.split('\n').filter((line) => line.trim() !== '');
    lines = lines.slice(1); // Remove first line which is header

    // Summary
    console.log(`Number of students: ${lines.length}`);

    // Display data
    lines.forEach((line) => {
      const entry = line.split(',');
      const firstName = entry[0];
      const field = entry[entry.length - 1];

      if (Object.prototype.hasOwnProperty.call(students, field)) {
        students[field].push(firstName);
      } else {
        students[field] = [];
        students[field].push(firstName);
      }
    });

    // Display the students
    for (const field in students) {
      if (Object.prototype.hasOwnProperty.call(students, field)) {
        const size = students[field].length;
        const members = students[field].join(', ');
        console.log(`Number of students in ${field}: ${size}. List: ${members}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;