import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import artwork from '../contents/artwork';
import bio from '../contents/bio';
import contacts from '../contents/contacts';
import main from '../contents/main';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={main} />
          <Route path="/main/bio" exact component={bio} />
          <Route path="/main/artwork" exact component={artwork} />
          <Route path="/main/contacts" exact component={contacts} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;