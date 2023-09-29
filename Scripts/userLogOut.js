
var userLoggedOut = false;
document.getElementById('logout-link').addEventListener("click", function(){
    userLoggedOut = true
    const msg = alert(`User Log Out: ${userLoggedOut}. Log Out success.`)
})

if(userLoggedOut === true){
    console.log(`User Log Out: ${userLoggedOut}. Log Out success.`)
}
   

