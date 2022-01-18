import React from "react";
import "./App.css";
import Filter from "./component/Filter/Filter";
import Footer from "./component/footer/Footer";
import Subfooter from "./component/footer/subfooter";
import Footerimage from "./component/footerImage/Footerimage";
import Header from "./component/header/Header";
import Restaurant from "./component/Noofrestaurant/Restaurant";
import Search from "./component/Search/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Restaurant />
      <Filter />
      <Footerimage />
      <Footer placeholder="Enter your email to get our newsletter" />
      <Subfooter />
    </div>
  );
}

export default App;
