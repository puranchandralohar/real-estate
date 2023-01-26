import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Favrouite } from './components/Main/Favrouite';
import UserContext from './components/Context';
import { Footer } from './components/Footer/Footer';

import './app.css'


function App() {

  const [mylist, setMylist] = useState([])
  return (
    <>
    <UserContext.Provider value={{mylist,setMylist}}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Main />} />
          <Route path="/favrouite" element={<Favrouite />} />
        </Route>
      </Routes>
      
    </UserContext.Provider>
    <Footer />  
    </> 
  );
}

export default App;
