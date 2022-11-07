import logo from './logo.svg';
import './App.css';

import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';
import { Link, Routes,Route, Router } from 'react-router-dom';
import Notfound from './components/notfound';
function App() {
  return (
    <div >
      
      <nav>

        <ul>
            <li> <Link to="/"> Home</Link></li>
            <li><Link to="Login">Login</Link></li>
            <li><Link to="SignUp">SignUp</Link></li>

        </ul>
      
      </nav>
<Routes>

<Route
 path = "/Home"
 element = {<Home/>}
 errorElemnent = {<Notfound />}
/>

<Route
 path = "/Login"
 element = {<Login/>}
 errorElemnent = {<Notfound />}
/>

<Route
 path = "/SignUp"
 element = {<Signup/>}
 errorElemnent = {<Notfound />}
/>

</Routes>


    </div>
  );
}

export default App;
