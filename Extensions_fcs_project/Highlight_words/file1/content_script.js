console.log("here we are, hello");

 let para=document.querySelectorAll('p')
 let text=document.querySelectorAll('h1,h2,h3,h4,h5,p,li,td,caption,span,a')

 for(ele of para){
    ele.style['background-color']='#add8e6';
 }
  let file=[
  'privacy','security','solitude','camera', 'terms', 'conditions', 'intimate'
  ]
 for(ele1 of text){
    for (ele2 of file){
        if(ele1.innerHTML.includes(ele2)){
            ele1.style['color']='#CD5C5C'
    }
   }

 }

