import React from 'react';

function App() {
  // const greeting = 'Hi, Tom!';
  // const dom = <h1 className="foo">{greeting}</h1>
  // return dom;
  return(
    <React.Fragment>
      <label htmlFor="click">label</label>
      <input id="click" type="text" onClick={() => console.log('clicked.')}/>
    </React.Fragment>
    )
  
}

export default App;
