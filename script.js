// Login form
// var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
// function validate(){
// var username = document.getElementById("email").value;
// var password = document.getElementById("password").value;
// if ( username == "Malofion" && password == "lol123"){
// alert ("Login successfully");
// window.location = "./flo/index.html"; // Redirecting to other page.
// return false;
// }
// else{
// attempt --;// Decrementing by one.
// alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
// if( attempt == 0){
// document.getElementById("username").disabled = true;
// document.getElementById("password").disabled = true;
// document.getElementById("submit").disabled = true;
// return false;
// }
// }
// }
// validate();

// Slider
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// const imgs = document.querySelectorAll('.cont-slides img');
// const next = document.querySelector('.right');
// const previous = document.querySelector('.left');
// const cercles = document.querySelectorAll('.cercle');

// let index = 0;

//Ajouter un event au clic bouton droit
// next.addEventListener('click', slideNext);

// function slideNext(){
//     if(index < 2){
//         imgs[index].classList.remove('active');
//         index++;
//         imgs[index].classList.add('active');
//     } else if(index === 2){
        //Retour à la première image
//         imgs[index].classList.remove('active');
//         index = 0;
//         imgs[index].classList.add('active');
//     }

//     for(let i = 0; i < cercles.length; i++){
//         if(cercles[i].getAttribute('data-clic') - 1 === index){
//             cercles[i].classList.add('active-cercle');
//         }else{
//             cercles[i].classList.remove('active-cercle');
//         }
//     }
// }

// previous.addEventListener('click', slidePrevious);

// function slidePrevious(){
//     if(index > 0){
//         imgs[index].classList.remove('active');
//         index--;
//         imgs[index].classList.add('active');
//     }else if(index === 0){
//         imgs[index].classList.remove('active');
//         index = 2;
//         imgs[index].classList.add('active');
//     }

//     for(let i = 0; i < cercles.length; i++){
//         if(cercles[i].getAttribute('data-clic') - 1 === index){
//             cercles[i].classList.add('active-cercle');
//         }else{
//             cercles[i].classList.remove('active-cercle');
//         }
//     }
// }

// document.addEventListener('keydown', keyPressed);

// function keyPressed(e){

//     if(e.keyCode === 37){
//         slidePrevious();
//     }else if(e.keyCode === 39){
//         slideNext();
//     }
// }

// cercles.forEach(cercle =>{
//     cercle.addEventListener('click', function(){
//         for(let i = 0; i < cercles.length; i++){
//             cercles[i].classList.remove('active-cercle');
//         }
//         this.classList.add('active-cercle');
//         imgs[index].classList.remove('active');
//         index = this.getAttribute('data-clic') - 1;
//         imgs[index].classList.add('active');
//     })
// })


// Search Bar
const dataSearch = [
    {
        category: "Logement",
        date: "11/06/2022",
        location:"Saint-Père Marc en Poulet"
    },
    {
        category: "Evenements",
        date: "05/04/2022",
        location: "Dinard"
    },
    {
        category: "Sport",
        date: "15/05/2022",
        location: "Cancale"
    },
    {
        category: "Annonce",
        date: "15/05/2022",
        location: "La Fresnais"
    },
    {
        category: "Emploi",
        date: "10/07/2022",
        location: "Miniac Morvan"
    },
    {
        category: "Loisir",
        date: "20/04/2022",
        location: "Saint-Malo"
    },
    {
        category: "Stage",
        date: "27/07/2022",
        location: "Châteauneuf"
    },
    {
        category: "Concert",
        date: "06/12/2022",
        location: "La Gouesniere"
    },
    {
        category: "Covoiturage",
        date: "08/04/2022",
        location: "Saint-Malo"
    },
    {
        category: "Activités",
        date: "29/06/2022",
        location: "Saint-Coulomb"
    }
]
// console.log(dataSearch);

function selectElement(selector){
    return document.querySelector(selector);
}

function clearResult(){
    selectElement('.searchResult').innerHTML = "";
}

function getResult(){
    const search = selectElement('.searchBar').value;

    clearResult();

    if(search.length > 0){
        for(let i = 0; i < dataSearch.length; i++){
            if(
                dataSearch[i].category.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
                dataSearch[i].location.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                ){
                    selectElement('.searchResult').innerHTML += `
                        <div class="searchResult">
                        <span class="searchItem">${dataSearch[i].category}</span>
                        <span class="searchItem">${dataSearch[i].date}</span>
                        <span class="searchItem">${dataSearch[i].location}</span>
                        </div>
                    `
    
            }
        }

    }
    
}

selectElement('.searchBar').addEventListener('keyup', getResult)

// Add to favorites
const favoriteButton = document.querySelector('.like')
favoriteButton.onclick = saveData;
const clearButton = document.querySelector('.clear');
clearButton.onclick = clearData;

function saveData(){
  const favoris = document.getElementById("saveServer");
  localStorage.setItem("Favoris", favoris.value);
  let favorisValue = localStorage.getItem("Favoris");
}

function clearData() {
    localStorage.removeItem("Favoris");
}
