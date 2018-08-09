// Dependencies
// =============================================================
const exp = require("express");
const bp = require("body-parser");

// Sets up the Express App
// =============================================================
const a = exp();
const PORT = process.env.PORT || 3000;
const router = require("./controllers/burgers_controller.js");

// Sets up the Express app to handle data parsing
a.use(exp.static("public"));
a.use(bp.urlencoded({ extended: true }));
a.use(bp.json());
a.use(router);

// Set Handlebars.
const exphbs = require("express-handlebars");

a.engine("handlebars", exphbs({ defaultLayout: "main" }));
a.set("view engine", "handlebars");

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

a.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});