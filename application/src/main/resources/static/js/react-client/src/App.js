import AppRouter from './components/app-router';
import { BrowserRouter } from 'react-router-dom';
import CardReport from './components/parentReport/card';
import Footer from './components/footer';
import Header from './components/header';
import React from 'react';
import style from './style.module.scss';

// import EmotionsApp from './components/emotions/emotionsApp';





// import NotesApp from './components/notes/notesApp';



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
