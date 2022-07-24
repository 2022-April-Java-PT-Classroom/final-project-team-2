import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import AppRouter from './components/app-router';

const App = () => {
  return (
    <div>
       <BrowserRouter>
      <Header />
      <div>
	   {/* Hello React Test World */}
        <AppRouter />
      </div>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
