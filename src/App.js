import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Bill from './Component/Bill/Bill';
import Expenditure from './Component/Expenditure/Expenditure';
import Home from './Component/Home/Home';
import Item from './Component/Item/Item';
import Login from './Component/Login/Login';
import ModalExpenditure from './Component/Modal/ModalExpenditure';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/bills' element={<Bill/>}/>
        <Route path='/expenditures' element={<Expenditure/>}/>
        <Route path='/items' element={<Item/>}/>
        <Route index element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
