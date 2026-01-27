//short code
const Code = require("../models/Code");

// random 6 digit code generator
const generateSixDigitCode = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// create & return unique shortcode
exports.createShortCode = async () => {
  let code;
  let isUnique = false;

  while (!isUnique) {
    code = generateSixDigitCode();
    const exists = await Code.findOne({ shortCode: code });
    if (!exists) isUnique = true;
  }

  const newCode = await Code.create({ shortCode: code });
  return newCode;
};
