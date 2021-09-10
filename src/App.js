import Navbar from './Navbar'
import Home from './Home'

function getButtonText(){
  return 'Click on me!';
}

function App() {
  const buttonText = ['HI','There'];
  return (
    <div>
      <label className="label" for="name">Enter name:</label>
      <input id="name" type="text" />
      <button style={{backgroundColor: 'blue', color:'white'}}>{getButtonText()}</button>
    </div>
  );
}

export default App;
