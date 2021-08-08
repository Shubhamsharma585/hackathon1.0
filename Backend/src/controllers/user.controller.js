const express = require("express");
const router = express.Router();
const User = require("../models/user.model");


router.post("/", async (req, res) => {  
  const user = await User.create(req.body);
  res.json({ data: user });
})

router.get("/", async (req, res) => {
    const user_name=req.query.username;
    const user = await User.findOne({user_name});
    res.json({ data: user });
 });

router.get("/:id", async (req, res) => {
   const id=req.params.id;
   const user = await User.findById(id);
   res.json({ data: user });
});

module.exports = router;
 