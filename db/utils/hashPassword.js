import bcrypt from 'bcryptjs';

const SALT_FACTOR = 10;

async function hashPassword(plainTextPw) {
  const hashedPassword = await new Promise((resolve, reject) => {
    bcrypt.hash(plainTextPw, SALT_FACTOR, (err, hash) => {
      if (err) reject(err);
      resolve(hash);
    });
  });
  return hashedPassword;
}

export default hashPassword;
