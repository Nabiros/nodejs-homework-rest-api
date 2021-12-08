const { Contact } = require('../../models');
const { NotFound } = require('http-errors');
const mongoose = require('mongoose');

const getId = async (req, res, next) => {
    const { contactId } = req.params;
        const isValidId = mongoose.Types.ObjectId.isValid(contactId);

        if (!isValidId)
            throw new NotFound(`id ${contactId} not found `);
        
        const result = await Contact.findById(contactId);

        res.json({
            status: 'success',
            code: 200,
            data: {
                result
            }
        });
};

module.exports = getId;