import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { RedditPostDetail } from './components/RedditPostDetail';

function App() {
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true }}>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/post/:postId' element={<RedditPostDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
