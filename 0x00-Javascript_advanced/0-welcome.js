/**
 * @description - Task 0
 * @funtion welcome - it concatenates two parameters
 * @param {String} firstName first name
 * @param {String} secondName second name
 */

 function welcome(firstName, lastName) {

  /**
   * @var {String} fullName - it contains the concatenation of two arguments
   */
  const fullName = firstName + ' ' + lastName;

  /**
   * @function displayFullName - it should display an alert with the message
   */
  function displayFullName()
  {
      alert('Welcome ' + fullName + '!');
  }
  displayFullName();
}
