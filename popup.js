window.onload = function () {
  let button = document.getElementById("btn");
  button.addEventListener("click", get_joke_of_the_day)
  get_joke_of_the_day()
}
// checking something
function get_joke_of_the_day() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Access the result here
      let para = document.querySelector('p')
      let jokeTitle = document.querySelector('h2')
      let response = JSON.parse(this.responseText)
      para.innerHTML = response.punchline
      jokeTitle.innerHTML = response.setup
    }
  };
  xhttp.open("GET", "https://official-joke-api.appspot.com/random_joke", true);
  xhttp.send();
}

