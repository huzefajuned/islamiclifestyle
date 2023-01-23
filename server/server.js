const express = require("express");
const mongoose = require("mongoose");
const DATABASE = require("./connection/db_connection");
// describing backend port
const PORT = 5500;
//init... app
const app = express();
//
app.listen(PORT, () => {
    console.log(`PORT RUNNING ON ${PORT}`);
});
