const mysql = require('mysql');

const con = mysql.createConnection({
    host: "l6slz5o3eduzatkw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "i46buqu6ft76tq5o",

    // Your password
    password: "yguyh99wqvbb6orp",
    database: "h1ghpl9vtprg53o3"
});

module.exports = con;