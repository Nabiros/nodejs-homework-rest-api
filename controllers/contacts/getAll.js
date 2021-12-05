const { Contact } = require('../../models');


const getAll = async (req, res, next) => {
    const data = await Contact.find({});
        res.json({
            status: 'success',
            code: 200,
            data
        });
};

module.exports = getAll;