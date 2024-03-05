import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './layout/layout';
import { Main } from './main/main';
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // 여기에 데이터를 불러오는 코드를 추가하면 됩니다.
    // 데이터를 불러온 후에는 setIsLoading(false)를 호출하여 로딩 상태를 업데이트합니다.

    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="lds-heart">
        <div></div>
      </div>
    );
  }

<<<<<<< HEAD
  return (      
=======
  return ( 
>>>>>>> 6e41060baed619c2b3cf405ae3cc051f80c15e8f
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='main' element={<Main/>}/>
        </Route>
        <Route path='*' element={<Navigate to={"/"} replace={true}/>}/>
      </Routes>      
  );
}

export default App;
