
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import NotFound from './Pages/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import Footer from './Pages/Shared/Footer/Footer';
import SignIn from './Pages/Sing In/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import Inventories from './Pages/Inventories/Inventories';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import CheackOut from './Pages/Checackout/CheackOut';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import AddInventory from './Pages/AddInventory/AddInventory';
import ManageInventory from './Pages/Inventories/ManageInventory';

import MyItems from './Pages/Inventories/MyItems';
import ManageItems from './Pages/Inventories/ManageItems';
import StockUpdate from './Pages/Inventories/StockUpdate';

function App() {
  return (
    <div className="App">
      <Header></Header>

<Routes>
<Route path='/' element={<Home></Home>}></Route>
  <Route path='/home' element={<Home></Home>}></Route>
  <Route path='/signin' element={<SignIn></SignIn>}></Route>
  <Route path='/signup' element={<SignUp></SignUp>}></Route>
  <Route path='/blogs' element={<Blogs></Blogs>}></Route>
  <Route path='/AddInventory' element={<AddInventory></AddInventory>}></Route>
  <Route path='/inventories' element={<Inventories></Inventories>}></Route>
  <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
  <Route path='/cheackout' element={
          <RequireAuth>
            <CheackOut></CheackOut>
          </RequireAuth>
        }></Route>

<Route path='/inventory/:id' element={
          <RequireAuth>
            <StockUpdate></StockUpdate>
          </RequireAuth>
        }></Route>
        
  <Route path='/ManageInventory' element={<ManageInventory></ManageInventory>}></Route>
  <Route path='/myItem' element={<MyItems></MyItems>
  }></Route>
  <Route path='/manageItem' element={<ManageItems></ManageItems>}></Route>
  <Route path='*' element={<NotFound></NotFound>}></Route>
</Routes>

<Footer></Footer>
<ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
