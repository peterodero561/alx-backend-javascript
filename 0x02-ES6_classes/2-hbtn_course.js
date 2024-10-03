export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string' || !Array.isArray(students)) {
      throw new TypeError('Name must be a String');
    } else if (typeof length !== 'number') {
      throw new TypeError('Length must be a Number');
    } else if (!Array.isArray(students)) {
      throw new TypeError('Students must be an Array');
    } else {
      this._name = name;
      this._length = length;
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('Name must be a String');
    }
  }

  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a Number');
    }
  }

  set students(students) {
    if (Array.isArray(students)) {
      this._students = students;
    } else {
      throw new TypeError('Students must be an Array');
    }
  }
}
