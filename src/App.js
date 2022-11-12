/////////////////////////////////////////////////////////////////////////////////////
import Data from './components/Data'          //COMPONENT TO SHOW AND DELETE PRODUCTS
import AddItem from './components/AddItem'    //COMPONENT TO ADD PRODUCTS
import './components/style/style.css'
import _TopBar from './components/TopBar'
import _footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.css'
import {Routes, Route} from 'react-router-dom'
/////////////////////////////////////////////////////////////////////////////////////


function App() {
  return (
    <div>
      <_TopBar />
      <Routes>
        <Route path='/' element={<Data/>} />
        <Route path='/addproduct' element={<AddItem/>} />
      </Routes>
      <_footer/>
    </div>
  );
}

export default App;
