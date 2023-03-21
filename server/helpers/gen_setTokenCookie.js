const crypto = require('crypto');
const jwt = require('jsonwebtoken');

function genrateToken(user) {
  const payload = {
    sub: user.id,
    iat: Date.now(),
  };
  const options = {
    expiresIn: '1h',
  };
  // Generate a 128-character long key
  const SECRET_KEY = crypto.randomBytes(64).toString('hex');
  return jwt.sign(payload, SECRET_KEY, options);
}

function setTokenCookie(res, token) {
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 3600000,
  };
  res.cookie('authenticate', token, cookieOptions);
}

module.exports = { genrateToken, setTokenCookie };
