document.addEventListener("DOMContentLoaded", function () {
  let width = document.querySelector(".calculate__width");
  let height = document.querySelector(".calculate__height");
  let result = document.querySelector(".calculate__result");
  let calculate__button = document.querySelector(".calculate__button");

  calculate__button.addEventListener('click', function (event) {
    let widthValue = width.value;
    let heightValue = height.value;

    const formula = Math.sqrt(Number(heightValue) / (Number(widthValue) / 1.7));

    const answer = Number(heightValue) / formula;
    result.innerHTML = `Поделить на ${formula.toFixed(2)} частей по ${answer.toFixed(2)}px`;

    width.value = "";
    height.value = "";
  });
});

// Сделать проверку на буквы и прочее непотребство
// Добавить событие по клику на enter
// После ответа на событие очищать поля ввода
// И забывать результат, когда заново кликаешь, чтобы выдавал новый
