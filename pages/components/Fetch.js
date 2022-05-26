// import axios from 'axios';
// import React from 'react';

export default class CountryData extends React.Component {
  state = {
    country: {}
  }

  componentDidMount() {
    axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=41bb394e`)
      .then(res => {
        const country = res.data;
        this.setState({ country });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.country
            .map(c =>
              <li key={c}>{c}</li>
            )
        }
      </ul>
    )
  }
}

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
