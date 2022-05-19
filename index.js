function readTextFile(file, callback) { // esto se deja asi 
    var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json")
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function() {
           if (rawFile.readyState === 4 && rawFile.status == "200") {
               callback(rawFile.responseText);
           } 
        }
        rawFile.send(null);
}



var data_Json; // esto lo podes cambiar a tu gusto

readTextFile("data2.json", function(text){
    data_Json = JSON.parse(text);

    var modified_div = document.getElementById("json_information") // se busca el id
    for (var llave in data_Json){ // las llaves y la informacion dentro de llaves
        let inner_h1 = document.createElement("h1") // podes poner todo tipos de fuentes como h1,h2 y strong
        inner_h1.innerText= `${llave}: ${data_Json [llave] }` // esto es complicado de hacer dejelo asi

        modified_div.appendChild(inner_h1); // esto es para buscar el let y ponerlo en la pagina
    }
        
    
});
  

