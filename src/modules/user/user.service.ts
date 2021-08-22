import UserModel from '../../models/user.entity';
import { v4 as uuid } from 'uuid';

import { userSignupInput } from '../../interfaces/user';

export async function create(input: userSignupInput) {
  const id = uuid();
  console.log(input, ' input');
  await UserModel.collection.insertOne({
    id,
    ...input,
  });
  return id;
}

export function findById(id: String) {
  const user = UserModel.findOne(
    {
      id: id,
    },
    { _id: 0 }
  );
  return user;
}
