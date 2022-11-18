


// Education form Json
// education, om utbildning

let projectName = document.querySelector('.project-Name')
let projectPic = document.querySelector('.project-pic')
let projectDescrip = document.querySelector('.projectDescrip')
let projectlink = document.querySelector('.projectlink')
let nextProject = document.querySelector('.nextProject')
let number = 0;


  fetch("/cv.json")
  .then(function(response){
   return response.json();
 })
  .then(function(data){
  let dataMain = data.Repositorie
  nextProject.addEventListener('click',()=>{
    nextProject.innerHTML = `Next Project<i class="fa-solid fa-angles-right"></i>`;
  
    number ++;
    if(number >= dataMain.length){
      number = 0;
    }
    
    projectName.innerHTML = `  ${dataMain[number].projectNmne} `
    projectPic.innerHTML =`<img class="" src="${dataMain[number].Pictury}" alt="">`
    projectDescrip.innerHTML = `${dataMain[number].description}
    <img src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?w=826&t=st=1668779826~exp=1668780426~hmac=8a281b4e153303ff29c87055fc53d8f8e96d90cc67ba79675d35e21fece6d002" alt="">  `
    projectlink.innerHTML  =`Click on the link to access the project: <a href = '${dataMain[number].projectURL}' target="_blank">${dataMain[number].projectNmne }</a> `
  })

})


  
   
