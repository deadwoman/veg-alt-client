'use strict'

// Require:
const store = require('../store')

// Only show sign up and sign in:
$('#authenticated').hide()

// signup:
const signUpSuccess = function () {
  $('#message').text('sign up successful! sign in & lets go!')

  $('form').trigger('reset')
}
const signUpFailure = function () {
  $('#message').text('sign up unsuccessful. try again!')
}

// Signin:
const signInSuccess = function (response) {
  $('#message').text('successfully signed in!')

  store.user = response.user

  $('form').trigger('reset')

  // hide sign up & sign in options:
  $('#unauthenticated').hide()
  $('#authenticated').show()
}

const signInFailure = function () {
  $('#message').text('sign in unsuccessful. please check credentials & try again!')
}

// signout:
const signOutSuccess = function () {
  $('#message').text('successfully signed out! see you next time!')

  // Show sign up & sign in only:
  $('#unauthenticated').show()
  // $('#sign-up').show()
  $('#authenticated').hide()
  // hide food database:
  $('#content').hide()

  store.user = null
}
const signOutFailure = function () {
  $('#message').text('sign out unsuccessful. try again!')
}

// chng pass:
const changePasswordSuccess = function () {
  $('#message').text('password successfully updated.')

  $('form').trigger('reset')
}
const changePasswordFailure = function () {
  $('#message').text('password update unsuccessful. try again!')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
