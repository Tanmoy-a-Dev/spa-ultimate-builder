const router = require('express').Router();
const { User } = require('../../../db/models');
const nodemailer = require('nodemailer');
// for sometime

const validator = require('../../middlewares/validator/validator');
const user_validationRules = require('../../../helpers/validation_rules/user_validationRules');
const {
  genrateToken,
  setTokenCookie,
} = require('../../../helpers/gen_setTokenCookie');
const transport = require('../../../config/email_config');
const {
  signUp_controller,
  signIn_controller,
} = require('../../controllers/auth_controller');

router.post('/sign-up', validator(user_validationRules), signUp_controller);
// login request
router.post('/sign-in', signIn_controller);

// verify email
router.post('/verify-email/:userId', async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.params.userId } });
    // console.log(user.verifyEmailSent);
    if (!user || user.activated) {
      res.status(401).json({
        errorType: 'Unauthorized',
        msg: "You don't have the privilige to do this action !",
      });
    }

    if (
      user.verifyEmailSent == 'Invalid Date' ||
      Date.now() - user.verifyEmailSent > 120000
    ) {
      // console.log(prev_email_sendTime);
      const token = genrateToken(user);
      const link = `${process.env.WEBSITE}/${token}`;
      const old_time = user.verifyEmailSent;
      const mailOptions = {
        from: 'tuto6634@gmail.com',
        to: user.email,
        subject: 'test verify email',
        text: `This is test_1 for verifying email for sign up process. Click this link to verify your mail ${link}`,
      };

      transport.sendMail(mailOptions, async (error, info) => {
        if (error) {
          console.error(error);
          user.verifyEmailSent = old_time;
          await user.save();
          res.status(500).json({ msg: 'email send failed !' });
        } else {
          console.log(info);
          user.verifyEmailSent = Date.now();
          // if (!user.activated) {
          //   user.activated = true;
          // }
          await user.save();
          res.status(200).json({ msg: 'email send successfully !' });
        }
      });
    } else {
      res.status(401).json({
        errorType: 'Unauthorized',
        msg: 'Wait for 2 minutes before sending another email',
      });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

const jwt = require('jsonwebtoken');
const CustomError = require('../../../helpers/customErrors');
router.get('/check-token/:emailToken', async (req, res) => {
  try {
    const token = req.params.emailToken;
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    const timeInterval = Date.now() - decode.iat;
    if (timeInterval < 300000) {
      const user = await User.findOne({ where: { id: decode.sub } });
      user.activated = true;
      await user.save();
      res.status(200).json({ msg: 'Ok', timeInterval });
    } else throw new CustomError(401, 'Token is invalid');
  } catch (error) {
    res.status(401).json({ msg: error.message });
  }
});

// const GOOGLE_CLIENT_ID = 'YOUR_CLIENT_ID';
// const GOOGLE_CLIENT_SECRET = 'YOUR_CLIENT_SECRET';
// const REDIRECT_URI = 'http://localhost:5000/auth/google/callback';

module.exports = router;
