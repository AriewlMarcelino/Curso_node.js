const express = require("express");
const path = require("path");
const app = express();

const users = require('./users')

const port = 3000;


app.use('/users',users)


