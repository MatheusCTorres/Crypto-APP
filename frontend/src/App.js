import './App.css';
import Axios from  'axios'
import {useState, useEffect} from 'react'
import Coin from './components/Coin';


function App() {

  const [listOfCoins, setListOfCoins] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0")
    .then(response => setListOfCoins(response.data.coins))
  })

  const filterCoins = listOfCoins.filter((coin) =>{
    return coin.name.toLowerCase().includes(search.toLowerCase())
  })
  return (
    <div className="App">
      <div className="cryptoHeader">
        <input type="text" placeholder="Search..."  onChange={(event) => setSearch(event.target.value)} />
      </div>
      <div className="cryptoDisplay">
        {filterCoins.map((coins) =>{
          return <Coin name={coins.name} icon={coins.icon} price={coins.price}  symbol={coins.symbol}/>
        })}
      </div>
    </div>
  );
}

export default App;
