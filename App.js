import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return ( 
    <>
    <Navbar title="textUtils" about="about"/>
    <div className="container">
    <Textform heading="Enter text here to analyze"/>
    </div>
    </>
    );
}

export default App;
