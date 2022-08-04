//get element statement;
var arr = JSON.parse(localStorage.getItem("signup")) || [];

//var arr = [];
function signup(event) {
  event.preventDefault();
  var data = {
    email: document.getElementById("sign_up").value,
    number: document.getElementById("sign_num").value,
    password: document.getElementById("pas").value,
  };
  arr.push(data);
  //console.log(arr);

  localStorage.setItem("signup", JSON.stringify(arr));
  window.location.href = "./login.html";
}

function login(event) {
  event.preventDefault();
  var email = document.getElementById("login_email").value;
  var password = document.getElementById("pas").value;

  var flag = false;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].email === email && arr[i].password === password) {
      flag = true;
      break;
    }
  }
  if (flag) {
    alert("Login Successfull");
    
  } else {
    alert("Enter correct email and password");
  }
}
