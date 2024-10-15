const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser');

const corsOptions = {
  origin: true,
  credentials: true,
}
app.use('*', cors(corsOptions));
app.use(cookieParser());

//parser
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// routes

// Global error handler
// app.use(globalErrorHandler)

app.get('/', async (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome HTTP SERVER',
  })
})


module.exports = app;
