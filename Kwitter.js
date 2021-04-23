function addUser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location="Kwitter_room.html";
    document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

}

