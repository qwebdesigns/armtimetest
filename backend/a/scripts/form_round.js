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
}
function go_main() {
    document.getElementById("main").classList.remove("hf");
    document.getElementById("code").classList.remove("hf");
    document.getElementById("anketa").classList.remove("hf");

    document.getElementById("code").classList.add("hf");
    document.getElementById("anketa").classList.add("hf");
}