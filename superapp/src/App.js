import './App.css';
import Headercomp from './components/Headercomp';
import Imagecomp from './components/Imagecomp';
import Termscondcomp from './components/Terms_condcomp';
import Inputcomp from './components/inputcomp';



function App() {
  return (
    <div className="App">
      <Imagecomp/>
      <Headercomp/>
      <Inputcomp/>
      <Termscondcomp/>
    </div>
  );
}

export default App;
