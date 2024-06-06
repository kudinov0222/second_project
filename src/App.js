import React from "react";
import { Header } from './components/header';
import { Shop } from './components/shop'
import { Footer } from './components/footer';
import './App.scss';

function App() {
   return (
      <div className="App">
         <React.Fragment>
            <Header />
            <Shop />
            <Footer />
         </React.Fragment>
      </div>
   );
}

export default App;
