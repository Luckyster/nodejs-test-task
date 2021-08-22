export const userSignupInputValidator = {
  firstName: { type: 'string', require: true, min: 4, max: 20 },
  lastName: { type: 'string', require: true, min: 4, max: 20 },
  password: { type: 'string', require: true, min: 8, max: 20 },
  email: { type: 'string', require: true, min: 5, max: 30 },
  photo: { type: 'string', require: true },
};
