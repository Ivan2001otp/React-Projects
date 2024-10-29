import { useState } from "react";
import "./App.css";
import NavBarTag from "./components/Navbar";
import Herotag from "./components/Hero";
import FooterTag from "./components/Footer"
function App() {
  return (
    <div>
      <div className="">
        <NavBarTag />
      </div>
      <section>
        <Herotag />
      </section>

      <section>
          <FooterTag/>
      </section>
    
    </div>
  );
}

export default App;
