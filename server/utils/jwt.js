const jwt = require("jsonwebtoken");
const { JWT_EXPIRE, JWT_SECRET_KEY } = require("../config");

const sendToken = (user, statusCode, res) => {
  const accessToken = user.signAccessToken();

  const accessTokenExpire = parseInt(JWT_EXPIRE, 10);

  const accessTokenOptions = {
    expires: new Date(Date.now() + accessTokenExpire * 1000),
    maxAge: accessTokenExpire * 1000,
    httpOnly: true,
    sameSite: "lax",
  };

  res.cookie("accessToken", accessToken, accessTokenOptions);
  res.status(statusCode).json({
    success: true,
    user,
    accessToken,
  });
};

const verifyToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    res.status(401).json({
      success: false,
      message: "Access denied. No token provided.",
    });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

module.exports = { sendToken, verifyToken };
