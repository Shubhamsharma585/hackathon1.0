const mongoose = require("mongoose")

const documentSchema = mongoose.Schema({
  _id: String,
  data: Object,
})

const Document=mongoose.model("document", documentSchema)
module.exports = Document

