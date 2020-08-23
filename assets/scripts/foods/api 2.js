// Require:
const config = require('../config')
const store = require('../store')

// AJAX:

const createFood = function (formData) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/foods',
    method: 'POST',
    user: store.user,
    data: formData
  })
}

const indexFoods = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/foods',
    method: 'GET',
    data: {
      food: []
    }
  })
}

const destroyFood = function (foodId) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/foods/' + foodId,
    method: 'DELETE'
  })
}

const updateFood = function (foodId, formData) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/foods/' + foodId,
    method: 'PATCH',
    data: formData
  })
}

module.exports = {
  createFood,
  indexFoods,
  destroyFood,
  updateFood
}
