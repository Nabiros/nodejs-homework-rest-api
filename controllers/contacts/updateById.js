const { Contact } = require('../../models');
const { NotFound } = require('http-errors');

const updateById = async (req, res, next) => {
    try {
        const { contactId } = req.params;
        const result = await Contact.findByIdAndUpdate(contactId, req.body, {
            new: true
        });
        
        if (!result) {
            throw new NotFound(`id ${contactId} not found`);
        }
        res.json({
            status: 'success',
            code: 200,
            data: {
                result
            }
        });
    } catch (err) {
        next(err);
    }
};

module.exports = updateById;