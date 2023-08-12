import './App.css';
import Checkboxcomp from './components/Checkboxcomp';
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
      <Checkboxcomp/>
      <Termscondcomp/>
    </div>
  );
}

export default App;
