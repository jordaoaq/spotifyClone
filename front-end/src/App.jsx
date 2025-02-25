import React from 'react';
import Header from './components/Header';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Artist from './Pages/artist';
import Artists from './Pages/artists';
import Song from './Pages/Song';
import Songs from './Pages/Songs';
import Sidebar from './components/Sidebar';

const App = () => {
    return (

    <BrowserRouter>
    <Header/>
    <Sidebar/>

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