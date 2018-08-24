gapi.load('auth',()=>{
    auth2 = gapi.auth2.init();
})
document.getElementById("google").addEventListener("click", function(){
    gapi.auth2.getAuthInstance().signIn();
    document.getElementById("signout").style.display = 'block';
    document.getElementById("google").style.display = 'none';
});
document.getElementById("signout").addEventListener("click",function(){
    gapi.auth2.getAuthInstance().signOut();
    document.getElementById("signout").style.display = 'none';
    document.getElementById("google").style.display = 'block';
})


