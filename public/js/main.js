console.log("client side script");


var form = document.querySelector("form");
var search = document.querySelector("input");
var weatherInfo = document.querySelectorAll(".weatherInfo");
var icon = document.querySelector("img");

form.addEventListener('submit',(e)=>{
   e.preventDefault();
   let location = search.value ;
   weatherInfo[0].textContent = 'Loading..' ;
   weatherInfo[1].textContent = '';
   icon.src='';

   fetch('/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
     console.log(data);
      if(data.error){
            weatherInfo[0].textContent = 'Unable to find location ! please try aother location ..';
            weatherInfo[1].textContent ='';
      }
      else{
            icon.src = data.icon ;
            weatherInfo[0].textContent = data.place;
            weatherInfo[1].textContent ='There is a actual temperature is '+data.temperature+'c and it is likely to feel '+data.feelslike+'c temperature and '+data.humidity+' humidity';
      }
  });
});


});