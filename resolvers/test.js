module.exports.test = (event, ctx, r) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: `Lambda function ran successfully`,
            event
        }, null, 2)
    }

    r(null, response);
}