export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._checkType(name, 'string', 'Name');
    this._length = this._checkType(length, 'number', 'Length');
    this._students = this._checkType(students, 'array', 'Students');
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = this._checkType(name, 'string', 'Name');
  }

  get length() {
    return this._length;
  }

  set length(length) {
    this._length = this._checkType(length, 'number', 'Length');
  }

  get students() {
    return this._students;
  }

  set students(students) {
    this._students = this._checkType(students, 'array', 'Students');
  }

  _checkType(value, type, variableName) {
    const typeCheck = {
      string: () => typeof value === 'string',
      number: () => typeof value === 'number',
      array: () => Array.isArray(value) && value.every((item) => typeof item === 'string'),
    };

    if (!typeCheck[type]()) {
      throw new TypeError(`${variableName} must be a ${type}`);
    }
    return value;
  }
}
