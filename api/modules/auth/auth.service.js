import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../user/user.module.js";
import config from "../../config/index.js";
import errorHandler from "../../utils/error.js";


const signupIntoDB = async (payload) => {
  const { username, email, password } = payload;

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const result = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  return result;
};

const signinIntoDB = async (payload) => {
  const { email, password } = payload;
  const validUser = await User.findOne({ email });
  if (!validUser) return next(errorHandler(404, "User not found."));
  const validPassword = bcryptjs.compareSync(password, validUser.password);
  if (!validPassword) return next(errorHandler(401, "Wrong credentials."));
  const token = jwt.sign({ id: validUser._id }, config.jwt_secret);

  const { password: pass, ...rest } = validUser._doc;
  return {
    rest,
    token,
  };
};

const googleSigninDataIntoDB = async (payload) => {
  const { name, email, photo } = payload;

  const user = await User.findOne({ email });
  if (user) {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = user._doc;
    return { rest, token };
  } else {
    const generatedPassword =
      Math.random().toString(36).slice(-8) +
      Math.random().toString(36).slice(-8);
    const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
    const newUser = new User({
      username:
        name.split(" ").join("").toLowerCase() +
        Math.random().toString(36).slice(-4),
      email: email,
      password: hashedPassword,
      avatar: photo,
    });
    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = newUser._doc;
    return { rest, token };
  }
};
export const AuthServices = {
  signupIntoDB,
  signinIntoDB,
  googleSigninDataIntoDB,
};
