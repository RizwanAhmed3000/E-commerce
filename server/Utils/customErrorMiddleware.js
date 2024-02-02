export const customError = (err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    return res.status(errorStatus).send({
        status: "falied",
        errorStatus: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
}