const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) =>
      next(error)
    );
  };
};

export default asyncHandler;

// This is a utility function to handle asynchronous errors in Express.js.
// It wraps an async function and catches any errors that occur, passing them to the next middleware.
/* Alternative implementation */
// const asyncHandler = (fn) => (req, res, next) => {
//   try {
//   } catch (error) {
//     res.status(error.code || 500).json({
//       success: false,
//       message: error.message || "Internal Server Error",
//       error: error,
//     });
//   }
// };
