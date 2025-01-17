const { Schema, model, SchemaTypes } = require('mongoose');
const Joi = require('joi');

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      required: [true, "Set email"],
    },
    phone: {
      type: String,
      required: [true, "Set phone Number"],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
    {
        versionKey: false,
        timestamps: true
    }
);

const joiContactsSchema = Joi.object({
    name: Joi.string().min(2).max(40).required(),
    email: Joi.string().min(4).max(40).required(),
    phone: Joi.string().min(8).max(20).required(),
});

const favoriteSchema = Joi.object({
    favorite: Joi.boolean(),
});

const Contact = model('contact', contactSchema);

module.exports = {
    joiContactsSchema,
    favoriteSchema,
    Contact
};