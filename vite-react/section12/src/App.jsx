import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import Notfound from './pages/Notfound'
import './App.css'

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  return (
    // Routes에 의해서 path와 일치하는 컴포넌트를 찾아 랜더링한다.
    // Routes 컴포넌트 안에는 Route 컴포넌트만 들어갈 수 있다.
    // Routes 컴포넌트 외부에 작성된 컴포넌트는, 페이지와 관련없이 모든 컴포넌트에서 랜더링 된다.(예 : 헤더 컴포넌트, 등)
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/new' element={<New/>}/>
      <Route path='/diary' element={<Diary/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
  )
}

export default App
