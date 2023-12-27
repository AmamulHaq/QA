function submitForm() {
  const name = document.getElementById("name").value;
  const mood = document.querySelector('input[name="mood"]:checked').value;
  const comment = document.getElementById("comment").value;
  const output = document.querySelector(".output");
  

  if (name && mood) {
    output.innerHTML = "Hello " + name + ". You feel " + mood + ".<br>" + comment +".<br>";
    if (mood == "fine") {
      output.innerHTML += " Let's go for a trecking <br>";
    } else {
      output.innerHTML += " You will be good at all. <br>";
    }
  } else {
    output.innerHTML = "Please answer all questions.";
  }
}
