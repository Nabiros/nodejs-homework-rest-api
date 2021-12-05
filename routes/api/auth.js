const router = require('express').Router()

const { auth: ctrl } = require('../../controllers/index');
const { joiUserSchema, joiLoginSchema } = require('../../models/users');
const { validation, ctrlWrapper} = require('../../middleware/index');

router.post('/register', validation(joiUserSchema), ctrlWrapper(ctrl.register));
router.post('/login', validation(joiLoginSchema), ctrlWrapper(ctrl.login));

module.exports = router;