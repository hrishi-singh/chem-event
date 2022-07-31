import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Events from './Components/Events/Events'
import Header from './Components/Header/Header'
import Login from './Components/Login/Login'
import Registration from './Components/Registration/Registration';
import Sponsors from './Components/Sponsors/Sponsors';
import Team from './Components/Core-team/Core-team';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/chem-event" element={<Header/>}></Route>
        <Route path="/events" element={<Events/>}></Route>
        <Route path="/sponsors" element={<Sponsors/>}></Route>
        <Route path="/team" element={<Team/>}></Route>
        <Route path="/registration" element={<Registration/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        </Routes>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
