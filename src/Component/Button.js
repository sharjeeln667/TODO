function Button(props){
    return(

        <button onClick={props.click} >{props.label}</button>
    )
}

export default Button;