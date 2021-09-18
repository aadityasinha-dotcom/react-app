import Navbar from './Navbar'
import Home from './Home'
import CommentDetail from './CommentDetail';


function App() {
  return (
    <div className="ui container comments">
      <CommentDetail author='Sam' timeAgo="Today at 4:45PM" />
      <CommentDetail author='Sam' timeAgo="Today at 2:00AM" />
      <CommentDetail author='Sam' timeAgo="Yesterday at 5:00PM" />
    </div>
  );
}

export default App;
