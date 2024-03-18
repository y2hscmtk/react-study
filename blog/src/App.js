import logo from './logo.svg';
import './App.css';

// 1. 프로젝트 생성 : (sudo) npx create-react-app <project_name>
// 2. 미리보기 : 프로젝트 디렉토리로 이동후 npm start로 화면 미리보기 가능

// 코드는 아래에서 짜기 시작하면 된다.
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
