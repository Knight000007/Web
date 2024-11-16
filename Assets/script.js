document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("depression-test-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    let score = 0;
    for (let i = 1; i <= 10; i++) {
      let radios = document.getElementsByName('q' + i);
      for (let radio of radios) {
        if (radio.checked) {
          score += parseInt(radio.value);
        }
      }
    }

    let resultText;
    if (score < 5) {
      resultText = "Minimal depression. Try self-care strategies.";
    } else if (score < 10) {
      resultText = "Mild depression. Consider professional advice.";
    } else if (score < 15) {
      resultText = "Moderate depression. Seek further help from a healthcare provider.";
    } else if (score < 20) {
      resultText = "Moderately severe depression. Consider seeking help soon.";
    } else {
      resultText = "Severe depression. Immediate help is recommended.";
    }

    document.getElementById("test-result").innerHTML = `<h2>Your Score: ${score}</h2><p>${resultText}</p>`;
  });
});
