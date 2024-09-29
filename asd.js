function login() {
  const name = document.getElementById("name").value;

  if (name === "Youen") {
    document.getElementById("login-form").classList.add("hidden");

    document.getElementById("love-letter").classList.remove("hidden");
  } else {
    alert("Invalid name! Only Youen can log in.");
  }
}
