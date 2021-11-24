const contactsOperations = require('../../model/index');

const getAll = async (req, res, next) => {
    try {
        const data = await contactsOperations.listContacts();
        res.json(data);
    } catch (err) {
        next(err);
    }
};

module.exports = getAll;