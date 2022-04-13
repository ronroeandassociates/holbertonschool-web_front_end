/**
 * @description - Task 2
 * @function welcomeMessage - show alert
 * @param {String} fullName - fullName complete Name
 */
 function welcomeMessage(fullName) {
  alert('Welcome ' + fullName);
}

/**
* callback guillaume - show alert with name Guillaume
*/
guillaume = function () {
  welcomeMessage("Guillaume")
};

/**
* callback alex - show alert with name Alex
*/
alex = function () {
  welcomeMessage('Alex')
};

/**
* callbacl fred - show alert with name Fred
*/
fred = function () {
  welcomeMessage('Fred')
};
