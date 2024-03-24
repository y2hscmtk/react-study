import { useNavigate } from "react-router-dom"

// 신발에 대한 데이터
function Shoe(props){
    let shoe = props.data
    let navigate = useNavigate() 
    return (
        <div className='col-md-4'>
            <img src={shoe.img} width="80%" onClick={() => navigate(`/detail/${shoe.id}`)}/>
            <h4>{shoe.title}</h4>
            <p>{shoe.price}</p>
        </div>
    )
}

export default Shoe
