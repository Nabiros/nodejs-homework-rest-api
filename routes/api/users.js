const router = require('express').Router();
const { auth, ctrlWrapper } = require('../../middleware');
const { users: ctrl } = require('../../controllers');

router.get('/current', auth, ctrlWrapper(ctrl.getCurrent));

module.exports = router;