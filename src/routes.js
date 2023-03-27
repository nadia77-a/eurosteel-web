import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import Services from './containers/Services';
// import NotFound from './pages/NotFound';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/#" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;