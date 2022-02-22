function dragStart(event){
    event.dataTransfer.setData('text', event.target.id);
 }