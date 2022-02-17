var element = document.getElementsByTagName('div')[0];
setInterval(()=>{
   element.style.backgroundColor = "blue";
},2000);

setTimeout(()=>{
   setInterval(()=>{
      element.style.backgroundColor = "red";
   },2000);
}, 1000);