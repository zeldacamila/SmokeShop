import Nav from './components/Nav/Nav';
import {Routes, Route} from 'react-router-dom'
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import ProductsByCollection from './pages/ProductsByCollection/ProductsByCollection';
import Blog from './pages/Blog/Blog';
import Profile from './pages/Profile/Profile';
import Cart from './pages/Cart/Cart';
import SignUp from './pages/SignUp/Signup';
import ManageBlog from './pages/ManageBlog/ManageBlog';
import ManageProducts from './pages/ManageProducts/ManageProducts';
import UploadPublication from './pages/UploadPublication/UploadPublication';
import UploadProduct from './pages/UploadProduct/UploadProduct';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path="/collections/:collection" element={<ProductsByCollection />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup-profile" element={<SignUp />} />
        <Route path="/admin/manageProducts" element={<ManageProducts />} />
        <Route path="/admin/manageProducts/uploadProduct" element={<UploadProduct />} />
        <Route path="/admin/manageBlog" element={<ManageBlog />} />
        <Route path="/admin/manageBlog/uploadPublication" element={<UploadPublication />} />
        <Route path="/cart" element={<Cart />} />
        {/*<Route path="/products/:productTitle" element={<ProductDetail />} />*/}
      </Routes>
      <div className='foot'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
