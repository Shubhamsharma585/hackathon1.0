const mongoose = require("mongoose");
const User=require("./user.model")

const groupSchema = mongoose.Schema({
    name:String,
    qualification:String,
    topic:String,
    limit:Number,
    admin:{type:mongoose.Schema.Types.ObjectId, ref:"user"},
    members_id:[{type:mongoose.Schema.Types.ObjectId, ref:"user"}]
  });
  
  const Group = mongoose.model("group", groupSchema);
  
  module.exports=Group;