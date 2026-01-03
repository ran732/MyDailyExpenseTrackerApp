
import Signup from './components/Signup';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

     <BrowserRouter>
       <Routes>
         <Route path="/signup" element={<Signup/>} ></Route>
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
