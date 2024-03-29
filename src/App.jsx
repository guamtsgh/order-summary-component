import './App.css'

import banner from './assets/images/illustration-hero.svg';
import musicIcon from './assets/images/icon-music.svg';

function App() {
  return <div id='container'>
      <img src={banner} alt="banner" id='banner'/>
      <div id='words'>
        <h3>Order Summary</h3>
        <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
      </div>
      <div id='plan'>
        <img src={musicIcon} alt="music icon" />
        <div id='details'>
          <p id='plan-name'>Annual Plan</p>
          <p id='price'>$59.99/year</p>
        </div>
        <a href="#">Change</a>
      </div>
      <button id='proceed'>Proceed to Payment</button>
      <button id='cancel'>Cancel Order</button>
    </div>;
}

export default App;
