const con = require("./connection");

const orm = {
    selectAll: function (arr) {
        // [ table ]
        let query = "SELECT * FROM ??"
        return new Promise((resolve, reject) => {
            con.query(query, arr, (err, res) => {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                resolve(res);
            });
        });
    },
    selectWhere: function (arr) {
        // [ table, conCol, conVal ]
        let query = "SELECT * FROM ?? WHERE ?? = ?";
        return new Promise((resolve, reject) => {
            con.query(query, arr, (err, res) => {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                resolve(res);
            });
        });
    },
    insert: function (arr) {
        // [ table, inputCols, inputVals ]
        let query = "INSERT INTO ?? (??) VALUES (?)";
        return new Promise((resolve, reject) => {
            con.query(query, arr, (err, res) => {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                resolve(res);
            });
        });
    },
    update: function (arr) {
        // [ table, inputCol, inputVal, conCol, conVal ]
        let query = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        return new Promise((resolve, reject) => {
            con.query(query, arr, (err, res) => {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                resolve(res);
            });
        });
    },
    delete: function (arr) {
        // [ table, conCol, conVal ]
        let query = "DELETE FROM ?? WHERE ?? = ?";
        return new Promise((resolve, reject) => {
            con.query(query, arr, (err, res) => {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                resolve(res);
            });
        });
    }
}

module.exports = orm;