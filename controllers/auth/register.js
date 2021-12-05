const { Conflict } = require('http-errors');
const { User } = require('../../models');
const bCrypt = require('bcryptjs');

const register = async (req, res) => {
    const { name, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            throw new Conflict(`this email: ${email} is already in use`)
        }
        const hushPassword = bCrypt.hashSync(password, bCrypt.genSaltSync(10));
        const result = await User.create({ name, email, password: hushPassword });

        res.status(201).json({
            status: 'success',
            code: 201,
            user: {
                email,
                name,
            }
        })

} 

module.exports = register;