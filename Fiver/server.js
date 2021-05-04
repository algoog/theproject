require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");

// Database connection
require("./db/database");

app.use(cors());

app.use(express.json());

app.use("/api", require("./routes/routes"));

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
