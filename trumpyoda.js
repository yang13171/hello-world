function generateTweet() {
  var request = new XMLHttpRequest();
  var url = "https://api.tronalddump.io/random/quote";
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  request.open('GET', proxy + url, true);

  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {

      var text = request.responseText;
      var jsonText =JSON.parse(text);
      var joke = jsonText.value;
      document.getElementById('tweets').innerHTML = joke;

    }


  };

  request.send();


}
