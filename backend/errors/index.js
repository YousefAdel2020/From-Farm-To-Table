//? this file to collect all error files in one file
const CustomAPIError = require('./custom-api')
const UnauthenticatedError = require('./unauthorized')
const NotFoundError = require('./NotFound')
const BadRequestError = require('./badRequest')
const ForbidenError=require("./forbiden")

module.exports = {
  CustomAPIError,
  UnauthenticatedError,
  NotFoundError,
  BadRequestError,
  ForbidenError
}
