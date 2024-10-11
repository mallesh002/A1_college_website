// project/backend/schema/studentSchema.js

import Joi from 'joi';

export const studentSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().integer().min(1).required(),
  department: Joi.string().required(),
  email: Joi.string().email().required(),
});
