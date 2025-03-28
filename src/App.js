import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { lazy } from 'react';

import { Header } from './components/Header';

import { RedditPostDetail } from './components/RedditPostDetail';
import ErrorBoundary from './components/ErrorBoundary';

const Main = lazy(() => import('./components/Main'));

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter
        basename='/24-reddit-client-portfolio'
        future={{ v7_relativeSplatPath: true }}>
        <div className='App'>
          <Header />

          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/post/:postId' element={<RedditPostDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
