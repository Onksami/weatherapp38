const citySelect = document.getElementById('citySelect');
const city = document.getElementById('city');
 


let date = new Date().toLocaleDateString("tr-TR");

document.getElementById("date").innerHTML = date;



let myRequest = new Request("./cities_of_turkey.json")

// fetch (myRequest).then (
//     response => response.json())
//    .then (data => {
//     let cities = data.cities;
    
//     });


fetch (myRequest).then (
    response => {
        return response.json()
    }
).then (data => {
    // console.log(data);
    data.forEach((item)=>{
        // console.log(item.name);
        let opt = document.createElement("option");
        opt.innerText = item.name;
        opt.value = item.id;
        citySelect.appendChild(opt);
        // console.log (item.name);
        
        
      })
      citySelect.addEventListener("change", asd)
        
});

function asd(e) {
    const filteredCity = e.target.value;
    

    
    // citySelect[0] === target.innerText [0]
    console.log("e", filteredCity);
   
    
    // const filteredCity = e.target.value;
    // console.log("filteredCity", filteredCity);
    // city.innerText = filteredCity;
    
}







    


