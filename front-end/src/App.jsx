import React from 'react';
import Header from './components/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Artist from './Pages/Artist';
import Artists from './Pages/Artists';
import Song from './Pages/Song';
import Songs from './Pages/Songs';
import Main from './components/Main'; // Adicione esta importação

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/artists" element={ <Artists/> } />
                <Route path="/artist/:id" element={ <Artist/> } />
                <Route path="/songs" element={ <Songs/> } />
                <Route path="/song/:id" element={ <Song/> } />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
