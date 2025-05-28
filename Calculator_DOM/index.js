const buttons = document.querySelectorAll("button");
    const input = document.getElementById("number");

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const value = button.innerText;

        switch (value) {
          case "C":
            input.value = "";
            break;

          case "=":
            try {
              input.value = eval(input.value);
            } catch {
              input.value = "Error";
            }
            break;

          case "+/-":
            if (input.value) {
              input.value = parseFloat(input.value) * -1;
            }
            break;

          case "()":
            const open = (input.value.match(/\(/g) || []).length;
            const close = (input.value.match(/\)/g) || []).length;
            input.value += open === close ? "(" : ")";
            break;

          default:
            input.value += value;
        }
      });
    });


