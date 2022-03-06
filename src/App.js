import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import NavbarLogin from "./components/HeaderFooter/NavbarLogin";
import Navbar from "./components/HeaderFooter/Navbar";
import NotFound from "./components/NotFound";
import Yoga from "./pages/Yoga/Yoga";
import HomePage from "./pages/HomePage/HomePage";
import Feedback from "./pages/Feedback/Feedback";
import Quiz from "./pages/Quiz/Quiz";
import Meditation from "./pages/Meditation/Meditation";
<<<<<<< HEAD
// import Forums from "./pages/Posts/Forums";
import Posts from './pages/Posts/Posts'
import VideoChat from "./pages/VideoChat/VideoChat";
import Results from "./pages/Quiz/Results";
import Affirmations from "./pages/Affirmations/Affirmations";
=======
import VideoChat from "./pages/VideoChat/VideoChat";
import Results from "./pages/Quiz/Results";
import Posts from './pages/Posts/Posts'
>>>>>>> 3ca5fcff07c1686abdb3bceaeb215beb30b35e9b

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <NavbarLogin />
                <Signup />
              </>
            }
          />
          <Route
            exact
            path="/login"
            element={
              <>
                <NavbarLogin />
                <Login />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Navbar />
                <HomePage />
              </>
            }
          ></Route>
          <Route
            path="/yoga"
            element={
              <>
                <Navbar />
                <Yoga />
              </>
            }
          ></Route>
          <Route
            path="/quiz"
            element={
              <>
                <Navbar />
                <Quiz />
              </>
            }
          ></Route>
          <Route
            path="/posts"
            element={
              <>
                <Navbar />
                <Posts />
              </>
            }
          ></Route>
          <Route
            path="/feedback"
            element={
              <>
                <Navbar />
                <Feedback />
              </>
            }
          ></Route>
          <Route
            path="/meditation"
            element={
              <>
                <Navbar />
                <Meditation />
              </>
            }
          ></Route>
          <Route
            path="/videochat"
            element={
              <>
                <Navbar />
                <VideoChat />
              </>
            }
          ></Route>
          <Route
            path="/results"
            element={
              <>
                <Navbar />
                <Results />
              </>
            }
          ></Route>
          <Route
            path="*"
            element={
              <>
                <NotFound />
              </>
            }
          ></Route>
          <Route
            path="affirmations"
            element={
              <>
                <Navbar/><Affirmations />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
