import React from 'react';
import './App.css';
import Footer from "./layouts/footer/Footer";
import Navigation from "./layouts/navbar/Navbar";
import Pages from "./layouts/pages/Pages";

function App() {
  return (
    <div>
     <Navigation/>
      <Pages/>
      <Footer/>
    </div>
  );
}

export default App;
