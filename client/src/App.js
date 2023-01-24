
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation';
import Add from './Pages/Add';
import Edit from './Pages/Edit';
import Error from './Pages/Error';
import Home from './Pages/Home';
import User from './Pages/User';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/> }/>
        <Route path='/user' element={<User/> }/>
        <Route path='/add' element={<Add/> }/>
        <Route path='/edit/:_id' element={<Edit/> }/>
        <Route path='/*' element={<Error/> }/>
      </Routes>
    </div>
  );
}

export default App;
