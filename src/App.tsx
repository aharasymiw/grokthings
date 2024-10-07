import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Header from './routes/Header/Header';

import './App.css'

function App() {

  function listCookies(): void {
    var theCookies = document.cookie;
    console.log('theCookies', theCookies);

  }

  useEffect(
    listCookies, []
  );

  return (
    <>
      <Header />

      <Outlet />
    </>
  )
}

export default App
