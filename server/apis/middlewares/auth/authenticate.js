require('dotenv-safe').config({ allowEmptyValues: true });
const jwt = require('jsonwebtoken');
const CustomError = require('../../../helpers/customErrors');

function authenticate(req, res, next) {
  // console.log(req);
  const token = req.cookies.authenticate;
  if (!token) {
    // res.status(401).json({ msg: 'Unauthorized' });
    next(new CustomError('401', 'No Token'));
  }

  try {
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    req.userId = decode.sub;
    next();
  } catch (error) {
    next(new CustomError('401', 'Unauthorized access'));
    // res.status(401).send('Unauthorized');
  }
}

module.exports = authenticate;
