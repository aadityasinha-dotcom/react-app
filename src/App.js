import Navbar from './Navbar'
import Home from './Home'


function App() {
  const buttonText = {text: "Click"};
  const style = {backgroundColor: 'blue', color:'white'};
  return (
    <div>
      <label className="label" for="name">Enter name:</label>
      <input id="name" type="text" />
      <button style={style}>
        {buttonText.text}
      </button>
    </div>
  );
}

export default App;
