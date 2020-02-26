import React from 'react'
import HomePage from './components/PhoneAuth/HomePage';
import { UserProvider } from './components/MyContext';
import Memo from './Memo';
import router, { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Hello from './use-call-back/hello';
import Index from './use-call-back';

function App() {
  // default value
  const user = { name: 'Dummy', age: 22, loggedIn: true }

  return (
    // UserProvide is providing the value to HomePage comp. using value prop.
    // 
    <>


      <BrowserRouter>

        <ul style={{ display: 'flex', padding: 4, listStyle: 'none', margin: 5 }}>
          <li style={{ padding: 5 }}>
            <Link to="/">Context API</Link>
          </li>
          <li style={{ padding: 5 }}>
            <Link to="/callback">CallBack Example</Link>
          </li>
          <li style={{ padding: 5 }}>
            <Link to="/memo">Memo Example</Link>
          </li>
        </ul>
        <hr />

        <Switch>
          <Route exact path="/">
            <UserProvider value={user}>
              <HomePage />
            </UserProvider>
          </Route>
          <Route path='/callback'>
            <Hello />
          </Route>
          <Route path='/memo'>
            <Memo />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;