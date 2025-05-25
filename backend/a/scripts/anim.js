f_reg = document.getElementById("register_form");
f_auf = document.getElementById("afrorize_form");
who_visible = 'reg';

function visible() {
    if (who_visible == "auf") {
      f_reg.classList.remove("hide");
      f_auf.classList.remove("visible");

      f_reg.classList.add("visible");
      f_auf.classList.add("hide");
      who_visible = "reg";
      console.log(who_visible);
      return;
    } 
        
    if (who_visible == "reg") {
      f_reg.classList.remove("visible");
      f_auf.classList.remove("hide");

      f_reg.classList.add("hide");
      f_auf.classList.add("visible");
      who_visible = "auf";
      console.log(who_visible);
      return;
    }
}
