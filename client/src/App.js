import './App.css';
import Topbar from './components/topbar/topbar';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Settings from './pages/settings/settings';
import Single from './pages/single/single';
import Write from './pages/write/write';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  const user= false;
  return (
      <Router>
        <Topbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={user ? <Home/> : <Register/>}/>
          <Route path="/login" element={user ? <Home/> : <Login/>}/>
          <Route path="/write" element={user ? <Write/> : <Register/>}/>
          <Route path="/settings" element={user ? <Settings/> : <Register/>}/>
          <Route path="/post/:postId" element={<Single/>}/>    
        </Routes>

      </Router>
    
  );
}

export default App;
