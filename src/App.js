import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Favrouite } from './components/Main/Favrouite';

import './app.css'
import UserContext from './components/Context';


function App() {
  const [mylist, setMylist] = useState([])
  return (
    <>
    <UserContext.Provider value={{mylist,setMylist}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Main />} />
          <Route path="/favrouite" element={<Favrouite />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
    </>
  );
}

export default App;
