// // const options = {
// //     method: 'GET',
// //     headers: {
// //       accept: 'application/json',
// //       Authorization: 'fsq3FhDdC3CqU753/uAdU7ytSv0Kaiv4/EuPrV0NHOIFKmk='
// //     }
// //   };
  
// //   fetch('https://api.foursquare.com/v3/places/search', options)
// //     .then(response => response.json())
// //     .then(response => console.log(response))
// //     .catch(err => console.error(err));
// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'fsq3FhDdC3CqU753/uAdU7ytSv0Kaiv4/EuPrV0NHOIFKmk='
//     }
//   };
  
//   fetch('https://api.foursquare.com/v3/places/nearby', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'fsq3FhDdC3CqU753/uAdU7ytSv0Kaiv4/EuPrV0NHOIFKmk='
    }
  };
  
  fetch('https://api.foursquare.com/v3/autocomplete?query=hyderbad', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err)); 