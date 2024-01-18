import catchAsync from "../../utils/catchAsync.js";
import { AuthServices } from "./auth.service.js";
import sendResponse from "../../utils/sendResponse.js";

const signup = catchAsync(async (req, res) => {
  const result = await AuthServices.signupIntoDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    message: "User created successfully.",
    data: result,
  });
});

const signin = catchAsync(async (req, res) => {
  const result = await AuthServices.signinIntoDB(req.body);

  sendResponse(res, {
    statusCode: 200,
    message: "User logged in successfully.",
    data: result.rest,
    token: result.token,
  });
});

const google = catchAsync(async (req, res) => {
  const result = await AuthServices.googleSigninDataIntoDB(req.body);

  sendResponse(res, {
    statusCode: 200,
    message: "User logged in successfully.",
    data: result.rest,
    token: result.token,
  });
});

const signout = catchAsync(async (req, res) => {
  res.clearCookie("access_token");
  sendResponse(res, {
    statusCode: 200,
    message: "User logged out successfully.",
    data: null,
    token: null,
  });
});

export const AuthControllers = {
  signup,
  signin,
  google,
  signout,
};
