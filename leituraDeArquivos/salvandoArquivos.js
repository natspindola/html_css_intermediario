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
function saveFile(){
    var element = document.createElement('a'),
    content = document.getElementById('fileContent').value;

    element.setAttribute('href', 'data:plain/text;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', 'myNewFile.txt');
    element.click('');
}