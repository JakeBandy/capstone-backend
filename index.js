const express = require("express");
const app = express();
const cors = require("cors");
const { customers, trades } = require("./data/data.js")
const customRoutes = require("./routes/customerRoutes");
const tradeRoutes = require("./routes/tradeRoutes");
const { v4 } = require("uuid");

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/customers", customRoutes);
app.use("/trades", tradeRoutes);

app.get("/", (req, res) => {
  res.send("Hello from node!");
});

app.get("/customers", (req, res) => {
   res.json(user);
 });

app.get("/customers/:id", (req, res) => {
  const user = customers.find((x) => x.id === +req.params.id);
  res.json(user);
});

app.post("/customers", (req, res) => {
  const { body } = req;
  
  let newUser = {
    ...body,
    id: v4(),
  };

  customers.push(newUser);
  res.send(Newuser);
});

app.put("/customers/:id", (req, res) => {
  const user = customers.find((x) => x.id === req.params.id);
  const userIndex = customers.findIndex((x) => x.id === req.params.id);

  const { body } = req;

  let newUser = {
    ...user,
    ...body,
  };

  customers.splice(userIndex, 1, newUser);
  res.send(customers);
});

app.delete ("/customers/:id", (req, res) => {
  const user = customers.find((x) => x.id === req.params.id);
  const userIndex = customers.findIndex((x) => x.id === req.params.id);

  const { body } = req;

     newUser = {
    ...user,
    ...body,
  };

  customers.splice(userIndex, 1);
  res.send(customers);
});

 console.log(customers, trades)

app.listen(PORT, () =>
  console.log(`I am listening on port http://localhost:${PORT}`)
);