import Navbar from './Navbar'
import Home from './Home'


function App() {
  const buttonText = {text: "Click"};
  const style = {backgroundColor: 'blue', color:'white'};
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="Avatar">
          <img alt="avatar" src={faker.image.avatar()} />
          <img alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00PM</span>
          </div>
          <div className="text">Nice blog post!</div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className="Avatar">
          <img alt="avatar" src={faker.image.avatar()} />
          <img alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00PM</span>
          </div>
          <div className="text">Nice blog post!</div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className="Avatar">
          <img alt="avatar" src={faker.image.avatar()} />
          <img alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00PM</span>
          </div>
          <div className="text">Nice blog post!</div>
        </div>
      </div>
    </div>
  );
}

export default App;
