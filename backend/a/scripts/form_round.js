function go_recovery() {
    document.getElementById("main").classList.remove('hf');
    document.getElementById("code").classList.remove('hf');
    document.getElementById("anketa").classList.remove('hf');



    document.getElementById('main').classList.add('hf');
    document.getElementById('anketa').classList.add('hf');
}
function go_anketa() {
    document.getElementById("main").classList.remove("hf");
    document.getElementById("code").classList.remove("hf");
    document.getElementById("anketa").classList.remove("hf");
    
    document.getElementById("main").classList.add("hf");
    document.getElementById("code").classList.add("hf");
    email_local();
}
function go_main() {
    document.getElementById("main").classList.remove("hf");
    document.getElementById("code").classList.remove("hf");
    document.getElementById("anketa").classList.remove("hf");

    document.getElementById("code").classList.add("hf");
    document.getElementById("anketa").classList.add("hf");
}






function visible_help(block_id) {
    document.getElementById(block_id).classList.remove("hide");
}
function close_help(block_id) {
  document.getElementById(block_id).classList.add("hide");
}