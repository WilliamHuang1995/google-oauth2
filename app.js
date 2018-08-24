gapi.load('auth',()=>{
    auth2 = gapi.auth2.init();
})
document.getElementById("google").addEventListener("click", function(){
    gapi.auth2.getAuthInstance().signIn();
});


