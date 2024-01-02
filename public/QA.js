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
