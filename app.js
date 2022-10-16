const citySelect = document.getElementById("citySelect");
const city = document.getElementById("city");
let cities = [];

let date = new Date().toLocaleDateString("tr-TR");

document.getElementById("date").innerHTML = date;

let myRequest = new Request("./cities_of_turkey.json");

// --- method 1 ----

// fetch (myRequest).then (
//     response => response.json())
//    .then (data => {
//     let cities = data.cities;

//     });

// fetch(myRequest)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     // console.log(data);
//     data.forEach((item) => {
//       //   console.log("item", item);
//       if (item.id < 30) {
//         item.color = "red";
//       } else if (item.id < 60) {
//         item.color = "blue";
//       } else {
//         item.color = "purple";
//       }
//       let opt = document.createElement("option");
//       opt.innerText = item.name;
//       opt.value = JSON.stringify(item);

//       citySelect.appendChild(opt);
//     });
//     citySelect.addEventListener("change", onChangeCity);
//   });

// function onChangeCity(e) {
//   const item = e.target.value;
//   //   const name = e.target.selectedOptions[0].getAttribute("name");

//   // citySelect[0] === target.innerText [0]
//   console.log("e", item);

//   city.innerText = item.name;
//   city.style.color = item.color;
// }

// --- method 1 ----

// --- method 2 ----

fetch(myRequest)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    cities = data;
    // console.log(data);
    data.forEach((item) => {
      //   console.log("item", item);

      let opt = document.createElement("option");
      opt.innerText = item.name;
      opt.value = item.id;

      if (item.id < 30) {
        opt.setAttribute("color", "red");
      } else if (item.id < 60) {
        opt.setAttribute("color", "blue");
      } else {
        opt.setAttribute("color", "purple");
      }

      citySelect.appendChild(opt);
    });
    citySelect.addEventListener("change", onChangeCity);
  });

function onChangeCity(e) {
  const id = e.target.value;
  const color = e.target.selectedOptions[0].getAttribute("color");

  // citySelect[0] === target.innerText [0]
  console.log("e", id, color);
  console.log("cities", cities);

  const filteredCity = cities.filter((city) => city.id == id);
  console.log("filteredCity", filteredCity[0]);

  city.innerText = filteredCity[0].name;
  city.style.color = color;
}

// --- method 1 ----
