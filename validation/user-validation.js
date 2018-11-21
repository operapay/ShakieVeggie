const { body } = require('express-validator/check');

const config = {
    signup: [
        body('firstname')
            .isLength({ min: 3 })
            .trim()
            .escape()
            .withMessage('firstname require string more than 3 charater'),
        body('lastname')
            .isLength({ min: 3 })
            .trim()
            .escape()
            .withMessage('lastname require string more than 3 charater'),
        body('email')
            .isEmail()
            .normalizeEmail()
            .withMessage('email is invaild'),
        body('username')
            .isLength({ min: 3 })
            .trim()
            .escape()
            .withMessage('username require string more than 3 charater'),
        body('password')
            .withMessage('password require password'),
        body('password2')
            .custom((value,{req,res}) => {
                if (value !== req.body.password) {
                    throw new Error("Passwords not match");
                } else {
                    return value;
                }
            }),
        body('phone')
            .isLength({ min: 10 })
            .trim()
            .escape()
            .withMessage('phone require string 10 charater'),
    ]
}
module.exports = config