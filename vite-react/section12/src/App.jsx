import { useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import Notfound from './pages/Notfound'
import './App.css'
import getEmotionImage from './util/get-emotion-image'
import Button from './components/Button'
import Header from './components/Header'



// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  // 버튼을 통한 이동을 원할 때에는 useNavigate를 활용한다.
  // useNavigate는 라우팅 이동을 위한 navigate 함수를 반환한다.
  const nav = useNavigate()
  
  const onClickButton = () => {
    nav("/new") // 라우팅을 통해 이동하고자 하는 경로를 인수로 전달한다.
  }

  return (
    // Routes에 의해서 path와 일치하는 컴포넌트를 찾아 랜더링한다.
    // Routes 컴포넌트 안에는 Route 컴포넌트만 들어갈 수 있다.
    // Routes 컴포넌트 외부에 작성된 컴포넌트는, 페이지와 관련없이 모든 컴포넌트에서 랜더링 된다.(예 : 헤더 컴포넌트, 등)
    //
    // Link 태그는 Client-Side 랜더링 방식으로 페이징 렌더링 수행 -> 이전 페이지를 날리지 않고, 필요한 페이지만 교체하는 방식으로 랜더링 수행
    <>
      {/* <div>
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
      </div>

      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <button onClick={onClickButton}>
        New 페이지로 이동
      </button> */}
      
      <Header title={"Header"}
        leftChild={<Button text={"left"}/>}
        rightChild={<Button text={"rigth"}/>}
      />

      <Button
        text={"134"}
        type={"DEFAULT"}
        onClick={() => {
          console.log("123번 버튼 클릭")
        }}
      />
      <Button
        text={"134"}
        type={"POSITIVE"}
        onClick={() => {
          console.log("123번 버튼 클릭")
        }}
      />
      <Button
        text={"134"}
        type={"NEGATIVE"}
        onClick={() => {
          console.log("123번 버튼 클릭")
        }}
      />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/new' element={<New/>}/>
        <Route path='/diary/:id' element={<Diary/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </>
  )
}

export default App
