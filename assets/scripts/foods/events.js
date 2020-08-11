'use strict'

// Require:
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

// Event Handler Functions:

// CREATE (add new food)
const onCreateFood = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.createFood(formData)
    .then(ui.createFoodSuccess)
    // pass in true to show createSuccess message
    .then(() => onIndexFoods(event, true))
    .catch(ui.createFoodFailure)
}

// GET/INDEX (see all foods)
// pass in hideMessage as argument so create/update/destroy messages show
const onIndexFoods = function (event, hideMessage) {
  event.preventDefault()

  api.indexFoods()
    .then((res) => ui.indexFoodsSuccess(res, hideMessage))
    .catch(ui.indexFoodsFailure)
}

// DESTROY (remove selected food)
const onDestroyFood = function (event) {
  event.preventDefault()

  // get id for food who's remove button was clicked
  const foodId = $(event.target).data('id')
  // console.log('this is foodId:' + foodId)
  api.destroyFood(foodId)
    .then(ui.destroyFoodSuccess)
    // pass in true to show destroySuccess message
    .then(() => onIndexFoods(event, true))
    .catch(ui.destroyFoodFailure)
}

// UPDATE (update info for selected food)
const onUpdateFood = function (event) {
  event.preventDefault()

  const foodId = $(event.target).data('id')

  const form = event.target
  const formData = getFormFields(form)

  api.updateFood(foodId, formData)
    .then(ui.updateFoodSuccess(foodId))
    // pass in true to show updateSuccess message
    .then(() => onIndexFoods(event, true))
    .catch(ui.updateFoodFailure)
}

module.exports = {
  onCreateFood,
  onIndexFoods,
  onDestroyFood,
  onUpdateFood
}
