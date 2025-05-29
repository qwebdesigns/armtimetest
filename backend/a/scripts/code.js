document
  .getElementById("code_form")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Останавливаем стандартную отправку формы

    const formData = new FormData(this);
    const queryString = new URLSearchParams(formData).toString(); // Преобразуем данные в строку запроса


    var code = document.getElementById("code_INformes").value;
    var code_by_local = localStorage.getItem("code");





    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    var email = document.getElementById("email").value;

    if (pass1.length < 8 || pass2.length < 8) {
      Toastify({
        text: "Минимальная длина пароля, 8 символов!\nПожалуйста, попробуй снова.",
        className: "info",
        style: {
          background:
            "linear-gradient(to right,rgb(176, 0, 0),rgb(201, 61, 61))",
        },
      }).showToast();
      return;
    }

    if (code == code_by_local) {
      Toastify({
        text:
          "Авторизация успешна!😊",
        className: "info",
        duration: 30000,
        stopOnFocus: true, // Prevents dismissing of toast on hover
        close: true,
        style: {
          background:
            "linear-gradient(to right,rgb(67, 176, 0),rgb(67, 201, 61))",
        },
      }).showToast();
      go_anketa();
    }
    else{
      Toastify({
        text: 'Код не совпадает!\nПопытайся снова!\nЕсли это ошибка, сообщи нам!',
        className: "info",
        style: {
          background:
            "linear-gradient(to right,rgb(176, 0, 0),rgb(201, 61, 61))",
        },
      }).showToast();
    }
      
  });
