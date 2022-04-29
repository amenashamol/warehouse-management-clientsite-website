
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>

<Routes>
  
  <Route path='/home' element={<Home></Home>}></Route>
  
  
  <Route path='/blogs' element={<Blogs></Blogs>}></Route>
  
  <Route path='*' element={<NotFound></NotFound>}></Route>
</Routes>

<Footer></Footer>
    </div>
  );
}

export default App;
