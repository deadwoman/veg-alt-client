'use strict'

// Require:
const authEvents = require('./auth/events')
const foodEvents = require('./foods/events')

// Event Listeners:
$(() => {
  // Authentication
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)

  // Food Listeners:
  $('#create-food').on('submit', foodEvents.onCreateFood)
  $('#index-foods').on('click', foodEvents.onIndexFoods)
  $('.content').on('click', '.btn-danger', foodEvents.onDestroyFood)
  $('.content').on('submit', '.update-food', foodEvents.onUpdateFood)
})
