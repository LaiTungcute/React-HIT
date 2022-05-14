import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Tung from '../component/Tung';
import TungP from '../component/TungP';
import Login from './Login';

const TungR = () => {
  return (
    //   BrowserRouter: Thẻ bao các thẻ con của router-dom
    <BrowserRouter>
    {/* Routes: Thẻ tạo đường link */}
        <Routes>
            <Route path='/' element={<Tung />}/>
            <Route path='/prop' element={<TungP />}/>
            <Route path='/Login' element={<Login />}/>
        </Routes>

        {/* Link: Định hướng trang web */}
        <Link to='/'>
            <button>Click</button>
        </Link>
        {/* <Link to='/prop'>
            <button>Click props</button>
        </Link> */}

        <Link to='/Login'>
            <button>Login</button>
        </Link>
    </BrowserRouter>
  )
}

export default TungR