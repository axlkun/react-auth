import './App.css'
import Login from './pages/Login'
import Navigation from './components/Navigation'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import { useState, useEffect } from 'react'

function App() {

  const [name, setName] = useState('');

  const userEndpoint = 'http://localhost:8000/api/user';

  useEffect(() => {
    (
      async () => {
        const response = await fetch(userEndpoint, {
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        });

        const content = await response.json();

        setName(content.name);
      }
    )();
  }, []);

  return (

    <div className='App'>

      <BrowserRouter>
        <Navigation name={name} setName={setName} />
        <main>
          <Routes>
            <Route path='/' element={<Home name={name} />} />
            <Route path='/login' element={<Login setName={setName} />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>

  )
}

export default App
