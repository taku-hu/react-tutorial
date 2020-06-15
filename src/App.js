import React, { Component } from 'react';

// const App = () => {
//   // const greeting = 'Hi, Tom!';
//   // const dom = <h1 className="foo">{greeting}</h1>
//   // return dom;
//   return(
//     <React.Fragment>
//       <label htmlFor="click">label</label>
//       <input id="click" type="text" onClick={() => console.log('clicked.')}/>
//     </React.Fragment>
//     )
  
// }

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="click">label</label>
        <input id="click" type="text" onClick={() => console.log('clicked.')}/>
        <Cat />
        <Cat />
        <Cat />
      </React.Fragment>
    )
  }
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
