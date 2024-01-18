import User from "./user.module.js";

const getUserFromDB = async () => {
  const users = await User.find();
};

export const UserServices = {
  getUserFromDB,
};
