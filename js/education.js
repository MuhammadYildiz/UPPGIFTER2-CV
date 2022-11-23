let Output=document.querySelector('.education-main .education-text');
let educationBtn=document.querySelector('.educationbtn');
educationBtn.addEventListener('click',Getdata);
function Getdata (){
  fetch("/cv.json")
   .then(function(response){
    return response.json();
   })
   .then(function(data){
   let dataMain = data.Utbildning
   let output = "<div>" ;
   dataMain.forEach(function(item){ 
    output += ` <h6> ${item.KURS} </h6> `
    output += `<h6> ${item.DATUM} </h6>`
    output += `<h6> ${item.SKOLA}  </h6>`
    output += `<h1>_</h1>`})
   output += '</div>';
   Output.innerHTML = output;
   // Output.classList.add('education-style')
   })
   educationBtn.classList.toggle('hide') 
}