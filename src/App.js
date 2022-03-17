import './App.css';
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Home';
import Todos from './pages/Todos';
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import Posts from './pages/Posts';
import PostInfo from './pages/PostInfo';
import TodoInfo from './pages/TodoInfo';

function App() {
  return (
    <>
      <Header />
      <main className='main container p-3'>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/todos' element={<Todos />}/>
          <Route path='/posts' element={<Posts />}/>
          <Route path='/post/:id' element={<PostInfo />}/>
          <Route path='/todo/:id' element={<TodoInfo />}/>
          <Route path='*' element={<Error />}/>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App;