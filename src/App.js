import { Routes,Route } from 'react-router-dom';
import './App.css';
import Dashbord from './Dashbord'
import Sigunp from './Signup'
import Navbar from './Navbar'
function App() {
  return (
    <div className="maindiv">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Sigunp/>}/>
        <Route path='/dashbord' element={<Dashbord/>}/>
      </Routes>
    </div>
  );
}
export default App;
