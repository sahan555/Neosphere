const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/home", (req, res) => {
  res.send("hello worlsdsasadd");
});
app.get("/users", (req, res) => {
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
    // const user = users.find((person)=> person.id === Number(req.params.id));
  //   users.push(user);
    res.json(users);
  });
app.get("/users/:name", (req, res) => {
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
  const user = users.find((person)=> person.name === String(req.params.name));
//   users.push(user);
  res.json(user);
});

app.listen(port, () => {
  console.log(`Sever listening on port ${port}`);
});

app.post("/postUser",(req,res)=>{
  const users=[
    {
      id:1,
      name:"yona",
      age:22
    }
  ];
  const user=[
    {
      id:2,
      name:"sssss",
      age:22
    }
  ];
  users.push(user);
  res.json(users);
})