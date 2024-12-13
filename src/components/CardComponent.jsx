
function Card(props) {
    return (
        <>
            <div className="card-container">
                <div className="card" style={{ width: "25rem" }}>
                    <img src={props.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">
                            {props.content}
                        </p>

                        <span>{props.tags}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;