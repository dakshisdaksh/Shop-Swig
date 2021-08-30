const express = require("express");
const cors = require("cors");
const foodRoutes = require("./api/routes/routes");
const router = express.Router();

require("./config/mongoose.js");

const app = express();
const port = 8000;
app.get("/", (req, res) => {
  res.send("Hello World! backend");
}); 

app.use("/", router);
app.use(express.json());

app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "*");
  res.set("Access-Control-Allow-Methods", "*");
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  next();
});

app.get("/food", foodRoutes);
app.get("/restaurants", foodRoutes );

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
