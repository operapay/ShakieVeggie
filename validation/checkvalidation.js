const { validationResult } = require('express-validator/check')
checkValidation = async (req, res, next) => {
    const errors = await validationResult(req);
    if (!errors.isEmpty()) {
        res.render('register',{
            errors:errors.array()
        });
        return null;
    }
    next()
}

module.exports = checkValidation