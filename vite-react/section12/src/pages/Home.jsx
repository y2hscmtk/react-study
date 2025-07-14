import { useSearchParams } from "react-router-dom"

// 쿼리스트링을 통한 값 전달을 useState 처럼 사용할 수 있다.(획득, 조작 가능)
// locallhost:5173/?value=hello 와 같이 들어온 경우
// params.get("value") 를 통해 hello 획득 가능
const Home = () => {
    const [params, setParams] = useSearchParams()
    console.log(params.get("value"))
    return <div>Home</div>
}

export default Home