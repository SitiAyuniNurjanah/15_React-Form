import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPages';
import CreateProduct from './pages/CreateProduct';
import ListProduct from '../src/pages/ListProduct';
import DetailAccount from '../src/pages/DetailAccount';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/product/:index" element={<ListProduct />}/>
        <Route path="/account/:userId" element={<DetailAccount />}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;