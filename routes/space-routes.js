const path = require("path");
const fs = require("fs/promises");

const express = require("express");

const router = express.Router();

let spaceData;

const asyncMiddleware = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/destination", (req, res, next) => {
  res.render("destination");
});

router.get("/crew", (req, res, next) => {
  res.render("crew");
});

router.get("/technology", (req, res, next) => {
  res.render("technology");
});

router.get(
  "/space-data",
  asyncMiddleware(async (req, res, next) => {
    try {
      if (!spaceData) {
        const filePath = path.join(__dirname, "..", "data", "data.json");
        const fileData = await fs.readFile(filePath);

        const destinationArray = JSON.parse(fileData);

        spaceData = destinationArray;
        console.log("loaded data to memory");
      }

      res.json({ error: null, data: spaceData });
    } catch (error) {
      res.json({ error: error.toString() });
    }
  })
);

module.exports = router;
