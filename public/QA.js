function submitForm() {
  const name = document.getElementById("name").value;
  const mood = document.querySelector('input[name="Mood"]:checked').value;

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
