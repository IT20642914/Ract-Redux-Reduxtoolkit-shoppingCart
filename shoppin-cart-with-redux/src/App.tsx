import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './Pages/Cart';
import ProductListing from './Pages/ProductListing';
import ProductDetails from './Pages/ProductDetails';
import { store,persistore } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Provider store={store} >
    <PersistGate persistor={persistore}>
  <BrowserRouter>
  <Header />

 
  <main>

      <Routes>
      <Route  path="/" element={<Home/>} />
     
      <Route path="/store" element={<ProductListing/>} />
        <Route  path="/product/:productId" element={<ProductDetails/>} />
        <Route path="/cart" element={<Cart/>} />

    </Routes>

  </main>
  <Footer />
</BrowserRouter>
</PersistGate>
</Provider>
  );
}

export default App;
