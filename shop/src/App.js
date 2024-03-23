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


// React Bootstrap에서 버튼 사용하기
function App() {

  let [shoes] = useState(data) // data.js 의 데이터 가져오기

  return (
    <div className='App'>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
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


    </div>
  );
}

export default App;
