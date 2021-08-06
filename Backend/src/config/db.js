const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect(
      "mongodb+srv://manisgdb:manish@cluster0.ufnzw.mongodb.net/group_study?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    );
  };

  module.exports=connect;