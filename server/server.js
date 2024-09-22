const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const customerRoute = require("./routes/customer");
const productRoute = require("./routes/product");

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/pages/home.html"));
});

app.get("/menu", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/pages/menu.html"));
});

app.use("/customer", customerRoute);
app.use("/product", productRoute);

app.listen(3000, () => {
  console.log("Server open on port 3000");
});

