import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  id: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  photo: String,
});

export default model('users', userSchema);
