document.addEventListener("DOMContentLoaded", function() {
  let width = document.querySelector(".calculate__width").value;
  let height = document.querySelector(".calculate__height").value;
  let result = document.querySelector(".calculate__result");
  Number(width);
  Number(height);

  const calculate__buttons = addEventListener("click", function() {
    const formula = Math.round(Math.sqrt(29420 / (1366 / 1.7)));
    result.innerHTML; // соответственно не работает))
    console.log(formula);
  });
});
