export default function createIteratorObject(report) {
  const allEmployees = Object.values(report.allEmployees);

  // Flatten the list of employee arrays into a single array
  const employees = allEmployees.flat();

  // Return an iterator
  return employees[Symbol.iterator]();
}
