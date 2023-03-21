const { validationResult } = require('express-validator');

const validator = (rules) => {
  return async (req, res, next) => {
    await Promise.all(rules.map((rule) => rule.run(req)));
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    // next(errors.array());
    // return res.status(422).json({ errors: errors.array() });
    // return res.status(422).send(errors);
    return res.status(422).json({
      errorType: 'Validation Error',
      errors: errors.array().map((error) => {
        return { field: error.param, msg: error.msg };
      }),
    });
  };
};

module.exports = validator;
