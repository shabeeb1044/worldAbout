async function DataFetch(){
    let dataS=await fetch("https://restcountries.com/v2/all").then((data)=> data.json());
    ExecutionData(dataS);
}
DataFetch();
try {
    function ExecutionData(dataS){
        let optionSelect=document.getElementById("countryName");
        dataS.forEach((data)=>{
        let name =data.name;
        let opt =document.createElement('option');
         opt.value=name;
         opt.text=name;
         optionSelect.append(opt);
        })
        }
      function fetchCountryDetails(){
        let country=document.getElementById("countryName").value;
        fetchApi(country)
        async function fetchApi(country){
            let details = await fetch(`https://restcountries.com/v2/name/${country}?fullText=true`).then((data)=> data.json());
        showCountryDetails(details);
        }
        function showCountryDetails(details){
            let nameOfCountry= details[0].name;
            let capital =details[0].capital;
            console.log(capital);
            let population =details[0].population;
            let region =details[0].region;
            let flag = details[0].flags.png;
            let currencies =details[0].currencies[0].name;
            let symbol =details[0].currencies[0].symbol;
            let area =details[0].area;

            let htmlDisplay =`<div class="card" style="width: 18rem;">
            <img src="${flag}" class="card-img-top" alt=${nameOfCountry}>
            <div class="card-body">
              <h5 class="">${nameOfCountry}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Capital : ${capital}</li>
              <li class="list-group-item">Region : ${region} </li>
              <li class="list-group-item">Currencie : ${currencies}</li>
              <li class="list-group-item">Currencie symbol : ${symbol}</li>
              <li class="list-group-item ">Population : <span class="text-primary">${population}</span></li>
              <li class="list-group-item">Area :  <span class="text-primary">${area}</span></li>
            </ul>
          </div>`
          
          document.getElementById("show1").innerHTML =htmlDisplay;
        }
        }
} catch (error) {
    console.log("Something Wrong");
}
async function DataFetch2(){
    let dataS2=await fetch("https://restcountries.com/v2/all").then((data)=> data.json());
    ExecutionData2(dataS2);
  }
  DataFetch2();
  try {
      function ExecutionData2(dataS2){
          let optionSelect2=document.getElementById("countryName2");
          dataS2.forEach((data)=>{
          let name =data.name;
          let opt2 =document.createElement('option');
           opt2.value=name;
           opt2.text=name;
           optionSelect2.append(opt2);
          })
          }
        function fetchCountryDetails2(){
          let country=document.getElementById("countryName2").value;
          fetchApi2(country)
          async function fetchApi2(country){
              let details = await fetch(`https://restcountries.com/v2/name/${country}?fullText=true`).then((data)=> data.json());
          showCountryDetails2(details);
          }
          function showCountryDetails2(details){
              let nameOfCountry= details[0].name;
              let capital =details[0].capital;
              console.log(capital);
              let population =details[0].population;
              let region =details[0].region;
              let flag = details[0].flags.png;
              let currencies =details[0].currencies[0].name;
              let symbol =details[0].currencies[0].symbol;
              let area =details[0].area;
  
              let htmlDisplay =`<div class="card" style="width: 18rem;">
              <img src="${flag}" class="card-img-top" alt=${nameOfCountry}>
              <div class="card-body">
                <h5 class="">${nameOfCountry}</h5>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Capital : ${capital}</li>
                <li class="list-group-item">Region : ${region} </li>
                <li class="list-group-item">Currencie : ${currencies}</li>
                <li class="list-group-item">Currencie symbol : ${symbol}</li>
                <li class="list-group-item ">Population : <span class="text-primary">${population}</span></li>
                <li class="list-group-item">Area :  <span class="text-primary">${area}</span></li>
              </ul>
            </div>`
            
            document.getElementById("show2").innerHTML =htmlDisplay;
          }
          }
  } catch (error) {
      console.log("Something Wrong");
  }

  function backBtn(){
window.History.back();

  }