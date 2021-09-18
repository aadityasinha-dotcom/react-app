import React from 'react';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import aprrovalCard from './approvalCard';


function App() {
  return (
    <div className="ui container comments">
      <approvalCard>Are you sure you want to do this?</approvalCard>
      <approvalCard>
        <CommentDetail 
          author='Adi' 
          timeAgo="Today at 4:45PM" 
          blog="Hello" 
          avatar={faker.image.avatar()}
        />
      </approvalCard>
      <approvalCard>
        <CommentDetail 
          author='Aryan' 
          timeAgo="Today at 2:00AM" 
          blog="kya hai?" 
          avata={faker.image.avatar()}
        />
      </approvalCard>
      <approvalCard>
        <CommentDetail 
          author='Raju' 
          timeAgo="Yesterday at 5:00PM" 
          blog="kuch nahi :-(" 
          avatar={faker.image.avatar()}
        />
      </approvalCard>
    </div>
  );
}

export default App;
