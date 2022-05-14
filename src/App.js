import './App.css';
import Tung from './component/Tung';
import {createContext, useState} from 'react'
import TungP from './component/TungP';
import TungR from './Router';
import Hooks from './component/Hooks';
// import Page from './Redux/page';
import Page from './ReduxToolkit/Page';

export const userContext = createContext(null);

function App() {
  //useState
  const [name, setName] = useState('Tung');
  const handleClick = () => {
    if(name==='Tung') setName('Lai Tung')
    else setName('Tung')
  }
  return (
    <div className="App">
      <Tung />
      <TungP name={name} handleClick={handleClick}>
        <h1>Tùng</h1>
      </TungP>

      <TungR />

      <Hooks />
      {/* useContext */}
      <userContext.Provider value={name}>
        <Hooks />
      </userContext.Provider>

      {/* <Page /> */}

      <Page />
    </div>
  );
}

export default App;