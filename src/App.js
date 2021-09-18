import React from 'react';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import aprrovalCard from './aprrovalCard';


function App() {
  return (
    <div className="ui container comments">
      <aprrovalCard />
      <CommentDetail 
        author='Adi' 
        timeAgo="Today at 4:45PM" 
        blog="Hello" 
        avatar={faker.image.avatar()}
      />
      <CommentDetail 
        author='Aryan' 
        timeAgo="Today at 2:00AM" 
        blog="kya hai?" 
        avata={faker.image.avatar()}
      />
      <CommentDetail 
        author='Raju' 
        timeAgo="Yesterday at 5:00PM" 
        blog="kuch nahi :-(" 
        avatar={faker.image.avatar()}
      />
    </div>
  );
}

export default App;
