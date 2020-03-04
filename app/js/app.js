document.addEventListener("DOMContentLoaded", function() {
  let width = document.querySelector(".calculate__width").value;
  let height = document.querySelector(".calculate__height").value;
  let result = document.querySelector(".calculate__result");
  let calculate__button = document.querySelector(".calculate__button");
  
  calculate__button.addEventListener("click", function() {
    // if (width == "" &&  height == "") {
    //   return console.log("errror, введён текст")
    // }
    const formula = Math.round(Math.sqrt(Number(height) / (Number(width) / 1.7)));
    const answer = Math.round(Number( height) / formula )
    result.innerHTML = answer
  });
});


// где будем округлять ? под корнем или когда считаем, на сколько частей поделить ?

// Сделать проверку на буквы и прочее непотребство
// Добавить событие по клику на enter
// После ответа на событие очищать поля ввода
// И забывать результат, когда заново кликаешь, чтобы выдавал новый


