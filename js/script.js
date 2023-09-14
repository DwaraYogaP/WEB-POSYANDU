// MODAL TAMBAH DATA BALITA
var modalAdd = document.getElementById("add-balita");
var tambahBalita = document.getElementById("tambah-balita");
var batalTambahBalita = document.getElementById("batalButton")
tambahBalita.onclick = function() {
    modalAdd.style.display = "block";
}

batalTambahBalita.onclick = function() {
    modalAdd.style.display = "none";
}
// END MODAL TAMBAH DATA BALITA

// MODAL DELETE DATA BALITA
var deleteBalita = document.getElementById("deleteButton")

var batalTambahBalita = document.getElementById("batalButtonDelete")

var modalDelete = document.getElementById("deleteData")
deleteBalita.onclick = function() {
    modalDelete.style.display = "block";
}

batalTambahBalita.onclick = function() {
    modalDelete.style.display = "none";
}
// END MODAL DELETE DATA BALITA
