// My EXPERIENSE 
// experience, om arbetslivserfarenhet

let experiencebtn = document.querySelector('.experiencebtn');
let experienceOut = document.querySelector('.experience-text')
experiencebtn.addEventListener('click',Getinfo);
function Getinfo (){
  fetch("/cv.json")
   .then(function(response){
    return response.json();
   })
   .then(function(info){
   let infoMain = info.Erfarenhet
   let Output = '<div  >'
   infoMain.forEach(function(item){ 
      Output += '<div>'+'<h2>' + item.jobbnamn+ '</h2>' +'</div>'
      Output += '<div>'+'<h4>' + item.jobbdatum+ '</h4>' +'</div>'
      Output += '<div>'+'<h6>' + item.jobbplats+ '</h6>'  +'</div> <br> <br> <br> '
   })
   Output += '</div>'
   experienceOut.innerHTML = Output;
   }) 
  
}