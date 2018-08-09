const mysql = require('mysql');

var con;
if (process.env.JAWSDB_URL) {
    con = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    con = mysql.createConnection({
        host: "localhost",

        // Your port; if not 3306
        port: 3306,

        // Your username
        user: "root",

        // Your password
        password: "root",
        database: "burgers_db"
    });
}

module.exports = con;