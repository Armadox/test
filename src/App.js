/////////////////////////////////////////////////////////////////////////////////////
import Data from './components/Data'          //COMPONENT TO SHOW AND DELETE PRODUCTS
import AddItem from './components/AddItem'    //COMPONENT TO ADD PRODUCTS
import './components/style/style.css'
import _TopBar from './components/TopBar'
import _footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router,Routes, Route,} from 'react-router-dom';
/////////////////////////////////////////////////////////////////////////////////////


function App() {
  return (
    <Router>
        <_TopBar />
        <Routes>
          <Route path='/'>
            <Route index element={<Data/>} />
            <Route path='addproduct' element={<AddItem/>} />
          </Route>
        </Routes>
        <_footer/>
    </Router>
  );
}

export default App;
