const mongoose = require("mongoose");

const apipvt = "381a9ba9-adec-4886-a678-416e37df5526";
const dbURL =
  "mongodb+srv://daksh:12345@cluster0.kpot1.mongodb.net/Food?retryWrites=true&w=majority";
const connect = async () => {
  try {
    await mongoose.connect(dbURL, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true,
    });
    console.log("connected DB");
  } catch (err) {
    console.warn(err);
  }
};

connect();
