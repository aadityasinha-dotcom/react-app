import Navbar from './Navbar'
import Home from './Home'


function App() {
  const buttonText = {text: "Click"};
  return (
    <div>
      <label className="label" for="name">Enter name:</label>
      <input id="name" type="text" />
      <button style={{backgroundColor: 'blue', color:'white'}}>{buttonText.text}</button>
    </div>
  );
}

export default App;
