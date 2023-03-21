require('dotenv-safe').config({ allowEmptyValues: true });
const express = require('express');
const next = require('next');
const favicon = require('serve-favicon');
const path = require('path');
const errorHandler = require('./apis/middlewares/error/errorHandler');
//when have to upload in a hosting i have to change this to development
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const sequelize = require('./sequelize');
const port = process.env.PORT || 5000;

// google signIn

// importing all routes
const apiRoutes = require('./apis/routes');

const cookieParser = require('cookie-parser');
const authenticate = require('./apis/middlewares/auth/authenticate');
const {
  googleAuth,
  googleAuthCallback,
} = require('./apis/controllers/auth_controller');

nextApp
  .prepare()
  .then(() => {
    const server = express();
    server.use(express.json());
    server.use(cookieParser());

    // Route to initiate the Google Sign-In flow
    server.get('/auth/google', googleAuth);
    // Callback route after the user grants permission
    server.get('/auth/google/callback', googleAuthCallback);
    // all api routes will have /sp-build_export/api in their prefix
    server.use('/sp-build_export/api', apiRoutes);
    // server.get('/protected', authenticate, (req, res) => {
    //   res.status(200).json({ userData: { id: 2, activated: true } });
    // });
    // main error handler will catch all errors and send error name and messeage as a object
    server.use(errorHandler);
    server.all('*', (req, res) => handle(req, res));
    server.listen(port, (err) => {
      if (err) throw err;
      // sequelize
      //   .authenticate()
      //   .then(() => {
      //     console.log(
      //       `Server Started on ${port} && Datbase connection successful`
      //     );
      //   })
      //   .catch((errorStack) => {
      //     if (process.env.NODE_ENV === 'development') {
      //       console.log(errorStack);
      //     } else {
      //       console.log("Database Error! Can't connect to the datbase ! ");
      //     }
      //   });

      console.log(`Server is running on ${port}`);
    });
  })
  .catch((errorStack) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(errorStack);
    } else {
      console.log("Server Error. Can't connect to the server! ");
    }
  });
