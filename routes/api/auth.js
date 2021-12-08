const router = require('express').Router()

const { auth: ctrl } = require('../../controllers');
const { joiUserSchema, joiLoginSchema } = require('../../models/users');
const {auth, validation, ctrlWrapper} = require('../../middleware/index');

router.post('/register', validation(joiUserSchema), ctrlWrapper(ctrl.register));
router.post('/login', validation(joiLoginSchema), ctrlWrapper(ctrl.login));
router.get('/logout', auth, ctrlWrapper(ctrl.logout));

module.exports = router;