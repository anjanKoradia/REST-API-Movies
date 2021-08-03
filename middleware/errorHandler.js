const { ValidationError } = require("joi");
const CustomErrorHandler = require("../services/CustomErrorHandler");

const errorHandler = (err, req, res, next) => {
  let statusCode = 500;
  let data = {
    message: "Internal server error",
    originalError: err.message,
  };

  if (err instanceof ValidationError) {
    statusCode = 422;
    data = {
      message: err.message,
      originalStatusCode: err.statusCode,
    };
  }

  if (err instanceof CustomErrorHandler) {
    statusCode = err.status;
    data = {
      message: err.message,
      originalStatusCode: err.statusCode,
    };
  }

  return res.status(statusCode).json(data);
};

module.exports = errorHandler;
