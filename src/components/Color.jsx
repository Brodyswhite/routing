const Color = props => {

    return (
        <div className="color" style={{backgroundColor:props.bgc}}>
            <h1 className="text-center"><span style={{color:props.color}}> The Word is {props.word} </span> </h1>
        </div>
    )
}

export default Color