export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (prevStudent, curStudent) => prevStudent + curStudent.id,
      0
    );
  }
  return 0;
} 
