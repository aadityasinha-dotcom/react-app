import React from 'react';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';
import SeasonDisplay from './SeasonDisplay';


function App() {
  return (
    <div className="ui container comments">
      <SeasonDisplay />
      <ApprovalCard>Are you sure you want to do this?</ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author='Adi' 
          timeAgo="Today at 4:45PM" 
          blog="Hello"
          avatar = {faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author='Aryan' 
          timeAgo="Today at 2:00AM" 
          blog="kya hai?"
          avatar = {faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author='Raju' 
          timeAgo="Yesterday at 5:00PM" 
          blog="kuch nahi :-("
          avatar = {faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
}

export default App;
