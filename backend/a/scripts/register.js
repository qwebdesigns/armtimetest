document
  .getElementById("register_form")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Останавливаем стандартную отправку формы

    const formData = new FormData(this);
    const queryString = new URLSearchParams(formData).toString(); // Преобразуем данные в строку запроса


    




    var pass1 = document.getElementById('pass1').value;
    var pass2 = document.getElementById("pass2").value;
    var email = document.getElementById("email").value;

    if (pass1.length < 8 && pass2.length < 8) {
      Toastify({
        text: "Минимальная длина пароля, 8 символов!\nПожалуйста, попробуй снова.",
        className: "info",
        style: {
          background:
            "linear-gradient(to right,rgb(176, 0, 0),rgb(201, 61, 61))",
        },
      }).showToast();
      return
    }
    



    if(pass1 == pass2){
      try {
        const response = await fetch(
          `http://localhost/djarvis/accounts/registration.php?${queryString}`,
          {
            method: "POST",
          }
        );

        const result = await response.text(); // Получаем текст ответа от сервера
        console.log(`Ответ: ${result}`); // Выводим ответ на страницу

        let hasWord = result.includes("Аккаунт");
        if (hasWord == true) {
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
            text:
              "Секретный код: " +
              result +
              "\nТак же, он был отправлен на почту: " +
              email,
            className: "info",
            duration: 30000,
            stopOnFocus: true, // Prevents dismissing of toast on hover
            close: true,
            style: {
              background:
                "linear-gradient(to right,rgb(67, 176, 0),rgb(67, 201, 61))",
            },
          }).showToast();
          localStorage.setItem('code', result);
          localStorage.setItem("email", email); 
          go_recovery();
        }


        
      } catch (error) {
        console.error("Ошибка запроса:", error);
      }
    }

    else{
      Toastify({
        text: 'Пароли не совпадают!\nПожалуйста, попробуй снова.',
        className: "info",
        style: {
          background:
            "linear-gradient(to right,rgb(176, 0, 0),rgb(201, 61, 61))",
        },
      }).showToast();
    }


    /*
    try {
      const response = await fetch(
        `http://localhost/djarvis/accounts/registration.php?${queryString}`,
        {
          method: "POST",
        }
      );

      const result = await response.text(); // Получаем текст ответа от сервера
      console.log(`Ответ: ${result}`); // Выводим ответ на страницу
      Toastify({
        text: result,
        className: "info",
        style: {
          background: "linear-gradient(to right,rgb(176, 0, 0),rgb(201, 61, 61))",
        },
      }).showToast();
    } catch (error) {
      console.error("Ошибка запроса:", error);
    }*/
  });
