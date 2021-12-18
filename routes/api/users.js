const router = require('express').Router();
const { auth, upload, ctrlWrapper } = require('../../middleware');
const { users: ctrl } = require('../../controllers');

router.get('/current', auth, ctrlWrapper(ctrl.getCurrent));

router.patch('/avatars', auth, upload.single('avatar'), ctrlWrapper(ctrl.updateAvatar));

module.exports = router;