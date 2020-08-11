'use strict'

// Require:
const showFoodsTemplate = require('../templates/food-collection.handlebars')
// const store = require('../store')

const indexFoodsSuccess = (data, hideMessage) => {
  const showFoodsHtml = showFoodsTemplate({ foods: data.foods })

  if (!hideMessage) {
    // if no foods in collection:
    if (data.foods.length === 0) {
      $('#message').text('no food entries in your collection yet!')
    } else {
      $('#message').text('look at all your delicious food entries!')
    }
  }

  // Hide "outdated" food collection:
  $('#content').empty()
  $('#content').append(showFoodsHtml)
  $('#content').show()
}

const indexFoodsFailure = () => {
  $('#message').text('couldnt show all foods. please try again.')
}

const createFoodSuccess = (data) => {
  const showFoodsHtml = showFoodsTemplate({ foods: data.foods })

  $('#message').text('new food entry added to collection!')
  $('#content').append(showFoodsHtml)

  $('form').trigger('reset')
}

const createFoodFailure = () => {
  $('#message').text('couldnt add new food entry. try again!')
}

const destroyFoodSuccess = () => {
  $('#message').text('food entry deleted!')
}

const destroyFoodFailure = () => {
  $('#message').text('deletion unsuccessful. please try again!')
}

const updateFoodSuccess = (foodId) => {
  $('#message').text('food entry updated!')

  $(`#updateFood-${foodId}`).modal('hide')
  $('.modal-backdrop').removeClass('show')
  return new Promise(resolve => setTimeout(() => {
    $('.modal-backdrop').remove()
    resolve()
  }, 150))
}

const updateFoodFailure = () => {
  $('#message').text('entry update failed! please try again.')
}

module.exports = {
  createFoodSuccess,
  createFoodFailure,
  indexFoodsSuccess,
  indexFoodsFailure,
  destroyFoodSuccess,
  destroyFoodFailure,
  updateFoodSuccess,
  updateFoodFailure
}
