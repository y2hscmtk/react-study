import { useSearchParams } from "react-router-dom"

const Home = () => {
    // query string을 통해 전달 한 값 가져옴
    const [params, setParams] = useSearchParams()
    console.log(params.get("value"))
    return <div>Home</div>
}

export default Home