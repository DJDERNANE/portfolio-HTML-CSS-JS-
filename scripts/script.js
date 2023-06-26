var navbtn = document.getElementById('navbtn')
var navigation = document.getElementById('navigation')

navbtn.addEventListener('click', function(){
    navbtn.classList.toggle('active')
    navigation.classList.toggle('active')
})

navigation.addEventListener('click',function(){
  navigation.classList.remove('active')
  navbtn.classList.remove('active')
}

)


window.addEventListener("load", function () {
    const loader = document.getElementById("loading-container");
    const content = document.getElementById("content-container");
    setTimeout(function () {
      loader.style.display = "none";
      content.style.display = "block";
    }, 3000); // Change 3000 to the duration of your loading animation in milliseconds
  });
  