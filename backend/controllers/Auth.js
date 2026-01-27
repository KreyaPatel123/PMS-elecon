const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signUp = async (request, response) => {
  try {
    const {
      firstName,
      middleName,
      lastName,
      email,
      password,
      confirmPassword,
      contactNumber,
      accountType,
    } = request.body;

    if (
      !firstName ||
      !middleName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !contactNumber ||
      !accountType
    ) {
      return response.status(403).json({
        success: false,
        message: "all the fields required",
      });
    }

    if (password !== confirmPassword) {
      return response.status(400).json({
        success: false,
        message:
          "Password and Confirm Password value does not match...Please try again",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return response.status(400).json({
        success: false,
        message: "Email is already Exists",
      });
    }

    const hanshPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      middleName,
      lastName,
      password: hanshPassword,
      email,
      accountType,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
      contactNumber,
    });

    return response.status(200).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return response.status(500).json({
      success: false,
      message: "User cannot be registrered...Please try again",
      error: error.message,
    });
  }
};

exports.login = async (request, response) => {
  try {
    const { email, password } = request.body;
    if (!email || !password) {
      return response.status(400).json({
        success: false,
        message: "Email and Password is required",
      });
    }

    const user = await User.findOne({ email });

    const isPasswordMatch = await bcrypt.compare(password, user?.password);

    //aa bev ne aek ma ae mate lakhyu che jethi hackers ne idea na aave ke email incorrect che ke aassword jo bev ne alag-alag validate karavat to hacker ne khabar padi jat message pr thi ke email incorrect che ke password incorrect che
    if (!user || !isPasswordMatch) {
      return response.status(401).json({
        success: false,
        message: "Email and Password is incorrect",
      });
    }

    // create token
    const payload = {
      id: user._id,
      email: user.email,
      accountType: user.accountType,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });

    // prepare user data without password
    const userData = user.toObject();
    //after login password is delete
    delete userData.password;
    userData.token = token;

    // send cookie options
    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days
      httpOnly: true,
      sameSite: "Strict",
    };

    // send response with token cookie
    return response.cookie("token", token, options).status(200).json({
      success: true,
      message: "Logged in successfully",
      token,
      user: userData,
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: "User login failed",
    });
  }
};
































































// exports.login = async (request, response) => {
//   try {
//     const { email, password } = request.body;
//     if (!email || !password) {
//       return response.status(400).json({

//         success: false,
//         message: "Email and Password is required",
//       });
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//       return response.status(404).json({
//         // 400 ના બદલે 404 use કરવો logical છે (Not Found)
//         success: false,
//         message: "User does not exist",
//       });
//     }

//     const isPasswordMatch = await bcrypt.compare(password, user?.password);
//     if (!isPasswordMatch) {
//       return response.status(401).json({
//         success: false,
//         message: "Incorrect password",
//       });
//     }

//     // create token
//     const payload = {
//       id: user._id,
//       email: user.email,
//       accountType: user.accountType,
//     };

//     const token = jwt.sign(payload, process.env.JWT_SECRET, {
//       expiresIn: "2h",
//     });

//     // prepare user data without password
//     const userData = user.toObject();
//     userData.password = undefined;
//     userData.token = token;

//     // send cookie options
//     const options = {
//       expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days
//       httpOnly: true,
//     };

//     // send response with token cookie
//     return response.cookie("token", token, options).status(200).json({
//       success: true,
//       message: "Logged in successfully",
//       token,
//       user: userData,
//     });
//   } catch (error) {
//     return response.status(500).json({
//       success: false,
//       message: "User login failed",
//       error: error.message,
//     });
//   }
// };
