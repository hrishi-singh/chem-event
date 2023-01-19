import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Events from './Components/Events/Events2'
import Header from './Components/Header/HeaderVer1'
import Login from './Components/Login/Login'
import Registration from './Components/Registration/RegistrationV1';
import Sponsors from './Components/Sponsors/Sponsors';
import Team from './Components/Core-team/Core-team';
import Footer from './Components/Footer/Footer';
import Profile from './Components/Profile/Profile';
import Gallery from './Components/Header/Gallery';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { AuthProvider } from './Components/contexts/AuthContext';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';

function App() {
  return (
    <div className="App">
      <Router>
      <AuthProvider>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Header/>}></Route>
        <Route path="/events" element={<Events/>}></Route>
        <Route path="/sponsors" element={<Sponsors/>}></Route>
        <Route path="/team" element={<Team/>}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>
        <Route path="/registration" element={<Registration/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
        </Routes>
        <Footer Name={"Chem-E-sorption"}/>
        </AuthProvider>
      </Router>

    </div>
  );
}

export default App;
