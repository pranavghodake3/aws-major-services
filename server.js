const express = require("express");
const app = express();
const testRoute = require("./routes/testRoute");
require("dotenv").config();

app.use("/test", testRoute);

app.listen(process.env.PORT, () => {
    console.log("Server started on PORT: ", process.env.PORT)
});
