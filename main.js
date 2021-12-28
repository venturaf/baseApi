require('dotenv').config(); // VARIABLES DE ENTORNO

const express = require('express'); // HTTP EXPRESS

const startServer = require("./app")(express);