import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './layout/layout';
import { Main } from './main/main';

function App() {
<<<<<<< HEAD
  return (      
=======
  return (  
>>>>>>> f87cf1015c4d6baa25dbc64593ea94a7a1e10be4
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main/>}/>
        </Route>
        <Route path='*' element={<Navigate to={"/"} replace={true}/>}/>
<<<<<<< HEAD
      </Routes>      
=======
      </Routes>
>>>>>>> f87cf1015c4d6baa25dbc64593ea94a7a1e10be4
  );
}

export default App;
