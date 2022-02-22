document.getElementById('myFile').files;

function handleFileSelect(){
    var myFile = document.getElementById('myFile').files[0];

    var reader = new FileReader();

    reader.onload = function(){
        var content = reader.result;
        document.getElementById('fileContent').value = content;
    }

    reader.readAsText(myFile);
}