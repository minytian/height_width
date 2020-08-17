document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector("form");
  let width = document.querySelector(".calculate__width");
  let height = document.querySelector(".calculate__height");
  let result = document.querySelector(".calculate__result");
  let calculate__button = document.querySelector(".calculate__button");

  calculate__button.addEventListener('click', clickHandler)
  form.addEventListener('keydown', clickHandler)



  function clickHandler(event) {
    if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
      // Разрешаем: Ctrl+A
      (event.keyCode == 65 && event.ctrlKey === true) ||
      // Разрешаем: home, end, влево, вправо
      (event.keyCode >= 35 && event.keyCode <= 39)) {
      // Ничего не делаем
      return;
    }

    // если Enter или левая кнопка мыши
    if (event.key === "Enter" || event.which == 1) {
      console.log(event)

      let widthValue = width.value;
      let heightValue = height.value;

      const formula = Math.sqrt(Number(heightValue) / (Number(widthValue) / 1.7));

      const answer = Number(heightValue) / formula;
      result.innerHTML = `Поделить на ${formula.toFixed(1)} частей по ${answer.toFixed(2)}px`;

      width.value = "";
      height.value = "";
    }
    // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
    else {
      if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
        event.preventDefault();
      }

    };
  }
});

// Формула от Миши

// const formula = Math.sqrt(Number(heightValue) / (Number(900)));
//

// Сделано !
// создать две функции клткхендлер на клик и кейап
// Сделать проверку на буквы и прочее непотребство
// Добавить событие по клику на enter
// После ответа на событие очищать поля ввода
// И забывать результат, когда заново кликаешь, чтобы выдавал новый
// Разрешить кнопкам лево право таб бэкспасе делет работать. код ниже
