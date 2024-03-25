import './App.css';
import {useState} from 'react'

// bootstrap 라이브러리 사용전 import 필수
import {Button,Container,Navbar,Nav} from 'react-bootstrap';

// 이미지 사용을 위해~
// bg_image_name => 사용할 이미지 변수명 
import bg_image_name from './bg.png'

// 다른 파일에서 데이터 받아오기
import data from './data.js'

// 신발 컴포넌트
import Shoe from './shoe.js'

// 화면 전환
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'

import Detail from './Detail.js';

import axios from 'axios'

// React Bootstrap에서 버튼 사용하기
function App() {

  let [shoes,setShoes] = useState(data) // data.js 의 데이터 가져오기

  // useNavigate 훅 : 페이지 이동을 도와주는 함수
  let navigate = useNavigate() 

  let [more,setMore] = useState(2) // 더보기 메뉴 선택시

  return (
    <div className='App'>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            {/* useNavigate => 함수안의 파라미터로 이동시켜줌, 
            숫자를 적을 경우 앞으로 한페이지, 뒤로 한페이지 등(뒤로가기 버튼, 뒤로가기 버튼 등에 해당)*/}
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail/0')}}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Route : 우리가 사용할 웹사이트의 페이지 */}
      <Routes>
        {/* detail 페이지로 접근시 element에 적어둔 컴포넌트를 화면에 보여줌 */}
        <Route path='/' element={<div>
          {/* 대문 */}
            <div className='main-bg' style={{backgroundImage : 'url('+bg_image_name+')'}}>

            </div>
            {/* 상품 목록 */}
            {/* 수 많은 이미지를 사용해야 한다면 Public폴더에 이미지를 넣고 사용한다. 접근 방법은 /이미지이름 이다 */}
            <div className='container'>
              <div className='row'>
                {shoes.map((data,i)=>{return <Shoe data = {data}></Shoe>})}
                {/* <Shoe data ={shoes[0]}></Shoe>
                <Shoe data ={shoes[1]}></Shoe>
                <Shoe data ={shoes[2]}></Shoe> */}
              </div>
            </div>
        </div>}/>
        
        {/* '*'은 우리가 만들어둔 라우터 제외 모든 페이지 => 없는 페이지, 오류 페이지 */}
        <Route path='*' element={<div>없는 페이지입니다.</div>}/>
        <Route path='/detail' element={<Detail/>}/>

        {/* Nested Routes */}
        <Route path='/about' element={<About/>}>
          {/* Route안에 Route를 두면 /about/member 에 해당함
          내부 어디에 보여줄지 특정 위치를 기입해야 한다. */}
          <Route path='member' element={<div>멤버</div>}/>
          <Route path='location' element={<div>위치정보</div>}/>
        </Route>

        <Route path='/event' element={<Homework/>}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path='two' element={<div>생일기념 쿠폰받기</div>}/>

        </Route>

        {/* 페이지를 여러개 만들고 싶다면 URL파라미터 활용 :id 를 통해 아아디 전달*/}
        <Route path='/detail/:id' element={<Detail shoes = {shoes} />}></Route>
        
        

      </Routes>

      <Button onClick={()=>{
          // axios를 활용한 ajax 요청하는 방법
          axios.get(`https://codingapple1.github.io/shop/data${more}.json`)
          .then((result)=>{
            let copy = [...shoes, ...result.data]
            setShoes(copy)
            setMore(more+1)
          }) // data : 서버에서 실제로 가져온 데이터
          .catch(()=>{
            console.log('데이터 갱신 실패')
          })
        }}>
          더보기
        </Button>

    </div>
  );
}

export default App;

function Homework(){
  return(
    <>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </>
  )
}


function About(){
  return (
    <div>
      <h4>회사 정보임</h4>
      {/* outlet은 nested routes안의 element들을 어디에 보여줄지 표기하는 용도. */}
      <Outlet></Outlet>
    </div>
  )
}
