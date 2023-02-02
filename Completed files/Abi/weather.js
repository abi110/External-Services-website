var jQueryScript = document.createElement("script");
jQueryScript.setAttribute(
  "src",
  "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"
);
document.head.appendChild(jQueryScript);
/*Search by City Name or Comma Separated City Name and Country Code*/
const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");
const apiKey = "a1f6dd69b21873e3e530c44ce4d40acd";

function saveweather(temperature, cityname, weatherdescription) {
  //console.log(temperature);
  //console.log(cityname);
  //console.log(weatherdescription);

  // Insert records using ajax
  $.ajax({
    type: "POST",
    url: "insert.php",
    data: {
      temp: temperature,
      location: cityname,
      weather: weatherdescription,
    },
    success: function (response) {
      //console.log(response);
      msg.textContent = "Insert Successful";
    },
    error: function (response) {
      //console.log(response);
      msg.textContent = "Insert unSuccessful";
    },
  });
}

//retieve weather history
function retrieveweatherhistory(cityname) {
  $.ajax({
    type: "POST",
    url: "query.php",
    data: { location: cityname },
    success: function (data) {
      console.log(data);
      $(".history").hide(500);
      $("#results").removeData();
      $("#results").html(data);
      $(".history").show(500);
    },
  });
}

//Search error checker
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputVal = input.value;

  //check if there's already a city
  const listItems = list.querySelectorAll(".ajax-section .city");
  const listItemsArray = Array.from(listItems);

  if (listItemsArray.length > 0) {
    const filteredArray = listItemsArray.filter((el) => {
      let content = "";
      if (inputVal.includes(",")) {
        if (inputVal.split(",")[1].length > 2) {
          inputVal = inputVal.split(",")[0];
          content = el
            .querySelector(".city-name span")
            .textContent.toLowerCase();
        } else {
          content = el.querySelector(".city-name").dataset.name.toLowerCase();
        }
      } else {
        content = el.querySelector(".city-name span").textContent.toLowerCase();
      }
      return content == inputVal.toLowerCase();
    });

    if (filteredArray.length > 0) {
      msg.textContent = `You already know the weather for ${
        filteredArray[0].querySelector(".city-name span").textContent
      }`;
      form.reset();
      input.focus();
      return;
    }
  }

  //fetching data from the API
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
  //console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      let { main, name, sys, weather } = data;
      //console.log(main.temp);

      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
      const li = document.createElement("li");
      li.classList.add("city");
      const markup = `
            <h2 class="city-name" data-name="${name},${sys.country}">
              <span>${name}</span>
              <sup>${sys.country}</sup>
            </h2>
            <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
            <figure>
            <img class="city-icon" src="${icon}" alt="${
        weather[0]["description"]
      }">
            <figcaption>${weather[0]["description"]}</figcaption>
            </figure>
      `;
      li.innerHTML = markup;
      list.appendChild(li);

      // added
      let temperature = main.temp;
      let cityname = name;
      let weatherdescription = weather[0]["description"];

      saveweather(temperature, cityname, weatherdescription);
      retrieveweatherhistory(cityname);
    })
    .catch(() => {
      msg.textContent = "City not recognised - Please search for a valid city";

      msg.textContent = "";
      form.reset();
      input.focus();
    });
});
