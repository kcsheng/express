const express = require("express");
const app = express();

// methods available corresponding to http protocol
// app.get();
// app.post();
// app.put();
// app.delete();
// with app object, we have no need to set up the server containing heavy route code blocks and their details (setHeader and status code.)
// The application looks light weight and easy to manage.

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/data", (req, res) => {
  res.send([1, 2, 3]);
});

app.listen("3000", () => {
  console.log("Listening on port 3000.");
});
