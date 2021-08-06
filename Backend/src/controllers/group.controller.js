const express = require("express");
const router = express.Router();
const Group = require("../models/group.model");


router.post("/", async (req, res) => {
  const group = await Group.create(req.body);
  res.json({ data: group });
})

router.patch("/:id", async (req, res) => {
    const id=req.params.id;
    const group = await Group.findByIdAndUpdate(id,req.body,{new:true});
    res.json({ data: group });
  })


router.get("/", async (req, res) => {
    const topic=req.query.topic; 
    const groups = await Group.find({topic}).populate("admin");
    res.json({ data: groups });
 }); 

router.get("/:id", async (req, res) => {
   const id=req.params.id;
   const group = await Group.findById(id).populate("members_id").populate("admin");
   res.json({ data: group });
});

module.exports = router;
 