import logo from './logo.svg';
import './App.css';
// state : 값을 저장하기 위한 저장소 역할
import { useState } from 'react'; 
import Title from './title'

// 1. 프로젝트 생성 : (sudo) npx create-react-app <project_name>
// 2. 미리보기 : 프로젝트 디렉토리로 이동후 npm start로 화면 미리보기 가능

// App.js : 메인 페이지
// public : static과 같은 역할을 한다.(이미지 파일, 등)

// 코드는 아래에서 짜기 시작하면 된다.
// index.js가 App()내의 컴포넌트를 index.html로 옮겨준다.
function App() {

  let post = '글 제목' // 서버에서 가져온 값이라고 가정 => 제목 역할 수행
  // 변수 값을 넣을 때는 {중괄호}를 활용한다. => 데이터 바인딩
  // 값을 잠간 저장할 때는 state를 활용하여 저장한다
  // 다시 사용할때는 [변수명,변수명] 등과 같이 사용한다.
  let [a,b] = useState('남자 코트 추천'); // a,b는 나중에 값을 꺼내기 위함
  // a에는 useState에 저장했던 값이 그대로 담긴다.
  // b => state 변경을 도와주는 함수 => a의 값이 변경될때 수행될 함수
  // 변수 vs State => State는 값이 변경되면 html코드도 다시 값이 변경된다.(재랜더링,상태감지)

  // Destructuring 문법
  let num = [1,2]
  let [d,c] = [1,2] // d,c에 1,2를 자동으로 빼온다.(형태를 맞춰야함)

  // 블로그 제목 state변수화
  let [logo,setLogo] = useState('ReactBlog');


  return ( // 상단 메뉴 만들기 jsx
  // return에는 하나의 컴포넌트만 리턴 가능하다.
    <div className="App">
      <div className = "black-nav">
        <h4 style={{color :'red'}}>{logo}</h4>
      </div>
      <div className='list'>
        <h4>{a}</h4>
        <p>2월 17일 발행</p>
      </div>
      <Title titleName="강남 우동맛집" />
      <Title titleName='파이썬독학'/>
    </div>
  );
}


export default App