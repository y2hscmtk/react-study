// 신발에 대한 데이터
function Shoe(props){
    let shoe = props.data
    return (
        <div className='col-md-4'>
            <img src={shoe.img} width="80%"/>
            <h4>{shoe.title}</h4>
            <p>{shoe.price}</p>
        </div>
    )
}

export default Shoe
