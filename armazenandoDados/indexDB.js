var request = window.indexedDB.open("TreinaWeb", 1);
var db;
request.onupgradeneeded = function (event) {
    db = event.target.result;
    db.createObjectStore("Cursos", { keyPath: "id" });
}
request.onsuccess = function (event) {
    db = event.target.result;

    var transaction = db.transaction(["Cursos"], "readwrite");
    var store = transaction.objectStore("Cursos");
    store.add({ "id": 1, "nome": "Angular" })
}


