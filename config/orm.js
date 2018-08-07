const con = require("./connection");

const orm = {
    selectAll = function () {
        return new Promise(function (resolve, reject) {
            con.query("SELECT * FROM burgers", (err, res) => {
                resolve(res);
            });
        });
    },
    insertOne = function (arr) {
        return new Promise(function (resolve, reject) {
            con.query("INSERT INTO burgers (burger_name) VALUES (?)", arr, (err, res) => {
                resolve(res);
            });
        });
    },
    updateOne = function (arr) {
        return new Promise(function (resolve, reject) {
            con.query("UPDATE burgers SET devoured = ? WHERE id = ?", arr, (err, res) => {
                resolve(res);
            });
        });
    }
}

module.exports = orm;