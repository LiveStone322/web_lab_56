const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
const jsonParser = express.json();

app.use(cors());
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), function () {
  console.log("listening on: ", app.get("port"));
});

app.get("/", async (req, res) => {

});
