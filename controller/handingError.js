exports.HandingErorr = function (res, e) {
    if (e.status) {
        console.log(`${e.name}(${e.status}):${e.message}`)
        return res.status(e.status).json({
            error: {
                message: e.message.toString()
            }
        })
    }
    console.log(`${e.name}:${e.message}`)
    res.status(500).json({
        error: {
            message: e.message.toString()
        }
    })
}