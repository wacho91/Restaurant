import { useEffect } from "react";
import Navbar from "./Component/Navbar/Navbar"
import Hero from "./Component/Hero/Hero";

import AOS from "aos";
import "aos/dist/aos.css";
import Services from "./Component/Services/Services";
import Banner from "./Component/Banner/Banner";
import AppStore from "./Component/AppStore/AppStore";

function App() {
  
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  },[]);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <AppStore />
    </div>
  )
}

export default App
