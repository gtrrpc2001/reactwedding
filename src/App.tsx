import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './layout/layout';
import { Main } from './main/main';

function App() {
  return (  
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main/>}/>
        </Route>
        <Route path='*' element={<Navigate to={"/"} replace={true}/>}/>
      </Routes>
  );
}

export default App;
