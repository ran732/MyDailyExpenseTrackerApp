import Signup from "./components/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1 className="text-center pt-5" >Hello!! Guys,, Welcome back to my Collage Life.</h1>
      <hr></hr>
      <Signup/>
      
      {/* <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
