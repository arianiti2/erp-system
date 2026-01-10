const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode && res.statusCode !== 200
    ? res.statusCode
    : 500;

  
  console.error(err);

  res.status(statusCode).json({
    message:
      process.env.NODE_ENV === "production"
        ? "Something went wrong"
        : err.message,
    stack:
      process.env.NODE_ENV === "production"
        ? null
        : err.stack,
  });
};

module.exports = errorHandler;
