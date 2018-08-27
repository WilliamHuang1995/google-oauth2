gapi.load('auth',()=>{
    auth2 = gapi.auth2.init({
        client_id:'633705425350-6ppg30o5p3hoioodssjtb5obvleosbll.apps.googleusercontent.com',
        scope:'https://www.googleapis.com/auth/calendar',
        fetch_basic_profile: false,
        hosted_domain: 'alohaonline.asia'
    });
})
document.getElementById("google").addEventListener("click", function(){
    gapi.auth2.getAuthInstance().signIn().then(googleUser=>
    {
        //one way of getting email but this is post log in
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log(googleUser.getAuthResponse());
        console.log("ID Token: " + id_token);
    });
    
    document.getElementById("signout").style.display = 'block';
    document.getElementById("google").style.display = 'none';
});
document.getElementById("signout").addEventListener("click",function(){
    gapi.auth2.getAuthInstance().signOut();
    document.getElementById("signout").style.display = 'none';
    document.getElementById("google").style.display = 'block';
})

//jeffery test