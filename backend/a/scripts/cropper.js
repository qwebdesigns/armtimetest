document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("load_user_photo");
  const image = document.getElementById("image");
  const result = document.getElementById("User_Photo");
  const cropButton = document.getElementById("crop_button");

  let cropper;

  input.addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      image.src = e.target.result;
      image.style.display = "block";

      // Инициализируем Cropper.js после загрузки изображения
      if (cropper) cropper.destroy(); // сброс, если уже есть
      cropper = new Cropper(image, {
        // Устанавливает соотношение сторон (например, 1 — квадрат, 16 / 9 — широкоформат)
        aspectRatio: 1, // можно задать NaN (без ограничения)

        // Управление границами кадра:
        // 0 — без ограничений, 1 — в пределах исходного изображения
        viewMode: 1, // 0, 1, 2, 3

        // Устанавливает, какую часть изображения по умолчанию обрезать (0–1)
        autoCropArea: 0.8, // 0.8 = 80% от картинки

        // Разрешает перемещать кадр (true/false)
        movable: true,

        // Разрешает масштабировать (приближать/отдалять)
        zoomable: false,

        // Разрешает вращение (не обязательно)
        rotatable: false,

        // Разрешает масштабировать кадр (растягивать/сужать)
        scalable: false,

        // Показывает рамку кадра
        guides: true,

        // Показывает тень вне обрезаемой области
        highlight: false,

        // Отображает центр выделения
        center: false,

        // Делает кадрируемую область не прозрачной
        background: false,

        // Показывает рамку вокруг выделения
        cropBoxMovable: true,

        // Позволяет менять размер выделения (если false — фиксированный размер)
        cropBoxResizable: true,

        // Минимальные размеры кадра в пикселях
        minCropBoxWidth: 50,
        minCropBoxHeight: 50,

        // Максимальные размеры кадра в пикселях
        maxCropBoxWidth: Infinity,
        maxCropBoxHeight: Infinity,

        // Можно ли масштабировать изображение колесиком мыши
        zoomOnWheel: false,

        // Ограничение масштабирования изображения
        minCanvasWidth: 0,
        minCanvasHeight: 0,
        maxCanvasWidth: Infinity,
        maxCanvasHeight: Infinity,

        // Обрезать при загрузке
        ready() {
          // Можно выполнить действие после инициализации
          console.log("Cropper is ready");
        },

        // Вызывается каждый раз при изменении обрезки
        crop(event) {
          // event.detail содержит информацию: x, y, width, height, rotate, scaleX, scaleY
          // console.log(event.detail);
        },
      });
      
    };
    reader.readAsDataURL(file);
  });

  cropButton.addEventListener("click", function () {
    if (!cropper) return;

    const canvas = cropper.getCroppedCanvas();
    result.src = canvas.toDataURL();
    document
      .getElementById("cropper_window")
      .classList.add("cropper_window_hide");
  });

});

function loadPhoto() {
  document.getElementById("load_user_photo").click();
  document.getElementById("cropper_window").classList.remove("cropper_window_hide");
}
