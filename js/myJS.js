$(document).ready(function(){
    let sideBarWidth = $(".hidden-nav").innerWidth();
    $(".sideBar").animate({left :`-${sideBarWidth}`}, 0)
});

$("#toggleBtn").click(function(){
    let sideBarWidth = $(".hidden-nav").innerWidth();
    
    if($(".sideBar").css("left") == "0px"){
        $(".sideBar").animate({left : `-${sideBarWidth}`}, 700)
        $("#toggleBtn").removeClass('fa-times')
        $("#toggleBtn").addClass('fa-bars ')
    }else{
        $(".sideBar").animate({left : `0px`}, 700)
        $("#toggleBtn").addClass('fa-times')
    }
    
});

/* ============ start API ============== */
let movieArr = [];

async function getMovies(currentData){
 let response = await fetch(`https://api.themoviedb.org/3/${currentData}?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
  let finalResponse = await response.json();
    movieArr = finalResponse.results;
    displayData();
}
getMovies("movie/now_playing")

function displayData(){
    let cartoona = ``;
    for (let i = 0; i < movieArr.length; i++) {
        cartoona += `
        <div class="col-md-4">
        <div class="movieItem">
            <div class="img position-relative overflow-hidden w-100 rounded mb-3">
                <img src="https://image.tmdb.org/t/p/w500${movieArr[i].poster_path}" alt="movie poster" class="w-100 rounded">
                <div class="layer d-flex justify-content-center align-items-center position-absolute w-100 h-100 flex-column text-center top-100 end-0">
                    <h2>${movieArr[i].original_title}</h2>
                    <p class="mb-3">${movieArr[i].overview}.</p>
                    <h6>${movieArr[i].vote_average}</h6>
                    <h6>${movieArr[i].release_date}</h6>
                </div>
            </div>                       
        </div>
    </div>
    `
    }
    document.getElementById('rowData').innerHTML = cartoona
}

/* ============ end API ============== */


/* ============ Start search ============== */

function search(letter){
  var cartoona = '';
  for(i = 0; i < movieArr.length; i++){
      
      if(movieArr[i].original_title.toLowerCase().includes(letter.toLowerCase())){
        cartoona += `
        <div class="col-md-4">
        <div class="movieItem">
            <div class="img position-relative overflow-hidden w-100 rounded mb-3">
                <img src="https://image.tmdb.org/t/p/w500${movieArr[i].poster_path}" alt="movie poster" class="w-100 rounded">
                <div class="layer d-flex justify-content-center align-items-center position-absolute w-100 h-100 flex-column text-center top-100 end-0">
                    <h2>${movieArr[i].original_title}</h2>
                    <p class="mb-3">${movieArr[i].overview}.</p>
                    <h6>${movieArr[i].vote_average}</h6>
                    <h6>${movieArr[i].release_date}</h6>
                </div>
            </div>                       
        </div>
    </div>
      `

  }
      }
        document.getElementById("rowData").innerHTML = cartoona;    
 }
 search(letter)
/* ============ end search ============== */

var links=document.getElementsByTagName("li");
for(var i=0 ; i<links.length ; i++){
    links[i].addEventListener("click" , function(e){
         var currentMovi = $(e.target).attr("id");
          getMovies(currentMovi)
    })}

    getMovies("now_playing")

// ================ contact =================== 

let nameInput  = document.getElementById('nameInput'),
    emailInput = document.getElementById('emailInput'),
    phoneInput = document.getElementById('phoneInput'),
    ageInput   = document.getElementById('ageInput'),
    passInput  = document.getElementById('passInput'),
    passConfirmInput = document.getElementById('passConfirmInput');
    submitBtn  = document.getElementById('submitBtn');
    


// ================ vars for errors ============= 
let nameError  = document.getElementById('nameError'),
    emailError = document.getElementById('emailError'),
    phoneError = document.getElementById('phoneError'),
    ageError   = document.getElementById('ageError'),
    passError = document.getElementById('passError'),
    confirmPasswordError   = document.getElementById('confirmPasswordError');


/* ================= REGEX FUNCTIONS ============ */

function validateName() 
{
 if (/^[A-Z][a-z]{2,8}$/.test(nameInput.value))
  {
    return (true)
  }  
    return (false)
}
function validateEmail() 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value))
  {
    return (true)
  }  
    return (false)
}
function validateAge() 
{
 if (/^([1-7][0-9]|80)/.test(ageInput.value))
  {
    return (true)
  }  
    return (false)
}
function validatePhone() 
{
 if (/^01[0125][0-9]{8}$/.test(phoneInput.value))
  {
    return (true)
  }  
    return (false)
}
function validatePassword() 
{
 if (/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(passInput.value))
  {
    return (true)
  }  
    return (false)
}
function validatePassConfirm() 
{
 if (passInput.value == passConfirmInput.value)
  {
    return (true)
  }  
    return (false)
}

// ============================================================
submitBtn.onclick = function(){
    if(validateName() && validateEmail() && validateAge() && validatePhone() && validatePassword() && validatePassConfirm()){
        alert('Thank you')
    }
    else{
        nameError.style.display =  "block";
        emailError.style.display =  "block";
        phoneError.style.display =  "block";
        ageError.style.display =  "block";
        passError.style.display =  "block";
        confirmPasswordError.style.display =  "block";
    }
}


// this for remove Errose while typing
nameInput.addEventListener('textInput',function(){
    nameError.style.display = "none";
})
emailInput.addEventListener('textInput',function(){
    emailError.style.display = "none";
})
phoneInput.addEventListener('textInput',function(){
    phoneError.style.display = "none";
})
ageInput.addEventListener('textInput',function(){
    ageError.style.display = "none";
})
passInput.addEventListener('textInput',function(){
    passError.style.display = "none";
})
passConfirmInput.addEventListener('textInput',function(){
    confirmPasswordError.style.display = "none";
})

/* ================= END REGEX FUNCTIONS =============== */ 
