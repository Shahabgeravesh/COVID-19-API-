var country = document.getElementById("country");
var ul = document.getElementById("main-list");
var fetchData = document.getElementById("fetch");
fetchData.addEventListener("click", function () {
  console.log("Clicked", country.value);
  var countryName = country.value;
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    `https://api.covid19api.com/total/dayone/country/${countryName}/status/confirmed`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      var parseData = JSON.parse(result);
      for (i = 0; i < 10; i++) {
        console.log(parseData[i].Date);
        var li = document.createElement("li");
        li.innerHTML = parseData[i].Date;
        ul.appendChild(li);
      }
    })

    .catch((error) => console.log("error", error));
});
