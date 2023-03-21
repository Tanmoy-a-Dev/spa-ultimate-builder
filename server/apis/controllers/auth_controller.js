/**
 * functions here we have
 * 1. signUp_controller
 * 2. signIn_controller
 * 3. verifyEmail_controller
 */

// imports
const { User } = require('../../db/models');
const { OAuth2Client } = require('google-auth-library');

// for google
const oAuth2Client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.REDIRECT_URI
);
const {
  genrateToken,
  setTokenCookie,
} = require('../../helpers/gen_setTokenCookie');

const signUp_controller = async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const user = await User.create({ email, username, password });
    res.status(201).json({ userData: user });
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error(error);
    }
    res.status(401).json({ msg: "Can't add user" });
  }
};

// signIn controller
const signIn_controller = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(401).json({ msg: 'Invalid Credentials' });
    }
    const isValidPassword = await User.comparePassword(password, user.password);
    if (!isValidPassword) {
      res.status(401).json({ msg: 'Invalid Credentials' });
    }
    // generate Token and send this token with a cookie
    const token = genrateToken(user);
    setTokenCookie(res, token);
    res.status(200).json({ msg: 'Logged In', token });
  } catch (error) {
    next(error);
  }
};

// google controller
// Controller to initiate the Google Sign-In flow
const googleAuth = async (req, res) => {
  const authUrl = oAuth2Client.generateAuthUrl({
    scope: ['profile', 'email'],
  });
  res.redirect(authUrl);
};
// Controller after the user grants permission
const googleAuthCallback = async (req, res) => {
  const { code } = req.query;
  const { tokens } = await oAuth2Client.getToken(code);
  oAuth2Client.setCredentials(tokens);
  const { data } = await oAuth2Client.request({
    url: 'https://www.googleapis.com/oauth2/v1/userinfo',
    method: 'GET',
  });
  const { id, email } = data;
  console.log(data);
  // Store the user's Google ID and access/refresh tokens in your database
  res.redirect('/');
};

module.exports = {
  signUp_controller,
  signIn_controller,
  googleAuth,
  googleAuthCallback,
};
