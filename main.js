
var array = [];
do {
    var w = prompt('Введите команду: add/del/stop', "add Piter");
     console.log(w);
    var z = w.split(" ")
     console.log(z);  
    if (z[0] == "add") {
        array.push(z[1])
    } else if (z[0] == "del") {
        for (let key in array) {
            console.log(key);
            if (array[key] == z[1]) {
                array.splice(key, 1)
            }
        }
    }
     alert(array)
    console.log(array);
} while ( z[0] != "stop");