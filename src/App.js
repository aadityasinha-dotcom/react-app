import Navbar from './Navbar'
import Home from './Home'

function App() {
  return (
    <div>
      <label class="label" for="name">Enter name:</label>
      <input id="name" type="text" />
      <button style={{backgroundColor: 'blue', color:'white'}}>Submit</button>
    </div>
  );
}

export default App;
