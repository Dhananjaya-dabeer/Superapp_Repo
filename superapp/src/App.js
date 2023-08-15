import './App.css';
// import Headercomp from './components/Headercomp';
// import Imagecomp from './components/Imagecomp';
// import Termscondcomp from './components/Terms_condcomp';
// import Inputcomp from './components/inputcomp';
import RegisterPage from './pages/RegisterPage';
import {BrowserRouter, Route,Routes, } from 'react-router-dom';
import CategoryPage from './pages/CategoryPage'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route index element = {<RegisterPage/>}/>
        <Route path='/Category' element = {<CategoryPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
