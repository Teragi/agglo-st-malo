let rangeSlider = document.getElementById("rs-range-line");
let rangeBullet = document.getElementById("rs-bullet");

rangeSlider.addEventListener("input", showSliderValue, false);

function showSliderValue() {
  rangeBullet.innerHTML = rangeSlider.value;
//   let bulletPosition = (rangeSlider.value /rangeSlider.max);
//   rangeBullet.style.left = (bulletPosition * 578) + "px";
}
// All Filter
const buttonFilter = document.querySelectorAll('.button')
const gridItem = document.querySelectorAll('.item')
const filterAll = document.querySelector('.all')
const filterBlue = document.querySelector('.blue')
// 
console.log(gridItem)
// Check active classes
function checkClass() {
    for(let i = 0; i < gridItem.length; i++){
        if ( gridItem[i].classList.contains('hide') ) {
         gridItem[i].classList.remove('hide');
    }}
    
  };
  
  // Category filters
  filterAll.addEventListener('click', function() {
    checkClass();
  });
  filterBlue.addEventListener('click', function() {
    checkClass();
    for(let i = 0; i < gridItem.length; i++){
        gridItem[i].classList.add('hide')
        if(gridItem[i].classList.contains('blue')){
            gridItem[i].classList.remove('hide');    
        }
    }    
  });

//  Appel d'API
const options = {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
		'X-RapidAPI-Host': 'distance-calculator.p.rapidapi.com',
		'X-RapidAPI-Key': '152c8aadfamsh3e8eea9ae6bce73p199383jsn2d13c3975efc'
	}
};
const latStMalo = 48.649337;
const longStMalo = -2.025674;

async function localisation() {

  // const adresse = objet.adresse;
const adresse = "26 rue de la gare, Dinard" ;

fetch(`http://api.positionstack.com/v1/forward?access_key=4483b797ef54a7bded93a3d3a00dafb5&query=${adresse}&fields=results.latitude,results.longitude`)
.then(response => response.json())
.then(response => {
    console.log(longStMalo);
    let secondLat = response.data[0].latitude;
    let secondLong = response.data[0].longitude;
    getDistanceFromLatLonInKm(latStMalo,longStMalo,secondLat,secondLong);    
}
    )
.catch(err => console.error(err));
}

// localisation();

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    let R = 6371; // Radius of the earth in km
    let dLat = deg2rad(lat2-lat1);  // deg2rad below
    let dLon = deg2rad(lon2-lon1); 
    let a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2); 
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    let d = R * c; // Distance in km
    console.log(d.toFixed(2));
    return d;
    
}

function deg2rad(deg) {
    return deg * (Math.PI/180)
}


