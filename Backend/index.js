const express = require("express");
const app = express();

app.use(express.json());

const connect = require("./src/config/db");
const UserController= require("./src/controllers/user.controller")
const GroupController= require("./src/controllers/group.controller")

app.use("/user",UserController)
app.use("/groups",GroupController)
const start = async () => {
  await connect();
  app.listen(1200, () => {
    console.log("listening to 1200");
  });
};
start();