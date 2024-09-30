export default function* createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  const Employees = departments.flat();
  for (const i of Employees) {
    yield i;
  }
}
