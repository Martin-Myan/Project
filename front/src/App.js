import React from 'react';
import { Provider } from 'react-redux';

import store from './Config/store';

import Comp from './Components/Comp';

import './App.scss';

function App() {
  return (
    <Provider store={store}>
      {/* <div className="App">
      </div> */}
      <Comp />
    </Provider>  
    
  );
}

export default App;
