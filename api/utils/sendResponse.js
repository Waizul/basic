const sendResponse = (res, data) => {
  if (data.token) {
    res
      .cookie("access_token", data.token, { httpOnly: true })
      .status(data.statusCode)
      .json({
        success: true,
        message: data.message,
        statusCode: data.statusCode,
        data: data.data,
      });
  }

  res.status(data.statusCode).json({
    success: true,
    message: data.message,
    statusCode: data.statusCode,
    data: data.data,
  });
};

export default sendResponse;
