const verifyOTP = require("./verify");

const userOTP = "371597"; // Replace with the OTP entered by the user

const verificationResult = verifyOTP(userOTP);

if (verificationResult) {
  console.log("OTP verification successful!");
} else {
  console.log("OTP verification failed!");
}