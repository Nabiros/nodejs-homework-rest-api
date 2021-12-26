const sgMail = require('@sendgrid/mail');
const { SENDGRID_API_KEY } = process.env;
require('dotenv').config();

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
    const email = { ...data, from: 'nazex.xls@gmail.com' };
    try {
        await sgMail.send(email);
        return true;
    } catch (err) {
        throw err;
    }
}

module.exports = sendEmail;