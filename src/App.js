import React from 'react';
import './App.css';
import Filter from './component/Filter/Filter';
import Footer from './component/footer/Footer';
import Footerimage from './component/footerImage/Footerimage';
import Header from './component/header/Header';
import Restaurant from './component/Noofrestaurant/Restaurant';
import Search from './component/Search/Search';

function App() {
  return (
    <div className="App">
  <Header/>
  <Search placeholder='Where would you like to eat?'/>
  <Restaurant/>
  <Filter/>
  <Footerimage/>
  <Footer placeholder="Enter your email to get our newsletter"/>
    </div>
  );
}

export default App;
