import { useNavigate } from "react-router-dom"

// 신발에 대한 데이터
function Shoe(props){
    let shoe = props.data
    let navigate = useNavigate() 
    let imageUrl = `https://codingapple1.github.io/shop/shoes${shoe.id+1}.jpg`;

    return (
        <div className='col-md-4'>
            <img src={imageUrl} width="80%" onClick={() => navigate(`/detail/${shoe.id}`)}/>
            <h4>{shoe.title}</h4>
            <p>{shoe.price}</p>
        </div>
    )
}

export default Shoe
