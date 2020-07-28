import React from 'react';
import Header from './components/header'
import Features from './components/featuresection'
import Pricing from './components/pricing'
import Demo from './components/demo'
import Contact from './components/contact'

import './App.css';

// const url = 'http://api.weatherapi.com/v1/current.json?key=7b652cc06264447ba7174608202707&q=Chennai'


class App extends React.Component {






  render() {
    return (
      <div className='App'>
        <Header />
        <Features />
        <Demo />
        <Pricing />
        <Contact />
      </div>
    )
  }
}
export default App;



// const params = {
//   //   access_key: 'a2f8067642768a07bcdd48955ee7d41c',
//   //   query: 'Chennai'
//   // }


 // componentDidMount() {
  //   axios.get('http://api.weatherstack.com/current', { params })
  //     .then(response => {
  //       const apiResponse = response.data;
  //       console.log(apiResponse);
  //     }).catch(error => {
  //       console.log(error);
  //     });
