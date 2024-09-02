const path = require("path");
const fs = require("fs/promises");

const express = require("express");

const app = express();

app.use(express.static("public"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res, next) => {
  res.render("index");
});

app.get("/destination", (req, res, next) => {
  res.render("destination");
});

app.get("/crew", (req, res, next) => {
  res.render("crew");
});

app.get("/technology", (req, res, next) => {
  res.render("technology");
});

app.get("/space-data", async (req, res, next) => {
  const filePath = path.join(__dirname, "data.json");
  const fileData = await fs.readFile(filePath);

  const destinationArray = JSON.parse(fileData);

  res.json({ data: destinationArray });
});

app.use((req, res, next) => {
  res.status(404).send("No Route found");
});

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).send("Error occurred");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listens on PORT: ${PORT}`);
});
