// const contactsOperations = require('../../model/contacts/index');

const { Contact } = require('../../models/index.js');


const getAll = async (req, res, next) => {
    try {
        // const data = await Contact.find({});
        const data = await contactsOperations.listContacts();
        res.json(data);
    } catch (err) {
        next(err);
    }
};

module.exports = getAll;