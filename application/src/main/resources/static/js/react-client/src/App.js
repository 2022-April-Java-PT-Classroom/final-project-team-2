import AppRouter from './components/app-router';
import { BrowserRouter } from 'react-router-dom';
import EmotionsApp from './components/emotions/emotionsApp';
import Footer from './components/footer';
import Header from './components/header';
import React from 'react';
import style from './style.module.scss';

const App = () => {
  return (
    <div>
       <BrowserRouter>
      <Header />
      <div>
	   {/* Hello React Test World */}
        <AppRouter />
        <EmotionsApp/>
      </div>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
