import Validator from 'fastest-validator';

const validator = new Validator();

export default async function <O, U>(obj: O, schema: U) {
  const check = validator.compile(schema);
  const correctData = await check(obj);

  if (correctData !== true) {
    const { message } = correctData[0];
    throw new Error(message);
  }
}
