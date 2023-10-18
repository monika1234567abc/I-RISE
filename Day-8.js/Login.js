function login (event){
    event.preventDefoult();
    const username=document.getElementById
    ("username").value;
    const password=document.getElementById
    ("password").value;

    if(usrname && password){
        const user={user:username,pass:password}
        localStorage.setitem("userData",JSON.stringify(user))
        document.getElementById("username").value="";
        document.getElementById("password").value="";
        return alert("Data added successfully!!!")
    }else{
        return alert ("All Fields are mendatory")
    }
 }
