import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.send("Ok");
});

app.post("/post", (req, res) => {
  return res.send("Ok POST");
});

app.listen(3000, () => console.log("Server is running"));
