import Navbar from './Navbar'
import Home from './Home'


function App() {
  const buttonText = {text: "Click"};
  const style = {backgroundColor: 'blue', color:'white'};
  const labelText = "Enter name";
  return (
    <div>
      <label className="label" for="name">{labelText}:</label>
      <input id="name" type="text" />
      <button style={style}>
        {buttonText.text}
      </button>
    </div>
  );
}

export default App;
