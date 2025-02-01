const input = document.querySelector(".js-input");
const buttonClick = document.querySelector(".js-buttons");

buttonClick.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    const value = event.target.textContent;

    if (value === "C") {
      input.value = input.value.slice(0, -1);
    } else if (value === "=") {
      try {
        let expression = input.value;
        expression = expression.replace(/(\d+)%/g, (match, percentValue) => {
          let baseMatch = expression.match(/(\d+)(?=[\+\-\*\/]\d+%)/);
          let baseNumber = baseMatch ? baseMatch[1] : "0"; 
          return `(${baseNumber} * ${percentValue} / 100)`;
        });

        let result = eval(expression);
        input.value = result;
      } catch {
        input.value = "Ошибка";
      }
    } else if (value === "AC") {
      input.value = "";
    } else if (value === "%") {
      input.value += "%";
    } else {
      input.value += value;
    }
  }
});
