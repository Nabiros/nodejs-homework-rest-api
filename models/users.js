const { Schema, model } = require('mongoose');
const Joi = require('joi');

const userSchema = Schema(
  {
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: 6,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter"
    },
    token: {
        type: String,
        default: null,
    },
  },
    {
        versionKey: false,
        timestamps: true
    }
);

const joiUserSchema = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().min(6).required(),
});

const joiLoginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(6).required(),
});

const User = model('user', userSchema);

module.exports = {
    joiUserSchema,
    joiLoginSchema,
    User,
};