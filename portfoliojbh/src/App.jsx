import './App.css'
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {About} from "./view/About.jsx";
import {WhatsappButton} from "./components/WhatsappButton.jsx";
import {useState} from "react";
import english from "./assets/img/en.png";
import spanish from "./assets/img/sp.png";
import {Proyects} from "./view/Proyects.jsx";
import {Values} from "./view/Values.jsx";
import {Contact} from "./view/Contact.jsx";

function App() {

    const [isEnglishSelected, setIsEnglishSelected] = useState(true);

    const toggleLanguage = () => {
        setIsEnglishSelected(!isEnglishSelected);
    }


  return (
      <>
          <Router>
              <Routes>
                  <Route path="/about-me" element={<About isEnglishSelected={isEnglishSelected} />}/>
                  <Route path="/proyects" element={<Proyects isEnglishSelected={isEnglishSelected} />}/>
                  <Route path="/values" element={<Values isEnglishSelected={isEnglishSelected} />}/>
                  <Route path="/contact" element={<Contact isEnglishSelected={isEnglishSelected} />}/>
                  <Route path="/" element={<Navigate to="/about-me"/>}/>
              </Routes>
          </Router>

          <div className=" top-0 right-0 p-5 z-10 fixed">
              <div className={`p-1 border-2 bg-gray-500 rounded-full`}>
                  <div onClick={toggleLanguage}
                       className="p-1 w-16 h-8 bg-gray-100 rounded-full flex items-center p border-gray-100 opacity-90 hover:opacity-100 transition-all duration-200 cursor-pointer">
                      <div
                          className={`cursor-pointer w-7 h-7 rounded-full transition-all duration-200 ${isEnglishSelected ? 'translate-x-7' : ''}`}
                          style={{
                              backgroundImage: `url(${isEnglishSelected ? english : spanish})`,
                              backgroundSize: 'cover'
                          }}>
                      </div>
                  </div>
              </div>
          </div>
          <div className=" bottom-0 right-0 p-5 z-10 fixed">
              <WhatsappButton phoneNumber={"50683276938"}/>
          </div>
      </>
  )
}

export default App
