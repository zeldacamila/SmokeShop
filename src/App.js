import './App.css';
import Nav from './components/Nav/Nav';
import {Routes, Route} from 'react-router-dom'
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
