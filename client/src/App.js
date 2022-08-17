import {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useDispatch } from 'react-redux';

import PageRender from './customRouter/PageRender';
import PrivateRouter from "./customRouter/PrivateRouter"

import Header from "./components/Header/header"
import Footer from "./components/Footer/footer"

import Home from "./pages/home"
import Login from "./pages/login"
import Register from "./pages/register"

import PrivacyPolicy from "./pages/privacyPolicy"
import TermAndCondition from "./pages/termAndConditions"
import Disclaimer from "./pages/disclaimer"
import EULA from "./pages/eula"

import About from "./pages/about"

import { refreshToken } from './redux/actions/authAction';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(refreshToken())
  }, [dispatch])
  return (
    <Router>

      <div className="App">
        <div className='main'>
          <Header />

          <Routes>
            <Route exact path='/' element={<Home />} />

            {/* Authentication & Authorization */}
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />


            {/* Rules */}
            <Route exact path='/privacyPolicy' element={<PrivacyPolicy />} />
            <Route exact path='/termAndConditions' element={<TermAndCondition />} />
            <Route exact path='/disclaimer' element={<Disclaimer />} />
            <Route exact path='/eula' element={<EULA />} />

            <Route exact path='/about' element={<About />} />



            


            <Route exact path='/' element={<PrivateRouter />}>
              <Route exact path='/:page' element={<PageRender />} />
              <Route exact path='/:page/:id' element={<PageRender />} />
            </Route>

          </Routes>

          <Footer />
        </div>
      </div>

    </Router>
  );

}

export default App;
