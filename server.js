// Dependencies
// =============================================================
const exp = require("express");
const bp = require("body-parser");

// Sets up the Express App
// =============================================================
const a = exp();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

require("./controllers/burgers_controller.js")(a);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});