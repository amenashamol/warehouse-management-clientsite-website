
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import NotFound from './Pages/NotFound/NotFound';

import Footer from './Pages/Shared/Footer/Footer';
import SignIn from './Pages/Login/Sing In/SignIn';
import Inventories from './Pages/Inventories/Inventories';

function App() {
  return (
    <div className="App">
      <Header></Header>

<Routes>
<Route path='/' element={<Home></Home>}></Route>
  <Route path='/home' element={<Home></Home>}></Route>
  <Route path='/signin' element={<SignIn></SignIn>}></Route>
  <Route path='/blogs' element={<Blogs></Blogs>}></Route>
  <Route path='/inventories' element={<Inventories></Inventories>}></Route>
  
  
  <Route path='*' element={<NotFound></NotFound>}></Route>
</Routes>

<Footer></Footer>
    </div>
  );
}

export default App;
