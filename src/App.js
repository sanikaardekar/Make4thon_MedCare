import { useEffect } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Login from './auth/Login';
import Signup from "./auth/Signup"

function App() {

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path="/" element={<><Signup/></>} />
        <Route exact path="/login" element={<><Login /></>} />
        {/* <Route path="/home" element={<><HomePage/></>}></Route>
        <Route path="/yoga" element={<><Navbar /><Yoga/></>}></Route>
        <Route path="/meditation" element={<><Navbar /><Meditation/></>}></Route>
        <Route path="*" element={<><NotFound/></>}></Route> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
