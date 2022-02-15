import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/country';
import Cart from './components/Cart/Cart';

function App() {

const [counties, setCounties]=  useState([])
const [cart, setCart] = useState([])

useEffect(()=>{
  fetch('https://restcountries.com/v2/all')
  .then(res=> res.json())
  .then(data => {
    setCounties(data)
  console.log(data)
  data.map(country => country.name) 
})
  // .catch(error => console.log(error))
},[])

const handleAddCountry = (country) =>{
  const newCart=[...cart, country]
  setCart(newCart)
}

  return (
    <div className="App">
      <h1> total data loaded : {counties.length}</h1>
      <h4>Country added: {cart.length}</h4>
      <Cart cart={cart}></Cart>
      <ul>
        {
          counties.map(country=> <Country country= {country} handleAddCountry={handleAddCountry} key={country.alpha3code} ></Country> )
        }
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
