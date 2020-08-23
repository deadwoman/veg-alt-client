'use strict'

// Require:
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

// create -add new food entry
const onCreateFood = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.createFood(formData)
    .then(ui.createFoodSuccess)
    .then(() => onIndexFoods(event, true))
    .catch(ui.createFoodFailure)
}

// Index - see all foods
const onIndexFoods = function (event, hideMessage) {
  event.preventDefault()

  api.indexFoods()
    .then((res) => ui.indexFoodsSuccess(res, hideMessage))
    .catch(ui.indexFoodsFailure)
}

const onDestroyFood = function (event) {
  event.preventDefault()

  const foodId = $(event.target).data('id')
  api.destroyFood(foodId)
    .then(ui.destroyFoodSuccess)
    .then(() => onIndexFoods(event, true))
    .catch(ui.destroyFoodFailure)
}

// update food entries
const onUpdateFood = function (event) {
  event.preventDefault()

  const foodId = $(event.target).data('id')

  const form = event.target
  const formData = getFormFields(form)

  api.updateFood(foodId, formData)
    .then(ui.updateFoodSuccess(foodId))
    .then(() => onIndexFoods(event, true))
    .catch(ui.updateFoodFailure)
}

module.exports = {
  onCreateFood,
  onIndexFoods,
  onDestroyFood,
  onUpdateFood
}
