import "./Button.css"

const Button = ({text, type, onClick}) => {
    return (
    <button 
        onClick={onClick} 
        className={`Button Button_${type}`} // type에 따라 다른 className으로 설정하여 다른 디자인 속성을 적용할수 있다.(백틱 활용) 
    >
        {text}
    </button>
    )
}

export default Button;