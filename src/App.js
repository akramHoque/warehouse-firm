import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import RequireAuth from './RequireAuth/RequireAuth';
import Inventory from './Inventory/Inventory';
import Items from './Items/Items';
import ManageInventories from './ManageInventories/ManageInventories';
import AddItem from './AddItem/AddItem';
import MyItems from './MyItem/MyItems';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element = {<Login></Login>}></Route>
        <Route path='/register' element = {<Register></Register>}></Route>

        <Route path = '/inventory/:itemId' element = {
                    <RequireAuth>
                        <Inventory></Inventory>
                    </RequireAuth>
                }></Route>
                <Route path='/items' element={
                    <RequireAuth>
                        <Items></Items>
                    </RequireAuth>
                }></Route>
                <Route path = '/inventory' element = {
                    <RequireAuth>
                        <Inventory></Inventory>
                    </RequireAuth>
                }></Route>
                <Route path = '/manageInventories' element = {
                    <RequireAuth>
                        <ManageInventories></ManageInventories>
                    </RequireAuth>
                }></Route>
                <Route path = '/addItem' element = {
                    <RequireAuth>
                       <AddItem></AddItem>
                    </RequireAuth>
                }></Route>
                <Route path = '/myItems' element = {
                    <RequireAuth>
                       <MyItems></MyItems>
                    </RequireAuth>
                }></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
