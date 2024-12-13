import {Routes, Route} from 'react-router-dom'
import LoginPage from './components/LoginPage'
import Home from './components/Home'
import Profile from './components/Profile'
import EditProfile from './components/EditProfile'
import CreatePost from './components/CreatePost'

import './App.css'


const App = () => (
  <Routes>
    <Route exact path='/login' element={<LoginPage />} />
    <Route exact path='/' element={<Home />} />
    <Route exact path='/profile' element={<Profile />} />
    <Route exact path='/editProfile' element={<EditProfile />} />
    <Route exact path='/createPost' element={<CreatePost />} />
  </Routes>
)

export default App