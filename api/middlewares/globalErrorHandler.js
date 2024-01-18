const globalErrorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.log('global error', err.message)
  const message = err.message || "Internal Server Error.";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
};

export default globalErrorHandler;
