const debug = require("debug")("app:startup");
const config = require("config");
const morgan = require("morgan");
const helmet = require("helmet");
const courses = require("./routes/courses");
const home = require("./routes/home");
const logger = require("./middleware/logger");
const express = require("express");
const app = express();

app.set("view engine", "pug"); // Express internally export this module so no need to require
app.set("views", "./views"); // This is default so display this only if you want to store pug somewhere else.

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(logger);
app.use(helmet());
app.use("/api/courses", courses);
app.use("/", home);

// Configuration
console.log("Application Name: " + config.get("name"));
console.log("Mail Server: " + config.get("mail.host"));
console.log("Mail Password: " + config.get("mail.password"));

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  debug("Morgan enabled...");
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
