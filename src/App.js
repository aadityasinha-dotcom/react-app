import Navbar from './Navbar'
import Home from './Home'


function App() {
  const buttonText = {text: "Click"};
  const style = {backgroundColor: 'blue', color:'white'};
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="Avatar">
          <img alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="Author">
            
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
