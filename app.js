const path = require("path");

const express = require("express");
const spaceRoutes = require("./routes/space-routes");

const app = express();

app.use(express.static("public"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(spaceRoutes);

app.use((req, res, next) => {
  res.status(404).render("404");
});

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).render("500");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listens on PORT: ${PORT}`);
});
