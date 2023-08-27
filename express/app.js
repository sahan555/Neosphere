const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/home", (req, res) => {
  res.send("hello worlsdsasadd");
});
app.get("/users/:id", (req, res) => {
  const users = [
    {
      id: 1,
      name: "ramcha",
      age: 23,
    },
    {
      id: 2,
      name: "shree ram",
      age: 203,
    },
  ];
  const user = users.find((person)=> person.id === Number(req.params.id));
//   users.push(user);
  res.json(user);
});

app.listen(port, () => {
  console.log(`Sever listening on port ${port}`);
});
