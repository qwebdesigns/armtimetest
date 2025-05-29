document
  .getElementById("afrorize_form")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Останавливаем стандартную отправку формы

    const formData = new FormData(this);
    const queryString = new URLSearchParams(formData).toString(); // Преобразуем данные в строку запроса

    var pass = document.getElementById("aft_pass").value;
    var email = document.getElementById("emailaft").value;

    if (pass.length < 8) {
      Toastify({
        text: "Минимальная длина пароля, 8 символов!\nПожалуйста, попробуй снова.",
        className: "info",
        style: {
          background:
            "linear-gradient(to right,rgb(176, 0, 0),rgb(201, 61, 61))",
        },
      }).showToast();
      return;
    } else {
      try {
        const response = await fetch(
          `http://localhost/djarvis/accounts/aftorization.php?${queryString}`,
          {
            method: "POST",
          }
        );

        const result = await response.text(); // Получаем текст ответа от сервера
        console.log(`Ответ: ${result}`); // Выводим ответ на страницу

        let hasWord = result.includes("Аккаунт");
        if (result.includes("Аккаунт") || result.includes("Пароль")) {
          Toastify({
            text: result,
            className: "info",
            style: {
              background:
                "linear-gradient(to right,rgb(176, 0, 0),rgb(201, 61, 61))",
            },
          }).showToast();
        } else {
          Toastify({
            text: result,
            className: "info",
            style: {
              background:
                "linear-gradient(to right,rgb(67, 176, 0),rgb(67, 201, 61))",
            },
          }).showToast();
          localStorage.setItem("email", email); 
          go_anketa();
        }
      } catch (error) {
        console.error("Ошибка запроса:", error);
      }
    }
  });
