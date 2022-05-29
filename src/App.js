
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import NotFound from './Pages/NotFound/NotFound';

import Footer from './Pages/Shared/Footer/Footer';
import SignIn from './Pages/Login/Sing In/SignIn';
import SignUp from './Pages/Login/SignUp/SignUp';
import Inventories from './Pages/Inventories/Inventories';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import CheackOut from './Pages/Checackout/CheackOut';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import AddInventory from './Pages/AddInventory/AddInventory';
import UpdateModal from './Pages/updateModal/UpdateModal';
import ManageInventory from './Pages/Inventories/ManageInventory';

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
            <UpdateModal></UpdateModal>
          </RequireAuth>
        }></Route>
  <Route path='/ManageInventory' element={<ManageInventory></ManageInventory>}></Route>
  <Route path='*' element={<NotFound></NotFound>}></Route>
</Routes>

<Footer></Footer>
    </div>
  );
}

export default App;
