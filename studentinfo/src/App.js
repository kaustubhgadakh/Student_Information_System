import { Route, Routes } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar";
import AddStudent from './components/AddStudent';
import Home from "./components/Home";
import EditStudent from './components/EditStudent';
import ViewStudent from './components/ViewStudent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route  path='/' element={<Home/>}></Route>
        <Route path='/add' element={<AddStudent/>}></Route>
        <Route path='/edit/:sId' element={<EditStudent/>}></Route>
        <Route path='/view/:sId' element={<ViewStudent/>}></Route>
      </Routes>

      
    </div>
  );
}

export default App;
