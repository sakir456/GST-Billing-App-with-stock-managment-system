
import './App.css'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'
import useAuthStore from './zustand/useAuthStore';
import Home from '../public/components/Home';

function App() {
  const {authUser}  = useAuthStore();
  
  return (
    <Router>
   
    <div >
    <Toaster/>
    <Routes>
    <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} /> }/>
    <Route path='/login' element={authUser ? <Navigate to="/" /> : <Login />}/>
    <Route path='/signup' element={authUser ? <Navigate to="/" /> : <SignUp />}/>
      </Routes>
    
   </div>
   </Router>
    
  )
}

export default App
