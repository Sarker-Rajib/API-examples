const loadCountries = () => {
   fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => displayCountries(data))
}

const displayCountries = countries => {
   // for (const country of countries){
   //    console.log(country);
   // }

   const countriesContainer = document.getElementById('countries-container');

   countries.forEach(country => {
      const countryDIv = document.createElement('div');
      countryDIv.classList.add('country');
      countryDIv.innerHTML = `
      <h3>Name: ${country.name.common}</h3>
      <p>Capital: ${country.capital ? country.capital[0] : 'data absence'}</p>  
      <button onclick="loadCountryDetail('${country.cca2}')">Detais</button>   
      `
      countriesContainer.appendChild(countryDIv);
   })
}

const loadCountryDetail = (code) => {
   //https://restcountries.com/v3.1/alpha/{code}
   const url = `https://restcountries.com/v3.1/alpha/${code}`
   console.log('country detail' + ' ' + code);
   // console.log(url);
   fetch(url)
      .then(res => res.json())
      .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country => {
   console.log(country);
   const countryDetail = document.getElementById('cDeatail');
   countryDetail.innerHTML = `
     <h2>Details : ${country.name.common}</h2>
     <img src="${country.flags.png}">
   `
}

loadCountries();