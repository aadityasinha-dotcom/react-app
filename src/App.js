import Navbar from './Navbar'
import Home from './Home'
import CommentDetail from './CommentDetail';


function App() {
  return (
    <div className="ui container comments">
      <CommentDetail author='Sam' />
      <CommentDetail author='Sam' />
      <CommentDetail author='Sam' />
    </div>
  );
}

export default App;
