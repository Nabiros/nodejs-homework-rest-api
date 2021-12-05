const router = require('express').Router()

const { contacts: ctrl } = require('../../controllers/index');
const { joiContactsSchema, favoriteSchema } = require('../../models/contacts');
const { validation } = require('../../middleware/index');

module.exports = router;