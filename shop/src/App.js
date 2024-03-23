import './App.css';
import {useState} from 'react'

// bootstrap 라이브러리 사용전 import 필수
import {Button,Container,Navbar,Nav} from 'react-bootstrap';

// 이미지 사용을 위해~
// bg_image_name => 사용할 이미지 변수명 
import bg_image_name from './bg.png'

// 다른 파일에서 데이터 받아오기
import data from './data.js'


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
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <img src='https://codingapple1.github.io/shop/shoes1.jpg' width="80%"/>
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].price}</p>
          </div>
          {/* 수 많은 이미지를 사용해야 한다면 Public폴더에 이미지를 넣고 사용한다. 접근 방법은 /이미지이름 이다 */}
          <div className='col-md-4'>
            <img src='https://codingapple1.github.io/shop/shoes2.jpg' width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className='col-md-4'>
            <img src='https://codingapple1.github.io/shop/shoes3.jpg' width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>

        </div>
      </div>


    </div>
  );
}

export default App;
