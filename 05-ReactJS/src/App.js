import React from 'react';
import { Routes, Route } from 'react-router-dom';

import GlobalStyles from './components/GlobalStyles';
import Meta from './components/Meta';
import Header from './components/Header';
import Footer from './components/Footer';

import Content from './pages/Content';

const App = () => {
    return (
        <div>
            <Meta />
            <GlobalStyles />
            
            <Header />
            
            <Routes>
                <Route path='/' export={true} element={<Content />} />
            </Routes>

            <Footer />
        </div>
    );
};

export default App;