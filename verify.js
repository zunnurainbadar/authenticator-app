const dotenv = require("dotenv");
const speakeasy = require("speakeasy");
dotenv.config();

const key = process.env.SECRET_KEY

function verifyOTP(otp) {
  console.log('key', key)
  console.log('otp', otp)
  const verified = speakeasy.totp.verify({
    secret: key,
    encoding: "base32",
    token: otp,
  });
  console.log('verified', verified)
  return verified;
}

module.exports = verifyOTP;