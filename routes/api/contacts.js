const router = require('express').Router()

const { contacts: ctrl } = require('../../controllers/index');
const { joiContactsSchema, favoriteSchema } = require('../../models/contacts');
const { auth, validation, ctrlWrapper } = require('../../middleware/index');

router.get('/', auth, ctrlWrapper(ctrl.getAll));

router.get('/:contactId', ctrlWrapper(ctrl.getId));

router.post('/', auth, validation(joiContactsSchema), ctrlWrapper(ctrl.addContact));

router.delete('/:contactId', ctrlWrapper(ctrl.removeById));

router.put('/:contactId', validation(joiContactsSchema), ctrlWrapper(ctrl.updateById));

router.patch('/:contactId/favorite', validation(favoriteSchema), ctrlWrapper(ctrl.updateFavorite));

module.exports = router
