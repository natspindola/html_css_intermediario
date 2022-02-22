function dragStart(event){
    event.dataTransfer.setData('text', event.target.id);
 }

function allowDrop(event){
	event.preventDefault();
}

function drop(event){
   var imageId = event.dataTransfer.getData('text'),
   image = document.getElementById(imageId);

   event.target.appendChild(image);
}