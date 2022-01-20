import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
  return (
    <div>
      PageOne
      <button>
          <a href="/pagetwo">Navigate to Page Two</a>
      </button>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <button>
        <a href="/">Navigate to Page One</a>
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;