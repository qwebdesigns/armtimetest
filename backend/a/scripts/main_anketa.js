var local_email = localStorage.getItem("email");
document.getElementById("email_main").value = local_email;
document.getElementById("email_dubl").value = local_email;

function email_local() {
  local_email = localStorage.getItem("email");
  document.getElementById("email_main").value = local_email;
  document.getElementById("email_dubl").value = local_email;
}

var r1_u2_bok_dubl = document.getElementById("r1_u2_bok_dubl");
function bok(text) {
  r1_u2_bok_dubl.value = text;
}

const targetImg = document.getElementById("User_Photo");

const observer = new MutationObserver(() => {
  clone_photo(targetImg.src);
});

observer.observe(targetImg, { attributes: true, attributeFilter: ["src"] });

function clone_photo(text) {
  document.getElementById("User_Photo_dubl").value = text;
}

document
  .getElementById("main_form")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Останавливаем стандартную отправку формы

    const formData = new FormData(this);

    if (localStorage.getItem("email")) {
      try {
        const response = await fetch(
          "http://localhost/djarvis/accounts/user.php",
          {
            // Без queryString
            method: "POST",
            body: formData,
          }
        );

        const result = await response.text();
        console.log(`Ответ: ${result}`);

        if (result.includes("Данные")) {
          Toastify({
            text: result,
            className: "info",
            style: {
              background:
                "linear-gradient(to right,rgb(67, 176, 0),rgb(67, 201, 61))",
            },
          }).showToast();
          localStorage.setItem("email", email);
        } else {
          Toastify({
            text: result,
            className: "info",
            style: {
              background:
                "linear-gradient(to right,rgb(176, 0, 0),rgb(201, 61, 61))",
            },
          }).showToast();
        }
      } catch (error) {
        console.error("Ошибка запроса:", error);
      }
    } else {
      Toastify({
        text: "Произошла техническая ошибка!\nКод ошибки: AFT_LOAD_ERR_LOCAL!\nПожалуйста, срочно обратись к нам!",
        className: "info",
        style: {
          background:
            "linear-gradient(to right,rgb(176, 0, 0),rgb(201, 61, 61))",
        },
      }).showToast();
    }
  });
