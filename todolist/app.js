const express = require("express");
const mongoose = require("mongoose");

const app = express();

// server configs
app.listen(3000, () => console.log("Server started listening on port: 3000"));