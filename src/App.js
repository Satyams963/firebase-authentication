import Home from "./components/pages/home";
import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Add from "./components/pages/add";
import View from "./components/pages/view";
import EditPage from "./components/pages/editPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";

function App() {
  return (
    <Router>
    <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/blog/create' element={<Add/>}  />
        <Route path='/blog/:id' element={<View/>}  />
        <Route path='/blog/edit/:id' element={<EditPage/>}  />
        <Route path='/login' element={<LoginPage/>}  />
        <Route path='/register' element={<RegisterPage/>}  />

    </Routes>
    </Router>
  );
}

export default App;