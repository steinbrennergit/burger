const orm = require("../config/orm");

const burger = {
    all: function () {
        // [ table ]
        let arr = ["burgers"];
        return new Promise((resolve, reject) => {
            orm.selectAll(arr).then((data) => {
                resolve(data);
            }).catch((err) => {
                if (err) {
                    console.log(err);
                    reject(err);
                }
            });
        });
    },
    add: function (burgerName) {
        // [ table, inputCols, inputVals ]
        let arr = ["burgers", "burger_name", burgerName];
        return new Promise((resolve, reject) => {
            orm.insert(arr).then((data) => {
                resolve(data);
            }).catch((err) => {
                if (err) {
                    console.log(err);
                    reject(err);
                }
            });
        });
    },
    devour: function (id) {
        // [ table, inputCol, inputVal, conCol, conVal ]
        let arr = ["burgers", "devoured", "1", "id", id];
        return new Promise((resolve, reject) => {
            orm.update(arr).then((data) => {
                resolve(data);
            }).catch((err) => {
                if (err) {
                    console.log(err);
                    reject(err);
                }
            });
        });
    },
    delete: function (id) {
        // [ table, inputCol, inputVal ]
        let arr = ["burgers", "id", id.toString()];
        return new Promise((resolve, reject) => {
            orm.delete(arr).then((data) => {
                resolve(data);
            }).catch((err) => {
                if (err) {
                    console.log(err);
                    reject(err);
                }
            });
        });
    }
};

module.exports = burger;