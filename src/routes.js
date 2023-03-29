import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import Services from './containers/Services';
import Projects from './containers/Projects';
// import NotFound from './pages/NotFound';

import React, { useState } from "react";

function AppRoutes() {
  const [activeRoute, setActive] = useState("home");
  console.log("activeRoute",activeRoute);
  return (
    <Routes>
      <Route path="/#" element={<Home activeRoute={activeRoute} setActive={setActive}/>} />
      <Route path="/about" element={<About setActive={setActive} activeRoute={activeRoute}/>} />
      <Route path="/contact" element={<Contact setActive={setActive} activeRoute={activeRoute}/>} />
      <Route path="/services" element={<Services setActive={setActive} activeRoute={activeRoute}/>} />
      <Route path="/projects" element={<Projects setActive={setActive} activeRoute={activeRoute}/>} />
      <Route path="*" element={<Home activeRoute={activeRoute} setActive={setActive}/>} />
    </Routes>
  );
}

export default AppRoutes;