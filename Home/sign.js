function myFunction()
{
    if(#first).val()=='')
    {
        alert("name is required");
    }
    else{
        if($("#user").val()=='')
        {
            alert("username is required");
        }
        else{
            if("#pass1").val()=='')
            {
                alert("password is required");
            }
            else{
                var u=$("#user").val();
                var p=$("#pass1").val();
                localStorage.setItem(u,u);
                localStorage.setItem(p,p);
                alert("registration succesfull");
                window.location.href="three.html";
            }
        }
    }
}