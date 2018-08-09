const exp = require("express");
const burger = require("../models/burger.js");

var router = exp.Router();

router.get("/", function (req, res) {
    burger.all().then((data) => {
        let obj = { data };
        res.render("index", obj);
    });
});

router.get("/api/burgers/", (req, res) => {
    burger.all().then((data) => {
        res.json(data);
    });
});

router.post("/api/burgers/", (req, res) => {
    // May break on req.body.name
    burger.add(req.body.name).then((data) => {
        // console.log("\n\nposted:", data, "\n\n");
        res.send(data);
    });
});

router.put("/api/burgers/:id", (req, res) => {
    let id = req.params.id;
    burger.devour(id).then((data) => {
        // console.log("\n\ndevoured:", data, "\n\n");
        res.send(data);
    });
});

router.delete("/api/burgers/:id", (req, res) => {
    let id = req.params.id;
    burger.delete(id).then((data) => {
        // console.log("\n\ndeleted:", data, "\n\n");
        res.send(data);
    });
});

module.exports = router;