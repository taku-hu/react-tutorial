import React from 'react';

const App = () =>  {
  const profiles = [
    {
      name: 'Taro',
      age: 10
    },
    {
      name: 'Hanako',
      age: 5
    },
    {
      name: 'Jirou'
    }
  ]
  return (
    <React.Fragment>
      {
        profiles.map((profile, index) =>  {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }

      {/* <User name={'Taro'} age={10}/>
      <User name={'Hanako'} age={5}/> */}
    </React.Fragment>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old.</div>
}

User.defaultProps = {
  age: 1
}

export default App;
