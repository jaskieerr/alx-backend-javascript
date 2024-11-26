const fileSystem = require('fs');

function countStudents(filePath) {
  if (!fileSystem.existsSync(filePath)) {
    throw new Error('Cannot load the database');
  }

  const fileData = fileSystem.readFileSync(filePath, 'utf8');
  const rows = fileData.split('\n');
  const studentFields = {};
  let totalStudents = -1;
  for (const row of rows) {
    if (row.trim() !== '') {
      const columns = row.split(',');
      const studentField = columns[3];
      const studentName = columns[0];
      if (totalStudents >= 0) {
        if (!Object.hasOwnProperty.call(studentFields, studentField)) {
          studentFields[studentField] = [];
        }
        studentFields[studentField] = [...studentFields[studentField], studentName];
      }
      totalStudents += 1;
    }
  }
  console.log(`Number of students: ${totalStudents}`);
  for (const field in studentFields) {
    if (Object.hasOwnProperty.call(studentFields, field)) {
      console.log(`Number of students in ${field}: ${studentFields[field].length}. List: ${studentFields[field].join(', ')}`);
    }
  }
}

module.exports = countStudents;

