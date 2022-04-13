/**
 * @description - Task 3
 * @function createClassRoom - create aclass room of students
 * @param {Number} numbersOfStudents number of students
 * @param {Number} - return the number of students
 */
 function createClassRoom(numbersOfStudents) {
  /**
   * @function studentSeat - define number of student seats
   * @param {Number} seat number of set
   * @param {Number} - return the number of seats
   */
  function studentSeat(seat) {
      return function() {
          return seat
      }
  }

  /**
   * @var {Array} students - number of students
   * @var {Number} start - iterator
   */
  let students = [];

  for (let start = 0; start < numbersOfStudents; start++) {
      students.push(studentSeat(start+1));
  }
  return students;
}
let classRoom = createClassRoom(10);
