import { useParams } from "react-router-dom"

function Detail(props){

    let {id} = useParams() // 파라미터 정보가 담기는 훅

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={props.shoes[id].img}
                    width="80%"/>
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{props.shoes[id].title}</h4>
                    <p>{props.shoes[id].content}</p>
                    <p>{props.shoes[id].price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}

export default Detail