function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = {
    username,
    password,
  };

  axios
    .post("http://localhost:3000/customer/login", user)
    .then(function (response) {
      location.href = "/Menu";
    })
    .catch(function (error) {
      console.log(error);
    });
}
