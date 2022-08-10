import {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from "./components/Header/header"
import Footer from "./components/Footer/footer"

import Home from "./pages/home"

function App() {
  useEffect(() => {

  }, [])
  return (
    <Router>

      <div className="App">
        <div className='main'>
          <Header />

          <Routes>
            <Route exact path='/' element={<Home />} />
          </Routes>

          <Footer />
        </div>
      </div>

    </Router>
  );

}

export default App;
