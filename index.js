const express = require("express");
const app = express();
const cors = require("cors");
const todoRoutes = require("./routes/todoRoutes");

const PORT = process.env.PORT || 3306;

app.use(cors());
app.use(express.json());
app.use("/todos", todoRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to my Project");
});

app.listen(PORT, () =>
  console.log(`I am listening on port http://localhost:${PORT}`)
);