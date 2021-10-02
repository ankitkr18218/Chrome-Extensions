console.log("here we are, hello");

 let text=document.querySelectorAll('h1,h2,h3,h4,h5,p,li,td,caption,span,a')
 let images = document.querySelectorAll('img')
 let filenames=[
    "best-schemes.webp"
 ];
 for(ele of text){
    ele.innerHTML="   ";
 }

  for(img of images){
    img.src= filenames[0]
 }
