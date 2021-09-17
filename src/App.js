import Navbar from './Navbar'
import Home from './Home'
import CommentDetail from './CommentDetail';


function App() {
  const buttonText = {text: "Click"};
  const style = {backgroundColor: 'blue', color:'white'};
  return (
    <div className="ui container comments">
      <CommentDetail />
    </div>
  );
}

export default App;
