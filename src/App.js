import Navbar from './Navbar'
import Home from './Home'
import CommentDetail from './CommentDetail';


function App() {
  return (
    <div className="ui container comments">
      <CommentDetail author='Adi' timeAgo="Today at 4:45PM" />
      <CommentDetail author='Aryan' timeAgo="Today at 2:00AM" />
      <CommentDetail author='Raju' timeAgo="Yesterday at 5:00PM" />
    </div>
  );
}

export default App;
