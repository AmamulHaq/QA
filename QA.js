function submitForm() {
  const name = document.getElementById("name").value;
  const mood = document.querySelector('input[name="mood"]:checked').value;
  const comment = document.getElementById("comment").value;
  const Mood = document.getElementById("mood").value;
  const output = document.querySelector(".output");

  if (name && mood) {
    if (mood == "fine") {
      output.innerHTML += "Thank you, " + name + ".<br>";
    } else {
      output.innerHTML += "Okay " + name + ", Hope good. <br>";
    }
  } else {
    output.innerHTML = "Please answer all questions.";
  }
}
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 2340;

mongoose
  .connect("mongodb:")
  .then(() => {
    console.log("database connected");
  })
  .catch((e) => {
    console.log(e);
    console.log("database cannot be connected");
  });
app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(port, () => {
  console.log("app running in the port: ", port);
});
