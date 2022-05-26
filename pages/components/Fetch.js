// import axios from 'axios';
// import React from 'react';
const axios = require('axios');

axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=41bb394e')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
  // .then(function () {
  //   // always executed
  // }
  // );





// export default class CountryData extends React.Component {
//   state = {
//     country: {}
//   }

//   componentDidMount() {
//     axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=41bb394e`)
//       .then(res => {
//         const country = res.data;
//         this.setState({ country });
//       })
//   }

//   render() {
//     return (
//       <ul>
//         {
//           this.state.country
//             .map(c =>
//               <li key={c}>{c}</li>
//             )
//         }
//       </ul>
//     )
//   }
// }

// export default function Fetch() {
//   axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=41bb394e')
//   .then(res => {
//     const country = res.data;
//     return (
//       <div>
//         <p>{ country }</p>
//         <p>hello</p>
//       </div>
//     )
//   })
// }
