const express = require("express");
const app = express();
const cors = request("cors");
require("./db/config");
const User = require("./db/User");
app.use(express.json());
app.use(cors());
app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  res.send(result);
});

app.listen(3005, () => {
  console.log("app is running");
});
