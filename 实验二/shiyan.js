window.onload = function (){
    var item = document.getElementsByClassName("item");
    var it = item[0].getElementsByTagName("div");
 
    var content = document.getElementsByClassName("content");
    var con = content[0].getElementsByTagName("div");
 
    for (let i=0;i<it.length;i++){
        it[i].onclick = function(){
            switch (i){
                case 0:
                    window.location.href='login.html';
                    break;
                case 1:
                    window.location.href='register.html';
                    break;
                default:
                    break;
            }
 
        }
    }
}
function submit_onclick(){
	var username=document.getElementById("username");
	var password=document.getElementById("psw");
	alert("登录成功！ "+"用户名："+username.value+"密码："+password.value);
}
function submit_onclick1(){
	var username=document.getElementById("username");
	var password=document.getElementById("psw");
	alert("注册成功！ "+"用户名："+username.value+"密码："+password.value);
}