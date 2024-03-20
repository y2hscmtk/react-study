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
  // let [a,b] = useState('남자 코트 추천'); // a,b는 나중에 값을 꺼내기 위함
  // a에는 useState에 저장했던 값이 그대로 담긴다.
  // b => state 변경을 도와주는 함수 => a의 값이 변경될때 수행될 함수
  // 변수 vs State => State는 값이 변경되면 html코드도 다시 값이 변경된다.(재랜더링,상태감지)

  // Destructuring 문법
  // let num = [1,2]
  // let [d,c] = [1,2] // d,c에 1,2를 자동으로 빼온다.(형태를 맞춰야함)

  // 블로그 제목 state변수화
  let [logo,setLogo] = useState('ReactBlog');

  let [글제목, 글제목변경] = useState(['남자코트 추천','강남 우동 맛집','파이썬독학'])

  // 현재 모달창의 상태를 저장 false 안보임, true 보임
  let [modalState,setModalState] = useState(false)

  return (
  // return에는 하나의 컴포넌트만 리턴 가능하다.
    <div className="App">
      <div className = "black-nav">
        <h4 style={{color :'red'}}>{logo}</h4>
      </div>

      <button onClick={()=>{
        let copy = [...글제목] // unpacking
        copy[0] = '여자코트 추천' // 상태 변경,원본 보존
        글제목변경(copy) // state 변경함수는 매개변수로 전달받은 값으로 원본 값을 변경시킨다.
        // 기존 state == 신규 state 의 경우, 변경하지 않는다.
      }}>글 수정</button>

      <button onClick={()=>{
        let copy = [...글제목] // unpacking
        copy.sort() 
        글제목변경(copy) // state 변경함수는 매개변수로 전달받은 값으로 원본 값을 변경시킨다.
        // 기존 state == 신규 state 의 경우, 변경하지 않는다.
      }}>정렬</button>

      <div className='list'>
        <h4 onClick={()=>{setModalState(true)}}>{글제목[0]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <Title titleName={글제목[1]}/>
      <Title titleName={글제목[2]}/>

      {
        modalState ? <Modal></Modal> : null
      }
      
    </div>
  );
}

// 컴포넌트 만드는 법
// 1. function 만들고
// 2. return() 안에 html 담기
// 3. <함수명></함수명>으로 사용
// 작명은 영어 대문자로 만들기 => Naming Rule
// 컴포넌트 사용 경우 : 반복적인 html을 축약할때, 큰 페이지들을 만들 때, 자주 변경되는 ui를 작성할 때
// 컴포넌트의 단점 : state를 가져다 쓸 때 문제가 생긴다.(다른 함수에는 해당 state변수가 없기 때문이다.)
function Modal(){
  // return 소괄호 안에는 하나의 탭으로 시작해서 하나의 탭으로 끝나야 한다.
  // 2개 이상의 탭을 리턴하면 안된다.
  // 의미없는 div라면 <></>로 묶는 것도 가능하다. fragment문법
  return(
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  )
}

// 동적인 UI 만들기
// 1. html css로 미리 디자인 완성
// 2. UI의 현재 상태를 state로 저장
// 3. state에 따라 UI가 어떻게 보일지 작성

export default App