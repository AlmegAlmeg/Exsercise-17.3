import './App.css';
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Home';
import Todos from './pages/Todos';
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/todos' element={<Todos />}/>
          <Route path='*' element={<Error />}/>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App;