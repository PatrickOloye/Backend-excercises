//create an element html
const coinDesk = document.createElement("h3");

const baseUrl = " https://api.coindesk.com/v1";
const factUrl = `${baseUrl}/bpi/currentprice.json`;


const method = {
  method: "GET",
  header: {
    Accept: "application/json",
  },
};

//fetch the base API, and set the interval
  fetch(factUrl, method)
    .then((result) => result.json())
    .then((result) => {
      coinDesk.innerText = `The results are: ${JSON.stringify(
        result.bpi
      )}`
      document.body.appendChild(coinDesk);
    })
    .catch((err) => console.error(err));



    //QUESTION TWO (CATFACT)
//create an element html
const catFact = document.createElement("h1");

const baseUrl = "https://catfact.ninja";
const factUrl = `${baseUrl}/fact`;

//determine your route method
const method = {
  method: "GET",
  header: {
    Accept: "application/json",
  },
};

//fetch the base API, and set the interval
setInterval(() => {
  fetch(factUrl, method)
    .then((result) => result.json())
    .then((result) => {
      catFact.innerHTML = `Cat fact of the day: ${result.fact}`;
      document.body.appendChild(catFact);
    })
    .catch((err) => console.error(err));
}, 5000);


    



